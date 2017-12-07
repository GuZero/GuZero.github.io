<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60(style="margin-top: 52px;")            
            Field(tag="分类",:input="true",v-model.trim="type")
            Field(tag="标题",:input="true",v-model.trim="title")
            Field(tag="问题描述", placeholder="请输入问题描述", v-model.trim="desc", :textarea="true", autocomplete="new-password")       
        SubmitBtn(@submitCallback="submitFun", text="提交", theme="white")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Field from '../components/elements/Field'
    import SubmitBtn from '../components/elements/SubmitBtn'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'dark',
                pageTitle: '商业合作工单',
                type: this.$route.query.type_name||'', //分类
                title: '', //标题
                desc: '', //内容
            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn,
        },
        created() {
            window.canGoBack = true;
            window.origin = null;
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': function() {
                if (this.$route.path == ('/order/cooperate')) {
                    this.type = this.$route.query.type_name||'';
                    this.title = '';
                }
            }
        },
        methods: {
            submitFun() {
                if (!this.desc) {
                    _util.showErrorTip('请输入问题描述');
                    return false;
                };
                if (!this.title) {
                    _util.showErrorTip('请输入标题');
                    return false;
                };
                let params={
                    project_id:this.$route.query._id,
                    type_id:this.$route.query.type_id,
                    title:this.title,
                    data:{                        
                        content:this.desc
                    }
                }
                axios.post(ajaxUrls.task,params, {
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
            }
        }
    }

</script>

