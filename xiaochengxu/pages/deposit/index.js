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
                    that.setData({ scroll_load_end: true })

                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                that.setData({ scroll_load_end: true })

            }
        })
    },
    setDataStatus: function () {
        var that = this;
        var item = null, tempItems = [];
        for (var i = 0, len = that.data.items.length; i < len; i++) {
            item = that.data.items[i];
            var fetchAt = item.fetch_at && item.fetch_at.length > 0 ? item.fetch_at.split(/\-|\:|\s+/) : [];
            var cancelAt = item.cancel_at && item.cancel_at.length > 0 ? item.cancel_at.split(/\-|\:|\s+/) : [];
            var deliverAt = item.deliver_at && item.deliver_at.length > 0 ? item.deliver_at.split(/\-|\:|\s+/) : [];
            item.statusIndex = that.getStatusIndex(item.status);
            item.boxSize = item.box_type;

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
                            terminal_name: item.terminal_name || '',
                            terminal_code: item.code || ''
                        },
                    })
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        })
    },
    pay: function () {
        wx.requestPayment(
            {
                'timeStamp': '',
                'nonceStr': '',
                'package': '',
                'signType': 'MD5',
                'paySign': '',
                'success': function (res) { },
                'fail': function (res) { },
                'complete': function (res) { }
            })
    },
    goToInfo: function (e) {
        var order_id = e.currentTarget.dataset.orderid;
        wx.navigateTo({
            url: '../orderInfo/index?order_id=' + order_id
        })
    },
    onLoad: function () {
        var that = this
        that.getNetworkType();
        app.authenticated(function () {
            wx.getSystemInfo({
                success: function (res) {
                    that.setData({ scrollHeight: res.windowHeight })
                    that.load(true);
                    that.loadHistory();
                }
            });
        });
    }
})
