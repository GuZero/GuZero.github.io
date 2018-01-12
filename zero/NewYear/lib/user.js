/**
 * Created by snower on 16/4/5.
 */
(function(window) {
    var MGUser = {};
    var send_code_type = 0,
        send_code_delay = 0,
        send_code_retry = 0,
        send_voice_code_retry = 0,
        send_tick_callback = false;
    var uid = null;
    var user_info = null;

    function getVerifyCode() {
        var current_time = (new Date()).getTime();
        var pv = parseInt(current_time / 1000) % 1000 + 100;
        current_time = current_time % 10 == 0 ? current_time + 1 : current_time;
        for (var x = 1; x <= 1000; x++) {
            for (var y = 1; y <= 10000; y++) {
                v = parseInt(Math.sqrt(y * y * (current_time % 10)) * Math.log(x * Math.sqrt(current_time), Math.E));
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

    function isWeixin() {
        return window.navigator.userAgent.indexOf("MicroMessenger") > 0;
    }

    function isAlipay() {
        return window.navigator.userAgent.indexOf("AlipayClient") > 0;
    }

    function isGegeApp() {
        return window.navigator.userAgent.substring(0, 4).toLowerCase() == "gege"
    }

    function checkMobile(mobile) {
        if (!mobile) {
            return "手机号不可为空";
        }

        if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(mobile)) {
            return '请填写正确的11位手机号码!';
        }
        return '';
    }

    function user_ajax(method, url, data, succed, error) {
        $.ajax({
            type: method,
            url: window.config.API + url,
            data: data,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                return succed(data);
            },
            error: function(data) {
                return error ? error(data) : 0;
            }
        });
    }

    function bindUser(callback) {
        if (isWeixin() && window.wxid && window.open_id) {
            user_ajax("POST", "/weixin/" + window.wxid + "/bind", { "open_id": window.open_id }, function() {
                callback();
            });
        } else if (isAlipay() && window.alipay_id && window.alipay_user_id) {
            user_ajax("POST", "/alipay/" + window.alipay_id + "/bind", { "user_id": window.alipay_user_id }, function() {
                callback();
            });
        } else {
            callback();
        }
    }

    function unbindUser(callback) {
        if (isWeixin() && window.wxid && window.open_id) {
            user_ajax("DELETE", "/weixin/" + window.wxid + "/bind?open_id=" + window.open_id, null, function() {
                callback();
            });
        } else if (isAlipay() && window.alipay_id && window.alipay_user_id) {
            user_ajax("DELETE", "/alipay/" + window.alipay_id + "/bind?user_id=" + window.alipay_user_id, null, function() {
                callback();
            });
        } else {
            callback();
        }
    }

    function next_send_tick() {
        if (send_code_delay > 0) {
            send_tick_callback(false, send_code_delay, send_code_type);
            send_code_delay--;
            setTimeout(next_send_tick, 1000);
        } else {
            send_tick_callback(true, send_code_delay, send_code_type);
            send_code_type = 0;
        }
    }

    MGUser.getcaptchacode = function(callback) {
        user_ajax("GET", "/captcha/code", null, function(data) {
            callback(data.status == 0, data.data.image_name || '');
        });
    };

    MGUser.getcode = function getcode(mobile, callback, tick_callback, captcha_code, captcha_callback) {
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

        user_ajax("GET", "/mobile/send/code/" + mobile + "?source=login&retry=" + send_code_retry + "&captcha_code=" + (captcha_code || "") + "&timestamp=" + code.timestamp + "&codex=" + code.x + "&codey=" + code.y, null, function(data) {
            if (data.status == 0) {
                send_code_type = 1;
                send_code_delay = 60;
                send_code_retry++;
                send_tick_callback = tick_callback;
                next_send_tick();
                return callback(true);
            } else if (data.status == 310) {
                if (captcha_callback) {
                    return captcha_callback();
                } else {
                    return callback(false, data.msg);
                }
            } else if (data.status == 301) {
                return callback(false, data.msg, true);
            }
            return callback(false, data.msg);
        });
    };

    MGUser.getvoicecode = function getvoicecode(mobile, callback, tick_callback, captcha_code, captcha_callback) {
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

        user_ajax("GET", "/mobile/voice/send/code/" + mobile + "?source=login&retry=" + send_voice_code_retry + "&captcha_code=" + (captcha_code || "") + "&timestamp=" + code.timestamp + "&codex=" + code.x + "&codey=" + code.y, null, function(data) {
            if (data.status == 0) {
                send_code_type = 2;
                send_code_delay = 20;
                send_voice_code_retry++;
                send_tick_callback = tick_callback;
                next_send_tick();
                return callback(true);
            } else if (data.status == 310) {
                if (captcha_callback) {
                    return captcha_callback();
                } else {
                    return callback(false, data.msg);
                }
            } else if (data.status == 301) {
                return callback(false, data.msg, true);
            }
            return callback(false, data.msg);
        });
    };

    MGUser.login = function login(mobile, code, login_for, callback) {
        var check_msg = checkMobile(mobile);
        if (check_msg != '') {
            return callback(false, check_msg);
        }

        if (!code) {
            return callback(false, "验证码不可为空");
        }

        var data = {
            mobile: mobile,
            code: code,
            login_for: login_for || 'web',
            longitude: 0,
            latitude: 0
        };

        user_ajax("POST", "/login", data, function(data) {
            if (data.status == 0) {
                user_info = data.data;
                bindUser(function() {
                    return callback ? callback(true, data.data) : 0;
                });
            } else if (data.status == 400) {
                return MGUser.register(mobile, callback);
            } else {
                return callback ? callback(false, data.msg) : 0;
            }
        });
    };

    MGUser.register = function register(username, callback) {
        var check_msg = checkMobile(username);
        if (check_msg != '') {
            return callback(false, check_msg);
        }

        var data = {
            username: username,
            nickname: username.substring(0, 3) + "****" + username.substring(username.length - 4),
            avatar: '',
            gender: 1,
            longitude: 0,
            latitude: 0,
            profession: '',
            interest: '',
            community: ''
        };

        if (isWeixin() && window.wxid && window.open_id) {
            data.weixin_id = window.wxid;
            data.open_id = window.open_id;
        }

        var promotion = window.store && window.store.get && window.store.get("promotion_id");
        if (promotion) {
            if (promotion.promotion_id && promotion.time && ((new Date()).getTime() / 1000) - 6 * 60 * 60 < promotion.time) {
                data.promotion_id = promotion.promotion_id;
            }
        }

        user_ajax("POST", "/register", data, function(data) {
            if (data.status == 0) {
                user_info = data.data;
                bindUser(function() {
                    return callback ? callback(true, data.data) : 0;
                });
            } else {
                return callback ? callback(false, data.msg) : 0;
            }
        });
    };

    MGUser.signin = function signin() {
        if (!uid) {
            return;
        }

        if (isGegeApp()) {
            return;
        }

        var data = {};
        if (isWeixin && window.wxid && window.open_id) {
            data["weixin_id"] = window.wxid;
            data["open_id"] = window.open_id;
        }

        user_ajax("POST", "/signin", data, function(data) {
            if (data.status == 0) {
                user_info = data.data;
                setTimeout(signin, 24 * 60 * 60 * 1000);
            } else {
                user_info = null;
            }
        });
    };

    MGUser.logout = function(callback) {
        unbindUser(function() {
            user_ajax("POST", "/logout", {}, function(data) {
                callback(data.status == 0, data.msg);
            });
        });
    };

    MGUser.getUser = function(callback) {
        if (user_info) {
            callback(user_info);
        }
        user_ajax("GET", "/user", null, function(data) {
            if (data.status == 0) {
                return callback(data.data);
            }
            return callback(null);
        });
    };

    MGUser.init = function(_uid) {
        uid = _uid;
    };
    setTimeout(MGUser.signin, 500);

    window.MGUser = MGUser;
})(window);