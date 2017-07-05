//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        scrollHeight: 0,
        numPerPage: 16,
        items: [],
        pageList: [],
        page: '',
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
        item: {},
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
        scroll_load_loading: false,
        scroll_load_end: false,
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
            path: '/pages/deposit/index'
        }
    },
    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    that.setData({ scroll_load_loading: false })
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function () {
                that.setData({ scroll_load_loading: false })
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    linkToDepositOrder: function (e) {
        var item = this.data.lastestItem;
        if (item.terminal_name && item.terminal_code) {
            wx.navigateTo({
                url: '../depositOrder/index?terminal_code=' + (item.terminal_code || item.code) + '&&terminal_name=' + item.terminal_name
            })
        } else {
            wx.navigateTo({
                url: '../chooseTerminal/index'
            })
        }
    },
    load: function (isFirst) {
        var that = this, page = ''
        if (!that.getNetworkType()) {
            return false
        }
        if (that.data.scroll_load_loading) {
            return false;
        }
        if (that.data.scroll_load_end) {
            return false;
        }
        that.setData({
            scroll_load_loading: true
        });
        page = that.data.page;
        app.ajax('GET', '/ultrabox/storage/order?cursor=' + that.data.page, null, function (d) {
            that.setData({
                scroll_load_loading: false
            });
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    if (d.data.data.orders && d.data.data.orders.length > 0) {
                        if (that.data.pageList.indexOf(page) >= 0) return false;
                        that.data.pageList.push(page);
                        var item = that.data.items.concat(d.data.data.orders);
                        that.setData({
                            page: d.data.data.next_cursor || '',
                            items: item
                        });
                        that.setDataStatus();
                    }
                    if (d.data.data.orders && d.data.data.orders.length < that.data.numPerPage) {
                        that.setData({ scroll_load_end: true })
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
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
        var item = null, tempItems = [];
        for (var i = 0, len = that.data.items.length; i < len; i++) {
            item = that.data.items[i];
            var fetchAt = item.fetch_at && item.fetch_at.length > 0 ? item.fetch_at.split(/\-|\:|\s+/) : [];
            var cancelAt = item.cancel_at && item.cancel_at.length > 0 ? item.cancel_at.split(/\-|\:|\s+/) : [];
            var deliverAt = item.deliver_at && item.deliver_at.length > 0 ? item.deliver_at.split(/\-|\:|\s+/) : [];
            var time = new Date().getTime() - that.getDateByStr(item.created_at),
                time = parseInt(time / 1000),
                time = 15 * 60 - time;
            item.statusIndex = that.getStatusIndex(item.status);
            item.boxSize = item.box_type;
            item.overTime = time;
            item.fetchAt = fetchAt.length == 6 ? (fetchAt[1] + '/' + fetchAt[2] + " " + fetchAt[3] + ':' + fetchAt[4]) : '';
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
            tempItems.push(item);
        }
        that.setData({
            items: tempItems
        })
    },

    getStatusIndex: function (status) {
        var that = this;
        for (var i in that.data.status) {
            if (that.data.status[i].indexOf(status) > -1) return i;
        }
    },
    scrolltolower: function (e) {
        this.load();
    },
    loadHistory: function () {
        var that = this;
        app.ajax('GET', "/ultrabox/storage/terminal", null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    var item = d.data.data;
                    // var distance = that.getFlatternDistance(that.data.latitude,that.data.longitude,item.geo[1],item.geo[0]);
                    that.setData({
                        lastestItem: {
                            terminal_name: item && item.terminal_name ? item.terminal_name : '',
                            terminal_code: item && item.code ? item.code : ''
                        },
                    })
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        },function(err){
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');            
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
                        that.onShow();
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
    goPay: function (e) {
        this.getDeviceInfo();
        var open_id = app.globalData.openid  || '',
            that = this,
            item = e.currentTarget.dataset.item;
        that.setData({
            item: item
        });
        var data = {
            total_fee: this.data.item.fee,
            total_num: 1,
            pay_type: 4,
            order_ids: [this.data.item.order_id],
            service: 'ultrabox_storage_order_service',
            weixin_id: '586b06cf6803fadf0d8b4567',
            open_id: open_id,
            device_info: this.data.deviceInfo
        };

        if (wx.showLoading) {
            wx.showLoading({
                title: '正在支付...',
                mask: true
            })
        }
        function gegePay() {
            app.ajaxPay('POST', "/pay", data, function (d) {
                if (wx.hideLoading) {
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
    goToInfo: function (e) {
        var order_id = e.currentTarget.dataset.orderid;
        wx.navigateTo({
            url: '../orderInfo/index?order_id=' + order_id
        })
    },
    onLoad: function () {
        var that = this
    },
    onShow: function () {
        var that = this;
        that.getNetworkType();
        app.authenticated(function () {
            wx.getSystemInfo({
                success: function (res) {
                    that.setData({
                        scrollHeight: res.windowHeight,
                        items: [],
                        pageList: [],
                        page: '',
                        lastestItem: {
                            terminal_name: '',
                            terminal_code: ''
                        },
                        scroll_load_loading: false,
                        scroll_load_end: false,
                    })
                    that.load();
                    that.loadHistory();
                }
            });
        });
    }
})
