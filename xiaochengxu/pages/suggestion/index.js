//suggestion.js
var app = getApp()
Page({
  data: {
    disabled: true,
    text: '',
    animOfNoneNetWork: {},
    animMsg: '',
    textLen: 0
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
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
  textChange: function (e) {
    var val = e.detail.value,
      len = val.length;
    if (len > 0) {
      this.setData({ disabled: false })
    } else {
      this.setData({ disabled: true });
    }
    this.setData({ text: val, textLen: len })
  },
  submitData: function (e) {
    var that = this
    if (!that.getNetworkType()) return false;
    if (!that.data.text) return false;
    app.request({
      url: app.globalData.STORE + "/gege/gegexiaochengxusuggest",
      data: {
        "content": that.data.text
      },
      method: "POST",
      header: {
        "X-STORE-TYPE": "COLLECTION",
        "X-STORE-APPID": "586f6b29d45bef4d558b4567",
        "X-STORE-APPKEY": "ufGRgSx9lX7T5eafjOcXXTIapJ7NdVjO",
        "Content-Type": "application/json"
      },
      success: function (res) {
        that.setData({ text: '', textLen: 0 })
        app.showSuccessTip('提交成功！')
        setTimeout(function () {
          wx.navigateBack();
        }.bind(that), 2000);
      },
      fail: function (res) {
        setTimeout(function () {
          wx.navigateBack();
        }.bind(that), 2000);
      }
    });
  },
  onLoad: function (options) {
    this.getNetworkType()
  }
})
