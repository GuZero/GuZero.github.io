// pages/login/index.js
let app = getApp()
let MGUser = require('../../../utils/user.js')
Page({
    data: {
        isActiveBtn: false,
        animOfNoneNetWork: {},
        animMsg: '',
        user: {
            username: '',
            code: ''
        },
        tips: '获取验证码',
        btnType: 0, //0是短信方式，1是语音方式
        isDisabled: false,
        isusernameError: false,
        isLogining: false,
        isWeixinLogining: false,
        isRadioChecked: true,
        isInOtherPage: false,
        isShowImgCode: false,
        imgCodeValue: '',
        imgCodeSrc: '',
        uid: '',
        next_send_action: false,
        next_url: '/pages/index/index'
    },
    onLoad: function (option) {
        let that = this
        that.setData({
            next_url: decodeURIComponent((option && option.next_url) || '') || '/pages/index/index'
        })

        if (!app.globalData.session) {
            app.checkSession();
        }
        that.getNetworkType()
        app.authenticated(() => {
            if (app.globalData.session && app.globalData.userInfo){
                wx.redirectTo({
                    url: that.data.next_url,
                    success: function (res) {
                        that.setData({
                            isInOtherPage: true
                        })
                    }
                })
            }
        }, true);
    },
    onPullDownRefresh: function () {
        this.onLoad()
        wx.stopPullDownRefresh()
    },
    getNetworkType: function () {
        let that = this
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
    showImgCode: function () {
        this.setData({
            isShowImgCode: true
        })
    },
    hideImgCode: function () {
        this.setData({
            isShowImgCode: false
        })
    },
    loadCaptchacodeIamge: function () {
        let that = this;
        that.setData({
            imgCodeValue: '',
            imgCodeSrc: ''
        });

        MGUser.getcaptchacode(function (is_succed, image_name) {
            if (is_succed) {
                that.setData({
                    imgCodeSrc: "https://img.aimoge.com/" + image_name.substring(0, 28)
                });
            } else {
                app.showErrorTip(that, '网络错误，请检查您的网络设置！');
            }
        })
    },

    doNextSendAction: function () {
        let that = this
        if (that.data.next_send_action) {
            if (!that.data.imgCodeValue) {
                return app.showErrorTip(that, '验证码不可以空!');
            }
            that.data.next_send_action(that.data.imgCodeValue);
            that.data.next_send_action = false;
            that.hideImgCode();
        }
    },
    bindInputImgCode: function (e) {
        let that = this
        that.setData({
            imgCodeValue: e.detail.value
        });
    },
    showVoiceTip: function () {
        let that = this
        wx.showModal({
            title: '未收到验证码？',
            cancelText: '拒绝',
            cancelColor: '#353535',
            confirmText: '接收',
            confirmColor: '#4285f4',
            content: '试试接收语音来电验证码',
            success: function (res) {
                if (res.confirm) {
                    that.confirmVoiceCode();
                } else {
                    that.cancelVoiceCode();
                }
            }
        });
    },

    confirmVoiceCode: function () {
        let that = this
        that.setData({
            btnType: 1
        })
        that.sendCode()

    },

    cancelVoiceCode: function () {
        return false;
    },
    changeStatus: function (isend, send_code_delay, send_code_type) {
        let that = this
        if (isend) {
            that.setData({
                tips: '获取验证码',
                isDisabled: false
            })
            if (send_code_type == 1 && !this.data.isInOtherPage) {
                that.setData({
                    btnType: 1
                });
                that.showVoiceTip();
            }
            else {
                that.setData({
                    btnType: 0
                });
            }
        } else {
            that.setData({
                tips: '重新获取(' + send_code_delay + 's)',
                isDisabled: true
            })
        }
        wx.hideNavigationBarLoading()
    },
    getcode: function (captcha_code) {
        let that = this
        if (!that.getNetworkType()) {
            return false
        }
        if (this.data.isDisabled) {
            return false
        }
        wx.showNavigationBarLoading()
        MGUser.getcode(that.data.user.username, function (succed, msg) {
            if (succed) {
                app.showSuccessTip('验证码已发送')
            } else {
                that.setData({
                    isUsernameError: true
                })
                setTimeout(function () {
                    that.setData({
                        isUsernameError: false
                    })
                }.bind(that), 3000)
                app.showErrorTip(that, msg)
            }
            wx.hideNavigationBarLoading()
        }, that.changeStatus.bind(that), captcha_code || '', function () {
            that.data.next_send_action = that.getcode;
            that.loadCaptchacodeIamge();
            that.showImgCode();
            wx.hideNavigationBarLoading()
        });
    },

    getvoicecode: function (captcha_code) {
        let that = this
        if (!that.getNetworkType()) {
            return false
        }
        wx.showNavigationBarLoading()
        MGUser.getvoicecode(that.data.user.username, function (succed, msg) {
            if (succed) {
                app.showSuccessTip('语音验证码已发送')
            }
            else {
                app.showErrorTip(that, msg)
            }
            wx.hideNavigationBarLoading()
        }, that.changeStatus.bind(that), captcha_code || '', function () {
            that.data.next_send_action = that.getvoicecode;
            that.loadCaptchacodeIamge();
            that.showImgCode();
            wx.hideNavigationBarLoading()
        });
    },
    sendCode: function () {
        let that = this;
        that.setData({
            tips: '获取验证码'
        })
        if (that.data.btnType == 0) {
            that.getcode()
        } else {
            that.getvoicecode()
        }
    },
    changeLoginBtnState: function () {
        let that = this
        that.setData({
            isActiveBtn: false
        })
        if (!that.data.user.username) {
            return false;
        }
        if (!/^(1[0-9]{10})$/.test(that.data.user.username)) {
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
    checkInfo: function () {
        let that = this
        that.setData({
            isActiveBtn: false
        })
        if (!that.data.user.username) {
            app.showErrorTip(that, "手机号不可为空")
            return false;
        }
        if (!/^(1[0-9]{10})$/.test(that.data.user.username)) {
            app.showErrorTip(that, "请填写正确的11位手机号码!")
            return false;
        }
        if (!that.data.user.code) {
            app.showErrorTip(that, "验证码不可为空")
            return false;
        }
        that.setData({
            isActiveBtn: true
        })
        return true;
    },
    bindInput: function (e) {
        let that = this
        that.setData({
            user: {
                username: e.detail.value,
                code: that.data.user.code
            }
        })
        that.changeLoginBtnState();
    },
    bindInputCode: function (e) {
        let that = this
        that.setData({
            user: {
                code: e.detail.value,
                username: that.data.user.username
            }
        })
        that.changeLoginBtnState();
    },
    radioChange: function (e) {
        let that = this
        that.setData({
            isRadioChecked: !that.data.isRadioChecked
        })
        that.changeLoginBtnState();
    },
    goNextUrl: function () {
        let that = this;
        wx.redirectTo({
            url: this.data.next_url,
            success: function (res) {
                that.setData({
                    isInOtherPage: true
                })
            }
        })
        return false
    },
    login_finish: function (succed, user) {
        let that = this;

        if (succed) {
            that.setData({
                uid: user.data._id,
            })
            app.weixinLogin(function () {
                app.globalData.userInfo = user.data;
                if (app.globalData.weixinUserInfo) {
                    MGUser.updateUser({
                        "nickname": app.globalData.weixinUserInfo.nickName,
                        "gender": app.globalData.weixinUserInfo.gender,
                        "avatar": app.globalData.weixinUserInfo.avatarUrl,
                    }, () => {

                    })
                }
                that.setData({
                    isLogining: false,
                    isWeixinLogining: false,
                })
                that.goNextUrl();
                wx.hideNavigationBarLoading();

            }, function () {
                MGUser.logout(function (succed, msg) {
                    app.globalData.session = null;
                    app.showErrorTip(that, '登录失败');
                });
            });
        }
        else {
            that.setData({
                isLogining: false,
                isWeixinLogining: false,
            })
            app.showErrorTip(that, user)
        }
    },
    login: function () {
        let that = this
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
        wx.showNavigationBarLoading();
        MGUser.login(that.data.user.username, that.data.user.code, "trading", function (succed, user){
            that.login_finish(succed, user);
        });
    },
    getPhoneNumber: function(res){
        let that = this;
        if (res.detail.errMsg != "getPhoneNumber:ok" || that.data.isWeixinLogining) {
            return;
        }

        that.setData({
            isWeixinLogining: true
        })
        wx.showNavigationBarLoading();
        app.authenticated(function () {
            app.request({
                url: app.globalData.API + '/weixin/' + app.globalData.wxid + '/wxapp/mobile',
                data: {
                    "open_id": app.globalData.openid,
                    "encryptedData": res.detail.encryptedData,
                    "iv": res.detail.iv,
                    "require_login": 1,
                },
                method: 'POST',
                success: function (res) {
                    if (res.statusCode == 200) {
                        if (res.data.status == 0) {
                            if (res.data.data.login_result){
                                if (res.data.data.login_result.status == 0) {
                                    app.globalData.userInfo = res.data.data.login_result.data;
                                    let login_result = res.data.data.login_result;
                                    MGUser.bindUser(function () {
                                        that.login_finish(true, login_result);
                                    });
                                    res.data.data.login_result = undefined;
                                    app.globalData.weixinUserInfo = res.data.data;
                                    return;
                                }
                                else if (res.data.data.login_result.status == 400) {
                                    MGUser.register(res.data.data.purePhoneNumber, function (succed, user){
                                        app.globalData.userInfo = user.data;
                                        that.login_finish(succed, user);
                                    });
                                    res.data.data.login_result = undefined;
                                    app.globalData.weixinUserInfo = res.data.data;
                                    return;
                                }
                                res.data.data.login_result = undefined;
                            }
                            app.globalData.weixinUserInfo = res.data.data;
                        }
                    }
                    that.login_finish(false);
                }
            });
        }, true);
    }
})