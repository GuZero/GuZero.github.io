<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60
            div.user.center.rel
                img(src="//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8")
                p.bold {{ username }}的运维工单
                div.status.f12(v-if="data.status_code == 1")
                    label.rel.s1 {{ data.status }}
                div.status.f12(v-if="data.status_code == 4")
                    label.rel.s2 {{ data.status }}
                div.status.f12(v-if="data.status_code == 2")
                    label.rel.s3 {{ data.status }}        
                div.f12.status(v-if="completed")
                    label.rel 已完成
            div.graybt8.rel
                div.keys.rel
                    TextFiled.h22(tag="终端名称：", :text="data.terminalName")
                    TextFiled.h22(tag="故障等级：", :text="data.grade")
                    TextFiled.h22(tag="现场现象：", :text="data.scene", v-if="!completed")
                    TextFiled.h22(tag="现场现象（客服）：", :text="data.scene", v-if="completed", marginleft="130")
                    TextFiled.h22(tag="问题描述：", :text="data.desc")
                div.keys.rel(v-if="completed")
                    TextFiled(tag="现场现象（运维）：", :text="data.terminalName", marginleft="130")
                    TextFiled(tag="故障分类（运维）：", :text="data.terminalName", marginleft="130")
                    TextFiled(tag="问题原因：", :text="data.scene", marginleft="130")
                    TextFiled(tag="处理方式：", :text="data.scene", marginleft="130")
                    TextFiled(tag="处理结果：", :text="data.scene", marginleft="130")
                    TextFiled(tag="是否抓取日志：", :text="data.scene", marginleft="130")
            div.info.rel
                div.meta.rel(v-for="(item,index) in history",:class="{done:history.length-1==index}")
                    div.h5.rel  {{ item.opeator }} {{item.action}}
                    div.tms.f12.rel {{item.created_at}}
            SubmitBtn(v-if="isAuthor && !completed", text="删除", @submitCallback="showAlert('delete')") 删除
            div.btnGroup.fixed.flex(v-if="isAdmin && !completed")
                div.flexmodel.rel(@click="agree()") 同意
                div.flexmodel.rel(@click="refuse()") 拒绝
                div.flexmodel.rel(@click="showAlert('close')") 关闭
                div.flexmodel.rel.none(@click="showAlert('share')") 转发
        ModalDialog(ref="showalert", @confirmCallback="doAlertEvent")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import TextFiled from '../components/elements/Text'
    import SubmitBtn from '../components/elements/SubmitBtn'
    import ModalDialog from '../components/elements/ModalDialog'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '工单详情',
                bodyBg: 'white',
                username: 'jerry',
                completed: 0, //工单完成
                isAuthor: 0, //发布者身份
                isAdmin: 1, //审核者身份
                status: '',
                data: {
                    terminalName: '东亚逸品加装格格货栈',
                    grade: '一级故障',
                    scene: '系统错误，请稍后再试！',
                    desc: '运单号：24352346326，M0406/06号门，业主一键开柜丢件，调监控时间是2017-02-26 19:20:12，联系业主',
                    status_code: '',
                    status: ''
                },
                history: []
            }
        },
        computed: {
            completed() {
                return this.doneStatus1 && this.doneStatus2
            }
        },
        components: {
            HeaderBar,
            TextFiled,
            ModalDialog,
            SubmitBtn
        },
        watch: {
            '$route': 'getData'
        },
        mounted() {
            window.canGoBack = true;
            window.origin = null;
            document.body.scrollTop = 0;
            this.getData()
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
            document.body.scrollTop = 0;
            this.history=[];
            this.data.terminalName='';
            this.data.grade='';
            this.data.scene='';
            this.data.desc='';
            this.data.status_code='';
            this.data.username='';
            
        },
        methods: {
            doAlertEvent() {
                let type = this.alertId;
                if (type == 'delete') this.delete();
                if (type == 'agree') this.agree();
                if (type == 'refuse') this.refuse();
                if (type == 'close') this.close();
                if (type == 'share') this.share();
            },
            showAlert(id) {
                let title = ``;
                this.alertId = id;

                if (id == 'delete') {
                    title = `确认删除？`;
                }
                if (id == 'agree') {
                    title = `确认同意？`;
                }
                if (id == 'refuse') {
                    title = `确认拒绝？`;
                }
                if (id == 'close') {
                    title = `确认关闭工单？`;
                }
                if (id == 'share') {
                    title = `确认转发？`;
                }
                this.$refs.showalert.showModal({
                    title: title,
                    hideText: true
                });
            },
            delete() {
                _util.showErrorTip('delete');
            },
            agree() {
                if (this.status == "已完成") {
                    _util.showErrorTip('该工单已完成');
                    return false;
                }
                _util.showErrorTip('敬请期待！');
            },
            refuse() {
                if (this.status == "已完成") {
                    _util.showErrorTip('该工单已完成');
                    return false;
                }
                _util.showErrorTip('敬请期待！');
            },
            close() {
                if (this.status.substring(0,3) == "已完成") {
                    _util.showErrorTip('该工单已完成');
                    return false;
                }
                this.url('/order/close', {
                    _id: this.$route.params.id
                });
            },
            share() {
                if (this.status.substring(0,3)  == "已完成") {
                    _util.showErrorTip('该工单已完成');
                    return false;
                }
                this.url('/transmit', {
                    _id: this.$route.params.id
                });
            },
            getData() {
                let that = this;
                if (!(that.$route.path == ('/order/' + that.$route.params.id))) {
                    return false;
                }
                _util.showSysLoading();
                getAjaxRequest("order_cache", ajaxUrls.orderinfo + that.$route.params.id, that.version, 10 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    _util.hideSysLoading();
                    if (response.status == 0) {
                        that.username = response.data.creator;
                        that.data.terminalName = response.data.terminal_name;
                        that.data.grade = response.data.level;
                        that.data.scene = response.data.appearance;
                        that.data.desc = response.data.content;
                        that.data.desc = response.data.content;
                        that.data.status_code = response.data.status_code;
                        that.data.status = response.data.status;
                        that.status = response.data.status;
                        that.history = response.data.history;
                    }
                }, function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            }

        }
    }

