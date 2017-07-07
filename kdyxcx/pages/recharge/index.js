// pages/recharge/index.js
var app = getApp();
Page({
    data: {
        isActiveBtn: false,
        animOfNoneNetWork: {},
        animMsg: '',
        noNetWork: false,
        loading: false,
        user: {
            times: '',
            balance: 0
        },
        recharge: [],
        selectedItem: {
            act_id: '',
            fee: 0
        },
        order: null,
        payInfo: null,
        deviceInfo: null,
        curIndex: null
    },
    showLoading: function () {
        this.setData({
            loading: true
        })
    },
    hideAll: function () {
        this.setData({
            loading: false
        })
    },
    confirmPay: function (data, callback) {
        var that = this;
        app.ajax('POST', app.globalData.PAY + "/pay/" + data.pay_id, data, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0 && d.data.data) {
                    callback();
                } else {
                    app.showErrorTip(that, d.data.msg || '支付失败');
                    // wx.redirectTo({
                    //     url: '../orderInfo/index?order_id=' + that.data.order.order_id
                    // })
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                // wx.redirectTo({
                //     url: '../orderInfo/index?order_id=' + that.data.order.order_id
                // })
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
                        // wx.redirectTo({
                        //     url: '../orderInfo/index?order_id=' + that.data.order.order_id
                        // })
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
                            // wx.redirectTo({
                            //     url: '../orderInfo/index?order_id=' + that.data.order.order_id
                            // })
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
                            // wx.redirectTo({
                            //     url: '../orderInfo/index?order_id=' + that.data.order.order_id
                            // })
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
                weixin_id: '595316966803fa65338b4569',
                open_id: open_id,
                app_name: 'gegekdyxcu',
                network: network,
                appver: device_info.version
            }
        })
    },
    goPay: function () {
        var that = this;
        that.getDeviceInfo();
        var open_id = app.globalData.openid || '';
        var data = {
            total_fee: that.data.order.fee,
            total_num: 1,
            pay_type: 4,
            order_ids: [that.data.order.order_id],
            service: 'delivery_courier_recharge_order_service',
            weixin_id: '595316966803fa65338b4569',
            open_id: open_id,
            device_info: that.data.deviceInfo
        };
        function gegePay() {
            app.ajax('POST', app.globalData.PAY + "/pay", data, function (d) {
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
                        // wx.redirectTo({
                        //     url: '../orderInfo/index?order_id=' + that.data.order.order_id
                        // })
                    }
                } else {
                    that.hideAll();
                    app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                    // wx.redirectTo({
                    //     url: '../orderInfo/index?order_id=' + that.data.order.order_id
                    // })
                }
            }, function (err) {
                that.hideAll();
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
        if (!this.data.selectedItem.act_id || this.data.curIndex == null) {
            return false;
        }
        var data = {
            act_id: this.data.selectedItem.act_id,
            fee: this.data.selectedItem.fee
        },
            that = this;
        that.showLoading();
        app.ajax('POST', app.globalData.API + '/operator/recharge/order', data, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0 && d.data.data) {
                    that.setData({
                        order: d.data.data.order
                    })
                    that.goPay();
                } else {
                    that.hideAll();
                    app.showErrorTip(that, d.data.msg);

                }
            } else {
                that.hideAll();
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            that.hideAll();
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    chooseFee: function (e) {
        var actid = e.currentTarget.dataset.actid;
        var fee = e.currentTarget.dataset.fee;
        var index = e.currentTarget.dataset.index;
        if (index == this.data.curIndex) {
            return false;
        }
        this.setData({
            selectedItem: {
                act_id: actid,
                fee: fee
            },
            curIndex: index,
            isActiveBtn: true
        });
    },
    setValue: function () {
        var that = this;
        var item = null, tempItems = [];
        for (var i = 0, len = that.data.recharge.length; i < len; i++) {
            item = that.data.recharge[i];
            item.actValue = parseFloat(item.act_value / 100).toFixed(2);
            item.imgPath = "https:"+item.act_image_path.substr(5);
            tempItems.push(item);
        }
        that.setData({
            recharge: tempItems
        })
    },
    load: function () {
        var that = this;
        app.ajax('GET', app.globalData.API + '/operator/charge/balance', null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    if (d.data.data) {
                        that.setData({
                            user: {
                                balance: parseFloat(d.data.data.balance / 100).toFixed(2),
                                times: d.data.data.times
                            }
                        });
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);
                }
                that.setData({ noNetWork: false });
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
                that.setData({ noNetWork: true });

            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            that.setData({ noNetWork: true });
        })
        app.ajax('GET', app.globalData.API + '/operator/recharge/activity', null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    if (d.data.data.activities && d.data.data.activities.length) {
                        that.setData({
                            recharge: d.data.data.activities
                        });
                        that.setValue();
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);
                }
                that.setData({ noNetWork: false });
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
                that.setData({ noNetWork: true });

            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            that.setData({ noNetWork: true });
        })
    },
    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    that.setData({ noNetWork: true });
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function () {
                that.setData({ noNetWork: true });
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    onLoad: function (options) {
        var that = this
        that.getNetworkType();
        app.authenticated(function () {
            that.load();
        });
    },
    onShareAppMessage: function () {
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/pages/recharge/index'
        }
    },
    onPullDownRefresh: function () {
        this.onLoad()
        wx.stopPullDownRefresh()
    },
    reload: function () {
        this.load();
    }
})