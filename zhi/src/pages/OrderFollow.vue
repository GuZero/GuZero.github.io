<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div(style="margin-top:50px;padding-left:16px;color:#828282") {{name}}
        div.pb60
            Field.border(tag="跟进说明", placeholder="可以补充最新故障说明或者问题描述或者给出预处理时间", v-model.trim="content", :textarea="true")
            Field.border(
                  tag="通知用户",
                  v-model="customer_mobile",
                  placeholder="请输入用户手机号（非必填）",
                  :input="true",
              )
        SubmitBtn(@submitCallback="submitFun", text="提交", theme="white")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    //    import Upload from '../components/common/Upload'
    import Field from '../components/elements/Field'
    import SubmitBtn from '../components/elements/SubmitBtn'
    /*Upload(id="up1", ref="up1")*/
    export default {

        data() {
            return {
                bodyBg: 'gray',
                pageTitle: '跟进',
                name: '',
                customer_mobile:'',
                content:'',
                _id: this.$route.query._id || '',


            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn,
            //            Upload,
        },
        mixins: [require('../components/mixin/BodyBg')],
        created() {
            window.canGoBack = true;
            window.origin = null;
            this.getInfo();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': function() {
                if (this.$route.path == ('/order/follow')) {
                    this.customer_mobile='';
                    this.content='';
                    this.getInfo();
                }
            }
        },
        methods: {
            submitFun() {
                if(!this.content){
                    _util.showErrorTip('请输入跟进说明');
                }
                let that = this,
                    data={
                      customer_mobile:this.customer_mobile,
                      content:this.content
                    }
                axios.post(ajaxUrls.orderinfo + that.$route.query._id + '/deal', {
                    action:'commit',
                    data:data
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                        that.url('/')
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
            },
            //获取信息
            getInfo() {
                let that = this;
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
            }
        }
    }

</script>
<style lang="sass" scoped>
      .border{
          border-bottom: 1px solid #ccc;
          border-top:1px solid #ccc;
      }
</style>
