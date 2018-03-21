module.exports = {
    initDomEvents: function() {
        String.prototype.trim = function() {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        };
    },
    urlencode: function(data) {
      var ds = [];
      for (var name in data) {
        if (name && data[name] && data.hasOwnProperty(name)) {
          ds.push("" + name + "=" + (encodeURIComponent(data[name])));
        }
      }
      return ds.join("&");
    },
    getById: function(id) {
        if (!id) return null;
        return document.getElementById(id);
    },
    showErrorTip: function(txt) {
        if (!txt) return false;
        var mgAlert = this.getById("mgAlert");
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
    },
    showSuccessTip: function(txt) {
        if (!txt) return false;
        var mgAlert = this.getById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-success showAlert');
        mgAlert.innerHTML = txt;
        setTimeout(function() {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function() {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2500);
    },
    getDeviceInfo: function() {
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
    },
    isWeixin: function() {
        return window.navigator.userAgent.indexOf("MicroMessenger") > 0;
    },
    isApp: function() {
        return window.navigator.userAgent.indexOf("gegemis") >= 0;
    },
    isIOS: function() {
        var info = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1);
        info = info.substring(0, info.indexOf(")"));
        return info.indexOf("iPhone") >= 0;
    },
    isAndriod: function() {
        var info = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1);
        info = info.substring(0, info.indexOf(")"));
        return info.indexOf("Android") >= 0;
    },
    addLinkTouchEvent: function() {
        setTimeout(function() {
            var a = document.getElementsByTagName('a');
            for (var i = 0; i < a.length; i++) {
                a[i].addEventListener('touchstart', function() {}, false);
            }
        }, 500);
    },
    getImageInfo: function(img_url) {
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
    getImageRealSize: function(width, height, baseWidth) {
        baseWidth = !!baseWidth ? baseWidth : window.innerWidth;
        return {
            height: (baseWidth * height) / width,
            width: baseWidth
        };
    },
    showSysLoading: function() {
        this.getById('sysLoading').show();
    },
    hideSysLoading: function() {
        this.getById('sysLoading').hide();
    },
    changePageTitle: function(title) {
        document.title = title;
    }

};