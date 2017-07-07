// pages/search/index.js
var app = getApp();
Page({
  data: {
    animOfNoneNetWork: {},
    animMsg: '',
    items: [],
    scroll_load_loading: false,
    noNetWork: false,
    isShowEmpty: false
  },

  onPullDownRefresh: function () {
    this.setData({
      items:[],
      scroll_load_loading: false,
      noNetWork: false,
      isShowEmpty: false
    })
    this.onLoad()
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function () {
    return {
      title: '格格货栈-自助快递柜',
      desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
      path: '/pages/search/index'
    }
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
  getData: function () {
    var that = this;
    if (!that.getNetworkType()) {
      return false;
    }
    that.setData({
      scroll_load_loading: true
    });
    app.ajax('GET', app.globalData.API + '/operator/box/empty', null, function (d) {
      that.setData({
        scroll_load_loading: false
      });
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
          that.setData({
            items: d.data.data
          });
          if(d.data.data.length==0){
            that.setData({
              isShowEmpty:true
            })
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
  onLoad: function () {
    var that = this;
    that.getNetworkType();
    app.authenticated(function () {
      that.getData();
    });
  },
  reload: function () {
    this.getData();
  },

})