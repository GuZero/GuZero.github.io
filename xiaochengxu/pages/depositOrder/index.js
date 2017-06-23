// pages/depositOrder/index.js
var app = getApp()
Page({
  data: {
    flag: true,
    tabIndex: null,
    agree: false,
    search: false,
    error: false,
    loading: false,
    animationData: {},
    item: [],
    terminal_code: '',
    terminal_name: '',
    scroll_load_loading: false,
    scroll_load_end: false,
    grid0: null,
    grid1: null,
    grid2: null,
    grid3: null,



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
      isError = false;
      isLoading = false;
      this.setData({
        animationData: animation.export(),
        error: isError,
        loading: isLoading
      });
    }.bind(this), 1500)
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
    var that = this;
    if (!that.getNetworkType()) {
      return false
    }
    app.ajax('GET', '/ultrabox/storage/terminal/status?terminal_code=' + that.data.terminal_code, null, function (d) {
      if (d.statusCode == 200) {
        if (d.data.status == 0) {
          var items = d.data.data;
          that.getBoxJson(items);
          that.setData({
            item: items
          })
        }
      }
    })
  },
  getBoxJson: function (data) {
    var box0 = null,
      box1 = null,
      box2 = null,
      box3 = null,
      item = null;
    // box1小格 box2 中格 box3 大格 box0微格 
    for (var i in data) {
      item = data[i];
      item.box_type = i;
      if (i == 'box_type1') box1 = data['box_type1'];
      if (i == 'box_type2') box2 = data['box_type2'];
      if (i == 'box_type3') box3 = data['box_type3'];
      if (i == 'box_type4') box0 = data['box_type4'];
    }
    if (box0.fee == 100) box0.price = 1;
    if (box1.fee == 150) box1.price = 1.5;
    if (box2.fee == 200) box2.price = 2;
    if (box3.fee == 250) box3.price = 2.5;
    this.setData({
      grid0: box0,
      grid1: box1,
      grid2: box2,
      grid3: box3,
    })
    console.log(box1);
    console.log(box2);
    console.log(box3);
    console.log(box0);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      terminal_code: options.terminal_code,
      terminal_name: options.terminal_name

    })
    this.load();
    // console.log(this.data.item);
    // this.getBoxJson(this.data.item);
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