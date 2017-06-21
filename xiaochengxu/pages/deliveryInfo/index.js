//deliveryInfo.js
var app = getApp()
Page({
  data: {
    animOfNoneNetWork: {},
    animMsg: '',
    showResult: false,
    code: '',
    companyName: '',
    company: '',
    options: null,
    scroll_load_end: false,
    logistics: []
  },
  onLoad: function (options) {
    var that = this
    that.getNetworkType()
    if (options) {
      that.setData({
        options: options
      })
    }
    that.setData({
      code: options.code,
      companyName: options.company,
      company: options.deliverytype
    })
    app.authenticated(function(){
      that.getDeliveryInfo();
    });
    
  },
  onPullDownRefresh: function () {
    this.onLoad(this.data.options)
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function(){
    return {
      title: '格格快递柜物流查询',
      desc: '',
      path: '/pages/deliveryInfo/index?code=' + this.data.code + '&&company=' + this.data.companyName + '&&deliverytype=' + this.data.company
    };
  },
  getNetworkType: function () {
    var that = this
    wx.getNetworkType({
      success: function (res) {
        if (!res.networkType || res.networkType == 'none') {
          that.setData({ scroll_load_end: true })
          app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
          return false;
        }
        return true;
      },
      fail: function () {
        that.setData({ scroll_load_end: true })
        app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
        return false;
      }
    })
    return true;
  },
  getDeliveryInfo: function () {
    var that = this, logistics = []
    if (!that.getNetworkType()) {
      return false
    }
    app.ajax('GET', "/delivery/query?company=" + that.data.company + "&number=" + that.data.code, null, function (d) {
      that.setData({ scroll_load_end: true })
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
          that.setData({ showResult: true })
          logistics = d.data.data.logistics
          if (logistics && logistics.length) {
            that.setData({
              logistics: logistics
            })
          }
        } else {
          app.showErrorTip(that, d.data.msg);
        }
      } else {
        app.showErrorTip(that, '网络错误，请检查您的网络设置！');
      }
    })
  },

})