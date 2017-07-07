//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        tabIndex: 0,
        expCount: 0,
        numPerPage: 10,
        items: [],
        pageList: [],
        page: '',
        scroll_load_loading: false,
        scroll_load_end: false,
        animOfNoneNetWork: {},
        animMsg: '',
        delivery_state: 0,
        start_date: "",
        end_date: "",
        date_info: '三天内',
        noNetWork: false,
        isShowEmpty: false
    },
    onShareAppMessage: function () {
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/pages/index/index'
        }
    },
    onPullDownRefresh: function () {
        this.setData({
            items: [],
            pageList: [],
            page: '',
            scroll_load_loading: false,
            scroll_load_end: false,
            noNetWork: false
        })
        // this.onLoad();
        this.loadExpCount();
        this.listLoad();
        wx.stopPullDownRefresh()
    },
    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    that.setData({ scroll_load_loading: false });
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    if (that.data.items.length <= 0) {
                        that.setData({ noNetWork: true });
                    }
                    return false;
                }
                return true;
            },
            fail: function () {
                that.setData({ scroll_load_loading: false });
                if (that.data.items.length <= 0) {
                    that.setData({ noNetWork: true });
                }
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    formatDate: function (_date) {
        var time = new Date(_date);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var dateStr = '';
        dateStr = year + '-' + (month >= 10 ? month : ('0' + month)) + '-' + (date >= 10 ? date : ('0' + date));
        return dateStr;
    },
    handleChooseDate: function (type) {
        var fromDate = '';
        var toDate = '';
        var that = this;
        switch (type) {
            case 0:
                {
                    var currentDate = new Date();
                    toDate = that.formatDate(currentDate);
                    currentDate.setDate(currentDate.getDate() - 2);
                    fromDate = that.formatDate(currentDate);
                    if (that.data.start_date == fromDate && that.data.end_date == toDate && that.data.date_info == '三天内') {
                        return false;
                    }
                    that.setData({
                        date_info: '三天内',
                        start_date: fromDate,
                        end_date: toDate
                    })
                    break;
                }
            case 1:
                {
                    var currentDate = new Date();
                    toDate = that.formatDate(currentDate);
                    currentDate.setDate(currentDate.getDate() - currentDate.getDate() + 1);
                    fromDate = that.formatDate(currentDate);
                    if (that.data.start_date == fromDate && that.data.end_date == toDate && that.data.date_info == '本月') {
                        return false;
                    }
                    that.setData({
                        date_info: '本月',
                        start_date: fromDate,
                        end_date: toDate
                    })
                    break;
                }
            case 2:
                {
                    var currentDate = new Date();
                    currentDate.setDate(currentDate.getDate() - currentDate.getDate());
                    toDate = that.formatDate(currentDate);
                    currentDate.setDate(currentDate.getDate() - currentDate.getDate() + 1);
                    fromDate = that.formatDate(currentDate);
                    if (that.data.start_date == fromDate && that.data.end_date == toDate && that.data.date_info == '上月') {
                        return false;
                    }
                    that.setData({
                        date_info: '上月',
                        start_date: fromDate,
                        end_date: toDate
                    })
                    break;
                }

        }
        that.setData({
            items: [],
            pageList: [],
            page: '',
            scroll_load_loading: false,
            scroll_load_end: false
        })
        that.listLoad();

    },
    isChoose: function () {
        var that = this;
        wx.showActionSheet({
            itemList: ['三天内', '本月', '上月'],
            success: function (res) {
                if (res.cancel) {
                    return false;
                }
                that.handleChooseDate(res.tapIndex);
                return false;
            },
            fail: function (res) {
                console.log(res.errMsg);
                return false;

            }
        })
    },
    switchTab: function (e) {
        var current = this.data.tabIndex,
            index = 0,
            delivery_state = 0,
            that = this;
        if (current == 0 && e.currentTarget.id == 'tab0') return false;
        if (current == 1 && e.currentTarget.id == 'tab1') return false;
        if (current == 2 && e.currentTarget.id == 'tab2') return false;
        if (current == 3 && e.currentTarget.id == 'tab3') return false;
        if (e.currentTarget.id == 'tab1') { //已取件
            index = 1;
            delivery_state = 5;
        }
        if (e.currentTarget.id == 'tab2') { //回收件
            index = 2;
            delivery_state = 4;
        }
        if (e.currentTarget.id == 'tab3') {//异常件
            index = 3;
            delivery_state = 6;
        }
        this.setData({
            tabIndex: index,
            delivery_state: delivery_state,
            page: '',
            pageList: [],
            items0: [],
            items: [],
            scroll_load_loading: false,
            scroll_load_end: false
        })
        that.listLoad();
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
    loadExpCount: function () {
        var that = this;
        if (!that.getNetworkType()) {
            return false
        }
        app.ajax('GET', app.globalData.API + '/delivery/history?cursor=&state=3', null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0 && d.data.data.items && d.data.data.items.length) {
                    that.setData({
                        expCount: d.data.data.items.length
                    })
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
            }
        }, function (err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    listLoad: function () {
        var that = this;
        var page = that.data.page;
        var state = that.data.delivery_state;
        var start_date = that.data.start_date;
        var end_date = that.data.end_date;

        if (that.data.scroll_load_loading) {
            return false;
        };
        if (that.data.scroll_load_end) {
            return false;
        };

        if (that.data.pageList.indexOf(page) > -1) {
            return false;
        };

        that.setData({
            scroll_load_loading: true
        });
        app.ajax('GET', app.globalData.API + '/delivery/history?cursor=' + page + '&state=' + state + '&start_date=' + start_date + '&end_date=' + end_date, null, function (d) {
            that.setData({
                scroll_load_loading: false
            });
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    if (d.data.data.items && d.data.data.items.length) {
                        that.setData({
                            items: that.data.items.concat(d.data.data.items),
                            page: d.data.data.next_cursor || 0,
                            pageList: that.data.pageList.concat([page])
                        });
                        if (d.data.data.items && d.data.data.items.length < that.data.numPerPage) {
                            that.setData({
                                scroll_load_end: true
                            });
                        }
                        that.setStayTime();
                    } else {
                        that.setData({
                            isShowEmpty: true,
                            scroll_load_end: true
                        });
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);
                }
                that.setData({ noNetWork: false });
            } else {
                if (that.data.items.length <= 0) {
                    that.setData({ noNetWork: true });
                }
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            that.setData({
                scroll_load_loading: false
            });
            if (that.data.items.length <= 0) {
                that.setData({ noNetWork: true });
            }
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
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
    goToDetail: function (e) {
        var order_id = e.currentTarget.dataset.orderid;
        wx.navigateTo({
            url: '../details/index?order_id=' + order_id
        })
    },
    goToExpList: function (e) {
        wx.navigateTo({
            url: '../expList/index'
        })
    },
    onLoad: function () {
        var that = this;
        that.getNetworkType();
        var time = new Date();
        var end_date = time.getFullYear() + '-' + ((time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : ('0' + (time.getMonth() + 1))) + '-' + ((time.getDate()) >= 10 ? (time.getDate()) : ('0' + (time.getDate())));
        time.setDate(time.getDate() - 2);
        var start_date = time.getFullYear() + '-' + ((time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : ('0' + (time.getMonth() + 1))) + '-' + ((time.getDate()) >= 10 ? (time.getDate()) : ('0' + (time.getDate())));
        that.setData({
            start_date: start_date,
            end_date: end_date
        })
        app.authenticated(function () {
            that.loadExpCount();
            that.listLoad();
        });
    },
    onShow: function () {
        var that = this;
        that.loadExpCount();
    },
    reload: function () {
        this.loadExpCount();        
        this.listLoad();
    },
    onReachBottom: function () {
        if (!this.data.noNetWork && !this.data.scroll_load_end && this.data.items.length > 0) {
            this.listLoad();
        }
    }
})