</script>

<style lang="sass" scoped>
    .pb60 {
        padding: 16px 0 60px 0;
    }
    
    .h22 {
        min-height: 22px;
    }
    
    .user {
        margin: 0 16px 0 16px;
        padding-bottom: 12px;
        img {
            border-radius: 100%;
            height: 48px;
            width: 48px;
        }
        p {
            margin: 0;
            padding: 5px 0 5px 0;
        }
        .status {
            .s3 {
                display: inline-block;
                text-indent: 20px;
                color: #acda57;
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-position: 0 center;
                    background-image: url(//img.aimoge.com/FoSwqghIf_uF504pPDsAEWTbBTJ_);
                    width: 15px;
                    height: 15px;
                }
            }
            .s1 {
                display: inline-block;
                text-indent: 20px;
                color: #e4b358;
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-position: 0 center;
                    background-image: url(//img.aimoge.com/FsSDETnGMxWOFzvF15BLkL9an2M-);
                    width: 15px;
                    height: 15px;
                }
            }
            .s2 {
                display: inline-block;
                text-indent: 20px;
                color: #d75a48;
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    background-position: 0 center;
                    background-image: url(//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15);
                    width: 15px;
                    height: 15px;
                }
            }
            &.in {
                label {
                    color: #df796b;
                    &:after {
                        background-image: url('//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15');
                    }
                }
            }
        }
    }
    
    .keys {
        padding: 16px 0 12px 0;
        margin: 0 16px 8px 16px;
        border-top: 1px #ececec solid;
        .text {
            margin-bottom: 4px;
        }
    }
    
    .info {
        padding: 5px 0 0 0;
        border-left: 2px #f3f3f3 solid;
        margin: 0 45px 0 37px;
        .meta {
            border: 1px #d1d1d1 solid;
            border-radius: 0 15px 15px 15px;
            margin: 16px 0 0 18px;
            padding: 3px 8px;
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: -8px;
                left: -28px;
                background-image: url(//img.aimoge.com/FumRbbPFMoPuFlQ0FfEhFKYCrYHn);
                background-position: 0 0;
                background-repeat: no-repeat;
                background-size: 16px;
                background-color: #fff;
                width: 16px;
                height: 16px;
                z-index: 30;
            }
            &.done {
                &:before {
                    background-image: url(//img.aimoge.com/FsuuD8aOo52Dliz1y8UktMYYGmMw);
                }
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    left: -21px;
                    height: 100%;
                    width: 2px;
                    background-color: #fff;
                    z-index: 29;
                }
            }
        }
    }
    
    .btnGroup {
        border-top: 1px #cfcfcf solid;
        background-color: #f9f9f9;
        color: #323232;
        display: block;
        width: 100%;
        height: 51px;
        line-height: 51px;
        color: #333;
        font-size: 16px;
        left: 0;
        bottom: 0;
        z-index: 9000;
        .flexmodel {
            width: 25%;
            display: inline-block;
            text-align: center;
            &:after {
                content: '';
                display: block;
                position: absolute;
                right: 0;
                top: 6px;
                width: 1px;
                height: 40px;
                border-left: 1px #cfcfcf solid;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
            }
            &.none:after {
                display: none;
            }
        }
    }

</style>
