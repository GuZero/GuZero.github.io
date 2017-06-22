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
    load: function (isFirst) {
        var that = this, page = ''
        if (!that.getNetworkType()) {
            return false
        }
        app.ajax('GET', '/ultrabox/storage/order/' + that.data.order_id, null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    that.setData({
                        item: d.data.data.order
                    })
                    that.setDataStatus();
                } else {
                    app.showErrorTip(that, d.data.msg);

                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        })
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
                    // var distance = that.getFlatternDistance(that.data.latitude,that.data.longitude,item.geo[1],item.geo[0]);
                    that.setData({
                        lastestItem: {
                            terminal_name: item.terminal_name || '',
                            terminal_code: item.code || ''
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
    onLoad: function (options) {
        var that = this
        that.getNetworkType();
        that.setData({
            order_id: options.order_id
        })
        // that.setData({
        //     order_id: '201604191137389076482082'
        // })
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
