<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60(style="margin-top: 52px;")
            Field(tag="分类",:input="true",v-model.trim="type_name")
            Field(tag="终端名称", placeholder="请输入终端名称（必填）", v-model="terminal_name", :input="true", @changeCallback="goInfo", readonly="readonly",autocomplete="new-password" )
            Field(tag="标题",:input="true",v-model.trim="title")
            Field(tag="问题描述", placeholder="请输入问题描述", v-model.trim="desc", :textarea="true", autocomplete="new-password")
            Field(
                tag="选择优先级",
                v-model="priority",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="prioritys",
                :selectText="priority",
                :select="true",
                :arrow="true"
            )
            Field(tag="超时设置", placeholder="请选择超时间", :input="true", v-model="deadline", type="datetime-local")
            Field(tag="报修人", placeholder="手机号", :input="true",v-model.trim="report")                     
            Field(tag="通知用户", placeholder="用户手机号(非必填)", :input="true",v-model.trim="customer_mobile")
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
                pageTitle: '柜子运维工单',
                type_name: this.$route.query.type_name||'', //分类
                type_id:parseInt(this.$route.query.type_id)||'',
                project_id:this.$route.query._id||'',
                title: '', //标题
                terminal_name:'',//终端名称
                desc: '',//问题描述
                deadline: '',//超时设置
                report: '',//报修人手机号
                customer_mobile: '',//用户手机号
                priority: '',
                prioritys: [], //优先级
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
            //请求数据
            if (localStorage.terminal_name) {
                this.terminal_name = "";
            } else {
                window.localStorage.setItem('terminal_name', "");
                window.localStorage.setItem('terminal_code', "");
            }
            //获取现场现象
            this.getInfo();            
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': function() {
                if (this.$route.path == ('/order/maintain')) {
                    //清空页面内容                 
                    this.date = '';
                    this.desc = '';
                    this.title = '';
                    this.report = '';
                    this.customer_mobile = '';
                    this.priority='';
                    this.prioritys=[];  
                    this.getInfo();
                    localStorage.terminal_name = ''
                }
            }
        },
        methods: {
            submitFun() {
                let check_msg=this.checkData();
                if(check_msg!=''){
                    _util.showErrorTip(check_msg);
                    return false;
                }
                let params={
                    project_id:this.project_id,
                    customer_mobile:this.customer_mobile,
                    terminal_code:localStorage.terminal_code,
                    data:{
                        project_id:this.project_id,
                        pid:0,
                        type:this.type_id,
                        terminal_code:localStorage.terminal_code,
                        title:this.title,
                        content:this.desc,
                        report:this.report,
                        priority:this.priority,
                        deadline:this.deadline?this.setDate(this.deadline):''                        
                    }
                }
                axios.post(ajaxUrls.task, params, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
            },
            goInfo() {
               this.url('/searchterminal');
            },
            setDate(str) {
                let x = str,
                    year = x.substring(0, 4),
                    month = x.substring(5, 7),
                    day = x.substring(8, 10),
                    hour = x.substring(11, 13),
                    minute = x.substring(14),
                    format = year + "-" + day + "-" + month + ' ' + hour + ':' + minute;
                if (_util.isIOS()) {
                    format = format.substring(0, 16);
                }
                return format;
            },
            setData(data) {
                var arry = []
                for (var key of Object.keys(data)) {
                    let obj = Object.create(null);
                    obj.id = key;
                    obj.name = data[key];
                    arry.push(obj);
                }
                return arry
            },
            checkData(){
                if (!this.terminal_name) {
                    return '请输入终端名称'
                };
                if(!this.title){
                    return '请输入标题'
                }
                if (!this.desc) {
                    return '请输入问题描述'
                };
                if (!this.report) {
                    return '请输入报修人手机号'
                };
                return ''
            },
            getInfo() {
                this.terminal_name = localStorage.terminal_name||'';
                this.type_name=this.$route.query.type_name||'';
                this.prioritys=[{
                    name:'正常处理',
                    id:1
                },{
                    name:'优先处理',
                    id:2
                },{
                    name:'十万火急',
                    id:3
                }];
            }
        }
    }

</script>

<style lang="sass" scoped>
    .filed {
        background-color: #fff;
        min-height: 54px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin-top: 8px;
        .text {
            left: 0;
            top: 0;
            width: 88px;
            padding: 16px 0;
        }
        .box {
            margin-left: 88px;
            min-height: 54px;
        }
    }
    
    .input {
        font-size: 16px;
        readonly: "readonly";
    }

</style>
