<style>
.sysLoading {
    background: #000;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9000;
    opacity: .5;
    display: none;
}

.ion-loading-c {
    background: url('//img.aimoge.com/FqA7Kv6H770AcP8_gNy1rf_nqJMH') 0 0 no-repeat;
    display: inline-block;
    background-size: 70% 70%;
    background-position: center center;
    position: relative;
    top: 10px;
}

.sysLoading i.ion-loading-c {
    width: 32px;
    height: 32px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -15px;
}

.input {
    height: 49px;
}

.input input {
    height: 30px;
    padding: 0;
    width: 100%;
    line-height: 30px;
    position: relative;
    top: 9px;
}

.ubtn a {
    display: block;
    width: 48%;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
}

.ubtn .button-energized {
    background-color: #ECA33E;
}

.ubtn .button-blank {
    background-color: #ccc;
}

.ubtn .button-energized:active {
    background-color: #CF8826;
}

.ubtn .button-blank:active {
    background-color: #A29E9E;
}

.login {
    display: block;
    background-color: #008cff;
    color: #fff;
    height: 44px;
    line-height: 44px;
    border-radius: 5px;
    position: relative;
    margin: 0 20px 0 20px;
}

.login:active {
    background-color: #056FC7;
}

.use_voice_code {
    position: fixed;
    width: 80%;
    background: #fff;
    padding: 15px 5%;
    left: 50%;
    margin-left: -45%;
    top: 30%;
    z-index: 9100;
    display: none;
}

.utips {
    margin: 10px 0;
}

.notice {
    text-align: center;
    color: #ccc;
    margin-top: 22px;
    line-height: 17px;
    font-size: 12px;
}

.notice a,
.notice a:visited {
    color: #008cff;
    /* text-decoration: underline; */
}

.form {
    background-color: #fff;
    margin: 0 5%;
}

.form .sprite {
    display: block;
    width: 32px;
    height: 20px;
    border-right: 1px #eee solid;
    padding-right: 14px;
    margin-right: 10px;
    position: relative;
    top: 12px;
    left: 0;
}

.form .mobile .sprite:before,
.form .code .sprite:before {
    background-position: -192px 0;
    margin-left: -20px;
    -webkit-transform: scale(.6);
    top: -1px;
}

.form .code .sprite:before {
    background-position: -256px 0;
}

.form .getcode a {
    background-color: #008cff;
    color: #fff;
    height: 49px;
    line-height: 49px;
    display: block;
    width: 115px;
}

.form .getcode a:active,
.getcode a:visited {
    background-color: #7fc5ff;
    color: #fff;
}

.form a.disabled {
    background-color: #7fc5ff;
}

.form a.disabled:active {
    background-color: #7fc5ff;
}

.voice-code {
    margin: 15px 0;
    text-align: center;
    color: #999;
    font-size: 12px;
}

.voice-code a,
.voice-code a:visited {
    color: #008cff;
}

.imgCode {
    display: none;
    width: 280px;
    height: 180px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background-color: #fff;
    z-index: 30000;
    left: 50%;
    margin-left: -140px;
    top: 28%;
    padding: 23px 35px;
    border-radius: 8px;
}

.div {
    width: 150px;
    height: 50px;
    margin: 0 auto;
}

.div img {
    width: 150px;
    height: 50px;
    border: none;
}

