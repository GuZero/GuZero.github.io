// pages/order_details/index.js

let CryptoJS = require('../../../utils/cryptojs/cryptojs.js').Crypto;
let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderStatus: [{
                current: true,
                done: true,
                text: '待发货'
            },
            {
                done: false,
                current: false,
                text: '分拣中'
            },
            {
                done: false,
                current: false,
                text: '配送中'
            },
            {
                done: false,
                current: false,
                text: '到达代收点'
            },
            {
                done: false,
                current: false,
                text: '配送完成'
            }
        ],
        aPayInfo: [{
            value: '余额支付',
            id: 0,
            pay_type: 7,
            checked: false
        }, {
            value: '微信支付',
            id: 1,
            pay_type: 4,
            checked: false
        }],
        inputData: {
            input_value: "", //输入框的初始内容
            value_length: 0, //输入框密码位数
            isNext: false, //是否有下一步的按钮
            get_focus: true, //输入框的聚焦状态
            focus_class: true, //输入框聚焦样式
            value_num: [1, 2, 3, 4, 5, 6], //输入框格子数
            height: "80rpx", //输入框高度
            width: "420rpx", //输入框宽度
            see: false, //是否明文11展示
            interval: true, //是否显示间隔格子
        },
        cancelMsg: '',
        curIndex: 0,
        pay_info: null,
        pay_type: 7,
        isPayPasswordShow: false,
        order_id: '',
        orderInfo: null,
        refundMsg: '',
        after_market_info: [],
        afterMarketdMsg: '',
        statusZh:"",

        isCanPay: false,
        isCanCancel: false,
        isCanAfterMarket: false,
        isCanRefund: false,
        isShowStatus: false,
        isLayerHidden: true,

        countdown: 40000,
        numStyle: 'width: 46rpx; font-size: 26rpx; color: #ffffff; background: #333; text-align: center; border-radius: 4rpx; padding: 5rpx 0;',
        symbolStyle: 'font-size: 26rpx; color: #000; padding: 0 12rpx;'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            order_id: options.order_id
        })
        app.authenticated(() => {
            this.getOrderDetail();
            this.hasAfterMarket();
        });
    },
    onShow: function() {
        app.authenticated(() => {
            this.getOrderDetail();
        });
    },
    getOrderDetail: function() {
        app.ajax('GET', '/trading/order/' + this.data.order_id, null, (res) => {
            if (res.data.status == 0) {
                for (let i = 0; i < res.data.data.order.goods.length; i++) {
                    let trading = res.data.data.order.goods[i].trading;
                    if (trading.images.length) {
                        trading.image_src = "https://img.aimoge.com/" + trading.images[0].substring(0, 28);
                    } else {
                        trading.image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
                    }
                }
                res.data.data.order.short_goods = res.data.data.order.goods.slice(0, 3);
                if (res.data.data.order.pay_at != '0000-00-00 00:00:00') {
                    res.data.data.order.order_at_time = (new Date(res.data.data.order.pay_at)).format('yyyy-MM-dd hh:mm');
                }
                if (res.data.data.order.order_type == "fight_groupbuy" && res.data.data.order.fight_groupbuy) {
                    let countdown = ((new Date(res.data.data.order.fight_groupbuy.groupbuy.end_time).getTime()) - (new Date().getTime())) / 1000;
                    this.setData({
                        countdown: countdown
                    })
                }
                this.setData({
                    orderInfo: res.data.data.order,
                    pay_type: res.data.data.order.pay_type
                })

                this.setStatus(this.data.orderInfo);
                let order_time = ((new Date()) - (new Date(res.data.data.order.order_at))),
                    _interval = null;
                order_time = ((15 * 60) - parseInt(order_time / 1000));
                _interval = setInterval(() => {
                    if (this.data.isCanPay && order_time > 0) {
                        order_time -= 1;
                        this.setData({
                            cancelMsg: parseInt(order_time / 60) + '分' + parseInt(order_time % 60) + '秒',
                        })
                    } else {
                        this.setData({
                            cancelMsg: '',
                        });
                        clearInterval(_interval)
                    }
                }, 1000)
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    hasAfterMarket: function() {
        app.ajax('GET', '/trading/order/' + this.data.order_id + '/aftermarket', null, (res) => {
            if (res.data.status == 0) {
                this.setData({
                    after_market_info: res.data.data.aftermarkets
                })
                if (this.data.after_market_info.length) this.setAfterMarketStatus();
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    goPay: function() {
        if (this.data.orderInfo) {
            if (this.data.payInfo) {
                let data = {
                    "pay_id": this.data.payInfo.pay_id,
                    "pay_type": this.data.payInfo.pay_type || 4,
                    "pay_info": {},
                    "error_msg": "用户主动取消",
                    "result": 300
                };
                this.confirmPay(data, this.doPay);
            } else if (this.data.orderInfo.status == 2101 || this.data.orderInfo.status == 2501 || this.data.orderInfo.status == 2502) {
                let data = {
                    "pay_id": this.data.orderInfo.pay_id,
                    "pay_type": this.data.orderInfo.pay_type || 4,
                    "pay_info": {},
                    "error_msg": "用户主动取消",
                    "result": 300
                };
                this.confirmPay(data, this.doPay);
            } else {
                this.doPay();
            }
        } else {
            this.doPay();
        }
    },
    doPay: function() {
        let data = {
            total_fee: this.data.orderInfo.total_fee,
            total_num: this.data.orderInfo.total_num,
            pay_type: this.data.pay_type || 4,
            order_ids: [this.data.orderInfo.order_id],
            service: 'trading_order_service',
            weixin_id: app.globalData.wxid || '',
            open_id: app.globalData.openid || '',
            device_info: app.getDeviceInfo()
        };

        app.ajaxPay('POST', "/pay", data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.setData({
                        payInfo: res.data.data
                    })
                    if ((this.data.pay_type || 4) == 4) {
                        this.wxPay();
                    } else {
                        this.balancePay();
                    }
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
            }
        }, (re) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
        })
    },
    confirmPay: function(data, callback, error_callback) {
        app.ajaxPay('POST', "/pay/" + data.pay_id, data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.setData({
                        payInfo: null
                    });
                    return callback(res);
                }
            }

            if (error_callback) {
                error_callback(res);
            }
        }, (res) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
        })
    },
    wxPay: function() {
        let payInfo = this.data.payInfo,
            that = this;
        wx.requestPayment({
            'timeStamp': this.data.payInfo.order_info.timestamp.toString(),
            'nonceStr': this.data.payInfo.order_info.noncestr,
            'package': this.data.payInfo.order_info.package_value,
            'signType': this.data.payInfo.order_info.sign_type,
            'paySign': this.data.payInfo.order_info.pay_sign,
            'success': function(res) {
                let data = {
                    "pay_id": payInfo.pay_id,
                    "pay_type": 4,
                    "pay_info": res,
                    "error_msg": '支付成功',
                    "result": 100
                };

                wx.showLoading()
                that.confirmPay(data, function() {
                    wx.hideLoading();
                    wx.redirectTo({
                        url: "../order_result/index?status=1"
                    })
                })
            },
            'fail': function(res) {
                if (res.errMsg == "requestPayment:fail cancel") {
                    let data = {
                        "pay_id": payInfo.pay_id,
                        "pay_type": 4,
                        "pay_info": res,
                        "error_msg": "用户主动取消",
                        "result": 300
                    };

                    wx.showLoading()
                    that.confirmPay(data, function() {
                        wx.hideLoading();
                    })
                } else {
                    let data = {
                        "pay_id": payInfo.pay_id,
                        "pay_type": 4,
                        "pay_info": res,
                        "error_msg": res.errMsg,
                        "result": 200
                    };

                    wx.showLoading()
                    that.confirmPay(data, function() {
                        wx.hideLoading();
                        wx.redirectTo({
                            url: "../order_result/index?status=0"
                        })
                    })
                }
            }
        });
    },
    balancePay: function() {
        this.setData({
            isPayPasswordShow: true
        });
    },
    submitBalancePassword: function(e) {
        let password = CryptoJS.SHA1(CryptoJS.SHA256(CryptoJS.MD5(e.detail).toString()).toString()).toString();
        this.setData({
            isPayPasswordShow: false,
        });

        wx.showLoading()
        let data = {
            "pay_id": this.data.payInfo.pay_id,
            "pay_type": 7,
            "pay_info": {},
            "password": password,
            "error_msg": "",
            "result": 100
        };
        this.confirmPay(data, (res) => {
            wx.hideLoading()
            wx.redirectTo({
                url: "../order_result/index?status=1"
            })
        }, (res) => {
            if (res.statusCode == 200) {
                wx.hideLoading()
                if (res.data.status == 0) {
                    wx.redirectTo({
                        url: "../order_result/index?status=1"
                    })
                } else if (res.data.status == 310) {
                    this.setData({
                        isPayPasswordShow: true,
                    });
                    wx.showToast({
                        title: '密码错误，请新输入！',
                        icon: 'none',
                        duration: 2000
                    });
                } else {
                    wx.redirectTo({
                        url: "../order_result/index?status=0"
                    })
                }
            }
        });
    },
    setStatus: function(orderInfo) {
        let isCanPay = false;
        let isCanCancel = false;
        let isCanAfterMarket = false;
        let isCanRefund = false;
        let isShowStatus = false;
        let orderStatus = null;
        let status = orderInfo.status,
            statusZh = '',
            msg = '';
        if ([2001, 2101, 2901, 2902].indexOf(status) > -1) {
            //待支付
            isCanPay = true;
            if (orderInfo.order_type != "ebox") {
                isCanCancel = true;
            }
        }
        if ([3102, 3501, 3901, 3902].indexOf(status) > -1) {
            isCanAfterMarket = true;
        }

        if ([2801, 3001].indexOf(status) > -1) {
            isCanRefund = true;
        }

        if ([2801, 3001].indexOf(status) > -1) {
            //待发货
            orderStatus = this.setShipStatus(1);
            isShowStatus = true;
        }

        if ([3010].indexOf(status) > -1) {
            //分拣中
            orderStatus = this.setShipStatus(2);
            isShowStatus = true;
        }

        if ([3101, 3102].indexOf(status) > -1) {
            //配送中
            orderStatus = this.setShipStatus(3);
            isShowStatus = true;
        }
        if ([3501, 3901].indexOf(status) > -1) {
            //配送完成
            orderStatus = this.setShipStatus(5);
            isShowStatus = true;
        }
        if ([3102].indexOf(status) > -1) {
            //到达待收点
            orderStatus = this.setShipStatus(4);
            isShowStatus = true;
        }
        if ([4801, 4802].indexOf(status) > -1) {
            //退款中
            msg = '退款中';
            isCanRefund = true;
        }
        if ([4901, 4910].indexOf(status) > -1) {
            //退款中
            msg = '退款成功';
            isCanRefund = true;
        }
        if ([4902, 4911].indexOf(status) > -1) {
            //退款中
            msg = '退款失败';
            isCanRefund = true;
        }
        if (this.data.orderInfo.order_type == "fight_groupbuy") {
            let fight_groupbuy = this.data.orderInfo.fight_groupbuy;
            if (fight_groupbuy.groupbuy.sale_num >= fight_groupbuy.groupbuy.succed_num && status != '1901') {
                isShowStatus = true;
            } else {
                isShowStatus = false;
            }
        }
        this.setData({
            isCanPay: isCanPay,
            isCanCancel: isCanCancel,
            isCanAfterMarket: isCanAfterMarket,
            isCanRefund: isCanRefund,
            refundMsg: msg,
            orderStatus: orderStatus,
            isShowStatus: isShowStatus
        })
    },
    makePhoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.orderInfo.address.partner_mobile,
        })
    },
    selectPayType: function(e) {
        let _id = e.currentTarget.dataset.id,
            pay_type = e.currentTarget.dataset.typeid;
        this.setData({
            curIndex: _id,
            pay_type: pay_type,
        })
    },
    confirmContinuePay: function() {
        this.setData({
            isLayerHidden: true
        })
        this.goPay();
    },
    continuePay: function() {
        this.setData({
            isLayerHidden: false
        })
    },
    cancelOrder: function() {
        let that = this;
        wx.showModal({
            title: '',
            content: '是否取消订单？',
            success: function(res) {
                if (res.confirm) {
                    app.ajax('POST', "/trading/order/" + that.data.orderInfo.order_id, {}, (res) => {
                        if (res.statusCode == 200) {
                            if (res.data.status == 0) {
                                that.setData({
                                    isCanCancel: false,
                                })
                                that.getOrderDetail();
                                return;
                            }
                        }
                        if (res.data.msg) app.showErrorTip(that, res.data.msg);
                    }, (res) => {
                        app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    })
                }
            }
        })
    },
    goRefund: function() {
        wx.navigateTo({
            url: '../refund/index?order_id=' + this.data.orderInfo.order_id,
        })
    },
    cancelBalancePassword: function() {
        this.setData({
            isPayPasswordShow: false
        });

        let data = {
            "pay_id": this.data.payInfo.pay_id,
            "pay_type": 7,
            "pay_info": {},
            "error_msg": "用户主动取消",
            "result": 300
        };
        this.confirmPay(data, (res) => {

        });
    },
    setShipStatus: function(index) {
        let data = this.data.orderStatus
        for (let i = 0; i < index; i++) {
            data[i].current = true;
            data[i].done = true;
        }
        return data;
    },
    linkAfterMarket: function() {
        wx.navigateTo({
            url: '../after_market/index?order_id=' + this.data.orderInfo.order_id,
        })
    },
    setAfterMarketStatus: function() {
        let stauts = this.data.after_market_info[0].status,
            msg = '';
        switch (stauts) {
            case 0:
                msg = '审核中'
                break;
            case 1:
                msg = '售后完成'
                break;
            case 4:
                msg = '审核未通过'
                break;
            default:
                msg = '审核中'
                break;
        }
        this.setData({
            afterMarketdMsg: msg
        })
    }
})