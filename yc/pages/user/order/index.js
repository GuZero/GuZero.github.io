// pages/order/index.js

let CryptoJS = require('../../../utils/cryptojs/cryptojs.js').Crypto;
let Tracking = require('../../../utils/tracking.js');
let app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        user_mobile: null,
        cart: null,
        address: null,
        current_address: null,
        community: null,
        delivery_rule: null,
        tradings: [],
        short_tradings: [],
        tradings_count: 0,
        tradings_total_fee: 0,
        delivery_fee: null,
        coupon_selected: false,
        coupon_id: '',
        coupon_can_used: null,
        coupon_fee: 0,
        discounteds: [],
        discounteds_fee: 0,
        purchase_limits: [],
        load_tradings_count: 0,
        loaded: false,
        order: null,
        pay_info: null,
        isModify: true,
        user_mobile: '',
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
        curIndex: 1,
        pay_type: 4,
        isPayPasswordShow: false,
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
        balance: null,
        delivery_checked: false,
        isDeliverInfoShow: false,
        user_floor: '',
        user_house_num: '',
        terminal: null,
        is_self: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let status = parseInt(options.status) || 0;
        app.authenticated(() => {
            wx.showNavigationBarLoading()
            let cart = wx.getStorageSync('cart') || null;
            if (!cart) return;

            this.setData({
                coupon_id: (options && options.coupon_id) || '',
                user_mobile: app.globalData.userInfo.username,
                cart: cart,
                address: cart.address || null,
                is_self: status
            });

            if (cart.address && cart.address.address_type == 1) {
                this.loadCommunity();
            }

            this.loadTradings();
            this.loadBalance();

            if (this.data.is_self) {
                this.setUserAddress();
            }
        });
    },
    onShow: function() {
        if (this.data.coupon_selected) {
            let coupon_id = wx.getStorageSync('coupon_id') || '';
            if (coupon_id) {
                wx.removeStorageSync('coupon_id');

            }

            this.setData({
                coupon_id: coupon_id || '',
                coupon_selected: false,
            });
            this.pretreatmentOrder();
        }

        if (this.data.is_self) {
            this.setUserAddress();
        }
    },
    onLoaded: function() {
        if (this.data.load_tradings_count >= this.data.cart.goodses.length && this.data.balance) {
            if (this.data.address && this.data.address.address_type == 1 && !this.data.community) {
                return;
            }

            this.setData({
                curIndex: this.data.tradings_total_fee <= this.data.balance.total_balance ? 0 : 1,
                pay_type: this.data.tradings_total_fee <= this.data.balance.total_balance ? 7 : 4,
                loaded: true,
            });
            this.pretreatmentOrder();
            wx.hideNavigationBarLoading()
        }
    },
    loadCommunity: function() {
        app.ajax("GET", "/community/detail/" + this.data.cart.address.address_id, null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.setData({
                        community: res.data.data.community,
                        delivery_rule: res.data.data.delivery_rule,
                    });
                    this.onLoaded();
                }
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (res) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
        });
    },
    loadTradings: function() {
        let goodses = this.data.cart.goodses;
        this.setData({
            tradings: [],
            tradings_count: 0,
            tradings_total_fee: 0,
            coupon_fee: 0,
            load_tradings_count: 0,
        })

        for (let i = 0; i < goodses.length; i++) {
            this.loadTrading(goodses.length, goodses[i].sku_id, goodses[i].cart_num);
        }
    },
    loadTrading: function(count, sku_id, num) {
        app.ajax("GET", "/trading/detail/sku/" + sku_id, null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    if (res.data.data.trading.images.length) {
                        res.data.data.trading.image_src = "https://img.aimoge.com/" + res.data.data.trading.images[0].substring(0, 28);
                    } else {
                        res.data.data.trading.image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
                    }
                    res.data.data.trading.cart_num = num;

                    this.data.tradings.push(res.data.data);
                    this.setData({
                        tradings_total_fee: this.data.tradings_total_fee + (res.data.data.discount_price || res.data.data.price || 1) * num,
                        tradings_count: this.data.tradings_count + num,
                        load_tradings_count: this.data.load_tradings_count + 1,
                        tradings: this.data.tradings,
                        short_tradings: this.data.tradings.slice(0, 3),
                    });
                    this.onLoaded();
                }
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (res) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
        });
    },
    loadBalance: function() {
        app.ajaxPay("GET", "/balance", null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    res.data.data.total_balance = res.data.data.balance + res.data.data.discounted;
                    this.setData({
                        balance: res.data.data,
                    });
                } else if (res.data.status == 400) {
                    this.setData({
                        balance: {
                            total_balance: 0
                        },
                    });
                }
                this.onLoaded();
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
        });
    },
    getOrderRequestParams: function(is_preorder) {
        let goodses = [];
        let goodses_map = {};
        for (let i = 0; i < this.data.tradings.length; i++) {
            if (this.data.tradings[i].trading.cart_num <= 0) {
                continue;
            }

            if (goodses_map[this.data.tradings[i]._id]) {
                continue;
            }

            goodses.push({
                "sku_id": this.data.tradings[i]._id,
                "fee": (this.data.tradings[i].discount_price || this.data.tradings[i].price || 1) * this.data.tradings[i].trading.cart_num,
                "num": this.data.tradings[i].trading.cart_num,
            });
            goodses_map[this.data.tradings[i]._id] = this.data.tradings[i];
        }

        if (goodses.length <= 0) {
            app.showErrorTip(this, '无商品信息');
            return;
        }

        let discounteds = [];
        if (is_preorder) {
            discounteds.push({
                "discounted_type": "coupon",
                "act_id": this.data.coupon_id || "000000000000000000000000",
            })
        } else if (this.data.coupon_id) {
            discounteds.push({
                "discounted_type": "coupon",
                "act_id": this.data.coupon_id,
            })
        }

        let address_id = this.data.address.address_id;
        if (this.data.address && this.data.address.address_type == 1) {
            address_id = this.data.community._id;
        }

        let data = {
            goodses: goodses,
            total_fee: this.data.tradings_total_fee,
            total_num: this.data.tradings_count,
            order_type: this.data.cart.order_type || "",
            address: {
                address_type: this.data.address.address_type,
                address_id: address_id,
                mobile: app.globalData.userInfo.username == this.data.user_mobile ? '' : this.data.user_mobile,
                building_address: this.data.user_floor || '',
                house_address: this.data.user_house_num || '',
            },
            promotionses: this.data.cart.promotionses || [],
            discounteds: discounteds,
            weixin_id: app.globalData.wxid || '',
            open_id: app.globalData.openid || '',
            source: "smartcabxcu",
            device_info: app.getDeviceInfo(),
            tracking_ids: Tracking.getTracking(),
        }
        return data;
    },
    pretreatmentOrder: function() {
        let data = this.getOrderRequestParams(true);

        if (this.data.delivery_checked) {
            data.address.building_address = data.address.building_address || '-'
            data.address.house_address = data.address.house_address || '-'
        }

        app.ajax('POST', '/trading/order/pretreatment', data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    let discounteds = res.data.data.discounteds;
                    let stddiscounteds = [];
                    let stddiscounteds_fee = 0;
                    let coupon_can_used = [];
                    let coupon_fee = 0;
                    for (let i = 0; i < discounteds.length; i++) {
                        let discounted = discounteds[i];
                        if (discounted.discounted_type == "coupon") {
                            if (this.data.coupon_id == discounted.act_id) {
                                coupon_fee = discounted.fee;
                            } else {
                                coupon_can_used.push(discounted);
                            }
                        } else {
                            stddiscounteds.push(discounted);
                            stddiscounteds_fee += discounted.fee;
                        }
                    }
                    this.setData({
                        coupon_can_used: this.data.coupon_id ? this.data.coupon_can_used : coupon_can_used,
                        coupon_id: coupon_fee > 0 ? this.data.coupon_id : '',
                        coupon_fee: coupon_fee,
                        delivery_fee: res.data.data.delivery_fee,
                        discounteds: stddiscounteds,
                        discounteds_fee: stddiscounteds_fee,
                        purchase_limits: res.data.data.purchase_limits || [],
                    });
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
            }
        }, (res) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
        })
    },
    submitOrder: function(event) {
        if (this.data.delivery_checked) {
            if (this.data.user_floor == '' || this.data.user_house_num == '') {
                app.showErrorTip(this, '请填写完整的楼号、单元/门牌号方便我们更快的把宝贝送到您手里');
                return false;
            }

            if (!(new RegExp('^[0-9]+?(栋|幢|号)$')).test(this.data.user_floor)) {
                app.showErrorTip(this, '填写错误，请填写xx幢或xx栋或xx号');
                return
            }
        }
        let weixin_form_id = event.detail.formId;
        if (weixin_form_id == "the formId is a mock one") {
            weixin_form_id = '';
        }

        if (this.data.order) {
            return this.goPay();
        }

        let data = this.getOrderRequestParams(false);
        data["weixin_form_id"] = weixin_form_id || '';

        app.ajax('POST', '/trading/order', data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.setData({
                        order: res.data.data
                    })
                    this.goPay();
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
            }
        }, (res) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
        })
    },
    goPay: function() {
        if (this.data.order && this.data.payInfo) {
            let data = {
                "pay_id": this.data.payInfo.pay_id,
                "pay_type": this.data.payInfo.pay_type || 4,
                "pay_info": {},
                "error_msg": "用户主动取消",
                "result": 300
            };
            this.confirmPay(data, this.doPay);
        } else {
            this.doPay();
        }
    },
    doPay: function() {
        let data = {
            total_fee: this.data.tradings_total_fee,
            total_num: this.data.tradings_count,
            pay_type: this.data.pay_type || 4,
            order_ids: [this.data.order.order_id],
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
                    if (data.result == 100) {
                        wx.setStorageSync("cart", {});
                    }
                    return callback(res);
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
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
                wx.showLoading();
                that.confirmPay(data, function() {
                    wx.hideLoading();
                    wx.redirectTo({
                        url: (that.data.cart.next_url || "../order_result/index") + "?status=1&order_id=" + that.data.order.order_id
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
                    wx.showLoading();
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
                    wx.showLoading();
                    that.confirmPay(data, function() {
                        wx.hideLoading();
                        wx.redirectTo({
                            url: (that.data.cart.next_url || "../order_result/index") + "?status=0&order_id=" + that.data.order.order_id
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
                url: (this.data.cart.next_url || "../order_result/index") + "?status=1&order_id=" + this.data.order.order_id
            })
        }, (res) => {
            if (res.statusCode == 200) {
                wx.hideLoading()
                if (res.data.status == 0) {
                    wx.redirectTo({
                        url: (this.data.cart.next_url || "../order_result/index") + "?status=1&order_id=" + this.data.order.order_id
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
                        url: (this.data.cart.next_url || "../order_result/index") + "?status=0&order_id=" + this.data.order.order_id
                    })
                }
            }
        });
    },
    isModifyFun: function() {
        this.setData({
            isModify: !this.data.isModify
        })
    },
    bindInput: function(e) {
        let that = this
        that.setData({
            user_mobile: e.detail.value
        })
    },
    selectPayType: function(e) {
        let _id = e.currentTarget.dataset.id,
            pay_type = e.currentTarget.dataset.typeid;
        this.setData({
            curIndex: _id,
            pay_type: pay_type
        })
    },
    goToGoodsList: function(e) {
        wx.navigateTo({
            url: '../goods_list/index'
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
    linkSelectCoupon: function() {
        this.setData({
            coupon_id: "",
            coupon_selected: true,
        })

        wx.navigateTo({
            url: '../order_coupon/index?coupon_can_used=' + JSON.stringify(this.data.coupon_can_used),
        })
    },
    switchChange: function(e) {
        if (e.detail.value) {
            this.setData({
                delivery_checked: true
            })
        } else {
            this.setData({
                delivery_checked: false,
                user_floor: '',
                user_house_num: '',
            })
        }
        this.pretreatmentOrder();
    },
    showDeliverInfo: function() {
        this.setData({
            isDeliverInfoShow: !this.data.isDeliverInfoShow
        })
    },
    setUserFloor: function(e) {
        let user_floor = (e.detail.value || '').trim()
        let m = new RegExp('[0-9]+?(栋|幢|号)').exec(user_floor)

        if (m && m.length) {
            user_floor = m[0]
        } else {
            user_floor = ''
        }

        this.setData({
            user_floor: user_floor
        })
    },
    checkUserFloor: function(e) {
        let user_floor = (e.detail.value || '').trim()

        if (!user_floor) {
            return
        }

        if (!(new RegExp('^[0-9]+?(栋|幢|号)$')).test(user_floor)) {
            app.showErrorTip(this, '填写错误，请填写xx幢或xx栋或xx号');
            return
        }

        this.setData({
            user_floor: user_floor
        })
    },
    setUserHouseNum: function(e) {
        this.setData({
            user_house_num: e.detail.value
        })
    },
    setUserAddress: function() {
        let address = wx.getStorageSync('_address') || null;
        if (address) {
            this.setData({
                ['address.address_id']: address._id,
                current_address: address
            })
        }
    }
})