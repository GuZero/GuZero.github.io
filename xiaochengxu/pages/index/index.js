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
    items0: [], //待收件
    items: [],
    pageList: [],
    page: '',
    scroll_load_loading: false,
    scroll_load_end: false,
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
  switchTab: function (e) {
    var current = this.data.tabIndex,
      index = 0
    if (current == 0 && e.currentTarget.id == 'tab0') return
    if (current == 1 && e.currentTarget.id == 'tab1') return
    if (e.currentTarget.id == 'tab1') {
      index = 1
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
    this.load()
  },
  takePhoneCall: function (e) {
    var dataset = e.currentTarget.dataset
    wx.makePhoneCall({
      phoneNumber: dataset.mobile
    })
  },
  linkToInfo: function (e) {
    var dataset = e.currentTarget.dataset
    wx.navigateTo({
      url: '../deliveryInfo/index?code=' + dataset.code + '&&company=' + dataset.company + '&&deliverytype=' + dataset.deliverytype
    })
  },
  setResult: function (list, that) {
    var items0 = [], items = []
    for (var i = 0, len = list.length; i < len; i++) {
      var img = app.getImageInfo(list[i].delivery_logo || "FmPTQQFQVllh3eHl5LmcsBWAK3ZG_72x72_19279.png")
      list[i].delivery_logo_href = img.src + app.getImageStyle(img.width, img.height)
    }
    if (!that.data.dataType) {
      that.setData({ items0: that.data.items0.concat(list) })
    } else {
      that.setData({ items: that.data.items.concat(list) })
    }
  },
  load: function (isFirst) {
    var that = this, page = ''
    if (!that.getNetworkType()) {
      return false
    }
    if (that.data.scroll_load_end) return
    page = that.data.page
    app.ajax('GET', '/user/delivery?cursor=' + that.data.page + '&istake=' + that.data.tabIndex, null, function (d) {
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
          if (d.data.data.deliverys && d.data.data.deliverys.length > 0) {
            if (that.data.pageList.indexOf(page) >= 0) return
            that.data.pageList.push(page)
            that.setData({ page: d.data.data.next_cursor || '' })
            that.setResult(d.data.data.deliverys, that)
            if (d.data.data.deliverys.length >= that.data.numPerPage) {
              that.setData({ scroll_load_loading: true, scroll_load_end: false })
            } else {
              that.setData({ scroll_load_loading: false, scroll_load_end: true })
            }
          } else {
            that.setDataWarpEmpty()
          }
        } else {
          that.setDataWarpEmpty()
          app.showErrorTip(that, d.data.msg)
        }
      } else {
        that.setDataWarpEmpty()
        app.showErrorTip(that, '网络错误，请检查您的网络设置！')
      }
    })
  },
  setDataWarpEmpty: function () {
    if (this.data.items0.length == 0) {
      this.setData({ dataOneEmpty: true })
    } else {
      this.setData({ dataOneEmpty: false })
    }
    if (this.data.items.length == 0) {
      this.setData({ dataTwoEmpty: true })
    } else {
      this.setData({ dataTwoEmpty: false })
    }
  },
  scrolltolower: function (e) {
    this.load()
  },
  onLoad: function () {
    var that = this
    that.getNetworkType();
    app.authenticated(function(){
      wx.getSystemInfo({
        success: function (res) {
          that.setData({ scrollHeight: res.windowHeight })
          that.load(true)
        }
      });
    });
  }
})
