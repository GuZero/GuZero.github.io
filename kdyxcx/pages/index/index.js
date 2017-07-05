//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tabIndex: 0,
    scrollHeight: 0,
    dataOneEmpty: false,
    dataTwoEmpty: false,
    numPerPage: 16,
    list: [],
    pageList: [],
    page: '',
    scroll_load_loading: false,
    scroll_load_end: false,
    animOfNoneNetWork: {},
    animMsg: '',
    flag: false,
  },
  onShareAppMessage: function () {
    return {
      title: '格格货栈-自助快递柜',
      desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
      path: '/pages/index/index'
    }
  },
  onPullDownRefresh: function () {
      this.onLoad()
      wx.stopPullDownRefresh()
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
  isChoose: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['三天内', '本月','上月'],
      success: function (res) {
        console.log(res);
      }
    })
  },
  chooseDate: function () {
    var that = this;
    that.setData({
      flag: false
    })
  },
  switchTab: function (e) {
    var current = this.data.tabIndex,
      index = 0;
    if (current == 0 && e.currentTarget.id == 'tab0') return
    if (current == 1 && e.currentTarget.id == 'tab1') return
    if (e.currentTarget.id == 'tab1') {
      index = 1
    }
    if (e.currentTarget.id == 'tab2') {
      index = 2
    }
    if (e.currentTarget.id == 'tab3') {
      index = 3
    }
    this.setData({
      tabIndex: index,
      page: '',
      pageList: [],
      items0: [],
      items: [],
      dataOneEmpty: false,
      dataTwoEmpty: false,
      scroll_load_loading: false,
      scroll_load_end: false
    })
  },
    onLoad: function () {
        var that = this
        that.getNetworkType();
        app.authenticated(function () {
            that.load(true)           
        });
    }
})
