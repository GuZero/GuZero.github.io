// pages/user/index.js

let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        "userInfo": null,
        "avatar": "https://img.aimoge.com/Fnx03oBO2G4HKDa5S286BDzo1Qnz",
        balance: {
            "total_balance": "-",
        },
        partner: null,
        partner_val: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        app.authenticated(() => {
            this.setData({
                userInfo: app.globalData.userInfo
            });

            if (app.globalData.userInfo && app.globalData.userInfo.avatar) {
                let avatar = "https://img.aimoge.com/" + app.globalData.userInfo.avatar.substring(0, 28);
                this.setData({
                    avatar: avatar
                });
            }else{
                this.setData({
                    avatar: 'https://img.aimoge.com/FuztLHOBqfkBsfE1ZDJSLDIsz3zY'
                });
            }
            this.loadBalance();
        });
    },
    onShow: function () {
        // this.loadBalance();
    },
    loadBalance: function () {
        app.ajaxPay("GET", "/balance", null, (res) => {
            if (res.statusCode == 200) {
                if (res.data.status == 0) {
                    res.data.data.total_balance = (res.data.data.balance + res.data.data.discounted) / 100;
                    this.setData({
                        balance: res.data.data,
                    });
                } else if (res.data.status == 400) {
                    this.setData({
                        balance: { total_balance: 0 },
                    });
                }
            }
        }, (res) => {
            app.showErrorTip(this, '网络错误，请检查您的网络设置！');
        });
    },
    showAlert: function () {
        wx.showToast({
            title: '功能暂未开放，敬请期待',
            icon: 'none'
        })
    },
    linkCoupon: function () {
        wx.navigateTo({
            url: '../coupon/index',
        })
    },
    showLogoutLayer: function () {//退出登录
        let that = this;
        wx.showActionSheet({
            itemList: ["退出登录"],
            success: function (res) {
                if (res.tapIndex == 0) {
                    that.logout();
                }
            }
        })
    },
    logout: function () {
        let that = this;
        app.weixinUnbind(function () {
            app.ajax('POST', '/logout', { 'timestamp': Number.parseInt(new Date().getTime() / 1000) }, function (d) {
                if (d.statusCode == 200) {
                    if (d.data.status == 0) {
                        wx.removeStorageSync('session');
                        app.globalData.session = null;
                        app.globalData.weixinUserInfo = null;
                        app.globalData.userInfo = null;
                        if (wx.reLaunch) {
                            wx.reLaunch({
                                url: '../login/index'
                            })
                        } else {
                            wx.redirectTo({
                                url: '../login/index'
                            })
                        }
                    } else {
                        app.showErrorTip(that, d.data.msg);
                    }
                } else {
                    app.showErrorTip(that, '网络错误，请检查您的网络设置！');
                }
            });
        });
    },
})