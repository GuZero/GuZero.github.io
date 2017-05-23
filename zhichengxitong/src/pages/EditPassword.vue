<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60
            div.input.rel
                div.tag.abs 新&nbsp;&nbsp;密&nbsp;&nbsp;码：
                div.box.rel
                    input(placeholder="请输入新密码", v-model="pass" type="password")
            div.input.rel
                div.tag.abs 确认密码：
                div.box.rel
                    input(placeholder="请再次输入新密码", v-model="repass" type="password")
        SubmitBtn(@submitCallback="edit", text="完成")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import SubmitBtn from '../components/elements/SubmitBtn'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '修改密码',
                pass: '',
                repass: ''
            }
        },
        components: {
            HeaderBar,
            SubmitBtn
        },
        methods: {
            edit() {
                let that = this;
                if (!that.pass) {
                    _util.showErrorTip('请输入新密码！');
                    return false;
                }
                if (!that.repass) {
                    _util.showErrorTip('请确认新密码！');
                    return false;
                }
                if (that.pass != that.repass) {
                    _util.showErrorTip('两次输入密码不一致！');
                    return false;
                }
                _util.showSysLoading();
                axios.post(ajaxUrls.editPass, {
                    password: that.pass,
                    password_confirmation: that.repass
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        window.userJson = null;
                        window.is_logged = false;
                        that.url('/login');
                    } else {
                        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                    }
                });
            }
        }
    }

</script>

<style lang="sass" scoped>
    .mt44.pb60 {
        padding: 124px 16px 60px 16px;
    }
    
    .input {
        padding: 8px 0 8px 90px;
        font-size: 16px;
        border-bottom: 2px #6e6e6e solid;
        margin-bottom: 26px;
        .tag {
            left: 0;
            top: 10px;
        }
        .box {
            font-size: 16px;
            input {
                border: none;
                font-size: 16px;
                width: 100%;
                height: 26px;
                line-height: 26px;
            }
        }
    }

</style>
