// pages/depositOrder/index.js
var app = getApp()
Page({
  data: {
    flag: false,
    tabIndex: null,
    agree: false,
    search: false,
    error: false,
    loading: false,
    animationData: {}
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
  isAgree: function () {
    var flag = !this.data.agree;
    this.setData({
      agree: flag
    });
  },
  isSearch: function () {
    let flag = !this.data.search;
    this.setData({
      search: flag
    });
  },
  submit: function () {
  },
  showErrorTip: function () {
    var b = '1';
    this.setAnimation(b);

  },
  setAnimation: function (str) {
    if (str == '0') {
      var isError = true;
    };
    if (str == '1') {
      var isLoading = true;
    }
    if (isError || isLoading) {
      console.log('1');
      this.setData({
        error: isError,
        loading: isLoading
      })
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "liner",
        delay: 0
      })
      this.animation = animation;
      animation.opacity(1).step();
      this.setData({
        animationData: animation.export()
      });
    }
    setTimeout(function () {
      animation.opacity(0).step();
      isError=false;
      isLoading=false;
      this.setData({
        animationData: animation.export(),
        error: isError,
        loading: isLoading
      });
    }.bind(this), 1500)
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