//app.js
App({
  onLaunch: function () {
    this.globalData.session = wx.getStorageSync('session') || null;
    this.checkSession();
  },
  onShow: function () {
  },
  onError: function (message) {
    var device_info = wx.getSystemInfoSync();
    this.request({
      "type": "POST",
      "url": "https://log.gegebox.com/v1/logistic",
      "data": {
        "d": device_info.model,
        "an": "kuaidiyuanxcu",
        "av": device_info.version,
        "os": device_info.system.split(' ')[0],
        "ov": device_info.system.split(' ')[1],
        "s": device_info.windowWidth + "x" + device_info.windowHeight,
        "l": device_info.language,
        "a": "trace",
        "t": parseInt((new Date()).getTime() / 1000),
        'di': this.globalData.openid || '',
        "platform": device_info.platform,
        "emessage": '',
        "estack": message || ''
      }
    });
  },
  checkSession: function () {
    var that = this;
    if (!this.globalData.session) {
      return that.login();
    }

    that.globalData.checking_session = [];
    wx.checkSession({
      success: function () {
        that.signIn()
      },
      fail: function () {
        that.login()
      }
    });
  },
  signIn: function () {
    var that = this;
    that.request({
      url: this.globalData.API + '/operator/signin',
      data: { 'timestamp' : Number.parseInt(new Date().getTime() / 1000)},
      method: 'POST',
      success: function (res) {
        if (res.statusCode == 200) {
          if (res.data.status == 0) {
            that.globalData.userInfo = res.data.data.user || {};
            that.wexinSignin();
          }
          else {
            that.globalData.session = null;
            that.login();
          }
        }
        else {
          that.checkingSessionFinish();
        }
      },
      fail: function () {
        that.checkingSessionFinish();
      }
    });
  },
  login: function () {
    var that = this;
    that.weixinLogin(function () {
      that.loadUser(function () {
      }, function () {
      });
      that.checkingSessionFinish();
    }, that.checkingSessionFinish);
  },
  wexinSignin: function () {
    var that = this;
    that.request({
      url: this.globalData.USER_API+ '/weixin/' + that.globalData.wxid + '/wxapp/signin',
      data: {},
      method: 'POST',
      success: function (res) {
        if (res.statusCode == 200) {
          if (res.data.status == 0) {
            that.globalData.openid = res.data.data.open_id || '';
            setTimeout(that.signIn, 6 * 60 * 60 * 1000);
            that.checkingSessionFinish();
          }
          else {
            that.globalData.session = null;
            that.login();
          }
        }
        else {
          that.checkingSessionFinish();
        }
      },
      fail: function () {
        that.checkingSessionFinish();
      }
    });
  },
  weixinLogin: function (success_callback, fail_callback) {
    var that = this;
    wx.login({
      success: function (res) {
        that.request({
          url: that.globalData.USER_API + '/weixin/' + that.globalData.wxid + '/wxapp/login?require_login=0',
          data: { code: res.code },
          method: 'POST',
          success: function (res) {
            if (res.statusCode == 200 && res.data.status == 0) {
              that.globalData.openid = res.data.data.open_id || '';
              if (!res.data.data.uid) {
                that.globalData.session = null;
              }
              else {
                that.globalData.userInfo = {
                  _id: res.data.data.uid,
                  username: res.data.data.username
                }
                return success_callback(res);
              }
            }
            fail_callback(res);
          },
          fail: function (res) {
            fail_callback(res);
          }
        });
      },
      fail: function () {
        fail_callback();
      }
    });
  },
  checkingSessionFinish: function () {
    var that = this;
    while (that.globalData.checking_session && that.globalData.checking_session.length > 0) {
      var callback = that.globalData.checking_session.shift();
      if (callback) {
        callback(!!that.globalData.session);
      }
    }
    that.globalData.checking_session = false;
  },
  authenticated: function (callback, isLoginPage) {
    var that = this;
    function authenticated_finish() {
      if (!that.globalData.session) {
        if (!isLoginPage) {
          wx.redirectTo({
            url: '/pages/login/index'
          });
        }
      }
      else {
        callback();
      }
    }

    if (!that.globalData.checking_session) {
      authenticated_finish();
    }
    else {
      that.globalData.checking_session.push(authenticated_finish);
    }
  },
  loadUser: function (success_callback, fail_callback) {
    var that = this;
    that.request({
      url: this.globalData.USER_API + '/user',
      method: 'GET',
      success: function (res) {
        if (res.statusCode == 200 && res.data.status == 0) {
          that.globalData.userInfo = res.data.data || {};
          success_callback(res);
        }
        else {
          fail_callback(res);
        }
      },
      fail: function () {
        fail_callback();
      }
    });
  },
  showErrorTip: function (handle, msg) {
    var animation = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
    })

    animation.translateY(0).step()

    handle.setData({
      animOfNoneNetWork: animation.export(),
      animMsg: msg
    })

    setTimeout(function () {
      animation.translateY(-45).step()
      handle.setData({
        animOfNoneNetWork: animation.export()
      })
    }.bind(handle), 2000)
  },

  showSuccessTip: function (title) {
    wx.showToast({
      title: title,
      icon: 'success',
      duration: 2500
    })
    setTimeout(function () {
      wx.hideToast();
    }.bind(this), 3000)
  },
  globalData: {
    session: null,
    checking_session: [],
    openid: '',
    wxid: '595316966803fa65338b4569',
    API: 'https://api.ebox.gegebox.com/v2',
    USER_API: 'https://api.gegebox.com/v1',
    PAY: 'https://pay.gegebox.com/v1',
    STORE: "https://store.gegebox.com/v1",
    userInfo: null
  },
  request: function (req) {
    var that = this;
    var success_callback = req.success;
    req.success = function (result) {
      if (result.data.session) {
        that.globalData.session = result.data.session;
        wx.setStorageSync('session', result.data.session)
        result.data.session = undefined;
      }
      if (success_callback) {
        success_callback(result);
      }
    };
    var header = req.header || {};
    header["X-SESSION"] = "token";
    if (that.globalData.session && new Date(that.globalData.session.expires || "") > new Date()) {
      header["X-SESSION-TOKEN"] = that.globalData.session.token || '';
    }
    req.header = header;

    wx.request(req);
  },
  ajax: function (method, url, data, succed, error) {
    this.request({
      url: url,
      data: data || {},
      method: method,
    //   header: { "Content-Type": "application/json" },
      success: function (res) {
        return succed(res);
      },
      fail: function (res) {
        return error ? error(res) : 0;
      }
    });
  },
  getImageInfo: function (img_url) {
    var img_id = img_url.substr(0, 28);
    var img_info = img_url.substr(29).split("_");
    var wh = (img_info[0] || "0x0").split("x");
    var st = (img_info[0] || "0.").split(".");
    return {
      "img": img_url,
      "img_id": img_id,
      "src": "https://img.aimoge.com/" + img_id,
      "width": parseInt(wh[0] || 0),
      "height": parseInt(wh[1] || 0),
      "size": parseInt(st[0] || 0),
      "mime_type": st[1] || ""
    }
  },
  getImageStyle: function (width, height) {
    width = parseInt(width);
    if (width <= 60) {
      return "/style90x90.png";
    }
    if (width <= 100) {
      return "/style150.png";
    }
    if (width <= 160) {
      return "/style220.png";
    }
    if (width <= 230) {
      return "/style300.png";
    }
    if (width <= 320) {
      return "/style480.png";
    }
    return "/style620.png";
  },
  getUser: function () {
    return this.globalData.userInfo;
  }
});




