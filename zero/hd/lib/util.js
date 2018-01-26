var _util = (function(mod) {
    mod.config = {
        API: '//api.dev.aimoge.com/v1',
        BASE_URL: window.location.host,
        // PAY: '//pay.aimoge.com/v1',
        PAY: '//pay.' + window.location.host.substring(2) + '/v1',
        PREFIX_API: '//api.aimoge.com/v1'
    }
    mod.showErrorTip = function(txt) {
        if (!txt) return false;
        var mgAlert = document.getElementById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-error showAlert');
        mgAlert.innerHTML = txt;
        if (window.errorTimer) {
            clearTimeout(window.errorTimer);
            window.errorTimer = null;
        }
        window.errorTimer = setTimeout(function() {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function() {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2000);
    }
    mod.ajaxData = function(method, url, data, callback) {
        $.ajax({
            type: method || 'get',
            data: data,
            url: url,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                if (callback) callback(data);
            },
            error: function(data) {
                mod.showErrorTip(data.msg);
            }
        })
    }
    mod.isWeixin = function() {
        return window.navigator.userAgent.indexOf("MicroMessenger") > 0;
    }
    mod.getUrlPrmt = function(url) {
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
    }
    mod.dateFormat = function() {
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
    }
    mod.initJWeiXin = function() {
        if (window.wxid && mod.isWeixin()) {
            mod.ajaxData('GET', mod.config.API + '/weixin/' + window.wxid + '/config?url=' + encodeURIComponent(window.wxUrl || window.location.href), null,
                function(data) {
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
                function(err) {
                    mod.showErrorTip('网络异常,该页面将无法正常执行！');
                })
        }
    }
    return mod
})(window._util || {})