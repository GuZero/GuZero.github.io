// pages/goods_list/index.js

let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      cart: null,
      tradings: [],
      load_tradings_count: 0,
      loaded: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      app.authenticated(() => {
          let cart = wx.getStorageSync('cart') || null;
          if (!cart) return;

          this.setData({
              cart: cart,
          });
          this.loadTradings();
      });
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
  
  },
  onLoaded: function(){
      this.setData({
          loaded: true,
      })
  },
  loadTradings: function () {
      let goodses = (this.data.cart && this.data.cart.goodses) || [];
      this.setData({
          tradings: [],
          load_tradings_count: 0,
      })

      for (let i = 0; i < goodses.length; i++) {
          this.loadTrading(goodses.length, goodses[i].sku_id, goodses[i].cart_num);
      }
  },
  loadTrading: function (count, sku_id, num) {
      app.ajax("GET", "/trading/detail/sku/" + sku_id, null, (res) => {
          if (res.statusCode == 200) {
              if (res.data.status == 0) {
                  if (res.data.data.trading.images.length) {
                      res.data.data.trading.image_src = "https://img.aimoge.com/" + res.data.data.trading.images[0].substring(0, 28);
                  } else {
                      res.data.data.trading.image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
                  }
                  res.data.data.trading.cart_num = num;

                  this.data.tradings.push(res.data.data);
                  this.setData({
                      load_tradings_count: this.data.load_tradings_count + 1,
                      tradings: this.data.tradings,
                  });

                  if (this.data.load_tradings_count >= count) {
                      this.onLoaded();
                  }
              }
          }
      }, (res) => {
          app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！');
      });
  },
})