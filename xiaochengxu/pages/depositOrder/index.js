// pages/depositOrder/index.js
var app = getApp()
Page({
    data: {
        animOfNoneNetWork: {},
        animMsg: '',
        agree: true,
        error: false,
        loading: false,
        animationData: {},
        boxs: [],
        terminal_code: '',
        terminal_name: '',
        distance: 0,
        tabIndex: null,
        order: {},
        payInfo: {},
        deviceInfo: {
            os: '',
            osver: '',
            phonemodel: '',
            udid: '',
            weixin_id: '586b06cf6803fadf0d8b4567',
            open_id: '',
            app_name: 'gegexcu',
            network: '',
            appver: ''
        }

    },
    onPullDownRefresh: function () {
        this.onLoad(this.options);
        wx.stopPullDownRefresh();
    },

    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function () {
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    switchBox: function (e) {
        if (!e.currentTarget.dataset.item.count) {
            return false;
        }
        var current = this.data.tabIndex,
            index = 1;
        if (current == 1 && e.currentTarget.id == 'item0') return false;
        if (current == 2 && e.currentTarget.id == 'item1') return false;
        if (current == 3 && e.currentTarget.id == 'item2') return false;
        if (current == 4 && e.currentTarget.id == 'item3') return false;
        if (e.currentTarget.id == 'item0') {
            index = 1
        };
        if (e.currentTarget.id == 'item1') {
            index = 2
        };
        if (e.currentTarget.id == 'item2') {
            index = 3
        };
        if (e.currentTarget.id == 'item3') {
            index = 4
        };
        this.setData({
            tabIndex: index
        });
    },
    isAgree: function () {
        var flag = !this.data.agree;
        this.setData({
            agree: flag
        });
    },
    showError: function () {
        this.setData({
            error: true
        })
        setTimeout(function () {
            this.setData({
                error: false,
            });
        }.bind(this), 1500)
    },
    showLoading: function () {
        this.setData({
            loading: true
        })
    },
    hideAll: function () {
        this.setData({
            error: false,
            loading: false
        })
    },

    confirmPay: function (data, callback) {
        var that = this;
        app.ajaxPay('POST', "/pay/" + data.pay_id, data, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0 && d.data.data) {
                    callback();
                } else {
                    app.showErrorTip(that, '支付失败');
                    wx.redirectTo({
                        url: '../orderInfo/index?order_id=' + that.data.order.order_id
                    })
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                wx.redirectTo({
                    url: '../orderInfo/index?order_id=' + that.data.order.order_id
                })
            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    wxPay: function () {
        var payInfo = this.data.payInfo,
            that = this;
        wx.requestPayment(
            {
                'timeStamp': payInfo.order_info.timestamp.toString(),
                'nonceStr': payInfo.order_info.noncestr,
                'package': payInfo.order_info.package_value,
                'signType': payInfo.order_info.sign_type,
                'paySign': payInfo.order_info.pay_sign,
                'success': function (res) {
                    var data = {
                        "pay_id": payInfo.pay_id,
                        "pay_type": 4,
                        "pay_info": res,
                        "error_msg": '支付成功',
                        "result": 100
                    };
                    that.confirmPay(data, function () {
                        wx.redirectTo({
                            url: '../orderInfo/index?order_id=' + that.data.order.order_id
                        })
                    })
                },
                'fail': function (res) {
                    if (res.errMsg == "requestPayment:fail cancel") {
                        var data = {
                            "pay_id": payInfo.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": "用户主动取消",
                            "result": 300
                        };
                        that.confirmPay(data, function () {
                            wx.redirectTo({
                                url: '../orderInfo/index?order_id=' + that.data.order.order_id
                            })
                        })
                    } else {
                        var data = {
                            "pay_id": payInfo.pay_id,
                            "pay_type": 4,
                            "pay_info": res,
                            "error_msg": res.errMsg,
                            "result": 200
                        };
                        that.confirmPay(data, function () {
                            wx.redirectTo({
                                url: '../orderInfo/index?order_id=' + that.data.order.order_id
                            })
                        })
                    }
                }
            })
    },

    getDeviceInfo: function (message) {
        var device_info = wx.getSystemInfoSync(),
            network = '',
            open_id = app.globalData.openid || '',
            udid = app.globalData.userInfo._id || '';
        wx.getNetworkType({
            success: function (res) {
                network = res.networkType
            },
            fail: function () {
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
            }
        });
        this.setData({
            deviceInfo: {
                os: device_info.system.split(' ')[0],
                osver: device_info.system.split(' ')[1],
                phonemodel: device_info.model,
                udid: udid,
                weixin_id: '586b06cf6803fadf0d8b4567',
                open_id: open_id,
                app_name: 'gegexcu',
                network: network,
                appver: device_info.version
            }
        })
    },
    goPay: function () {
        this.getDeviceInfo();
        var open_id = app.globalData.openid || '';
        var data = {
            total_fee: this.data.order.fee,
            total_num: 1,
            pay_type: 4,
            order_ids: [this.data.order.order_id],
            service: 'ultrabox_storage_order_service',
            weixin_id: '586b06cf6803fadf0d8b4567',
            open_id: open_id,
            device_info: this.data.deviceInfo
        },
            that = this;
        function gegePay() {
            app.ajaxPay('POST', "/pay", data, function (d) {
                that.hideAll();
                if (d.statusCode == 200) {
                    if (d.data.status == 0 && d.data.data) {
                        that.setData({
                            payInfo: d.data.data
                        })
                        that.wxPay();
                    } else {
                        that.hideAll();                        
                        app.showErrorTip(that, d.data.msg);
                        wx.redirectTo({
                            url: '../orderInfo/index?order_id=' + that.data.order.order_id
                        })
                    }
                } else {
                    that.hideAll();                                          
                    app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                    wx.redirectTo({
                        url: '../orderInfo/index?order_id=' + that.data.order.order_id
                    })
                }
            }, function (err) {
                that.hideAll();                      
                that.showError();
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            })
        }
        if (that.data.order.status == 211) {
            var data2 = {
                "pay_id": that.data.order.pay_id,
                "pay_type": 4,
                "pay_info": {},
                "error_msg": "用户主动取消",
                "result": 300
            };
            that.confirmPay(data2, gegePay);
        } else {
            gegePay();
        }
    },

    submit: function () {
        if (!this.data.agree || !this.data.tabIndex) {
            return false;
        }
        var data = {
            terminal_code: this.data.terminal_code,
            box_type: this.data.tabIndex
        },
            that = this;
        that.showLoading();
        app.ajax('POST', '/ultrabox/storage/order', data, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0 && d.data.data) {
                    that.setData({
                        order: d.data.data
                    })
                    that.goPay();
                } else {
                    that.hideAll();                    
                    that.showError();
                    app.showErrorTip(that, d.data.msg);

                }
            } else {
                that.hideAll();                
                that.showError();
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            that.hideAll();
            that.showError();
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    load: function () {
        var that = this;
        if (!that.getNetworkType()) {
            return false
        }
        app.ajax('GET', '/ultrabox/storage/terminal/status?terminal_code=' + that.data.terminal_code, null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    that.setData({
                        item: d.data.data
                    })
                }
            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    gotoInfo: function () {
        var that = this;
        wx.redirectTo({
            url: '../chooseTerminal/index?terminal_code=' + that.data.terminal_code + '&terminal_name=' + that.data.terminal_name + '&distance=' + that.data.distance,
            fail:function(err){
                console.log(err);
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        that.setData({
            terminal_code: that.options.terminal_code,
            terminal_name: that.options.terminal_name,
            distance: that.options.distance || 'none'
        })
        that.getNetworkType();
        app.authenticated(function () {
            that.load();
        });
    },
    onShareAppMessage: function () {
        var terminal_code = this.data.terminal_code;
        var terminal_name = this.data.terminal_name;
        var distance = this.data.distance;
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/pages/depositOrder/index?terminal_code=' + terminal_code + '&terminal_name=' +terminal_name + '&distance=' + distance
        }
    }
})