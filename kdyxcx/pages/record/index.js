// pages/record/index.js
var app = getApp();
Page({
  data: {
    animOfNoneNetWork: {},
    animMsg: '',
    noNetWork: false,
    isShowEmpty: false,
    items: [],
    pageList: [],
    page: 0,
    numPerPage: 16,
    scroll_load_loading: false,
    scroll_load_end: false,
    scrollHeight: 0
  },
  onShareAppMessage: function () {
    return {
      title: '格格货栈-自助快递柜',
      desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
      path: '/pages/record/index'
    }
  },
  onPullDownRefresh: function () {
    this.setData({
      items: [],
      pageList: [],
      page: 0,
      scroll_load_loading: false,
      scroll_load_end: false,
      noNetWork: false
    })
    this.Load();
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
  setStayValue: function () {
    var that = this;
    var item = null, tempItems = [];
    for (var i = 0, len = that.data.items.length; i < len; i++) {
      item = that.data.items[i];
      item.textVal = parseFloat(item.value/100).toFixed(2);
      tempItems.push(item);
    }
    that.setData({
      items: tempItems
    })
  },
  Load:function (){
    var that = this;
    var page = that.data.page;
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
    app.ajax('GET', app.globalData.API + '/operator/charge?page='+page,null,function (d) {
      that.setData({
        scroll_load_loading: false
      });
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
          if (d.data.data.items && d.data.data.items.length) {
            that.setData({
              items: that.data.items.concat(d.data.data.items),
              page: d.data.data.page|| 0,
              pageList: that.data.pageList.concat([page])
            });
            if (d.data.data.items && d.data.data.items.length < that.data.numPerPage) {
              that.setData({
                scroll_load_end: true
              });
            }
            that.setStayValue();
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
  onLoad: function () {
    var that = this;
    that.getNetworkType();
    wx.getSystemInfo({
      success: function (res) {
        that.setData({ scrollHeight: res.windowHeight })
      },
    })
    app.authenticated(function () {
      that.Load();
    });
  },
  scrolltolower:function(e){
    this.Load();
  }
})