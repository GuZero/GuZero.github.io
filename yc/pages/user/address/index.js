// pages/user/address/index.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        province: null,
        city: null,
        area: null,
        address: '',
        name: '',
        mobile: '',
        longitude: '',
        latitude: '',
        items: [],
        show: false,
        is_show_add: false,
        method: "POST",
        update_address_info: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let order_id = options.order_id || '',
            user_id = options.uid || '';
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
                user_id: user_id
            })
            this.getAddressList();
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
            date: e.detail.value
        })
    },
    getAddressList: function() {
        app.ajax('GET', '/user/address', null, (res) => {
            if (res.data.status == 0) {
                let address = res.data.data.address;
                this.setData({
                    items: address
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    setShowAdd: function() {
        this.setData({
            is_show_add: !this.data.is_show_add
        })
    },
    addAddress: function() {
        this.setShowAdd();
        this.setData({
            method: 'POST'
        })
    },
    updateAddress: function(e) {
        this.setShowAdd();
        let address_id = e.currentTarget.dataset.id,
            address_info = this.data.items.filter(item => {
                return item._id == address_id;
            })
        this.setData({
            method: 'PUT',
            update_address_info: address_info,
            province: {
                name: address_info[0].district.province,
                _id: address_info[0].district.pid
            },
            city: {
                name: address_info[0].district.city,
                _id: address_info[0].district.cid
            },
            area: {
                name: address_info[0].district.name,
                _id: address_info[0].district._id
            },
            address: address_info[0].address,
            name: address_info[0].name,
            mobile: address_info[0].mobile
        })
        console.log(this.data.update_address_info);
    },
    resetData: function() {
        this.setData({
            province: null,
            city: null,
            area: null,
            address: '',
            name: '',
            mobile: '',
        })
    },
    chooseCurrentAddress:function(e){
        let address=e.currentTarget.dataset.item;
        wx.setStorageSync('_address', address);
        wx.navigateBack({
            delta: 1
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
        let data = {
            name: this.data.name,
            mobile: this.data.mobile,
            province_id: this.data.province._id,
            city_id: this.data.city._id,
            district_id: this.data.area._id,
            address: this.data.address,
            longitude: this.data.longitude,
            latitude: this.data.latitude
        }
        let url = ''
        if (this.data.method == 'POST') {
            url = '/user/address';
        } else {
            url = '/user/address/' + this.data.update_address_info[0]._id;
        }
        app.ajax(this.data.method, url, data, (res) => {
            if (res.data.status == 0) {
                let address = null;
                if (this.data.method == 'POST') {
                    address = res.data.data.address;
                } else {
                    address = res.data.data;
                }
                wx.setStorageSync('_address', address);
                wx.navigateBack({
                    delta: 1
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    }
})