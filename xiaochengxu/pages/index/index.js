//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    expressCount: 0,
    depositCount: 0,
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
      path: '/page/index/index'
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
  linkToSearch: function (e) {
      wx.navigateTo({
          url: '../search/index'
      })
  },
  linkToExpress: function (e) {
    wx.navigateTo({
      url: '../express/index'
    })
  },
  linkToDeposit: function (e) {
      wx.navigateTo({
          url: '../deposit/index'
      })
  },
  linkToMine: function (e) {
      wx.navigateTo({
          url: '../mine/index'
      })
  },
  load: function () {
    var that = this, page = ''
    if (!that.getNetworkType()) {
      return false
    }
    app.ajax('GET', '/index/deliver/info', null, function (d) {
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
            that.setData({
                expressCount: d.data.data.delivery.cnt,
                depositCount: d.data.data.storage.cnt,
            })
        }
      } else {
        app.showErrorTip(that, '网络错误，请检查您的网络设置！')
      }
    })
  },
  onLoad: function () {
      var that = this
      that.getNetworkType();
      app.authenticated(function () {
          that.load();
      });
  },
   onShow: function () {
     
  }
})
