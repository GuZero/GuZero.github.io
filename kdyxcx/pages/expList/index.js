//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        items: [],
        page: '',
        scroll_load_loading: false,
        animOfNoneNetWork: {},
        animMsg: '',
        noNetWork: false,
        isShowEmpty: false

    },
    onShareAppMessage: function () {
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/pages/expList/index'
        }
    },
    onPullDownRefresh: function () {
        this.setData({
            items: [],
            page: '',
            scroll_load_loading: false,
            scroll_load_end: false,
            noNetWork: false
        })
        this.onLoad()
        wx.stopPullDownRefresh()
    },
    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    that.setData({ scroll_load_loading: false })
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    if (that.data.items.length <= 0) {
                        that.setData({ noNetWork: true });
                    }
                    return false;
                }
                return true;
            },
            fail: function () {
                that.setData({ scroll_load_loading: false })
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                if (that.data.items.length <= 0) {
                    that.setData({ noNetWork: true });
                }
                return false;
            }
        })
        return true;
    },
    getStayTime: function (_beforeDate) {
        var arr = _beforeDate.split(/[- :]/);
        var beforeDate = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
        var currentDate = new Date();
        var day = parseInt((currentDate - beforeDate) / (24 * 60 * 60 * 1000));
        var hours = parseInt(((currentDate - beforeDate) / (60 * 60 * 1000)) - day * 24);
        var min = parseInt(((currentDate - beforeDate) / (60 * 1000)) - day * 24 * 60 - hours * 60) < 10 ? "0" + parseInt(((currentDate - beforeDate) / (60 * 1000)) - day * 24 * 60 - hours * 60) : parseInt(((currentDate - beforeDate) / (60 * 1000)) - day * 24 * 60 - hours * 60);
        return (day + "天" + hours + "小时" + min + "分")
    },
    setStayTime: function () {
        var that = this;
        var item = null, tempItems = [];
        for (var i = 0, len = that.data.items.length; i < len; i++) {
            item = that.data.items[i];
            item.stayTime = that.getStayTime(item.delivery_at);
            tempItems.push(item);
        }
        that.setData({
            items: tempItems
        })
    },
    listLoad: function () {
        var that = this;
        var page = that.data.page;

        if (that.data.scroll_load_loading) {
            return false;
        };
        if (that.data.scroll_load_end) {
            return false;
        };

        that.setData({
            scroll_load_loading: true
        });
        app.ajax('GET', app.globalData.API + '/delivery/history?cursor=' + page + '&state=3', null, function (d) {
            that.setData({
                scroll_load_loading: false
            });
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    if (d.data.data.items && d.data.data.items.length) {
                        that.setData({
                            items: that.data.items.concat(d.data.data.items),
                            page: d.data.data.next_cursor || 0,
                        });
                        that.setStayTime();
                    }else{
                        that.setData({
                            isShowEmpty: true
                        });
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);

                }
                that.setData({ noNetWork: false });
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
                if (that.data.items.length <= 0) {
                    that.setData({ noNetWork: true });
                }
            }
        }, function (err) {
            that.setData({
                scroll_load_loading: false
            });
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            if (that.data.items.length <= 0) {
                that.setData({ noNetWork: true });
            }
        })
    },

    goToDetail: function (e) {
        var order_id = e.currentTarget.dataset.orderid;
        wx.navigateTo({
            url: '../details/index?order_id=' + order_id
        })
    },
    reload: function () {
        this.listLoad();
    },
    onLoad: function () {
        var that = this
        that.getNetworkType();
        app.authenticated(function () {
            that.listLoad();
        });
    }
})
