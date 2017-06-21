//company.js
var app = getApp()
var timeout = null
Page({
  data: {
    animOfNoneNetWork: {},
    animMsg: '',
    companys: [],
    company: '',
    code: '',
    options: null,
    scroll_load_end: false
  },
  choose: function (e) {
    var data = e.currentTarget.dataset
    data.code = this.data.code
    var pages = getCurrentPages();
    pages[pages.length -2].setCompany(data);
    wx.navigateBack({"delta": 1});
  },
  onLoad: function (options) {
    var that = this
    if (options) {
      that.setData({
        options: options
      })
    }
    that.setData({
      code: options ? (options.code || '') : ''
    })
    that.getNetworkType()
    app.authenticated(function(){
      that.load();
    });
    
  },
  onPullDownRefresh: function () {
    this.onLoad(this.data.options)
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
  load: function () {
    var that = this
    if (!that.getNetworkType()) {
      return false
    }
    app.ajax('GET', '/delivery/company', null, function (d) {
      that.setData({ scroll_load_end: true })
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
          if (d.data.data.companys && d.data.data.companys.length > 0) {
            var companys = d.data.data.companys
            for (var i = 0; i < companys.length; i++) {
              var img = app.getImageInfo(companys[i].logo || "FmPTQQFQVllh3eHl5LmcsBWAK3ZG_72x72_19279.png")
              companys[i].logo_href = img.src + app.getImageStyle(img.width, img.height)
            }
            that.setData({ companys: companys })
          }
        } else {
          app.showErrorTip(that, d.data.msg)
        }
      } else {
        app.showErrorTip(that, '网络错误，请检查您的网络设置！')
      }
    })
  },
  loadByKey: function () {
    var list = this.data.companys, items = []
    for (var i = 0, len = list.length; i < len; i++) {
      if (list[i].name.indexOf(this.data.company) > -1 || list[i].delivery_type.indexOf(this.data.company) > -1) {
        items.push(list[i])
      }
    }
    this.setData({ companys: items })
  },

  change: function (e) {
    this.setData({ company: e.detail.value })
    this.search()
  },
  search: function () {
    if (this.data.company == '') {
      this.load()
    } else {
      this.loadByKey()
    }
  }

})
