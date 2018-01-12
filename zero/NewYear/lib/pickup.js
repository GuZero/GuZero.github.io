var lastTime = null;

function getQueryString(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : '';
}

function isWeixin() {
    return window.navigator.userAgent.indexOf("MicroMessenger") > 0;
}

function showSuccessTip(txt) {
    if (!txt) return false;
    $("#mgAlert").css('top', '35%').removeClass("mgAlert-success mgAlert-error showAlert hideAlert");
    var mgAlert = $("#mgAlert").addClass("mgAlert-success showAlert").html(txt);
    var timer = null;
    timer = setTimeout(function() {
        mgAlert.removeClass("showAlert").addClass('hideAlert');
        setTimeout(function() {
            mgAlert.css('top', '-35%');
        }, 300);
        clearTimeout(timer);
        timer = null;
    }, 2500);
}

function showErrorTip(txt) {
    if (!txt) return false;
    $("#mgAlert").css('top', '35%').removeClass("mgAlert-success mgAlert-error showAlert hideAlert");
    var mgAlert = $("#mgAlert").addClass("mgAlert-error showAlert").html(txt);
    var timer = null;
    timer = setTimeout(function() {
        mgAlert.removeClass("showAlert").addClass('hideAlert');
        setTimeout(function() {
            mgAlert.css('top', '-35%');
        }, 300);
        clearTimeout(timer);
        timer = null;
    }, 2500);
}

function showSysLoading() {
    $('#sysLoading').show();
}

function hideSysLoading() {
    $('#sysLoading').hide();
}

function showImgCode() {
    $('#layer').addClass('layer-visible');
    $('#imgCode').show();
}

function hideImgCode() {
    $('#layer').removeClass('layer-visible');
    $('#imgCode').hide();
}

function loadCaptchacodeIamge() {
    $("#captchacode_image")[0].src = '';
    var curTime = (new Date()).getTime();
    if ((curTime - lastTime) < 1500) { //如果是在1.5秒内
        return false;
    }
    lastTime = (new Date()).getTime();
    MGUser.getcaptchacode(function(isSuccess, image_name) {
        if (isSuccess) {
            $("#captchacode_image")[0].src = "//img.aimoge.com/" + image_name.substring(0, 28);
            $("#captchacode_code").focus();
        }
    });
}

function doNextSendAction() {
    if (next_send_action) {
        var captcha_code = $("#captchacode_code").val();
        if (!captcha_code) {
            return showErrorTip('验证码不可以空!');
        }
        next_send_action(captcha_code);
        next_send_action = false;
        hideImgCode();
    }
}

function sendCode(captcha_code) {
    var $getCode = $('#getCode');
    if ($getCode.hasClass('disabled')) return false;
    MGUser.getcode($('#mobile').val(), function(isSuccess, result) {
        isSuccess ? showSuccessTip('发送验证码成功！') : showErrorTip(result);
    }, function(isEnd, send_code_delay) {
        if (isEnd) {
            $getCode.removeClass('disabled').text('获取验证码');
        } else {
            $getCode.addClass('disabled').text(send_code_delay + 's');
        }
    }, captcha_code || '', function() {
        next_send_action = sendCode;
        showImgCode();
        loadCaptchacodeIamge();
    });
}

function login() {
    var mobile = $('#mobile').val(),
        code = $('#code').val();
    if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(mobile)) {
        showErrorTip('请填写正确的11位手机号码!');
        return false;
    }
    if (!code) {
        showErrorTip('请输入验证码!');
        return false;
    }
    showSysLoading();
    MGUser.login(mobile, code, '', function(isSuccess, result) {
        if (isSuccess) {
            window.location.href = '/';
        } else {
            hideSysLoading();
            showErrorTip(result);
        }
    });
}

function getDeviceInfo() {
    var info = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1);
    info = info.substring(0, info.indexOf(")"));
    var deviceInfo = {
        os: '',
        osver: '',
        phonemodel: '',
        udid: window.uid || '',
        app_name: 'gegewap',
        network: navigator.connection ? navigator.connection.type : '',
        appver: ''
    };
    if (window.navigator.userAgent.indexOf("gege") > -1) {
        deviceInfo.appver = window.navigator.userAgent.split(" ")[0];
    }
    if (info.indexOf("iPhone") >= 0) {
        deviceInfo.os = "ios";
        if (window.navigator.userAgent.indexOf("gege") > -1) {
            deviceInfo.osver = info.split(";")[1].split(" ")[2];
        } else {
            deviceInfo.osver = info.substring(info.indexOf("_") - 1, info.indexOf("_") + 2).replace("_", ".");
        }
        deviceInfo.phonemodel = "iPhone";
    } else if (info.indexOf("Android") > 0) {
        deviceInfo.os = "Android";
        info = info.substring(info.indexOf("Android"));
        info = info.split("; ");
        deviceInfo.osver = info[0].split(" ")[1];
        deviceInfo.phonemodel = info[info.length - 1];
    }
    if (isWeixin()) {
        if (window.wxid) {
            deviceInfo.weixin_id = window.wxid;
        }
        if (window.open_id) {
            deviceInfo.open_id = window.open_id;
        }
    }
    return deviceInfo;
}

function log(callback) {
    var device_info = getDeviceInfo();
    $.ajax({
        "type": "POST",
        "url": "//log.aimoge.com/v1/logistic",
        "data": {
            "d": device_info.phonemodel,
            "an": device_info.app_name,
            "av": device_info.appver,
            "os": device_info.os,
            "ov": device_info.osver,
            "s": window.screen.width + "x" + window.screen.height,
            "n": device_info.network,
            "a": "click",
            "t": parseInt((new Date()).getTime() / 1000),
            'ui': window.uid || undefined,
            'url': window.location.href,
            "ckn": "pickup_sample_taobao",
            "ckr": "",
            "city_id": window.city_id || 0,
            "terminal_code": window.terminal_code
        },
        'xhrFields': {
            withCredentials: true
        },
        success: function(d) {
            if (callback) callback(d);
        },
        error: function(d) {
            showErrorTip('网络错误，请稍后再试！', 1);
        }
    });
}

function log_view(callback) {
    var device_info = getDeviceInfo();
    $.ajax({
        "type": "POST",
        "url": "//log.aimoge.com/v1/logistic",
        "data": {
            "d": device_info.phonemodel,
            "an": device_info.app_name,
            "av": device_info.appver,
            "os": device_info.os,
            "ov": device_info.osver,
            "s": window.screen.width + "x" + window.screen.height,
            "n": device_info.network,
            "a": "pickup_sample_view",
            "t": parseInt((new Date()).getTime() / 1000),
            'ui': window.uid || undefined,
            'cvm': window.location.href,
            "terminal_code": window.terminal_code
        },
        'xhrFields': {
            withCredentials: true
        },
        success: function(d) {
            if (callback) callback(d);
        },
        error: function(d) {
            showErrorTip('网络错误，请稍后再试！', 1);
        }
    });
}

function openPackage(e) {
    e.stopPropagation();
    e.preventDefault();
    login();
}
$(document).ready(function() {
    //判断是否登录，若登录则判断是否有样品，若无则继续走下面的流程
    // log_view();
    // MGUser.getUser(function(response) {
    //     if (response && !$.isEmptyObject(response)) {
    //         window.uid = response._id;
    //         window.is_login = true;
    //         $("#form-content").hide();
    //         $("#form").addClass('hide');
    //     }
    // })
});