//index.js
//获取应用实例
var app = getApp()
var User = require('../../utils/user.js')
Page({
  data: {
    animOfNoneNetWork: {},
    animMsg: '',
    userInfo: null
  },
  onLoad: function () {
    var that = this
    this.getUser()
  },
  onPullDownRefresh: function () {
    this.onLoad()
    wx.stopPullDownRefresh()
  },
   onShareAppMessage: function () {
    return {
      title: '格格货栈-自助快递柜',
      desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
      path: '/page/mine/index'
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
  takePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '4000338888'
    })
  },
  linkToSuggestion: function () {
    wx.navigateTo({
      url: '../suggestion/index?pass=12213123'
    })
  },
  logout: function () {
    var that = this
    if (!that.getNetworkType()) {
      return false
    }
    User.logout(function (succed, msg) {
      if (succed) {
       wx.clearStorageSync()
        app.globalData.session = null
        wx.redirectTo({
          url: '../login/index'
        })
      } else {
        app.showErrorTip(that, msg);
      }
    });
  },
  showLogoutLayer: function () {
    var that = this
    wx.showActionSheet({
      itemList: ['退出登录'],
      success: function (res) {
        if (res.tapIndex == 0) {
          that.logout();
        }
      }
    })
  },
  getUser: function () {
    var that = this
    if (!that.getNetworkType()) {
      return false
    }
    User.getUser(function (data) {
      app.globalData.userInfo = data
      that.setData({
        userInfo: data
      })
    })
  }
})
