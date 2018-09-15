// pages/refund/index.js
let app = getApp();
Page({
    data: {
        curIndex: 0,
        aReason: [
            {
                id: 0,
                value: '商品数量拍错/不想买了'
            }, {
                id: 1,
                value: '地址信息填写错误'
            }, {
                id: 2,
                value: '其他'
            }
        ],
        description: '',
        order_id: '',
        orderInfo: null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (!options.order_id){
            return;
        }
        
        this.setData({
            order_id: options.order_id || '',
        })

        app.authenticated(() => {
            this.getOrderDetail()
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
    getOrderDetail: function () {
        app.ajax('GET', '/trading/order/' + this.data.order_id + '?order_type=community_groupbuy', null, (res) => {
            if (res.data.status == 0) {
                this.setData({
                    orderInfo: res.data.data.order,
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    submitRefund: function(){
        if (this.data.curIndex == 2 && !this.data.description) {
            app.showErrorTip(this, '请输入问题描述');
            return false;
        }

        let data = {
            pay_id: this.data.orderInfo.pay_id,
            pay_type: this.data.orderInfo.pay_type,
            refund_type: this.data.orderInfo.pay_type,
            refund_fee: this.data.orderInfo.pay_fee,
            reason: this.data.curIndex == 2 ? this.data.description : this.data.aReason[this.data.curIndex].value,
        }

        app.ajaxPay('PUT', "/pay/" + data.pay_id, data, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0 && res.data.data) {
                    wx.navigateBack({ delta: 1});
                } else {
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
        })
    },
    selectReason: function (e) {
        let _id = e.currentTarget.dataset.id;
        this.setData({
            curIndex: _id
        })
    },
    setDescription: function (e) {
        this.setData({ description: e.detail.value });
    }
})