// pages/after_market/index.js
let app = getApp();
Page({
    data: {
        aReason: [{
            value: '0',
            name: '商品质量问题',
            checked: true
        }, {
            value: '1',
            name: '扣款信息有误',
            checked: false
        }, {
            value: '2',
            name: '其他',
            checked: false
        }],
        files: [],
        order_id: '',
        token: '',
        images: [],
        description: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            order_id: options.order_id || ''
        })
        app.authenticated(() => {
            this.getToken();
        });
    },
    getToken() {
        app.ajax('GET', '/upload/token', null, (res) => {
            if (res.data.status == 0) {
                this.setData({
                    token: res.data.data.image_token
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
    checkboxChange: function(e) {
        let checkboxItems = this.data.aReason,
            values = e.detail.value;
        for (let i = 0, lenI = checkboxItems.length; i < lenI; i++) {
            checkboxItems[i].checked = false;
            for (let j = 0, lenJ = values.length; j < lenJ; j++) {
                if (checkboxItems[i].value == values[values.length - 1]) {
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            aReason: checkboxItems
        });
    },
    chooseImage: function(e) {
        let that = this;
        wx.showLoading({
            title: '上传中',
            mask: true
        });
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                let tempFilePaths = res.tempFilePaths;
                for(let i=0;i<tempFilePaths.length;i++){
                    wx.uploadFile({
                        url: 'https://up.qbox.me',
                        filePath: tempFilePaths[i],
                        name: 'file',
                        formData: {
                            'token': that.data.token,
                            'x:source': 'smartcab / xiaochengxu'
                        },
                        success: function (res) {
                            let data = JSON.parse(res.data),
                                images = that.data.images;
                            images.push(data.name);
                            that.setData({
                                images: images
                            })
                            wx.hideLoading();
                        }
                    })
                }
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
            },
            complete:function(){
                wx.hideLoading();
            }
        })
    },
    previewImage: function(e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
    },
    setDescription: function(e) {
        this.setData({
            description: e.detail.value
        });
    },
    submit: function() {
        let reason = this.data.aReason.filter(item => item.checked == true);
        if (!reason.length) {
            app.showErrorTip(this, '请选择原因');
            return false;
        }
        if (!this.data.description) {
            app.showErrorTip(this, '请填写问题描述')
            return false;
        }
        if (!this.data.images.length) {
            app.showErrorTip(this, '至少上传一张图片')
            return false;
        }
        let data = {
            category: reason[0].name,
            content: this.data.description,
            images: this.data.images
        }
        app.ajax('POST', '/trading/order/' + this.data.order_id + '/aftermarket', data, (res) => {
            if (res.data.status == 0) {
                wx.showToast({
                    title: '提交成功',
                    icon: 'success',
                    duration: 2000
                })
                wx.redirectTo({
                    url: '../order_details/index?order_id=' + this.data.order_id,
                })
            } else {
                if (res.data.msg) app.showErrorTip(this, res.data.msg);
            }
        }, (err) => {
            app.showErrorTip(this, '当前网络不可用，请检查您的网络设置！')
        })
    },
})