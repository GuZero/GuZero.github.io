<template lang="jade">
    div.md-login
        div.center.logo 运营支撑系统
        div.form
            div.formitem.flex.mobile
                div.sprites
                div.input.flexmodel
                    input.block.f16(type="text", v-model="username", placeholder="用户名", maxlength="11")
            div.formitem.flex.code
                div.sprites
                div.input.flexmodel
                    input.block.f16(type="password", v-model="code", placeholder="密码")
        div.rel.center#control_btn
            a.loginbtn.f16.bold(@click="login", href="javascript:;") 登录
</template>

<script>
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '登录',
                code: '',
                username: ''
            }
        },
        beforeCreate() {
            let that = this,
                query = this.$route.query,
                next_url = query && query.next_url ? query.next_url : '/';
            axios.get(ajaxUrls.isLogin)
                .then(function (rsp) {
                    if (rsp.data.status == 0) {
                        window.is_logged = true;
                        that.url(decodeURIComponent(next_url));
                    }
                })
        },
        created() {
            window.canGoBack = false;
            window.origin = null;
        },
        activated() {
            window.canGoBack = false;
            window.origin = null;
        },
        methods: {
            login() {
                let query = this.$route.query,
                    next_url = query && query.next_url ? query.next_url : '/',
                    username = this.username,
                    code = this.code,
                    that = this;
                if (_util.getById('sysLoading').style.display == 'block') return false;
                if (!username) {
                    _util.showErrorTip('请填写用户名!');
                    return false;
                }
                if (!code) {
                    _util.showErrorTip('请输入密码!');
                    return false;
                }
                _util.showSysLoading();
                axios.post(ajaxUrls.login, {
                    username: username,
                    password: code
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        window.userJson = rsp.data.data || null;
                        window.is_logged = true;
                        that.url(decodeURIComponent(next_url));
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                });
            }
        }
    }

</script>

<style lang="sass" scoped>
    $mobile: 'https://img.aimoge.com/Fseye1socv7wcHZNiEca2JGzTrGz';
    $pass: 'https://img.aimoge.com/Fj6ivplQiYNceEuZ5yE2vMPnVuaF';
    $blue: #3099ff;
    $disabledblue: rgba(48, 153, 255, 0.53);
    $btnactivecolor: #2876c2;
    .md-login {
        .logo {
            color: $blue;
            line-height: 100px;
            padding: 22px 0 10px 0;
            font-size: 28px;
            font-weight: bold;
        }
        .input {
            height: 49px;
            input {
                height: 30px;
                padding: 0;
                width: 100%;
                line-height: 30px;
                position: relative;
                top: 11px;
                width: 95%;
                border: none;
            }
        }
        .mobile,
        .code {
            border-bottom: 1px #eee solid;
        }
        .loginbtn {
            display: block;
            background-color: $blue;
            color: #fff;
            height: 44px;
            line-height: 44px;
            border-radius: 5px;
            position: relative;
            margin: 38px 20px 0 20px;
            &:active {
                background-color: $btnactivecolor;
            }
            &.disabled {
                &,
                &:active {
                    background-color: $disabledblue;
                }
            }
        }
        .form {
            background-color: #fff;
            margin: 0 5%;
            .sprites {
                display: block;
                width: 32px;
                height: 20px;
                padding-right: 5px;
                margin-right: 7px;
                position: relative;
                top: 12px;
                left: 0;
                &:before {
                    content: '';
                    background-image: url($mobile);
                    background-repeat: no-repeat;
                    background-size: 22px;
                    display: block;
                    height: 32px;
                    width: 32px;
                    position: absolute;
                    left: 12px;
                    top: -1px;
                }
            }
            .code {
                .sprites {
                    &:before {
                        background-image: url($pass);
                    }
                }
            }
        }
    }

</style>
