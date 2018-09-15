// pages/user/order_coupon/index.js
let app = getApp();
Page({

    data: {
        coupon_info: [],
        coupon_can_used: null,
        loaded: false,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            coupon_can_used: JSON.parse(options.coupon_can_used) || []
        })
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
                this.setCouponStatus();
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    setCouponStatus: function() {
        let coupon = this.data.coupon_info,
            can_used = this.data.coupon_can_used;
        for (let i = 0; i < coupon.length; i++) {
            coupon[i].is_can_used = 0;
            for (let j = 0; j < can_used.length; j++) {
                if (coupon[i].user_coupon_id == can_used[j].act_id) {
                    coupon[i].is_can_used = 1;
                }
            }
        }
        coupon.sort((a, b) => {
            return (b.is_can_used - a.is_can_used)
        })
        this.setData({
            coupon_info: coupon
        })
    },
    selectCoupon: function(e) {
        let item = e.currentTarget.dataset.item;
        if (!item.is_can_used) {
            app.showErrorTip(this, '优惠券不可用');
            return false;
        }
        wx.setStorageSync('coupon_id', item.user_coupon_id);
        wx.navigateBack({
            delta: 1,
        });
    }
})