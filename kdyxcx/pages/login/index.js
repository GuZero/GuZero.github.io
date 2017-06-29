// pages/login/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isActiveBtn:true,
    animOfNoneNetWork: {},
    isRadioChecked: true,
    animMsg: '',
    user: {
      username: '',
      code: ''
    },
    isLogining: false,
    uid: '',
    isInOtherPage: false,

  },
  radioChange: function (e) {
    var that = this
    that.setData({
      isRadioChecked: !that.data.isRadioChecked
    })
    that.changeLoginBtnState();
  },
  changeLoginBtnState: function () {
    var that = this
    that.setData({
      isActiveBtn: false
    })
    if (!that.data.user.username) {
      return false;
    }
    if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(that.data.user.username)) {
      return false;
    }
    if (!that.data.user.code) {
      return false;
    }
    if (!that.data.isRadioChecked) {
      return false;
    }
    that.setData({
      isActiveBtn: true
    })
    return true;
  },
  checkInfo: function () {
    var that = this
    that.setData({
      isActiveBtn: false
    })
    if (!that.data.user.username) {
      app.showErrorTip(that, "手机号不可为空")
      return false;
    }
    if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(that.data.user.username)) {
      app.showErrorTip(that, "请填写正确的11位手机号码!")
      return false;
    }
    if (!that.data.isRadioChecked) {
      app.showErrorTip(that, "请阅读并同意《格格使用条款》")
      return false;
    }
    that.setData({
      isActiveBtn: true
    })
    return true;
  },
  goIndex: function () {
    var that = this
    wx.redirectTo({
      url: '../index/index',
      success: function (res) {
        that.setData({
          isInOtherPage: true
        })
      }
    })
    return false
  },
  login: function () {  
    var that = this;
    if (!that.data.isActiveBtn) {
      return false
    }
    if (!that.getNetworkType()) {
      return false
    }
    if (!that.checkInfo()) {
      return false
    }
    if (that.data.isLogining) {
      return false
    }
    that.setData({
      isLogining: true
    })
  },
  bindInput: function (e) {
    var that = this
    that.setData({
      user: {
        username: e.detail.value,
        code: that.data.user.code
      }
    })
    that.changeLoginBtnState();
  },
  bindPwd:function(e){
    var that = this
    that.setData({
      user: {
        code: e.detail.value,
        username: that.data.user.username
      }
    });
    that.changeLoginBtnState();
  },
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
  onShareAppMessage: function () {
    return {
      title: '格格货栈-自助快递柜',
      desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
      path: '/page/login/index'
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
  }
})