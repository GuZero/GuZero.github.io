<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60(style="margin-top: 52px;")            
            Field(tag="分类",:input="true",v-model.trim="type")
            Field(tag="终端名称",:input="true",v-model.trim="terminal_name",v-if="!([1000,1023,1025].indexOf(type_id)>-1)",@changeCallback="goInfo", readonly="readonly",autocomplete="new-password")
            Field(tag="标题",:input="true",v-model.trim="title")
            Field(tag="物业",:input="true",v-model.trim="tenement",v-if="[1030].indexOf(type_id)>-1")
            Field(tag="问题描述", placeholder="请输入问题描述", v-model.trim="desc", :textarea="true", autocomplete="new-password")
            div.date-box(v-if="[1002].indexOf(type_id)>-1")
                div.date-title 结算周期
                div.date-content.flex-g.flex-justify-between
                    input(type="date" v-model="start_date" autocomplete="off" placeholder="开始日期")
                    span 至
                    input(type="date" v-model="end_date" autocomplete="off" placeholder="结束日期")
            Field(tag="合同到期日",:input="true",v-model="contract_end_date",type="date",v-if="[1004].indexOf(type_id)>-1")        
            Field(tag="电费",:input="true",placeholder="单位：元",v-model.trim="charge",v-if="[1002].indexOf(type_id)>-1")
            Field(tag="度数",:input="true",placeholder="单位：度",v-model.trim="power_number",v-if="[1002].indexOf(type_id)>-1")
            Field(tag="快递员手机号", placeholder="快递员手机号", :input="true",v-model.trim="operator_mobile",v-if="[1000,1023,1025].indexOf(type_id)>-1")
            Field(
                tag="快递员城市",
                v-model="city_id",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="citys",
                :selectText="city_id",
                :select="true",
                :arrow="true",
                v-if="[1000,1023,1025].indexOf(type_id)>-1"
            )
            Field(tag="金额", placeholder="单位：元", :input="true",v-model.trim="money",v-if="[1023].indexOf(type_id)>-1")
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
                pageTitle: '柜子开发运营工单',
                type: this.$route.query.type_name||'', //分类
                type_id:parseInt(this.$route.query.type_id)||'',
                project_id:this.$route.query._id||'',
                title: '', //标题
                terminal_name:'',//终端名称
                tenement:'',//物业
                charge:'',//电费
                power_number:'',//度数
                start_date:'',//开始时间
                end_date:'',//结束时间
                contract_end_date:'',//合同到期日期
                desc: '', //内容
                operator_mobile: '', //快递员手机号
                city_id: '',
                citys: [], //快递员城市
                priority: '',
                prioritys: [], //优先级
                deadline: '', //超时时间
                money:'',//快递员充值发票 金额     
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
                if (this.$route.path == ('/order/operation')) {
                    this.type = this.$route.query.type_name||'';
                    this.type_id=parseInt(this.$route.query.type_id) ||'';
                    this.title = '';
                    this.desc = '';
                    this.operator_mobile = '';
                    this.citys = [];
                    this.prioritys = [];
                    this.deadline = '';
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
                let data={
                    project_id:this.project_id,
                    pid:0,
                    type:this.type_id,
                    title:this.title,
                    content:this.desc,
                    priority: this.priority,
                    deadline:this.deadline ? this.setDate(this.deadline) : ''
                }
                let extend={},that=this,params={
                    project_id:this.project_id
                };
                if(!([1000,1023,1025].indexOf(this.type_id)>-1)){
                    data.terminal_code=localStorage.terminal_code;
                }else{
                    extend.operator_mobile=this.operator_mobile;
                    extend.operator_city=this.city_id;
                }
                switch (this.type_id) {
                    case 1002://欠费（电费）
                        extend.start_date=this.start_date;
                        extend.end_date=this.end_date;
                        extend.power_fee=this.charge;
                        extend.power_number=this.power_number;
                        break;
                    case 1004://合同到期
                        extend.contract_end_date=this.contract_end_date;
                        params.data=data;
                        params.extend=extend;
                        break;
                    case 1023://快递员充值发票
                        extend.money=this.money;
                        break;
                    case 1030://柜子扩容
                        extend.tenement=this.tenement;
                        break;         
                    default:
                        break;
                }
                if([1000,1023,1025,1002,1004,1030].indexOf(this.type_id)>-1){
                    params.data=data;
                    params.extend=extend;
                }else{
                    params.data=data;
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
            getInfo() {
                this.terminal_name = localStorage.terminal_name||'';
                this.prioritys=[{
                    name:'正常处理',
                    id:'1'
                },{
                    name:'优先处理',
                    id:'2'
                },{
                    name:'十万火急',
                    id:'3'
                }];
                this.citys=[
                    {
                        name:'北京市',
                        id:'110100'
                    },
                    {
                        name:'天津市',
                        id:'120100'
                    },
                    {
                        name:'石家庄市',
                        id:'130100'
                    },
                    {
                        name:'太原市',
                        id:'140100'
                    },
                    {
                        name:'上海市',
                        id:'310100'
                    },
                    {
                        name:'南京市',
                        id:'320100'
                    },
                    {
                        name:'无锡市',
                        id:'320200'
                    },
                    {
                        name:'苏州市',
                        id:'320500'
                    },
                    {
                        name:'杭州市',
                        id:'330100'
                    },
                    {
                        name:'合肥市',
                        id:'340100'
                    },
                    {
                        name:'福州市',
                        id:'350100'
                    },
                    {
                        name:'厦门市',
                        id:'350200'
                    },
                    {
                        name:'武汉市',
                        id:'420100'
                    },
                    {
                        name:'长沙市',
                        id:'430100'
                    },
                    {
                        name:'广州市',
                        id:'440100'
                    },
                    {
                        name:'深圳市',
                        id:'440300'
                    },
                    {
                        name:'珠海市',
                        id:'440400'
                    },
                    {
                        name:'佛山市',
                        id:'440600'
                    },
                    {
                        name:'东莞市',
                        id:'441900'
                    },
                    {
                        name:'中山市',
                        id:'442000'
                    },
                    {
                        name:'重庆市',
                        id:'500100'
                    },
                    {
                        name:'成都市',
                        id:'510100'
                    }                    
                ]
            },
            checkData(){
                if(!this.title){
                    return '请输入标题'
                }
                if(!this.desc) {
                    return '请输入问题描述'
                };
                if(([1000,1023,1025].indexOf(this.type_id)>-1)){
                    if (!this.operator_mobile) {
                        return '请输入快递员手机号'
                    };
                    if (!this.city_id) {
                        return '请选择快递员城市'
                    };
                }else{
                    if(!this.terminal_name){
                        return '请输入终端名称'
                    }
                }
                switch (this.type_id) {
                    case 1002:
                        if(!this.start_date){
                            return '请输入结算开始时间'
                        }
                        if(!this.end_date){
                            return '请输入结算结束时间'
                        }
                        if(!this.power_number){
                            return '请输入度数'
                        }
                        if(!this.charge){
                            return '请输入电费'
                        }
                        break;
                    case 1004:
                        if(!this.contract_end_date){
                            return '请输入合同到期日'
                        }
                        break  
                    default:
                        break;
                }
                return ''
            },
            goInfo() {
               this.url('/searchterminal');
            },
        }
    }

</script>
<style scoped>
    .date-box{
        background: #fff;
        margin-top: 8px;
        padding: 0 6px;
        padding-bottom: 16px;
    }
    .date-box .date-title{
        padding: 10px 16px;
    }
    .date-content input{
        border: 1px solid #e2e2e4;
        padding: 6px 12px;
        width: 40%;
    }
    .date-content span{
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: #555;
        text-align: center;
        background-color: #eee;
        border: 1px solid #ccc;
        vertical-align: middle; 
    }
</style>


