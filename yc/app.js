//app.js
App({
    globalData: {
        app_name: "yunchuwxapp",
        app_version: "1.0.0",
        session: null,
        checking_session: [],
        request_queues: 0,
        request_waiting: [],
        openid: '',
        wxid: '5b0fa55c18a8d7bfb6554ebf',
        API: 'https://api.freshxiaomei.com/v1',
        PAY: 'https://pay.freshxiaomei.com/v1',
        STORE: 'https://store.freshxiaomei.com/v1',
        weixinUserInfo: null,
        userInfo: null,
        device_info: null,
        uploadToken: null
    },
    onLaunch: function() {
        this.globalData.session = wx.getStorageSync('session') || null;
        this.checkSession();
        this.dateFormat();
    },
    onShow: function(options) {
        this.getCurrentShowOptions = function() {
            return options;
        }
    },
    onError: function(message) {
        this.logistic('trace', {
            "emessage": '',
            "estack": message || ''
        });
    },
    logistic: function(action, log){
        var device_info = wx.getSystemInfoSync();
        var data = {
            "d": device_info.model,
            "an": this.globalData.app_name,
            "av": device_info.version + "/" + this.globalData.app_version,
            "os": device_info.system.split(' ')[0],
            "ov": device_info.system.split(' ')[1],
            "s": device_info.windowWidth + "x" + device_info.windowHeight,
            "l": device_info.language,
            "a": action || "trace",
            "t": parseInt((new Date()).getTime() / 1000),
            'di': this.globalData.openid || '',
            'ui': this.globalData.userInfo ? (this.globalData.userInfo._id || '') : '',
            'token': this.globalData.session ? (this.globalData.session.token || '').substr(16, 40) : '',
            "platform": device_info.platform,
        };

        for (var key in log) { 
            if (log.hasOwnProperty(key)) {
                 data[key] = log[key];
            } 
        }

        this.request({
            "type": "POST",
            "url": "https://log.freshxiaomei.com/v1/logistic",
            "data": data
        });
    },
    checkSession: function() {
        var that = this;

        that.globalData.checking_session = [];
        if (!this.globalData.session) {
            return that.login();
        }

        wx.checkSession({
            success: function() {
                that.signIn()
            },
            fail: function() {
                that.login()
            }
        });
    },
    signIn: function() {
        var that = this;
        that.request({
            url: this.globalData.API + '/signin',
            data: {},
            method: 'POST',
            success: function(res) {
                if (res.statusCode == 200) {
                    if (res.data.status == 0) {
                        that.globalData.userInfo = res.data.data || {};
                        that.wexinSignin();
                    } else {
                        that.globalData.session = null;
                        that.login();
                    }
                } else {
                    that.checkingSessionFinish();
                }
            },
            fail: function() {
                that.checkingSessionFinish();
            }
        });
    },
    login: function() {
        var that = this;
        that.weixinLogin(function() {
            that.loadUser(function() {}, function() {});
            that.checkingSessionFinish();
        }, that.checkingSessionFinish);
    },
    wexinSignin: function() {
        var that = this;
        that.request({
            url: this.globalData.API + '/weixin/' + that.globalData.wxid + '/wxapp/signin',
            data: {},
            method: 'POST',
            success: function(res) {
                if (res.statusCode == 200) {
                    if (res.data.status == 0) {
                        that.globalData.openid = res.data.data.open_id || '';
                        setTimeout(that.signIn, 6 * 60 * 60 * 1000);
                        if (that.globalData.openid) {
                            that.weixinBind(that.globalData.wxid, that.globalData.openid, that.checkingSessionFinish);
                        } else {
                            that.checkingSessionFinish();
                        }
                    } else {
                        that.globalData.session = null;
                        that.login();
                    }
                } else {
                    that.checkingSessionFinish();
                }
            },
            fail: function() {
                that.checkingSessionFinish();
            }
        });
    },
    weixinLogin: function(success_callback, fail_callback) {
        var that = this;
        wx.login({
            success: function(res) {
                that.request({
                    url: that.globalData.API + '/weixin/' + that.globalData.wxid + '/wxapp/login',
                    data: {
                        code: res.code
                    },
                    method: 'POST',
                    success: function(res) {
                        if (res.statusCode == 200 && res.data.status == 0) {
                            that.globalData.openid = res.data.data.open_id || '';
                            if (res.data.data.uid) {
                                that.globalData.userInfo = {
                                    _id: res.data.data.uid,
                                    username: res.data.data.username
                                }
                                return that.weixinBind(res.data.data.weixin_id, res.data.data.open_id, function() {
                                    success_callback(res);
                                });
                            }
                        }
                        fail_callback(res);
                    },
                    fail: function(res) {
                        fail_callback(res);
                    }
                });
            },
            fail: function() {
                fail_callback();
            }
        });
    },
    weixinLoadProfile: function(callback) {
        var that = this;
        if (that.globalData.weixinUserInfo) {
            return callback();
        }

        that.authenticated(function() {
            that.request({
                url: that.globalData.API + '/weixin/' + that.globalData.wxid + '/wxapp/profile?open_id=' + that.globalData.openid,
                data: {},
                method: 'GET',
                success: function(res) {
                    if (res.statusCode == 200) {
                        if (res.data.status == 0) {
                            that.globalData.weixinUserInfo = res.data.data;
                        }
                    }
                    callback();
                }
            });
        }, true);
    },
    weixinLoadUserInfo: function(userinfo, callback) {
        var that = this;
        that.authenticated(function() {
            that.request({
                url: that.globalData.API + '/weixin/' + that.globalData.wxid + '/wxapp/profile',
                data: {
                    "open_id": that.globalData.openid,
                    "encryptedData": userinfo.encryptedData,
                    "iv": userinfo.iv,
                },
                method: 'POST',
                success: function(res) {
                    if (res.statusCode == 200) {
                        if (res.data.status == 0) {
                            that.globalData.weixinUserInfo = res.data.data;
                        }
                    }
                    callback();
                }
            });
        }, true);
    },
    weixinBind: function(weixin_id, open_id, callback) {
        var that = this;
        that.request({
            url: that.globalData.API + '/weixin/' + weixin_id + '/bind',
            data: {
                open_id: open_id
            },
            method: 'POST',
            success: function(res) {
                callback();
            },
            fail: function(res) {
                callback();
            }
        });
    },
    weixinUnbind: function(callback) {
        var that = this;

        if (!that.globalData.wxid || !that.globalData.openid) {
            return callback();
        }
        that.request({
            url: that.globalData.API + '/weixin/' + that.globalData.wxid + '/bind?open_id=' + that.globalData.openid,
            method: 'DELETE',
            success: function(res) {
                callback();
            },
            fail: function(res) {
                callback();
            }
        });
    },
    checkingSessionFinish: function() {
        var that = this;
        if (that.globalData.checking_session) {
            let checking_session = that.globalData.checking_session;
            that.globalData.checking_session = false;
            while (checking_session.length > 0) {
                var callback = checking_session.shift();
                if (callback) {
                    callback(!!that.globalData.session && !!that.globalData.userInfo);
                }
            }
        }
    },
    authenticated: function(callback, isLoginPage) {
        var that = this;

        function authenticated_finish() {
            if (!that.globalData.session || !that.globalData.userInfo) {
                if (!isLoginPage) {
                    wx.redirectTo({
                        url: '/pages/user/login/index?next_url=' + encodeURIComponent("/" + that.getCurrentPageUrlWithArgs())
                    });
                } else {
                    callback();
                }
            } else {
                callback();
            }
        }

        if (!that.globalData.checking_session) {
            authenticated_finish();
        } else {
            that.globalData.checking_session.push(authenticated_finish);
        }
    },
    loadUser: function(success_callback, fail_callback) {
        var that = this;
        that.request({
            url: this.globalData.API + '/user',
            method: 'GET',
            success: function(res) {
                if (res.statusCode == 200 && res.data.status == 0) {
                    that.globalData.userInfo = res.data.data || {};
                    success_callback(res);
                } else {
                    fail_callback && fail_callback(res);
                }
            },
            fail: function() {
                fail_callback && fail_callback();
            }
        });
    },
    loadUploadToken: function(callback) {
        var that = this;
        if (that.globalData.uploadToken) {
            return callback(that.globalData.uploadToken);
        }

        that.request({
            url: this.globalData.API + '/upload/token',
            method: 'GET',
            success: function(res) {
                if (res.statusCode == 200) {
                    if (res.data.status == 0) {
                        that.globalData.uploadToken = res.data.data;
                        return callback(that.globalData.uploadToken);
                    }
                }
                callback();
            }
        });
    },
    showErrorTip: function(handle, msg) {
        wx.showToast({
            title: msg,
            icon: 'none',
            duration: 2000
        })
    },

    showSuccessTip: function(title) {
        wx.showToast({
            title: title,
            icon: 'success',
            duration: 2500
        })
        setTimeout(function() {
            wx.hideToast()
        }.bind(this), 3000)
    },
    getDeviceInfo: function(message) {
        if (this.globalData.device_info) return this.globalData.device_info;

        var device_info = wx.getSystemInfoSync();
        var network = '';

        wx.getNetworkType({
            success: function(res) {
                network = res.networkType
            },
            fail: function() {
                app.showErrorTip(that, '当前网络不可用，请检查您的网络设置！');
            }
        });

        this.globalData.device_info = {
            os: device_info.system.split(' ')[0],
            osver: device_info.system.split(' ')[1],
            phonemodel: device_info.model,
            udid: this.globalData.userInfo._id || '',
            weixin_id: this.globalData.wxid || '',
            open_id: this.globalData.openid || '',
            app_name: this.globalData.app_name,
            network: network,
            appver: device_info.version + "/" + this.globalData.app_version
        }
        return this.globalData.device_info;
    },
    request: function(req) {
        var that = this;

        if (that.globalData.request_queues >= 10) {
            that.globalData.request_waiting.push(req);
            return;
        }

        var success_callback = req.success;
        var fail_callback = req.fail;
        var complete_callback = req.complete;

        req.success = function(result) {
            if (result && result.data && result.data.session) {
                that.globalData.session = result.data.session;
                wx.setStorageSync('session', result.data.session)
                result.data.session = undefined;
            }
            if (success_callback) {
                success_callback(result);
            }
        };

        req.fail = function(result) {
            if (fail_callback) {
                fail_callback(result);
            }
        }

        req.complete = function(result) {
            that.globalData.request_queues--;
            if (that.globalData.request_waiting.length > 0) {
                that.request(that.globalData.request_waiting.shift());
            }

            if (complete_callback) {
                complete_callback(result);
            }
        }

        var header = req.header || {};
        header["X-VERSION"] = this.globalData.app_name + "/" + this.globalData.app_version;
        header["X-SESSION"] = "token";
        if (that.globalData.session && new Date(that.globalData.session.expires || "") > new Date()) {
            header["X-SESSION-TOKEN"] = that.globalData.session.token || '';
        }
        req.header = header;

        wx.request(req);
        that.globalData.request_queues++;
    },
    ajax: function(method, url, data, succed, error) {
        this.request({
            url: this.globalData.API + url,
            data: data || {},
            method: method,
            header: {
                "Content-Type": "application/json"
            },
            success: function(res) {
                return succed ? succed(res) : 0;
            },
            fail: function(res) {
                return error ? error(res) : 0;
            }
        });
    },
    ajaxPay: function(method, url, data, succed, error) {
        this.request({
            url: this.globalData.PAY + url,
            data: data || {},
            method: method,
            header: {
                "Content-Type": "application/json"
            },
            success: function(res) {
                return succed ? succed(res) : 0;
            },
            fail: function(res) {
                return error ? error(res) : 0;
            }
        });
    },
    getCurrentPageUrl: function(index) {
        var pages = getCurrentPages() //获取加载的页面
        if (pages.length - 1 - (index || 0) < 0) {
            return "";
        }

        var currentPage = pages[pages.length - 1 - (index || 0)] //获取当前页面的对象
        var url = currentPage.route //当前页面url
        return url
    },
    getCurrentPageUrlWithArgs: function (index) {
        var pages = getCurrentPages() //获取加载的页面
        if (pages.length - 1 - (index || 0) < 0){
            return "";
        }

        var currentPage = pages[pages.length - 1 - (index || 0)] //获取当前页面的对象
        var url = currentPage.route //当前页面url
        var options = currentPage.options //如果要获取url中所带的参数可以查看options

        //拼接url的参数
        var urlWithArgs = url + '?'
        for (var key in options) {
            var value = options[key]
            urlWithArgs += key + '=' + value + '&'
        }
        urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

        return urlWithArgs
    },
    getImageInfo: function(img_url) {
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
    getImageStyle: function(width, height) {
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
    getUser: function() {
        return this.globalData.userInfo;
    },
    dateFormat: function() {
        Date.prototype.format = function(format) {
            var date = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
                        date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return format;
        }
    },
    timestampFormat: function(timestamp) {
        function zeroize(num) {
            return (String(num).length == 1 ? '0' : '') + num;
        }

        var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
        var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

        var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
        var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

        var Y = tmDate.getFullYear(),
            m = tmDate.getMonth() + 1,
            d = tmDate.getDate();
        var H = tmDate.getHours(),
            i = tmDate.getMinutes(),
            s = tmDate.getSeconds();

        if (timestampDiff < 60) { // 一分钟以内
            return "刚刚";
        } else if (timestampDiff < 3600) { // 一小时前之内
            return Math.floor(timestampDiff / 60) + "分钟前";
        } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
            return '今天' + zeroize(H) + ':' + zeroize(i);
        } else {
            var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
            if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
                return '昨天' + zeroize(H) + ':' + zeroize(i);
            } else if (curDate.getFullYear() == Y) {
                return zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
            } else {
                return Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
            }
        }
    }
});