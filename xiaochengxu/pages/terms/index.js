//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad: function () {
    var that = this
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function () {
      return {
          title: '格格货栈-自助快递柜',
          desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
          path: '/pages/terms/index'
      }
  }
})
