<template lang="jade">
    div.mine
        HeaderBar(
            :title="pageTitle",
            :btnconfig="btnconfig",
            @logoutBtnCallback="logout"
        )
        div.mt44.pb60
            div.user.center.rel.graybt8
                img(src="//img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS")
                p {{username}}
            div.meta.rel.graybt2.none.pass(@click.stop.prevent="goToPassword")
                label.rel 修改密码
        FooterBar(:footerconfig="footerconfig")
        ModalDialog(ref="logoutModal", @confirmCallback="confirmLogut")
        ModalDialog(ref="aboutModal")
</template>
<script>
    import HeaderBar from '../components/common/Header'
    import FooterBar from '../components/common/Footer'
    import ModalDialog from '../components/elements/ModalDialog'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '我的',
                btnconfig: {
                    isgoback: 0,
                    islogout: true
                },
                footerconfig: {
                    ismine: true
                },
                test: 'asdfasd',
                username: ''
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            ModalDialog
        },
        created() {
            window.canGoBack = false;
            window.origin = null;
            let userJson = JSON.parse(window.localStorage.userJson || null);
            if (userJson) {
                this.username = userJson.realname;
            }
        },
        activated() {
            window.canGoBack = false;
            window.origin = null;
        },
        methods: {
            goToPassword() {
                this.url('/mine/password');
            },
            clearCache() {
                _util.showErrorTip('clearCache');
            },
            aboutApp() {
                this.$refs.aboutModal.showModal({
                    title: '版本更新',
                    text: `
                        <div>1. 版本更新介绍</div>
                        <div>2. 版本更新介绍</div>
                    `,
                    cancelText: '确定'
                });
            },
            logout() {
                this.$refs.logoutModal.showModal({
                    text: `确认退出登录？`
                });
            },
            confirmLogut() {
                let that = this;
                if (_util.getById('sysLoading').style.display == 'block') return false;
                _util.showSysLoading();
                axios.get(ajaxUrls.logout).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        window.localStorage.removeItem('userJson');
                        window.is_logged = false;
                        if (_util.isApp()) {
                            window.location.href ="gegemis:///Login";
                        }else{
                            that.url('/login');
                        }
                    } else {
                        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            }
        }
    }

</script>
<style>
    .gege-header a.iclogout {
        right: 0;
    }

</style>
<style lang="sass" scoped>
    .user {
        margin-bottom: 8px;
        img {
            border-radius: 100%;
            height: 64px;
            width: 64px;
            margin: 24px 0 12px 0;
        }
        p {
            margin: 0;
            padding: 0 16px 24px 16px;
        }
    }
    
    .meta {
        background-image: url('//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD');
        background-repeat: no-repeat;
        border-bottom: 1px #cfcfcf solid;
        padding: 16px 0 16px 54px;
        background-size: 30px auto;
        background-position: 98% center;
        label {
            display: block;
            &:after {
                background-size: 100% auto;
                content: '';
                display: block;
                position: absolute;
                width: 24px;
                height: 24px;
                left: -35px;
                top: 50%;
                margin-top: -12px;
                z-index: 22;
            }
        }
        &.pass label:after {
            background-image: url('//img.aimoge.com/Fuf9HuRe7Rxr0x7JDi43ZUyfLV-q')
        }
        &.clear label:after {
            background-image: url('//img.aimoge.com/Fm6RoQ1_c9OTyG_u4XX9RJWNQDlA')
        }
        &.about label:after {
            background-image: url('//img.aimoge.com/FqrWepR4_PZVxGu26BQzajnEF8p_')
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            background-color: #fff;
            width: 16px;
            height: 56px;
            left: 0;
            top: 0;
            z-index: 20
        }
        &:active,
        &:active:before {
            background-color: #eee;
        }
        &.graybt8 {
            &:before {
                display: none;
            }
            margin-bottom: 8px;
        }
        &.graybt2 {
            &:before {
                display: none;
            }
            margin-bottom: 2px;
        }
        &.none {
            border: none;
        }
    }

</style>
