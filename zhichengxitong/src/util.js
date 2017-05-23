module.exports = {
    initDomEvents: function () {
        String.prototype.trim = function () {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        };

        Element.prototype.hasClassName = function (a) {
            return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
        };

        Element.prototype.addClassName = function (a) {
            if (!this.hasClassName(a)) {
                this.className = [this.className, a].join(" ");
            }
            return this;
        };

        Element.prototype.removeClassName = function (b) {
            if (this.hasClassName(b)) {
                var a = this.className;
                this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
            }
            return this;
        };

        Element.prototype.toggleClassName = function (a) {
            this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
            return this;
        };

        Element.prototype.show = function () {
            this.style.display = 'block';
        };

        Element.prototype.hide = function () {
            this.style.display = 'none';
        };

        Element.prototype.toggle = function () {
            var display = this.style.display;
            this.style.display = display == 'block' ? 'none' : 'block';
        };
    }

    , initScroll: function () {
        document.body.scrollTop = window.scrollTop || 0;
    }

    , scrollToTop: function () {
        document.body.scrollTop = 0;
    }

    , goback: function () {
        var state = window.history.state ? true : false,
            isInfo = window.location.href.indexOf('/topic/') > -1,
            indexUrl = location.href.split('forum')[0] + 'forum';
        if (!state) {
            isInfo ? (window.location.href = '/forum', window.history.replaceState(null, "", indexUrl)) : window.history.back();
        } else {
            window.history.back();
        }
    }

    , getById: function (id) {
        if (!id) return null;
        return document.getElementById(id);
    }

    , showErrorTip: function (txt) {
        if (!txt) return false;
        var mgAlert = this.getById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-error showAlert');
        mgAlert.innerHTML = txt;
        setTimeout(function () {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function () {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2500);
    }

    , showSuccessTip: function (txt) {
        if (!txt) return false;
        var mgAlert = this.getById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-success showAlert');
        mgAlert.innerHTML = txt;
        setTimeout(function () {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function () {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2500);
    }

    , getDeviceInfo: function () {
        var a = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1);
        a = a.substring(0, a.indexOf(")"));
        var b = {
            os: "",
            osver: "",
            phonemodel: "",
            udid: window.uid || "",
            app_name: "gegewap",
            network: navigator.connection ? navigator.connection.type : "",
            appver: ""
        };
        return 0 == a.indexOf("iPhone") ? (b.os = "ios",
            b.osver = a.substring(a.indexOf("_") - 1, a.indexOf("_") + 2).replace("_", "."),
            b.phonemodel = "iPhone") : a.indexOf("Android") > 0 && (b.os = "Android",
                a = a.substring(a.indexOf("Android")),
                a = a.split("; "),
                b.osver = a[0].split(" ")[1],
                b.phonemodel = a[a.length - 1]),
        this.isWeixin() && (window.wxid && (b.weixin_id = window.wxid),
        window.open_id && (b.open_id = window.open_id)),
            b
    }

    , isWeixin: function () {
        return window.navigator.userAgent.indexOf("MicroMessenger") > 0;
    }

    , addLinkTouchEvent: function () {
        setTimeout(function () {
            var a = document.getElementsByTagName('a');
            for (var i = 0; i < a.length; i++) {
                a[i].addEventListener('touchstart', function () {
                }, false);
            }
        }, 500);
    }

    , getImageInfo: function (img_url) {
        if (!img_url) return null;
        var img_id = img_url.substr(0, 28);
        var img_info = img_url.substr(29).split("_");
        var wh = (img_info[0] || "0x0").split("x");
        var st = (img_info[0] || "0.").split(".");
        return {
            "img": img_url,
            "img_id": img_id,
            "src": window.config.IMG + img_id,
            "width": parseInt(wh[0] || 0),
            "height": parseInt(wh[1] || 0),
            "size": parseInt(st[0] || 0),
            "mime_type": st[1] || ""
        }
    }

    , getImageStyle: function (width, height) {
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
    }

    , getImageRealSize: function (width, height, baseWidth) {
        baseWidth = !!baseWidth ? baseWidth : window.innerWidth;
        return {
            height: (baseWidth * height) / width,
            width: baseWidth
        };
    }

    , showMgLoadingWarp: function () {
        this.getById('mgLoadingWarp').show();
    }

    , hideMgLoadingWarp: function () {
        this.getById('mgLoadingWarp').hide();
    }

    , showSysLoading: function () {
        this.getById('sysLoading').show();
    }

    , hideSysLoading: function () {
        this.getById('sysLoading').hide();
    }

    , changePageTitle: function (title) {
        document.title = title;
    }

    , createXMLHttpRequest: function () {
        var _XMLHttpReq = null;
        try {
            _XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (E) {
            try {
                _XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                _XMLHttpReq = new XMLHttpRequest();
            }
        }
        return _XMLHttpReq;
    }

    , sendAjaxRequest: function (url, method, data, callback) {
        var _XMLHttpReq = this.createXMLHttpRequest();

        function processResponse() {
            if (_XMLHttpReq.readyState == 4) {
                if (_XMLHttpReq.status == 200) {
                    var text = _XMLHttpReq.responseText, data = null;
                    //实现回调
                    // text = window.decodeURI(text);
                    data = JSON.parse(text);
                    callback(data);
                }
            }
        }

        _XMLHttpReq.onreadystatechange = processResponse;
        _XMLHttpReq.open(method, url, true);
        _XMLHttpReq.withCredentials = true;
        _XMLHttpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if (method.toUpperCase() == 'GET')
            _XMLHttpReq.send();
        else
            _XMLHttpReq.send(data);
    },
}