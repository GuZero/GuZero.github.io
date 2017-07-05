// pages/inquire/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    items:['1']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  gotoDetails:function(){
    wx.navigateTo({
      url: '../details/index',
    })
  },
  scanCode:function(){
    wx.scanCode({
      success:function(res){
        console.log(res);
      }
    })
  },
  change: function (e) {
    this.setData({ key: e.detail.value });
  },
  clearInput: function () {
    this.setData({ key: '' });
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