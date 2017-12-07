<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle",
            :btnconfig="btnconfig",
            @moreBtnCallback="loadMore"
        )
        div.mt44.pb60
            div.user.center.rel
                img(src="//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8")
                p.bold {{ username }}的{{project}}工单
                div.status.f12(v-if="data.status_code == 1")
                    label.rel.s1 {{ data.status }}
                div.status.f12(v-if="data.status_code == 4")
                    label.rel.s2 {{ data.status }}
                div.status.f12(v-if="data.status_code == 2")
                    label.rel.s3 {{ data.status }}
            div.graybt8.rel(v-if="project_id==1")
                div.keys.rel
                    TextFiled.h22(tag="终端名称：", :text="data.terminalName")
                    TextFiled.h22(tag="故障等级：", :text="data.grade")
                    TextFiled.h22(tag="现场现象：", :text="data.scene")
                    TextFiled.h22(tag="问题描述：", :text="data.desc")
                div.keys.rel(v-if="completed")
                    TextFiled.h22(tag="现场现象（运维）：", :text="yunWeiApperanceInfo", marginleft="130")
                    TextFiled.h22(tag="故障分类（运维）：", :text="yunWeiTypeInfo", marginleft="130")
                    TextFiled.h22(tag="问题原因：", :text="reasonInfo")
                    TextFiled.h22(tag="处理方式：", :text="deal")
                    TextFiled.h22(tag="处理结果：", :text="remark")
                    TextFiled.h22(tag="是否抓取日志：", :text="hasCatchLogZh",marginleft="100")
            div.graybt8.rel(v-else)
                div.keys.rel
                    TextFiled.h22(tag="创建者：", :text="common.creator_name")
                    TextFiled.h22(tag="处理人：", :text="common.owner_name")
                    TextFiled.h22(tag="项目：", :text="common.project")
                    TextFiled.h22(tag="类型：", :text="common.type")  
                    div(v-if="(project_id==2)&&([1023,1025,1000].indexOf(type_id)>-1)")
                        TextFiled.h22(tag="快递员手机号：", :text="extend.operator_mobile",:marginleft="98")
                        TextFiled.h22(tag="快递员城市：", :text="extend.operator_city",:marginleft="98")
                    div(v-if="(project_id==2)&&(type_id==1004)")
                        TextFiled.h22(tag="合同到期日期：", :text="extend.contract_end_date")
                    div(v-if="(project_id==2)&&(type_id==1030)")
                        TextFiled.h22(tag="物业：", :text="extend.tenement")      
                    div(v-if="(project_id==2)&&(type_id==1002)")
                        TextFiled.h22(tag="结算开始时间：", :text="extend.start_date",:marginleft="98")
                        TextFiled.h22(tag="结算结束时间：", :text="extend.end_date",:marginleft="98")
                        TextFiled.h22(tag="电费：", :text="extend.power_fee",:marginleft="44")
                        TextFiled.h22(tag="度数：", :text="extend.power_number",:marginleft="44")         
            div.info.rel
                div.meta.rel(v-for="(item,index) in history",:class="{done:history.length-1==index}")
                    div.h5.rel  {{ item.opeator }} {{item.action}}
                    div.tms.f12.rel {{item.remark}}
                    div.tms.f12.rel {{item.created_at}}                   
            SubmitBtn(v-if="!isAuthor&&!completed||!isAdmin&&!completed", text="跟进", @submitCallback="showAlert('follow')") 跟进
            div.btnGroup.fixed.flex(v-if="isAuthor&&!completed||isAdmin&&!completed")
                div.flexmodel.rel(@click="showAlert('delete')",v-if="isAuthor",:class="{w50:isAuthor}") 删除
                div.rel(@click="showAlert('follow')",v-if="isAuthor||isAdmin",:class="{w50:isAuthor,flexmodel:isAdmin,w33:isAdmin}") 跟进
                div.flexmodel.rel(@click="showAlert('close')",v-if="isAdmin",:class="{w33:isAdmin}") 关闭
                div.rel.none(@click="showAlert('share')",v-if="isAdmin",:class="{w33:isAdmin}") 转发
        ModalDialog(ref="showalert", @confirmCallback="doAlertEvent")
        div.layer.order-layer(v-if="is_help")
            div.btn-box
                div.order-btn 跨部门协助
                div.order-btn(@click.stop.prevent="cancelHelp") 取消
        div.layer.close-other(v-if="is_close")
            div.close-container
                p.box-title 关闭工单
                div.close-content
                    textarea(cols="50",rows="8",v-model="close_content",placeholder="请填写处理结果")
                    div.submit-btn(@click.stop.prevent="closeOrder") 提交       
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
                btnconfig:{
                    is_more:0
                },
                bodyBg: 'white',
                username: 'jerry',
                completed: 0, //工单完成
                isAuthor: 0, //发布者身份
                isAdmin: 0, //审核者身份
                project: '', //
                appearance:'',//现场现象
                reasonInfo:'',//问题原因
                yunWeiTypeInfo:'',//故障分类
                hasCatchLogZh:'',//抓取日志 0:否 1：是
                yunWeiApperanceInfo:'',//现场现象（运维）
                remark:'',//处理结果
                deal:'',//处理方式
                status: '',
                data: {
                    terminalName: '东亚逸品加装格格货栈',
                    grade: '一级故障',
                    scene: '系统错误，请稍后再试！',
                    desc: '运单号：24352346326，M0406/06号门，业主一键开柜丢件，调监控时间是2017-02-26 19:20:12，联系业主',
                    status_code: '',
                    status: ''
                },               
                history: [],
                // 
                is_close:false,
                is_help:false,
                close_content:'',
                common:{
                    creator_name:'',
                    owner_name:'',
                    project:'',
                    type:'',
                },
                extend:{
                    operator_mobile:'',
                    operator_city:'',
                    start_date:'',
                    end_date:'',
                    power_fee:'',
                    power_number:'',
                    tenement:'',
                    contract_end_date:''
                },
                project_id:parseInt(this.$route.query._id),
                type_id:parseInt(this.$route.query.type_id),
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
            '$route':function(){
                if(this.$route.path == ('/order/' + this.$route.params.id)){
                    this.project_id=parseInt(this.$route.query._id);
                    this.type_id=parseInt(this.$route.query.type_id);
                    this.getData();
                }
            }
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
            this.history = [];
            this.data.terminalName = '';
            this.data.grade = '';
            this.data.scene = '';
            this.data.desc = '';
            this.data.status_code = '';
            this.data.username = '';
        },
        methods: {
            doAlertEvent() {
                let type = this.alertId;
                if (type == 'delete') this.delete();
                if (type == 'follow') this.follow();
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
                if (id == 'follow') {
                    title = `确认跟进工单？`;
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
              let that=this;
              axios.post(ajaxUrls.orderinfo+ that.$route.params.id+'/delete' , {
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
            follow(){
              this.url('/order/follow',{
                _id:this.$route.params.id
              });
            },
            close() {
                if(this.project_id==1){
                    if (this.status.substring(0, 3) == "已完成") {
                        _util.showErrorTip('该工单已完成');
                        return false;
                    }
                    this.url('/order/close', {
                        _id: this.$route.params.id
                    });
                }else{
                    if(this.project_id!=3){
                        this.is_close=true;
                    }
                }
            },
            share() {
                if (this.status.substring(0, 3) == "已完成") {
                    _util.showErrorTip('该工单已完成');
                    return false;
                }
                this.url('/order/forward', {
                    _id: this.$route.params.id
                });
            },
            getData() {
                let that = this;
                _util.showSysLoading();
                getAjaxRequest("order_cache", ajaxUrls.orderinfo + that.$route.params.id, that.version, 10 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    _util.hideSysLoading();
                    if (response.status == 0) {
                        let data=null;
                        if(that.project_id==1){
                            data=response.data;
                        }else{
                            data=response.data.data;
                            that.common.creator_name=data.creator.realname;
                            that.common.owner_name=data.owner.realname;
                            that.common.project=data.project_desc;
                            that.common.type=data.type;
                            if(response.data.extend){
                                let extend=JSON.parse(response.data.extend.data);
                                that.extend.operator_mobile=extend.operator_mobile||'';
                                that.extend.operator_city=extend.operator_city||'0';
                                that.extend.operator_city=that.initCity(parseInt(that.extend.operator_city));
                                that.extend.start_date=extend.start_date||'';
                                that.extend.end_date=extend.end_date||'';
                                that.extend.power_fee=extend.power_fee||'';
                                that.extend.power_number=extend.power_number||'';
                                that.extend.tenement=extend.tenement||'';
                                that.extend.contract_end_date=extend.contract_end_date||'';
                            }
                        }
                        that.username = data.creator.realname;
                        that.project = data.project_desc;
                        that.data.terminalName = data.terminal_name;
                        that.data.grade = data.level;
                        that.data.scene = data.appearance;
                        that.data.desc = data.content;
                        that.data.status_code = data.status_code;
                        that.data.status = data.status;
                        that.status = data.status;
                        that.history = data.history;
                        //创建人ID
                        let creator_id=data.creator.id;
                        //当前用户ID
                        let current_id=data.current_user.id;
                        //执行人ID
                        let owner_id=data.owner.id;

                        if(creator_id==current_id&&creator_id!=owner_id){
                          that.isAuthor=1;
                        }else{
                            that.isAuthor=0;
                        }
                        if(current_id==owner_id&&creator_id!=owner_id){
                          that.isAdmin=1;
                        }else{
                          that.isAdmin=0;
                        }
                        if(current_id==owner_id&&creator_id==owner_id){
                          that.isAdmin=1;
                        }
                        if(that.data.status_code==2){
                          that.completed=1;
                        }else{
                          that.completed=0;
                        };
                        //工单完成显示信息
                        that.yunWeiApperanceInfo=data.yunWeiApperanceInfo;
                        that.reasonInfo=data.reasonInfo;
                        that.yunWeiTypeInfo=data.yunWeiTypeInfo;
                        that.remark=data.remark;
                        that.deal=data.deal;
                        if(data.hasCatchLogZh==0||data.hasCatchLogZh==''){
                            that.hasCatchLogZh='否';
                        }else if(data.hasCatchLogZh=1){
                            that.hasCatchLogZh='是';
                        }
                    }
                }, function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            loadMore(){
                this.is_help=true;
            },
            cancelHelp(){
                this.is_help=false;
            },
            initCity(code){
                switch (code) {
                    case 110100:
                        return '北京市'
                        break;
                    case 120100:
                        return '天津市'
                        break;
                    case 140100:
                        return '太原市'
                        break;
                    case 130100:
                        return '石家庄市'
                        break;
                    case 310100:
                        return '上海市'
                        break;
                    case 320100:
                        return '南京市'
                        break;
                    case 320200:
                        return '无锡市'
                        break;
                    case 320500:
                        return '苏州市'
                        break;
                    case 330100:
                        return '杭州市'
                        break;
                    case 340100:
                        return '合肥市'
                        break;
                    case 350200:
                        return '厦门市'
                        break;
                    case 420100:
                        return '武汉市'
                        break;
                    case 430100:
                        return '长沙市'
                        break;
                    case 440100:
                        return '广州市'
                        break;
                    case 440300:
                        return '深圳市'
                        break;
                    case 440400:
                        return '珠海市'
                        break;
                    case 440600:
                        return '佛山市'
                        break;
                    case 441900:
                        return '东莞市'
                        break;
                    case 442000:
                        return '中山市'
                        break;
                    case 500100:
                        return '重庆市'
                        break;
                    case 510100:
                        return '成都市'
                        break;                        
                    default:
                        return ''
                        break;
                }
            },
            closeOrder(){
                if(!this.close_content){
                    _util.showErrorTip('请填写处理结果'); 
                    return false; 
                }
                let params={
                    action:'close',
                    data:{
                        content:this.close_content
                    }
                },
                that=this;
                axios.post(ajaxUrls.orderinfo + that.$route.params.id + '/deal',params, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                        that.is_close=false;
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
<style>
    .gege-header a.text-more {
        right: 0;
    }
</style>
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
            //width: 25%;
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

    .w50 {
        width: 50%;
        display: inline-block;
        text-align: center;
    }
    .w33 {
        width: 33.33%;
        display: inline-block;
        text-align: center;
    }
    .order-layer{
        z-index:10000;
        .btn-box{
            width:100%;
            padding: 0 10px;
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            .order-btn{
                width:100%;
                text-align:center;
                padding: 10px 0;
                background:#fff;
                margin-bottom: 5px;
                border-radius: 5px;
            }
        }
    }
    .close-other{
        z-index:9004;
        .close-container{
            width: 90%;
            background: #fff;
            left: 50%;
            position: absolute;
            margin-left: -45%;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 6px;
            top: 20%;
            text-align: center;
            .close-content{
                textarea{
                    width:100%;
                }
                .submit-btn{
                    background:#07689f;
                    color:#fff;
                    width:50%;
                    margin:0 auto;
                    padding:6px 0;
                    border-radius:6px;
                }
            }
        }
    }
</style>
