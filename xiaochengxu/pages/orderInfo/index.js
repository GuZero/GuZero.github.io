//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        order_id: '',
        item: [],
        status: {
            1: [201, 211, 291, 292],
            2: [251, 252, 281, 301],
            3: [401],
            4: [411],
            5: [101]
        },
        lastestItem: {
            terminal_name: '',
            terminal_code: ''
        },
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
        },
        canPay: true,
        animOfNoneNetWork: {},
        animMsg: ''
    },
    onPullDownRefresh: function () {
        this.onLoad()
        wx.stopPullDownRefresh()
    },
    onShareAppMessage: function () {
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/page/deposit/index'
        }
    },
    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    that.setData({ scroll_load_loading: true })
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function () {
                that.setData({ scroll_load_loading: true })
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    load: function () {
        var that = this;
        if (!that.getNetworkType()) {
            return false
        }
        app.ajax('GET', '/ultrabox/storage/order/' + that.data.order_id, null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    var time = new Date().getTime() - that.getDateByStr(d.data.data.order.created_at),
                        time = parseInt(time / 1000),
                        time = 15 * 60 - time,
                        _interval = null;
                    d.data.data.order.overTime = time;
                    that.setData({
                        item: d.data.data.order
                    })
                    if (time > 0 && that.data.status[1].indexOf(that.data.item.status) > -1) {
                        _interval = setInterval(function () {
                            time -= 1;
                            if (time <= 0) {
                                that.setData({
                                    canPay: false
                                });
                                clearInterval(_interval);
                                _interval = null;
                            }
                        }, 1000);
                    }
                    that.setDataStatus();
                } else {
                    app.showErrorTip(that, d.data.msg);

                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        })
    },
    getDateByStr: function (str) {
        var arr = str.split(' '),
            arr1 = arr[0].split('-'),
            arr2 = arr[1].split(':'),
            year = arr1[0],
            month = parseInt(arr1[1]) - 1,
            date = arr1[2],
            hour = arr2[0],
            minutes = arr2[1],
            seconds = arr2[2];
        return new Date(year, month, date, hour, minutes, seconds).getTime();
    },
    setDataStatus: function () {
        var that = this;
        var item = that.data.item;
        var fetchAt = item.fetch_at && item.fetch_at.length > 0 ? item.fetch_at.split(/\-|\:|\s+/) : [];
        var createAt = item.created_at && item.created_at.length > 0 ? item.created_at.split(/\-|\:|\s+/) : [];
        var cancelAt = item.cancel_at && item.cancel_at.length > 0 ? item.cancel_at.split(/\-|\:|\s+/) : [];
        var deliverAt = item.deliver_at && item.deliver_at.length > 0 ? item.deliver_at.split(/\-|\:|\s+/) : [];
        item.statusIndex = that.getStatusIndex(item.status);
        item.boxSize = item.box_type;

        item.fetchAt = fetchAt.length == 6 ? (fetchAt[1] + '/' + fetchAt[2] + " " + fetchAt[3] + ':' + fetchAt[4]) : '';
        item.createAt = createAt.length == 6 ? (createAt[1] + '/' + createAt[2] + " " + createAt[3] + ':' + createAt[4]) : '';
        item.cancelAt = cancelAt.length == 6 ? (cancelAt[1] + '/' + cancelAt[2] + " " + cancelAt[3] + ':' + cancelAt[4]) : '';
        item.deliverAt = deliverAt.length == 6 ? (deliverAt[1] + '/' + deliverAt[2] + " " + deliverAt[3] + ':' + deliverAt[4]) : '';
        if (item.box_type == 1) {
            item.boxSize = "小";
        } else if (item.box_type == 2) {
            item.boxSize = "中";
        } else if (item.box_type == 3) {
            item.boxSize = "大";
        } else if (item.box_type == 4) {
            item.boxSize = "微";
        }
        that.setData({
            item: item
        })
    },

    getStatusIndex: function (status) {
        var that = this;
        for (var i in that.data.status) {
            if (that.data.status[i].indexOf(status) > -1) return i;
        }
    },
    loadHistory: function () {
        var that = this;
        app.ajax('GET', "/ultrabox/storage/terminal", null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    var item = d.data.data;
                    that.setData({
                        lastestItem: {
                            terminal_name: item && item.terminal_name ? item.terminal_name : '',
                            terminal_code: item && item.code ? item.code:''
                        },
                    })
                } else {
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        })
    },
    linkToDepositOrder: function (e) {
        var item = this.data.lastestItem;
        if (item.terminal_name && item.terminal_code) {
            wx.redirectTo({
                url: '../depositOrder/index?terminal_code=' + (item.terminal_code || item.code) + '&&terminal_name=' + item.terminal_name
            })
        } else {
            wx.redirectTo({
                url: '../chooseTerminal/index'
            })
        }
    },
    bd09togcj02: function (bd_lon, bd_lat) {
        var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
        var x = bd_lon - 0.0065;
        var y = bd_lat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
        var gg_lng = z * Math.cos(theta);
        var gg_lat = z * Math.sin(theta);
        return [gg_lng, gg_lat]
    },
    openLocationMap: function (e) {
        var order = this.data.item,
            that = this,
            geo = that.bd09togcj02(order.terminal_geo[0], order.terminal_geo[1]);
        wx.openLocation({
            latitude: Number(geo[1]),
            longitude: Number(geo[0]),
            name: order.terminal_name,
            address: order.province_name + order.city_name + order.region_name + order.terminal_addr,
            scale: 30
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
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
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
                        that.onLoad();                        
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
                            
                        })
                    }
                }
            })
    },

    getDeviceInfo: function (message) {
        var device_info = wx.getSystemInfoSync(),
            network = '',
            open_id = wx.getStorageSync('openid') || '',
            udid = wx.getStorageSync('uid') || '';
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
        var open_id = wx.getStorageSync('openid') || '';
        var data = {
            total_fee: this.data.item.fee,
            total_num: 1,
            pay_type: 4,
            order_ids: [this.data.item.order_id],
            service: 'ultrabox_storage_order_service',
            weixin_id: '586b06cf6803fadf0d8b4567',
            open_id: open_id,
            device_info: this.data.deviceInfo
        },
            that = this;
        if (wx.showLoading) {
            wx.showLoading({
                title: '正在支付...',
                mask: true
            })
        }
        function gegePay() {
            app.ajaxPay('POST', "/pay", data, function (d) {
                if (wx.hideLoading()) {
                    wx.hideLoading();
                }    
                if (d.statusCode == 200) {
                    if (d.data.status == 0 && d.data.data) {
                        that.setData({
                            payInfo: d.data.data
                        })
                        that.wxPay();
                    } else {
                        app.showErrorTip(that, d.data.msg);
                    }
                } else {
                    app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                }
            })
        }
        if (that.data.item.status == 211) {
            var data2 = {
                "pay_id": that.data.item.pay_id,
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

    cancelOrder: function () {
        var that = this;
        if (!that.getNetworkType()) {
            return false
        }
        function cancelThisOrder() {
            if (wx.showLoading){
                wx.showLoading({
                    title: '正在取消订单...',
                    mask: true
                })
            }
            app.ajax('POST', "/ultrabox/storage/order/" + that.data.order_id, null, function (d) {
                if (wx.hideLoading()) {
                    wx.hideLoading();
                }               
                if (d.statusCode == 200) {
                    if (d.data.status == 0) {
                        var item = that.data.item;
                         item.statusIndex = 5;
                        that.setData({
                           canPay: false,
                           item: item
                        })
                    } else {
                        app.showErrorTip(that, d.data.msg);                        
                    }
                } else {
                    app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                }
            })
        }

        if (that.data.item.status == 211) {
            var data = {
                service: "ultrabox_storage_order_service",
                pay_id: that.data.item.pay_id,
                pay_type: that.data.item.pay_type,
                result: 300,
                error_msg: '用户主动取消',
                pay_info: {}
            };
            that.confirmPay(data,cancelThisOrder);
        } else {
            cancelThisOrder();
        }
    },
    onLoad: function (options) {
        var that = this
        that.getNetworkType();
        that.setData({
            order_id: that.options.order_id
        })
        app.authenticated(function () {
            wx.getSystemInfo({
                success: function (res) {
                    that.load();
                    that.loadHistory();
                }
            });
        });
    }
})
