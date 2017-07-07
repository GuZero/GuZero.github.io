// pages/login/index.js
var app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        isActiveBtn: false,
        animOfNoneNetWork: {},
        isRadioChecked: true,
        animMsg: '',
        user: {
            username: '',
            code: ''
        },
        isLogining: false,
        uid: '',

    },
    getNetworkType: function () {
        var that = this
        wx.getNetworkType({
            success: function (res) {
                if (!res.networkType || res.networkType == 'none') {
                    app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                    return false;
                }
                return true;
            },
            fail: function () {
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
                return false;
            }
        })
        return true;
    },
    radioChange: function (e) {
        var that = this
        that.setData({
            isRadioChecked: !that.data.isRadioChecked
        })
        that.changeLoginBtnState();
    },
    changeLoginBtnState: function () {
        var that = this
        that.setData({
            isActiveBtn: false
        })
        if (!that.data.user.username) {
            return false;
        }
        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(that.data.user.username)) {
            return false;
        }
        if (!that.data.user.code) {
            return false;
        }
        if (!that.data.isRadioChecked) {
            return false;
        }
        that.setData({
            isActiveBtn: true
        })
        return true;
    },
    bindInput: function (e) {
        var that = this
        that.setData({
            user: {
                username: e.detail.value,
                code: that.data.user.code
            }
        })
        that.changeLoginBtnState();
    },
    bindPwd: function (e) {
        var that = this
        that.setData({
            user: {
                code: e.detail.value,
                username: that.data.user.username
            }
        });
        that.changeLoginBtnState();
    },
    checkInfo: function () {
        var that = this
        that.setData({
            isActiveBtn: false
        })

        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(that.data.user.username)) {
            app.showErrorTip(that, "请填写正确的11位手机号码!")
            return false;
        }
        if (!that.data.user.code) {
            app.showErrorTip(that, "请填写密码!")

        }
        if (!that.data.isRadioChecked) {
            app.showErrorTip(that, "请阅读并同意《格格使用条款》")
            return false;
        }
        that.setData({
            isActiveBtn: true
        })
        return true;
    },
    goIndex: function () {
        var that = this
        wx.switchTab({
            url: '../index/index'
        })
        return false
    },
    logout: function () {
        app.ajax('POST', app.globalData.API + '/operator/logout', { 'timestamp': Number.parseInt(new Date().getTime() / 1000) }, function (d) {
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    app.globalData.session = null;
                    app.showErrorTip(that, '登录失败');
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        });
    },
    login: function () {
        var that = this
        if (!that.data.isActiveBtn) {
            return false
        }
        if (!that.getNetworkType()) {
            return false
        }
        if (!that.checkInfo()) {
            return false
        }
        if (that.data.isLogining) {
            return false
        }
        that.setData({
            isLogining: true
        })
        app.ajax('POST', app.globalData.API + '/operator/login', { "username": that.data.user.username, "password": that.data.user.code }, function (d) {
            that.setData({
                isLogining: false
            })
            if (d.statusCode == 200) {
                if (d.data.status == 0) {
                    var user = d.data.data.user;
                    app.weixinLogin(function () {
                        app.globalData.userInfo = user;
                        wx.setStorage({
                          key: 'username',
                          data: user.username,
                        })
                        that.goIndex();
                    }, function () {
                        that.logout();
                    });
                }else{
                    app.showErrorTip(that, d.data.msg);
                }
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        }, function (err) {
            that.setData({
                isLogining: false
            })
            app.showErrorTip(that, '网络错误，请检查您的网络设置！');
        })
    },
    onPullDownRefresh: function () {
        this.onLoad()
        wx.stopPullDownRefresh()
    },
    onShareAppMessage: function () {
        return {
            title: '格格货栈-自助快递柜',
            desc: '24小时自助快递柜 · 快件收寄，交给格格货栈！',
            path: '/pages/login/index'
        }
    },
    onLoad: function () {
        var that = this
        that.getNetworkType()
        app.authenticated(function () {
            wx.switchTab({
                url: '../index/index'
            })
        }, true);
    }
})