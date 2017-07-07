var app = getApp();
Page({
  data: {
    animOfNoneNetWork: {},
    animMsg: '',
    userName: null
  },
  onPullDownRefresh: function () {
    this.onLoad()
    wx.stopPullDownRefresh()
  },
  onShareAppMessage: function () {
    return {
      title: '格格货栈-自助快递柜',
      desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
      path: '/pages/user/index'
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
    // wx.showActionSheet({
    //   itemList: ["4000338888","呼叫"],
    //   success:function(res){
    //     if(res.tapIndex==1){
         
    //     }
    //   }
    // })
    wx.makePhoneCall({
      phoneNumber: '4000338888'
    })   
  },
  showLogoutLayer: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ["退出登录"],
      success: function (res) {
        if (res.tapIndex == 0) {
          that.logout();
        }
      }
    })
  },
  gotoInfo: function () {
    wx.navigateTo({
      url: '../recharge/index',
    })
  },
  gotoRechargeRecord: function () {
    wx.navigateTo({
      url: '../record/index',
    })
  },
  logout: function () {
    var that = this;
    if (!that.getNetworkType()) {
      return false;
    }
    app.ajax('POST', app.globalData.API + '/operator/logout', { 'timestamp': Number.parseInt(new Date().getTime() / 1000) }, function (d) {
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
          wx.removeStorageSync('session');
          app.globalData.session = null;
          if (wx.reLaunch) {
            wx.reLaunch({
              url: '../login/index'
            })
          } else {
            wx.redirectTo({
              url: '../login/index'
            })
          }
        } else {
          app.showErrorTip(that, d.data.msg);
        }
      } else {
        app.showErrorTip(that, '网络错误，请检查您的网络设置！');
      }
    });
  },
  getUser: function () {
    var that = this;
    if (!that.getNetworkType()) {
      return false;
    }
    that.setData({
        userName: app.globalData.userInfo.username
    })
  },
  onLoad: function () {
    var that = this;
    that.getNetworkType();
    app.authenticated(function () {
      that.getUser();
    });
  }
})