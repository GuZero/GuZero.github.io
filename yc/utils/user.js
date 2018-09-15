var app = getApp()
var send_code_type = 0, send_code_delay = 0, send_code_retry = 0, send_voice_code_retry = 0, tick_callback = false, send_tick_callback = false;
var uid = null;
var user_info = null;

function getVerifyCode() {
    var current_time = (new Date()).getTime();
    var pv = parseInt(current_time / 1000) % 1000 + 100;
    current_time = current_time % 10 == 0 ? current_time + 1 : current_time;
    for (var x = 1; x <= 1000; x++) {
        for (var y = 1; y <= 10000; y++) {
            var v = parseInt(Math.sqrt(y * y * (current_time % 10)) * Math.log(x * Math.sqrt(current_time), Math.E));
            if (v == pv) {
                return {
                    "timestamp": current_time,
                    "x": x,
                    "y": y
                }
            }
        }
    }
    return null;
}

function checkMobile(mobile) {
    if (!mobile) {
        return "手机号不可为空";
    }
    if (!/^(1[0-9]{10})$/.test(mobile)) {
        return '请填写正确的11位手机号码!';
    }
    return '';
}

function bindUser(callback) {
    if (app.globalData.wxid && app.globalData.openid) {
        app.ajax("POST", "/weixin/" + app.globalData.wxid + "/bind", { "open_id": app.globalData.openid }, function () {
            callback();
        });
    } else {
        callback();
    }
}

function unbindUser(callback) {
    if (app.globalData.wxid && app.globalData.openid) {
        app.ajax("DELETE", "/weixin/" + app.globalData.wxid + "/bind?open_id=" + app.globalData.openid, null, function () {
            callback();
        });
    }
    else {
        callback();
    }
}

function next_send_tick() {
    if (send_code_delay > 0) {
        send_tick_callback(false, send_code_delay, send_code_type);
        send_code_delay--;
        setTimeout(next_send_tick, 1000);
    }
    else {
        send_tick_callback(true, send_code_delay, send_code_type);
        send_code_type = 0;
    }
}

function getcaptchacode(callback) {
    app.ajax("GET", "/captcha/code", null, function (data) {
        callback(data.statusCode = 200 && data.data.status == 0, data.data.data.image_name || '');
    });
};

function getcode(mobile, callback, tick_callback, captchacode, captchacode_callback) {
    if (send_code_delay != 0) {
        return callback(false, "不可以重复发送");
    }

    var check_msg = checkMobile(mobile);
    if (check_msg != '') {
        return callback(false, check_msg);
    }

    var code = getVerifyCode();
    if (!code) {
        return callback(false, "网络错误");
    }
    app.ajax("GET", "/mobile/send/code/" + mobile + "?source=login&retry=" + send_code_retry + "&timestamp=" + code.timestamp + "&codex=" + code.x + "&codey=" + code.y + "&captcha_code=" + captchacode, null, function (data) {
        if (data.statusCode = 200) {
            if (data.data.status == 0) {
                send_code_type = 1;
                send_code_delay = 60;
                send_code_retry++;
                send_tick_callback = tick_callback;
                next_send_tick();
                return callback(true);
            }
            else if (data.data.status == 310) {
                return captchacode_callback();
            }
            else if (data.data.status == 301) {
                return callback(false, data.data.msg, true);
            }
            return callback(false, data.data.msg);
        } else {
            return callback(false, "网络错误，请刷新页面重试");
        }
    });
};

function getvoicecode(mobile, callback, tick_callback, captchacode, captchacode_callback) {
    if (send_code_delay != 0) {
        return callback(false, "不可以重复发送");
    }

    var check_msg = checkMobile(mobile);
    if (check_msg != '') {
        return callback(false, check_msg);
    }

    var code = getVerifyCode();
    if (!code) {
        return callback(false, "网络错误");
    }

    app.ajax("GET", "/mobile/voice/send/code/" + mobile + "?source=login&retry=" + send_voice_code_retry + "&timestamp=" + code.timestamp + "&codex=" + code.x + "&codey=" + code.y + "&captcha_code=" + captchacode, null, function (data) {

        if (data.statusCode = 200) {
            if (data.data.status == 0) {
                send_code_type = 2;
                send_code_delay = 20;
                send_voice_code_retry++;
                send_tick_callback = tick_callback;
                next_send_tick();
                return callback(true);
            }
            else if (data.data.status == 310) {
                return captchacode_callback();
            }
            else if (data.data.status == 301) {
                return callback(false, data.data.msg, true);
            }
            return callback(false, data.data.msg);
        } else {
            return callback(false, "网络错误，请刷新页面重试");
        }
    });
};

