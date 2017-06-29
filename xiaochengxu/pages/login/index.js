// pages/login/index.js
var app = getApp()
var MGUser = require('../../utils/user.js')
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
    isRadioChecked: true,
    isInOtherPage: false,
    isShowImgCode: false,
    imgCodeValue: '',
    imgCodeSrc: '',
    uid: '',
    next_send_action: false
  },
  onLoad: function () {
    var that = this
    that.getNetworkType()
    app.authenticated(function () {
        wx.redirectTo({
            url: '../index/index',
            success: function (res) {
                that.setData({
                    isInOtherPage: true
                })
            }
        })
    },true);
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
    var that = this;
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
    var that = this
    if (that.data.next_send_action) {
      if (!that.data.imgCodeValue) {
        return showErrorTip('验证码不可以空!');
      }
      that.data.next_send_action(that.data.imgCodeValue);
      that.data.next_send_action = false;
      that.hideImgCode();
    }
  },
  bindInputImgCode: function (e) {
    var that = this
    that.setData({
      imgCodeValue: e.detail.value
    });
  },
  showVoiceTip: function () {
    var that = this
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
    var that = this
    that.setData({
      btnType: 1
    })
    that.sendCode()

  },

  cancelVoiceCode: function () {
    return false;
  },
  function() {

  },
  changeStatus: function (isend, send_code_delay, send_code_type) {
    var that = this
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
      else{
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
  },
  getcode: function (captcha_code) {
    var that = this
    if (!that.getNetworkType()) {
      return false
    }
    if (this.data.isDisabled) {
      return false
    }
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
    }, that.changeStatus.bind(that), captcha_code || '', function(){
      that.data.next_send_action = that.getcode;
      that.loadCaptchacodeIamge();
      that.showImgCode();
    });
  },

  getvoicecode: function (captcha_code) {
    var that = this
    if (!that.getNetworkType()) {
      return false
    }
    MGUser.getvoicecode(that.data.user.username, function (succed, msg) {
      if (succed) {
        app.showSuccessTip('语音验证码已发送')
      }
      else {
        app.showErrorTip(that, msg)
      }
    }, that.changeStatus.bind(that), captcha_code || '', function () {
      that.data.next_send_action = that.getvoicecode;
      that.loadCaptchacodeIamge();
      that.showImgCode();
    });
  },
  sendCode: function () {
    var that = this
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
  checkInfo: function () {
    var that = this
    that.setData({
      isActiveBtn: false
    })
    if (!that.data.user.username) {
      app.showErrorTip(that, "手机号不可为空")
      return false;
    }
    if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(that.data.user.username)) {
      app.showErrorTip(that, "请填写正确的11位手机号码!")
      return false;
    }
    if (!that.data.user.code) {
      app.showErrorTip(that, "验证码不可为空")
      return false;
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
  bindInputCode: function (e) {
    var that = this
    that.setData({
      user: {
        code: e.detail.value,
        username: that.data.user.username
      }
    })
    that.changeLoginBtnState();
  },
  radioChange: function (e) {
    var that = this
    that.setData({
      isRadioChecked: !that.data.isRadioChecked
    })
    that.changeLoginBtnState();
  },
  gotoTerms: function () {
    var that = this
    wx.navigateTo({
      url: '../terms/index',
      success: function (res) {
        that.setData({
          isRadioChecked: true
        })
      }
    })
    that.changeLoginBtnState();
  },
  goIndex: function () {
    var that = this
    wx.redirectTo({
      url: '../index/index',
      success: function (res) {
        that.setData({
          isInOtherPage: true
        })
      }
    })
    return false
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
    MGUser.login(that.data.user.username, that.data.user.code, "trading", function (succed, user) {
      if (succed) {
        that.setData({
          uid: user.data._id,
          isLogining: !!user.data._id,
        })
        app.weixinLogin(function(){
          app.globalData.userInfo = user.data;
          that.goIndex();
        }, function(){
          User.logout(function (succed, msg) {
            app.globalData.session = null;
            app.showErrorTip(that, '登录失败');
          });
        });
      }
      else {
        that.setData({
          isLogining: false
        })
        app.showErrorTip(that, user)
      }
    });
  }
})