.reflush {
    background: url(//img.aimoge.com/FvsVMv1Umg5JsDSN0Uz-vZE2EYqs) center center no-repeat;
    background-size: 12px;
    width: 30px;
    height: 50px;
    top: 0;
    right: -33px;
}

.reflush:active {
    background-color: #fafafa;
}

.ok {
    color: #4285f4;
    border: 1px #4285f4 solid;
    text-align: center;
    border-radius: 22px;
    height: 26px;
    line-height: 26px;
    margin-top: 15px;
}

.ok:active {
    background-color: #eee;
}

.closePic {
    background: transparent;
    width: 20px;
    height: 20px;
    top: 8px;
    left: 15px;
}

.picode {
    margin: 12px 0 0 0;
    border-bottom: 1px #4d4d4d solid;
    height: 28px;
    line-height: 28px;
}

.picode input {
    color: #4d4d4d;
    height: 24px;
    width: 100%;
    line-height: 24px;
    text-align: center;
    font-size: 14px;
}

@media (max-width: 320px) {
    .form .getcode a {
        width: 95px;
    }
}
</style>

<template>
    <div class="app_login">
        <div class="imgCode fixed" id="imgCode">
            <img src="//img.aimoge.com/FgSgIducS7NfJNk-ZqN933p7JEaJ" class="abs closePic" @click="hideImgCode">
            <div class="pic rel">
                <div class="div rel">
                    <img id="captchacode_image" />
                    <div class="reflush abs" @click="loadCaptchacodeIamge"></div>
                </div>
                <div class="picode rel">
                    <input id="captchacode_code" type="text" placeholder="填写验证码" />
                </div>
                <div class="ok rel" @click="doNextSendAction">提交</div>
            </div>
        </div>
        <div id="container" class="container rel">
            <div style="height: 300px;">
                <div class="loginWarp">
                    <div class="center" style="margin: 0;height: 103px;line-height: 103px;">
                        <img class="imgReset" src="//img.aimoge.com/FsydS4Yr0ugjpawxX7zcKDd4PNZP" style="width:120px;margin-top:30px;" />
                    </div>
                    <div class="form">
                        <div class="formitem flex  mobile" style="border-bottom: 1px #eee solid;">
                            <div class="sprite ml32"></div>
                            <div class="input flexmodel">
                                <input type="tel" name="user_tele" class="block f16" placeholder="请填写手机号" maxlength="11" id="mobile" />
                            </div>
                        </div>
                        <div class="formitem flex code">
                            <div class="sprite ml32"></div>
                            <div class="input flexmodel">
                                <input type="tel" name="user_tele_code" class="block f16" placeholder="输入验证码" id="code" />
                            </div>
                            <div class="getcode">
                                <a id="getCode" href="javascript:;" class="center f16" @click="sendCode" >获取验证码</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="voice-code" @click="confirmVoiceCode">短信验证码收不到？试试
                    <a href="javascript:;">语音验证码</a>
                </p>
                <div id="control_btn" class="rel center" style="display: block;">
                    <a href="javascript:;" @click="login" class="login f16 bold">注册</a>
                </div>
                <div class="notice f14">
                    <p>点击注册，即表示已阅读并同意
                        <a href="javascript:;">《格格+用户协议》</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="use_voice_code">
            <div class="ut f18">
                收不到短信，试试语音验证码吧？
            </div>
            <div class="utips">
                发送语音验证码后会收到客服语音来电，提示登录验证码。
            </div>
            <div class="ubtn">
                <a href="javascript:;" @click="confirmVoiceCode" class="button-energized fl">是</a>
                <a href="javascript:;" @click="cancelVoiceCode" class="button-blank fr">否</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            next_send_action:false,
            captcha_code:''
        }
     },
    beforeCreate() {
        if(window.uid && window.is_logged){
            if(this.$route.query.next_url){
                 window.location.href = this.$route.query.next_url;
            }else{
                this.url(this.$route.query.page_url || "/ncshop/order", {}, true);
            }
        }
    },
    mounted() {
        this.addLinkTouchEvent();
    },
    methods: {
        showImgCode() {
            $('#layer').addClass('layer-visible');
            $('#imgCode').show();
        },
        hideImgCode() {
            $('#layer').removeClass('layer-visible');
            $('#imgCode').hide();
        },
        showSysLoading() {
            $('#sysLoading').show();
        },
        hideSysLoading() {
            $('#sysLoading').hide();
        },
        closeDialog() {
            $('#layer, .use_voice_code').hide();
        },
        reflush() {
            window.location.reload();
        },
        addLinkTouchEvent() {
            setTimeout(function () {
                var a = document.getElementsByTagName('a');
                for (var i = 0; i < a.length; i++) {
                    a[i].addEventListener('touchstart', function () { }, false);
                }
            }, 500);
        },
        loadCaptchacodeIamge() {
            MGUser.getcaptchacode(function (isSuccess, image_name) {
                if (isSuccess) {
                    $("#captchacode_image")[0].src = "//img.aimoge.com/" + image_name.substring(0, 28);
                    $("#captchacode_code").focus();
                }
            });
        },
        doNextSendAction() {
            if (this.next_send_action) {
               this.captcha_code = $("#captchacode_code").val();
                if (!this.captcha_code) {
                    return _util.showErrorTip('验证码不可以空!');
                }
                this.next_send_action(this.captcha_code);
                this.next_send_action = false;
                this.hideImgCode();
            }
        },
        sendCode(captcha_code) {
            let that=this;
            var $getCode = $('#getCode');
            if ($getCode.hasClass('disabled')) return false;
            MGUser.getcode($('#mobile').val(), function (isSuccess, result) {
                isSuccess ? _util.showSuccessTip('发送验证码成功！') : that.captcha_code='';_util.showErrorTip(result);
            }, function (isEnd, send_code_delay) {
                if (isEnd) {
                    $('.use_voice_code').show();
                    $('#layer').addClass('layer-visible');
                    $getCode.removeClass('disabled').text('获取验证码');
                } else {
                    $getCode.addClass('disabled').text(send_code_delay + 's');
                }
            }, that.captcha_code || '', function () {
                $('#captchacode_code').val('');
                that.next_send_action = that.sendCode;
                that.showImgCode();
                that.loadCaptchacodeIamge();
            });
        },
        confirmVoiceCode(captcha_code) {
            let that=this;
            var $getCode = $('#getCode');
            that.cancelVoiceCode();
            MGUser.getvoicecode($('#mobile').val(), function (isSuccess, result) {
                isSuccess ? _util.showSuccessTip('发送语言验证码成功!') : console.log(result); _util.showErrorTip(result);
            }, function (isEnd, send_code_delay) {
                if (isEnd) {
                    $getCode.removeClass('disabled').text('获取验证码');
                } else {
                    $getCode.addClass('disabled').text(send_code_delay + 's');
                }
            }, that.captcha_code || '', function () {
                that.next_send_action = that.confirmVoiceCode;
                that.showImgCode();
                that.loadCaptchacodeIamge();
            });
        },
        cancelVoiceCode() {
            $('.use_voice_code').hide();
            $('#layer').removeClass('layer-visible');
        },
        login() {
            let that=this;
            var mobile = $('#mobile').val(),
                code = $('#code').val();
            if ($('#sysLoading').is(':visible')) return false;
            if (!/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|17[0-9]{9})$/.test(mobile)) {
                _util.showErrorTip('请填写正确的11位手机号码!');
                return false;
            }
            if (!code) {
                _util.showErrorTip('请输入验证码!');
                return false;
            }
            that.showSysLoading();
            MGUser.login(mobile, code, '', function (isSuccess, result) {
                if (isSuccess) {
                    window.uid = result._id;
                    window.is_logged = !!window.uid;
                    if(that.$route.query.next_url){
                         that.hideSysLoading();
                         window.location.href = that.$route.query.next_url;
                    }else{
                        that.hideSysLoading();
                        that.url(that.$route.query.page_url, {}, true);
                    }
                   
                } else {
                    that.hideSysLoading();
                    _util.showErrorTip(result);
                }
            });
        }
    }
}
</script>