function getSystemInfo() {
    var data = {
        appver: '',
        os: '',
        phonemodel: '',
        network: '',
        osver: ''
    }
    wx.getNetworkType({
        success: function (res) {
            data.network = res.networkType
        },
        fail: function () {
        }
    })
    wx.getSystemInfo({
        success: function (res) {
            data.appver = res.version
            data.phonemodel = res.model
            data.os = res.system.split(' ')[0]
            data.osver = res.system.split(' ')[1]
        }
    })
    return data
}

function login(mobile, code, login_for, callback) {
    var check_msg = checkMobile(mobile);
    if (check_msg != '') {
        return callback(false, check_msg);
    }
    var systemData = getSystemInfo()
    if (!code) {
        return callback(false, "验证码不可为空");
    }
    var loginData = {
        mobile: mobile,
        code: code,
        login_for: login_for || 'web',
        longitude: 0,
        latitude: 0,
        udid: '',
        app_name: 'gegexcu',
        appver: systemData.appver,
        os: systemData.os,
        phonemodel: systemData.phonemodel,
        network: systemData.network,
        osver: systemData.osver
    };

    app.ajax("POST", "/login", loginData, function (data) {
        if (data.statusCode = 200) {
            if (data.data.status == 0) {
                user_info = data.data;
                bindUser(function () {
                    return callback ? callback(true, data.data) : 0;
                });
            }
            else if (data.data.status == 400) {
                return register(mobile, callback);
            }
            else {
                return callback ? callback(false, data.data.msg) : 0;
            }
        } else {
            return callback(false, "网络错误，请刷新页面重试");

        }
    });
};

function register(username, callback) {
    var check_msg = checkMobile(username);
    if (check_msg != '') {
        return callback(false, check_msg);
    }
    var systemData = getSystemInfo()
    var registerData = {
        username: username,
        nickname: username.substring(0, 3) + "****" + username.substring(username.length - 4),
        avatar: '',
        gender: 1,
        longitude: 0,
        latitude: 0,
        profession: '',
        interest: '',
        community: '',
        udid: '',
        app_name: 'gegexcu',
        appver: systemData.appver,
        os: systemData.os,
        phonemodel: systemData.phonemodel,
        network: systemData.network,
        osver: systemData.osver
    };

    if (app.globalData.wxid && app.globalData.openid) {
        registerData.weixin_id = app.globalData.wxid;
        registerData.open_id = app.globalData.openid;
    }

    app.ajax("POST", "/register", registerData, function (data) {

        if (data.statusCode = 200) {
            if (data.data.status == 0) {
                user_info = data.data.data;
                bindUser(function () {
                    return callback ? callback(true, data.data) : 0;
                });
            }
            else {
                return callback ? callback(false, data.data.msg) : 0;
            }
        } else {
            return callback(false, "网络错误，请刷新页面重试");

        }
    });
};

function logout(callback) {
    unbindUser(function () {
        app.ajax("POST", "/logout", {}, function (data) {
            callback(data.data.status == 0, data.data.msg);
        });
    });
};

function getUser(callback) {
    if (user_info) {
        callback(user_info);
    }
    app.ajax("GET", "/user", null, function (data) {
        if (data.statusCode = 200) {
            if (data.data.status == 0) {
                return callback(data.data.data);
            }
            return callback(null);
        } else {
        }
    });
};

function updateUser(data, callback){
    function doUpdateUser(){
        app.ajax("PUT", "/user", data, function (data) {
            if (data.statusCode = 200) {
                if (data.data.status == 0) {
                    return callback(data.data.data);
                }
                return callback(null);
            }
        });
    }
    

    if (data.avatar && data.avatar.indexOf("http") == 0){
        wx.downloadFile({ 
            "url": data.avatar,
            success: function (res) {
                if (res.statusCode == 200 && res.tempFilePath){
                    app.loadUploadToken(function(token){
                        if(token){
                            wx.uploadFile({
                                "url": "https://up.qbox.me",
                                "filePath": res.tempFilePath,
                                "name": "file",
                                formData: {
                                    'token': token.image_token,
                                    'x:source': 'smartcab/xiaochengxu'
                                },
                                success: function (res) {
                                    if (res.statusCode == 200){
                                        let avatar = JSON.parse(res.data);
                                        if (avatar.success){
                                            data.avatar = avatar.name;
                                            doUpdateUser();
                                        }
                                    }
                                }
                            })
                        }
                    })
                }
            }
        })
    }else{
        doUpdateUser();
    }
}

function init(_uid) {
    uid = _uid;
};
module.exports = {
    getVerifyCode: getVerifyCode,
    bindUser: bindUser,
    unbindUser: unbindUser,
    next_send_tick: next_send_tick,
    checkMobile: checkMobile,
    getcaptchacode: getcaptchacode,
    getcode: getcode,
    getvoicecode: getvoicecode,
    login: login,
    register: register,
    logout: logout,
    getUser: getUser,
    updateUser: updateUser
}
