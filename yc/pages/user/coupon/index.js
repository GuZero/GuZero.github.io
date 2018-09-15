// pages/user/coupon/index.js
let app = getApp();
Page({

    data: {
        coupon_info: [],
        loaded: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        app.authenticated(() => {
            this.getCouponInfo()
        });
    },
    getCouponInfo: function() {
        app.ajax('GET', '/trading/coupons', null, (res) => {
            if (res.data.status == 0) {
                let data = res.data.data;
                for (let i = 0; i < data.coupons.length; i++) {
                    data.coupons[i].expried_time = (new Date(data.coupons[i].expried_time)).format('yyyy-MM-dd hh:mm:ss');
                    if (data.coupons[i].fee == 0 && data.coupons[i].discount_rate) {
                        data.coupons[i].discount_rate_val = (data.coupons[i].discount_rate.toFixed(2) * 10)
                    }
                }
                this.setData({
                    coupon_info: data.coupons,
                    loaded: true,
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    }
})