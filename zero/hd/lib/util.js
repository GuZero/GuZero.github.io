var _util = (function(mod) {
    mod.config = {
        API: '//api.dev.aimoge.com/v1',
        BASE_URL: window.location.host,
        PAY: '//pay.aimoge.com/v1'
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
    return mod
})(window._util || {})