// pages/recharge_result/index.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        status: '',
        order_id: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let status = options.status
        app.authenticated(() => {
            this.setData({
                status: parseInt(status || 1),
                order_id: options.order_id || '',
            })
        });
    },
    linkIndex: function () {
        wx.redirectTo({
            url: '../../index/index'
        })
    },
    makePhoneCall: function () {
        wx.makePhoneCall({
            phoneNumber: '15150551462',
        })
    },
    linkOrder: function () {
        if(this.data.order_id){
            wx.redirectTo({
                url: '../order_details/index?order_id=' + this.data.order_id
            })
        }else{
            wx.redirectTo({
                url: '../order_list/index'
            })
        }
        
    }
})