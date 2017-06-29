var app = getApp();
Page({
  data: {
    animOfNoneNetWork: {},
    animMsg: '',
    userInfo: null
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
  showLogoutLayer: function () {
    var that = this
    wx.showActionSheet({
      itemList: ['退出登录'],
      success: function (res) {
       console.log(res);
      }
    })
  },
  gotoInfo:function(){
    wx.navigateTo({
      url: '../recharge/index',
    })
  }
})