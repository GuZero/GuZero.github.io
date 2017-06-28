//search.js
var app = getApp()

Page({
    data: {
        animOfNoneNetWork: {},
        animMsg: '',
        disabled: false,
        hasHistory: false,
        historys: [],
        company: '',
        deliverytype: '',
        code: '',
        isScan: false
    },
    setCompany: function (companyInfo) {
        this.setData({
            company: companyInfo.company || '',
            deliverytype: companyInfo.deliverytype || '',
            code: companyInfo.code || ''
        })
    },
    onLoad: function () {
        this.getNetworkType()
        this.queryLogisticsHistory()
    },
    onPullDownRefresh: function () {
        this.onLoad()
        wx.stopPullDownRefresh()
    },
    onShareAppMessage: function () {
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/page/search/index'
        }
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
    linkToCompany: function () {
        var that = this
        wx.navigateTo({
            url: '../company/index?code=' + that.data.code
        })
    },
    linkToKuaidiInfo: function (e) {
        var dataset = e.currentTarget.dataset
        wx.navigateTo({
            url: '../deliveryInfo/index?code=' + dataset.code + '&&company=' + dataset.company + '&&deliverytype=' + dataset.deliverytype
        })
    },
    searchInfo: function () {
        var that = this
        if (!that.getNetworkType()) {
            return false
        }
        if (!that.data.code) {
            app.showErrorTip(that, '请输入运单号！');
            return false;
        }
        wx.navigateTo({
            url: '../deliveryInfo/index?code=' + that.data.code + '&&company=' + that.data.company + '&&deliverytype=' + that.data.deliverytype
        })
    },
    queryLogisticsHistory: function () {
        var that = this
        if (!that.getNetworkType()) {
            return false
        }
        app.ajax('GET', '/delivery/query/history?cursor=', null, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    if (d.data.data.historys && d.data.data.historys.length > 0) {
                        if (d.data.data.historys.length > 3) {
                            d.data.data.historys = d.data.data.historys.slice(0, 3)
                        }
                        that.setData({ historys: d.data.data.historys, hasHistory: true });
                    }
                } else {
                    app.showErrorTip(that, d.data.msg);
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        })
    },
    bindCode: function (e) {
        this.setData({
            code: e.detail.value
        })
    },
    scanCode: function (e) {
        var that = this;
        if (that.data.isScan) {
            return false;
        }
        that.setData({
            isScan: true
        })
        wx.scanCode({
            success: function (res) {
                that.setData({
                    isScan: false,
                    code: res.result
                })
            },
            fail: function (error) {
                that.setData({
                    isScan: false
                })
                console.log(error.errMsg);
                if (error.errMsg == "scanCode:fail cancel"){
                    app.showErrorTip(that, "扫描已取消");
                }else{
                    app.showErrorTip(that, error.errMsg);                    
                }
                return false;
            }
        })
    },
})
