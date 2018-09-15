// components/coupon/index.js

var app = getApp();

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        community: {
            type: Object,
            value: null
        },
        channel_name: {
            type: String,
            value: 'smartcabwxapp_index'
        },
        btn_value:{
            type:String,
            value:'立即使用'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        is_show: false,
        image_url: '',
        link_url: '',
        channel_id: '',
        coupon_id: '',
    },
    attached: function() {
        this.loadCouponChannelInfo()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        isShow: function() {
            this.setData({
                is_show: false
            })
        },
        loadCouponChannelInfo: function() {
            app.ajax('GET', '/trading/coupons/channel?channel_name=' + this.data.channel_name + '&community_id=' + this.data.community._id, null, (res) => {
                if (res.statusCode == 200) {
                    if (res.data.status == 0 && res.data.data.coupon_channels.length > 0) {
                        this.setData({
                            image_url: "https://img.aimoge.com/" + res.data.data.coupon_channels[0].image.substring(0, 28),
                            link_url: res.data.data.coupon_channels[0].url,
                            channel_id: res.data.data.coupon_channels[0]._id,
                            coupon_id: res.data.data.coupon_channels[0].coupon_id,
                            is_show: true,
                        })
                    }
                }
            })
        },
        takeCoupon: function() {
            let data = {
                "channel_name": this.data.channel_name,
                "community_id": this.data.community._id,
                "channel_id": this.data.channel_id,
                "coupon_id": this.coupon_id,
            }
            app.ajax('POST', '/trading/coupons/channel', data, (res) => {
                if (res.statusCode == 200) {
                    if (res.data.status == 0) {
                        this.isShow()
                        if (this.data.link_url) {
                            wx.navigateTo({
                                url: this.data.link_url
                            });
                        }
                        return;
                    }
                    if (res.data.msg) app.showErrorTip(this, res.data.msg);
                }
            })
        }
    },
})