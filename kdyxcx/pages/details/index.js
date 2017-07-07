// pages/details/index.js
var app = getApp();
Page({
    data: {
        order_id: '',
        options: {},
        item: {},
        animOfNoneNetWork: {},
        animMsg: '',
        noNetWork: false
    },
    takePhoneCall: function () {
        wx.makePhoneCall({
            phoneNumber: this.data.phone
        })
    },
    callPhone: function (e) {
        var that = this,
            phone = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: phone //仅为示例，并非真实的电话号码
        })
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
        var tempItem = that.data.item;
        tempItem.group = tempItem.box.code.substring(1, 3);
        tempItem.door = tempItem.box.code.substring(3);
        tempItem.stayTime = that.getStayTime(tempItem.delivery_at);;
        tempItem.gridFee = (tempItem.charge/100).toFixed(2);
        that.setData({
            item: tempItem
        })
    },
    load: function(){
        var that = this;
        if (!that.getNetworkType()) {
            return false
        }
        app.ajax('GET', app.globalData.API + '/delivery/'+that.data.order_id, null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0 && d.data.data) {
                    that.setData({
                        item: d.data.data
                    })
                    that.setStayTime();
                }
                that.setData({ noNetWork: false });
            } else {
                that.setData({ noNetWork: true });
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            that.setData({ noNetWork: true });
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
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
        if (options) {
            that.setData({
                options: options
            })
        }
        var order_id = options && options.order_id ? options.order_id : '';
        that.setData({
            order_id: order_id
        })
        app.authenticated(function () {
            that.load();            
        });
    },
    onShareAppMessage: function () {
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/pages/details/index?order_id=' + this.data.order_id
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