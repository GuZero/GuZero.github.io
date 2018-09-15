// pages/user/pick_up/index.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        radioItems: [{
                name: '9月24日（大闸蟹还未完全长大，建议10月收货哦）',
                value: '0',
                time: '2018-9-24',
                checked: false
            },
            {
                name: '10月24（推荐 最佳品蟹季）',
                value: '1',
                time: '2018-10-24',
                checked: false
            }
        ],
        province: null,
        city: null,
        area: null,
        address: '',
        name: '',
        mobile: '',
        date: "",
        longitude: '',
        latitude: '',
        start_date: '',
        show: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let order_id = options.order_id || '',
            user_id = options.uid || '',
            statr_date = (new Date((new Date().getTime() + (259200000)))).format('yyyy-MM-dd');
        app.authenticated(() => {
            let that = this;
            wx.getLocation({
                success: function(res) {
                    let latitude = res.latitude,
                        longitude = res.longitude;
                    that.setData({
                        longitude: longitude,
                        latitude: latitude
                    })
                },
                fail: function(err) {
                    wx.showToast({
                        title: '获取当前位置失败',
                        icon: 'none'
                    })
                }
            })
            this.setData({
                order_id: order_id,
                user_id: user_id,
                statr_date: statr_date
            })
        });
    },
    bindSetAddress: function(e) {
        let address = e.detail.value;
        this.setData({
            address: address
        })
    },
    bindSetName: function(e) {
        let name = e.detail.value;
        this.setData({
            name: name
        })
    },
    bindSetMobile: function(e) {
        let mobile = e.detail.value;
        this.setData({
            mobile: mobile
        })
    },
    sureSelectAreaListener: function(e) {
        this.setData({
            show: false,
            province: e.detail.currentTarget.dataset.province,
            city: e.detail.currentTarget.dataset.city,
            area: e.detail.currentTarget.dataset.area
        })
    },
    chooseAddress: function() {
        this.setData({
            show: true
        })
    },
    radioChange: function(e) {
        let radioItems = this.data.radioItems;
        for (let i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems,
            date: ""
        });
    },
    bindDateChange: function(e) {
        this.setData({
            date: e.detail.value,
            radioItems: [{
                    name: '9月24日（大闸蟹还未完全长大，建议10月收货哦）',
                    value: '0',
                    time: '2018-9-24',
                    checked: false
                },
                {
                    name: '10月24（推荐 最佳品蟹季）',
                    value: '1',
                    time: '2018-10-24',
                    checked: false
                }
            ],
        })
    },
    submit: function() {
        if (!this.data.province || !this.data.city || !this.data.area) {
            app.showErrorTip(this, '请选择所在区域');
            return false;
        }
        if (this.data.address == '') {
            app.showErrorTip(this, '请填写详细地址');
            return false;
        }
        if (this.data.name == '') {
            app.showErrorTip(this, '请填写收货人姓名');
            return false;
        }
        if (this.data.mobile == '') {
            app.showErrorTip(this, '请填写联系人电话');
            return false;
        }
        let item = this.data.radioItems.filter(item => {
            return item.checked == true;
        })
        if (!item.length && this.data.date == '') {
            app.showErrorTip(this, '请选择收拾时间');
            return false;
        }
        let data = {
            name: this.data.name,
            mobile: this.data.mobile,
            province_id: this.data.province._id,
            city_id: this.data.city._id,
            district_id: this.data.area._id,
            address: this.data.address,
            longitude: this.data.longitude,
            latitude: this.data.latitude,
            receiver_booking_time: item.length ? item[0].time : this.data.date
        }
        app.ajax('PUT', '/trading/gift/card/000000000000000000000000/order/' + this.data.order_id, data, (res) => {
            if (res.data.status == 0) {
                wx.redirectTo({
                    url: '../pick_up_result/index?order_id=' + this.data.order_id + '&uid=' + this.data.user_id,
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    }
})