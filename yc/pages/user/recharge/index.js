// pages/recharge/index.js

let CryptoJS = require('../../../utils/cryptojs/cryptojs.js').Crypto;
let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabIndex: 0,
        current_activity: null,
        activitys: null,
        balance: null,
        recharge_order: null,
        payInfo: null,
        // 密码输入框参数设置
        inputData: {
            input_value: "",//输入框的初始内容
            value_length: 0,//输入框密码位数
            isNext: false,//是否有下一步的按钮
            get_focus: true,//输入框的聚焦状态
            focus_class: true,//输入框聚焦样式
            value_num: [1, 2, 3, 4, 5, 6],//输入框格子数
            height: "80rpx",//输入框高度
            width: "420rpx",//输入框宽度
            see: false,//是否明文11展示
            interval: true,//是否显示间隔格子
        },
        isShow: false,
        password: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        app.authenticated(() => {
            wx.showNavigationBarLoading()
            this.loadActivitys()
            this.loadBalance()
        });
    },
    loadActivitys: function () {
        app.ajax("GET", "/trading/balance/activitys", null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    for (let i = 0; i < res.data.data.activitys.length; i++) {
                        res.data.data.activitys[i].image_src = "https://img.aimoge.com/" + res.data.data.activitys[i].image.substring(0, 28);
                    }
                    this.setData({
                        current_activity: res.data.data.activitys[0],
                        activitys: res.data.data.activitys,
                    });
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
                wx.hideNavigationBarLoading()
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
            wx.hideNavigationBarLoading()
        });
    },
    loadBalance: function () {
        app.ajaxPay("GET", "/balance", null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.setData({
                        balance: res.data.data,
                    });
                } else if (res.data.status == 400) {
                    this.setData({
                        balance: { has_password: 0 },
                    });
                }
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
        });
    },
    resetBalancePassword: function (password) {
        let data = {
            "password": password,
        };
        wx.showLoading()
        app.ajaxPay("POST", "/balance/password/reset", data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.data.balance.has_password = 1;
                    this.setData({
                        balance: this.data.balance,
                    });
                    this.rechargeOrder();
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                    wx.hideLoading()
                }
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
            wx.hideLoading()
        });
    },
    rechargeOrder: function () {
        let data = {
            "recharge_type": 1,
            "amount": this.data.current_activity.amount,
            "act_id": this.data.current_activity._id,
            "source": "smartcabxcu",
            "device_info": app.getDeviceInfo()
        };
        app.ajaxPay("POST", "/balance/recharge", data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    this.setData({
                        recharge_order: res.data.data,
                    });
                    this.goPay();
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
                wx.hideLoading()
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
            wx.hideLoading()
        });
    },
    goPay: function () {
        if (this.data.recharge_order && this.data.payInfo) {
            let data = {
                "pay_id": this.data.payInfo.pay_id,
                "pay_type": 4,
                "pay_info": {},
                "error_msg": "用户主动取消",
                "result": 300
            };
            this.confirmPay(data, this.doPay);
        } else {
            this.doPay();
        }
    },
    doPay: function () {
        let data = {
            total_fee: this.data.current_activity.amount,
            total_num: 1,
            pay_type: 4,
            order_ids: [this.data.recharge_order.order_id],
            service: 'recharge_order_service',
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
                    this.wxPay();
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
            }
        }, (re) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
        })
    },
    confirmPay: function (data, callback) {
        app.ajaxPay('POST', "/pay/" + data.pay_id, data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0 && res.data.data) {
                    this.setData({
                        payInfo: null
                    });
                    callback();
                }else{
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
        })
    },
    wxPay: function () {
        let payInfo = this.data.payInfo,
            that = this;
        wx.requestPayment({
            'timeStamp': this.data.payInfo.order_info.timestamp.toString(),
            'nonceStr': this.data.payInfo.order_info.noncestr,
            'package': this.data.payInfo.order_info.package_value,
            'signType': this.data.payInfo.order_info.sign_type,
            'paySign': this.data.payInfo.order_info.pay_sign,
            'success': function (res) {
                let data = {
                    "pay_id": payInfo.pay_id,
                    "pay_type": 4,
                    "pay_info": res,
                    "error_msg": '支付成功',
                    "result": 100
                };
                that.confirmPay(data, function () {
                    wx.navigateBack({ delta: 1 });
                })
            },
            'fail': function (res) {
                if (res.errMsg == "requestPayment:fail cancel") {
                    let data = {
                        "pay_id": payInfo.pay_id,
                        "pay_type": 4,
                        "pay_info": res,
                        "error_msg": "用户主动取消",
                        "result": 300
                    };
                    that.confirmPay(data, function () {
                        wx.showToast({
                            title: '取消支付！',
                            icon: 'none',
                            duration: 2000
                        });
                    })
                } else {
                    let data = {
                        "pay_id": payInfo.pay_id,
                        "pay_type": 4,
                        "pay_info": res,
                        "error_msg": res.errMsg,
                        "result": 200
                    };
                    that.confirmPay(data, function () {
                        wx.showToast({
                            title: res.errMsg || '支付错误！',
                            icon: 'none',
                            duration: 2000
                        });
                    })
                }
            }
        });
    },
    switchTab: function (e) {
        let index = e.target.dataset.currentIndex;
        if (index == this.data.tabIndex) {
            return;
        }
        this.setData({
            tabIndex: index,
            current_activity: this.data.activitys[index]
        });
    },
    submitRecharge: function () {
        if (!this.data.balance) return;

        if (!this.data.balance.has_password) {
            this.setData({
                isShow: !this.data.isShow
            })
        } else {
            this.rechargeOrder();
        }
    },
    // 当组件输入数字6位数时的自定义函数
    submitResetPassword: function (e) {
        if (!this.data.password) {
            let password = CryptoJS.SHA1(CryptoJS.SHA256(CryptoJS.MD5(e.detail).toString()).toString()).toString();
            this.setData({
                password: password
            });
            return;
        }

        let password = CryptoJS.SHA1(CryptoJS.SHA256(CryptoJS.MD5(e.detail).toString()).toString()).toString();
        if (this.data.password != password) {
            this.setData({
                password: ''
            });
            wx.showToast({
                title: '两次支付密码不一致！',
                icon: 'none',
                duration: 2000
            });
            return;
        }

        this.setData({
            isShow: false
        });
        this.resetBalancePassword(password);
    },
    cancelBalancePassword: function () {
        this.setData({
            password: '',
            isShow: false
        });
    }
})