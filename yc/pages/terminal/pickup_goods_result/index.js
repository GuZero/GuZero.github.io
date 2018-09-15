// pages/terminal/pickup_goods_result/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isSuccess: false,
        orders: [],
        isError: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let status = parseInt(options.status || 1) || 1,
            wait_count = parseInt(options.wait_count || 0) || 0;
        
        this.setData({
            isSuccess: status,
            wait_count: wait_count,
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    linkIndex: function() {
        wx.redirectTo({
            url: '../../index/index',
        })
    }
})