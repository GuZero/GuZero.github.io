//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad: function () {
    var that = this
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }
})
