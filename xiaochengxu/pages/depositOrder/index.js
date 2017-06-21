// pages/depositOrder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    tabIndex: null 
  },
  switchTab: function (e) {
    var current = this.data.tabIndex,
      index = 0
    if (current == 0 && e.currentTarget.id == 'item0') return
    if (current == 1 && e.currentTarget.id == 'item1') return
    if (current == 2 && e.currentTarget.id == 'item2') return
    if (current == 3 && e.currentTarget.id == 'item3') return
    if (e.currentTarget.id == 'item1') {
      index = 1
    };
    if (e.currentTarget.id == 'item2') {
      index = 2
    };
    if (e.currentTarget.id == 'item3') {
      index = 3
    };
    this.setData({
      tabIndex: index
    });
    this.load()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})