define(["layer", "axios"], function (layer, axios) {
    var _util = {};
    _util.config = {
        API: '//api.dev.aimoge.com/v1',
        BASE_URL: window.location.host,
        PAY: '//pay.dev.aimoge.com/v1',
        PREFIX_API: '//api.aimoge.com/v1'
    };
    _util.init = function () {
        _util.initAxios();
        _util.dateFormat();
        if (_util.config.BASE_URL.indexOf('dev') > -1) {
            _util.config.API = '//api.dev.aimoge.com/v1';
            _util.config.PAY = '//pay.dev.aimoge.com/v1';
        } else {
            _util.config.API = '//api.aimoge.com/v1';
            _util.config.PAY = '//pay.aimoge.com/v1';
        }
    };
    _util.initAxios = function () {
        axios.defaults.baseURL = _util.config.API;
        axios.defaults.withCredentials = true;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        axios.interceptors.request.use(function (config) {
            _util.showLoading('加载中...');
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
        axios.interceptors.response.use(function (res) {
            if (res.data != 0) {
                if (res.data.msg) _util.showErrorTip(res.data.msg);
            }
            return res.data
        }, function (error) {
            return Promise.resolve(error.response);
        })
    };
    _util.axios = function (opts, success) {
        var httpDefaultOpts = { //http 默认配置
            method: opts.method ? opts.method.toUpperCase() : 'GET',
            url: opts.url,
            timeout: 10000,
            data: opts.data || null
        }

        if (opts.method == 'GET') {
            delete httpDefaultOpts.data
        }

        axios(httpDefaultOpts).then(function (res) {
            _util.hideLoading();
            success(res);
        }).catch(function (err) {
            _util.hideLoading();
            _util.showErrorTip('网络异常,请稍后重试')
        })
    };
    _util.showErrorTip = function (txt) {
        if (!txt) return false;
        var mgAlert = document.getElementById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-error showAlert');
        mgAlert.innerHTML = txt;
        if (window.errorTimer) {
            clearTimeout(window.errorTimer);
            window.errorTimer = null;
        }
        window.errorTimer = setTimeout(function () {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function () {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2000);
    }
    _util.showLoading = function (text) {
        layer.open({
            type: 2,
            content: text || ""
        });
    };
    _util.hideLoading = function () {
        layer.closeAll();
    };
    _util.showTips = function (text) {
        layer.open({
            content: text,
            anim: false,
            time: 4,
            skin: 'msg'
        });
    };
    _util.ajaxData = function (method, url, data, callback) {
        $.ajax({
            type: method || 'get',
            data: data,
            url: url,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if (callback) callback(data);
            },
            error: function (data) {
                _util.showErrorTip(data.msg);
            }
        })
    };
    _util.isWeixin = function () {
        return window.navigator.userAgent.indexOf("MicroMessenger") > 0;
    };
    _util.getUrlPrmt = function (url) {
        url = url ? url : window.location.href;
        var _pa = url.substring(url.indexOf('?') + 1),
            _arrS = _pa.split('&'),
            _rs = {};
        for (var i = 0, _len = _arrS.length; i < _len; i++) {
            var pos = _arrS[i].indexOf('=');
            if (pos == -1) {
                continue;
            }
            var name = _arrS[i].substring(0, pos),
                value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
            _rs[name] = value;
        }
        return _rs;
    };
    _util.dateFormat = function () {
        Date.prototype.format = function (format) {
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
    };
    _util.initJWeiXin = function () {
        if (window.wxid && _util.isWeixin()) {
            _util.ajaxData('GET', _util.config.API + '/weixin/' + window.wxid + '/config?url=' + encodeURIComponent(window.wxUrl || window.location.href), null,
                function (data) {
                    if (data && data.status) {
                        wx.config({
                            debug: true,
                            appId: data.data.appId,
                            timestamp: data.data.timestamp,
                            nonceStr: data.data.noncestr,
                            signature: data.data.signature,
                            jsApiList: ['getLocation', 'checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'getNetworkType', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'scanQRCode', 'chooseWXPay', 'chooseImage', 'previewImage', 'getNetworkType', 'previewImage', 'uploadImage', 'getLocalImgData']
                        });
                    }
                },
                function (err) {
                    _util.showErrorTip('网络异常,该页面将无法正常执行！');
                })
        }
    };

    _util.init();

    return _util;
});