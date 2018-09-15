//获取应用实例
let User = require('../../utils/user.js');
let Tracking = require('../../utils/tracking.js');

let app = getApp()
Page({
    data: {
        total: 0,
        num: 0,
        discount: 0,
        loaded: false,
        zz_tradings: null,
        jp_tradings: null,
        tradings: [],
        animOfNoneNetWork: {},
        use_weixin_userinfo_btn: true,
        community: {
            _id: '0000000000000000000000000'
        },
        active: -1,
        tabBar: [{
            value: '购物车',
            icon: {
                normal: '/images/icon/index (9).png',
                active: '/images/icon/index (3).png'
            }
        }, {
            value: '扫一扫',
            icon: {
                normal: '/images/icon/index (5).png',
                active: '/images/icon/index (6).png'
            }
        }, {
            value: '我的',
            icon: {
                normal: '/images/icon/index (1).png',
                active: '/images/icon/index (2).png'
            }
        }],
        is_show_list: false,
        is_show_footer: false,
    },
    onPullDownRefresh: function() {
        this.resetData();
        this.load();
        wx.stopPullDownRefre()
    },
    onLoad: function(options) {
        this.getNetworkType();
        this.load();
    },
    onShow: function() {
        if (!this.data.loaded) {
            return false;
        }
        this.setData({
            total: 0,
            num: 0,
            discount: 0,
            loaded: false,
            tradings: [],
            animOfNoneNetWork: {}
        })

        this.load();
    },
    getNetworkType: function() {
        let that = this
        wx.getNetworkType({
            success: function(res) {
                if (!res.networkType || res.networkType == 'none') {
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function() {
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    load: function() {
        let that = this;
        if (!that.getNetworkType()) {
            return false
        }

        wx.showNavigationBarLoading();
        this.getTradings()
        this.getNextTradings()

        app.authenticated(() => { //用户是否授权
            app.weixinLoadProfile(() => {
                if (app.globalData.weixinUserInfo && app.globalData.userInfo && app.globalData.weixinUserInfo.nickName && (new Date()).getTime() - app.globalData.weixinUserInfo.upts * 1000 < 2592000000 && app.globalData.weixinUserInfo.nickName == app.globalData.userInfo.nickname) {
                    this.setData({
                        use_weixin_userinfo_btn: false
                    });
                }
            });
        }, true);
    },
    onLoaded: function() {
        if (this.data.zz_tradings && this.data.jp_tradings) {
            let tradings = this.updateTradingsCart(this.data.tradings);
            this.setData({
                tradings: tradings,
                loaded: true,
            })
            wx.hideNavigationBarLoading();
            this.getTotal();
            this.setLocalData();
        }
    },
    getTradings: function() {
        let that = this;
        wx.showLoading({
            title: '加载中'
        });
        app.ajax('GET', '/trading/promotion/5b91d5e96803fa744d8b4568/trading/sku', null, function(d) { //至尊礼盒
            wx.hideLoading();
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    let data = d.data.data.promotion_skus;
                    for (let i = 0; i < data.length; i++) {
                        data[i].good_category = 1;
                    }

                    let tradings = that.data.tradings.concat(data);
                    that.setData({
                        tradings: tradings,
                        zz_tradings: data
                    })
                    that.onLoaded()
                } else {
                    if (d.data.msg) app.showErrorTip(that, d.data.msg);
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
            }
        }, function(err) {
            wx.hideLoading();
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    getNextTradings: function() {
        let that = this;
        app.ajax('GET', '/trading/promotion/5b9387ded97ed0b8dde98fa7/trading/sku', null, function(d) { //精品蟹礼
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    let data = d.data.data.promotion_skus;
                    for (let i = 0; i < data.length; i++) {
                        data[i].good_category = 2;
                    }

                    let tradings = that.data.tradings.concat(data);
                    that.setData({
                        tradings: tradings,
                        jp_tradings: data
                    })
                    that.onLoaded()
                } else {
                    if (d.data.msg) app.showErrorTip(that, d.data.msg);
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！')
            }
        }, function(err) {
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    updateTradingsCart: function(tradings) {
        let cart = wx.getStorageSync('cart') || {};
        let cat_goodses = cart["goodses"] || [];
        for (let i = 0; i < tradings.length; i++) {
            let has_cart = false;
            if (tradings[i].sku.trading.images.length) {
                tradings[i].image_src = "https://img.aimoge.com/" + tradings[i].sku.trading.images[0].substring(0, 28);
            } else {
                tradings[i].image_src = "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz";
            }
            for (let j = 0; j < cat_goodses.length; j++) {
                if (cat_goodses[j].sku_id == tradings[i].sku._id) {
                    tradings[i].sku.sum = cat_goodses[j].cart_num;
                    has_cart = true;
                }
            }
            if (!has_cart) {
                tradings[i].sku.sum = 0;
            }
        }
        let num = 0;
        if (cat_goodses.length) {
            for (let i = 0; i < cat_goodses.length; i++) {
                num += cat_goodses[i].cart_num
            }
        }
        this.setData({
            num: num,
            is_show_footer: num ? true : false
        })
        return tradings;
    },
    getTotal: function() {
        let tradings = this.data.tradings,
            total = 0,
            discount = 0,
            data = tradings.filter((item) => {
                return item.sku.sum > 0
            });
        for (let i = 0; i < data.length; i++) {
            total += (data[i].sku.discount_price || data[i].sku.price) * data[i].sku.sum;
            discount += data[i].sku.price * data[i].sku.sum;
        }
        this.setData({
            total: total,
            discount: discount
        })

    },
    add: function(e) {
        let item = e.currentTarget.dataset.item,
            data = this.data.tradings,
            num = this.data.num;
        num++;
        for (let i = 0; i < data.length; i++) {
            if (data[i].sku._id == item.sku._id) {
                if (data[i].sku.sum < (data[i].sku.num - data[i].sku.sale_num)) {
                    data[i].sku.sum++;
                } else {
                    app.showErrorTip(this, '抱歉库存不足了');
                }
            }
        }
        if (!this.data.is_show_footer) {
            this.setData({
                is_show_footer: true
            })
        }
        this.setData({
            tradings: data,
            num: num
        })
        this.getTotal();
        this.setLocalData();
    },
    reduce: function(e) {
        let item = e.currentTarget.dataset.item,
            data = this.data.tradings,
            num = this.data.num;
        num--;
        for (let i = 0; i < data.length; i++) {
            if (data[i].sku._id == item.sku._id) {
                if (data[i].sku.sum > 0) {
                    data[i].sku.sum--;
                } else {
                    app.showErrorTip(this, '已经没有了不要再减了!');
                }
            }
        }
        if (num > 0 || num == 0) {
            this.setData({
                tradings: data,
                num: num
            })
            this.getTotal();
            this.setLocalData();
        }
        if (num == 0) {
            this.setData({
                is_show_footer: false,
                is_show_list: false
            })
        }
    },
    setLocalData: function() {
        let goodses = [],
            data = this.data.tradings.filter((item) => {
                return item.sku.sum > 0
            });
        for (let i = 0; i < data.length; i++) {
            goodses.push({
                "sku_id": data[i].sku_id,
                "cart_num": data[i].sku.sum
            })
        }
        wx.setStorageSync("cart", {
            "address": {
                "address_type": 0,
                "address_id": '000000000000000000000000'
            },
            "order_type": "gift_card",
            "promotionses": [{
                "promotions_type": "gift_card",
                "promotions_id": '5b922ced6803facc448b4568',
            }],
            'goodses': goodses,
            'ts': (new Date()).getTime()
        })
    },
    getUserInfo: function(res) {
        let that = this;
        if (res.detail.errMsg != "getUserInfo:ok") {
            return;
        }

        wx.showNavigationBarLoading();
        app.weixinLoadUserInfo(res.detail, () => {
            if (app.globalData.weixinUserInfo && app.globalData.userInfo) {
                User.updateUser({
                    "nickname": app.globalData.weixinUserInfo.nickName,
                    "gender": app.globalData.weixinUserInfo.gender,
                    "avatar": app.globalData.weixinUserInfo.avatarUrl,
                }, () => {

                })
            }
            if (res.target.dataset.action == "submit") {
                that.submit(res);
            } else {
                that.linkToMine();
            }
            wx.hideNavigationBarLoading();
        })
    },
    submit: function(e) {
        let status = e.currentTarget.dataset.status;
        if (this.data.total == 0) {
            return false;
        }
        let data = this.data.tradings.filter((item) => {
            return item.sku.sum > 0
        });
        if (data.length) {
            this.setLocalData();
            wx.navigateTo({
                url: '/pages/user/order/index?status=' + status
            })
        } else {
            wx.showToast({
                title: '请选择商品',
                icon: 'none',
                duration: 2000
            })
        }
    },
    resetData: function() {
        this.setData({
            loaded: false,
            zz_tradings: null,
            jp_tradings: null,
            tradings: [],
        })
    },
    switchTab(event) {
        switch (event.detail) {
            case 0:
                if (this.data.num) {
                    this.setData({
                        is_show_footer: true
                    })
                } else {
                    wx.showToast({
                        title: '亲您还暂未选择商品噢',
                        icon: 'none',
                        duration: 2000
                    })
                }
                break;
            case 1:
                wx.scanCode();
                break;
            case 2:
                this.linkToMine();
                break;
        }
    },
    bindPopup() {
        this.setData({
            is_show_list: !this.data.is_show_list
        })
    },
    closeFooter() {
        this.setData({
            is_show_footer: false
        })
    },
    linkToMine: function(e) {
        wx.navigateTo({
            url: '/pages/user/mine/index'
        })
    },
})