// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '13800138000'
  },
  takePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  showLogoutLayer: function () {
    var that = this,
    phone=this.data.phone;
    wx.showActionSheet({
      itemList: [phone,'呼叫'],
      success: function (res) {
        if (res.tapIndex == 1){
          that.takePhoneCall();
        }
      }
    })
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