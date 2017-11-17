<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div(style="margin-top:50px;padding-left:16px;color:#828282") {{name}}
        div.pb60
            Field(tag="姓名：",
         placeholder="请选择转发人员姓名",
         v-model="userName", :input="true",
        @changeCallback="gotoTerminal",
        readonly="readonly",
        autocomplete="new-password" )
            Field(tag="备注：", placeholder="转发描述", v-model.trim="desc", :textarea="true")
            ModalDialog(ref="confirmModal", @confirmCallback="deal")
        SubmitBtn(@submitCallback="submitFun", text="提交", theme="white")

</template>

<script>
    import HeaderBar from '../components/common/Header'
    //    import Upload from '../components/common/Upload'
    import Field from '../components/elements/Field'
    import SubmitBtn from '../components/elements/SubmitBtn'
    import ModalDialog from '../components/elements/ModalDialog'
    /*Upload(id="up1", ref="up1")*/
    export default {

        data() {
            return {
                bodyBg: 'gray',
                pageTitle: '转发',
                userName: '',
                name: '',
                userID: '',
                desc: '',
                _id: this.$route.query._id || '',
            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn,
            ModalDialog,
            //            Upload,
        },
        mixins: [require('../components/mixin/BodyBg')],
        created() {
            window.canGoBack = true;
            window.origin = null;
            //请求数据
            if (localStorage.user_Name || localStorage.user_ID) {
                this.userName = "";
                this.userID = "";
            } else {
                window.localStorage.setItem('user_Name', "");
                window.localStorage.setItem('user_ID', "");
            }
            this.getInfo();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': function() {
                if (this.$route.path == ('/order/forward')) {
                    this.desc = '';
                    this.getInfo();
                    localStorage.user_Name = '';
                    localStorage.user_ID = '';
                }
            }
        },
        methods: {
            submitFun() {
                let that = this;
                if (!that.userName) {
                    _util.showErrorTip('请选择要输入的转发的姓名');
                    return false;
                };
                if (!that.desc) {
                    _util.showErrorTip('请输入问题备注！');
                    return false;
                };
                this.$refs.confirmModal.showModal({
                    text: '确认是否转发给' + that.userName + '为处理？'
                });
            },
            gotoTerminal() {
                this.url('/transmit');
            },
            getInfo() {
                let that = this;
                that.userName = localStorage.user_Name;
                that.userID = localStorage.user_ID;
                // 获取当前工单信息
                getAjaxRequest("order_cache", ajaxUrls.orderinfo + that.$route.query._id, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {
                        that.name = response.data.terminal_name;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function(error) {
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            },
            deal() {
                let data = {
                        owner_id: this.userID,
                        priority: '1',
                        content: this.desc
                    },
                    that = this;
                axios.post(ajaxUrls.orderinfo + that.$route.query._id + '/deal', {
                    action: 'forward',
                    data: data
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                        that.url('/');
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');

                })
            },
        }
    }

</script>
<style lang="sass" scoped>
    .border {
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
    }

</style>
