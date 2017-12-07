<template lang="jade">
div.home
	HeaderBar(
		:title="pageTitle",
		:btnconfig="btnconfig",
		:noborder="true",
		@msgBtnCallback="goToMsg",
		@searchBtnCallback="isSearch"
	)
	div.fixed.more-box.box-triangle(v-if="searchFlag")
		ul
			li.rel(v-for="d in searchInfo", @click.stop.prevent="goToSearch(d)") {{d.value}}
	div.nav.top44.fixed
		div.left.tab.rel(:class="{active: activeTab == 0}", @click="switchTab(0)")
			div
				label 所有任务
				label
		div.left.tab.rel(:class="{active: activeTab == 1}", @click="switchTab(1)")
			div
				label 我创建的
				label
		div.left.tab.rel(:class="{active: activeTab == 2}", @click="switchTab(2)")
			div
				label 我的待办
				label.font-10 ({{num}})
		div.left.tab.rel(:class="{active: activeTab == 3}", @click="switchTab(3)")
			div
				label 我的已办
				label 		
		Screen.abs.screen(v-model="search_info",@isSearch="select_serach",@isScreen="select_screen",@cancelFun="cancel",@searchFun="search",:show="isScreen",v-if="choice_screen") 
	div.mt80.pt50.pb60(v-if="choice_screen")
		div.item.rel(v-for="item in list", @click.stop.prevent="goInfo(item)")
			img.abs(:src="item.head")
			div.div
				div.title.rel
					label.user.ellipsis.rel {{ item.creator }} 发起的{{item.project}}工单
					label.time.f12.abs {{ item.time }}
				div.line.f12.rel
					label.gray.rel 标&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp题:
					label {{ item.title }} 	   
				div.line.f12.rel
					label.gray.rel 终端名称:
					label {{ item.terminal_name?item.terminal_name:'无' }}
				div.line.f12.rel
					label.gray.rel 创建时间:
					label {{ item.created_at }}
				div.status.f12.s1.rel(v-if="item.status_code == 1") {{ item.status }}
				div.status.f12.s2.rel(v-if="item.status_code == 4") {{ item.status }}
				div.status.f12.s3.rel(v-if="item.status_code == 2") {{ item.status }}
		DataLoading(ref="loading")
	div.add.f12.center.fixed(@click="addOne", v-if="choice_screen") 创建
	FooterBar.fixed(:footerconfig="footerconfig",v-if="choice_screen")
	div(v-else)
		div.screen-info
			div.screen-item
				div.item-title 类型
				div.item-content.flex-g.flex-justify-between.flex-wrap
					div.item-btn(v-for="item in screen_type['project']",:class="{'item-btn-active':item.checked}", @click.stop.prevent="check_screen(item)") {{item.value}}
			div.screen-item
				div.item-title.mt-6 状态
				div.item-content.flex-g.flex-justify-between.flex-wrap
					div.item-btn(v-for="item in screen_type['status']",:class="{'item-btn-active':item.checked}", @click.stop.prevent="check_screen(item)") {{item.value}}
			div.screen-item
				div.item-title.mt-6 超时
				div.item-content.flex-g.flex-justify-between.flex-wrap
					div.item-btn(v-for="item in screen_type['timeout']",:class="{'item-btn-active':item.checked}", @click.stop.prevent="check_screen(item)") {{item.value}}
		div.screen-footer.fixed
			div.confirm-btn(@click.stop.prevent="confirm_screen") 确定	
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import FooterBar from '../components/common/Footer'
    import DataLoading from '../components/common/DataLoading'
    import Screen from '../components/common/Screen'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '运营支撑系统',
                bodyBg: 'white',
                btnconfig: {
                    isgoback: 0,
                    ismsg: 1,
                    issearch: 1
                },
                footerconfig: {
                    isorder: true
                },
                //分页每页16条
                numPerPage: 16,
                activeTab: 2,
                num: '',
                filter: '',
                page: 1,
                isFirst: true,
                scroll_load_loading: false,
                scroll_load_end: false,
                list: [],
                list0: [],
                list1: [],
                list2: [],
                list3: [],
                searchInfo: [],
                searchFlag: false,
				isScreen:false,
				search_info:'',
                choice_screen:true,
				screen_type:null,
                screen_project:'',
                screen_status:'',
                screen_timeout:'',

            }
        },
        components: {
            HeaderBar,
            FooterBar,
            DataLoading,
            Screen
        },
		created(){
			this.screen_type={
				project:[{
                    type:'project',
					value:'全部',
					checked:false,
					project_id:'all'
				},{
                    type:'project',
					value:'柜子运维',
					checked:false,
					project_id:'1'
				},{
                    type:'project',
					value:'柜子开发运营',
					checked:false,
					project_id:'2'
				},{
                    type:'project',
					value:'柜子安装',
					checked:false,
					project_id:'3'
				},{
                    type:'project',
					value:'商业合作',
					checked:false,
					project_id:'4'
				},{
                    type:'project',
					value:'客服工单',
					checked:false,
					project_id:'5'
				},{
                    type:'project',
					value:'告警工单',
					checked:false,
					project_id:'6'
				}],
				status:[{
                    type:'status',
					value:'全部',
					checked:false,
					status_id:'all'
				},{
                    type:'status',
					value:'待处理',
					checked:false,
					status_id:'1'
				},{
                    type:'status',
					value:'个人处理中',
					checked:false,
					status_id:'3'
				},{
                    type:'status',
					value:'转发处理中',
					checked:false,
					status_id:'4'
				},{
                    type:'status',
					value:'已完成',
					checked:false,
					status_id:'2'
				}],
				timeout:[{
                    type:'timeout',
					value:'全部',
					checked:false,
					timeout_status:'all'
				},{
                    type:'timeout',
					value:'已超时',
					checked:false,
					timeout_status:'0'
				},{
                    type:'timeout',
					value:'未超时',
					checked:false,
					timeout_status:'1'
				}]
			}							
		},
        mounted() {
            this.switchTab(2);
            window.localStorage.setItem('task_id', '01');
            window.canGoBack = false;
            window.origin = null;
            //设置搜索订单的ID
            this.searchInfo = [{
                id: '01',
                value: '存件订单'
            }, {
                id: '02',
                value: '寄存订单'
            }, {
                id: '03',
                value: '丰巢寄件'
            }, {
                id: '04',
                value: '菜鸟寄件'
            }]
            window.localStorage.setItem('express_id', '01');
            window.localStorage.setItem('tab_id', 2);
            window.addEventListener('scroll', this.handleScroll);
        },
        activated() { //开启<keep-alive>，会触发activated事件
            // this.resetScrollTop();
            window.canGoBack = false;
            window.origin = null;
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeRouteLeave(to, from, next) { //离开当前路由触发该事件
            //保存滚动条位置，卸载滚动加载事件
            let scrollTop = document.body.scrollTop;
            this.scrollTop = this.scrollTop || scrollTop;
            this.tn_scrollTop = this.tn_scrollTop || scrollTop;
            window.removeEventListener('scroll', this.handleScroll);
            next();
        },
        watch: {
            '$route': function() {
                if (this.$route.path == ('/')) {
                    let tab_id = parseInt(localStorage.tab_id);
                    this.switchTab(tab_id);
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            next();
        },
        beforeRouteUpdate(to, from, next) {
            this;
        },
        beforeRouteLeave(to, from, next) {
            if (to.path == '/message') {
                window.localStorage.setItem('homeToMessage', '1');
            }
            next();
        },
        destroyed() {
            this;
        },
        methods: {
            fetchData(screen_status,search_info) {
                let that = this;
                if (that.scroll_load_loading) {
                    return false;
                }
                if (that.scroll_load_end) {
                    return false;
                }
                if (that.page == 1) {
                    document.body.scrollTop = 0;
                }
                let api='';
                if(screen_status){
                    api=ajaxUrls.tasks + 'filter=' + that.filter+screen_status+ '&page=' + that.page;
                }else if(search_info){
                    api=ajaxUrls.tasks + 'filter=' + that.filter+'&terminal_name='+search_info+ '&page=' + that.page;
                }else{
                    api=ajaxUrls.tasks + 'filter=' + that.filter+ '&page=' + that.page;
                }
                that.showLoading();
                //获取待办工单数量
                getAjaxRequest("order_cache", ajaxUrls.num, that.version, 1 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {

                        that.num = response.data.task_numbers;
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
                that.scroll_load_loading = true;
                getAjaxRequest("order_cache", api, that.version, 1 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    that.hideLoading();
                    if (response.status == 0) {
                        //测试用 //img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS
                        for (let i = 0; i < response.data.length; i++) {
                            response.data[i].head = '//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8';
                        }
                        switch (that.activeTab) {
                            case 0:
                                that.list0 = that.list0.concat(response.data);
                                that.list = that.list0;
                                break;
                            case 1:
                                that.list1 = that.list1.concat(response.data);
                                that.list = that.list1;

                                break;
                            case 2:
                                that.list2 = that.list2.concat(response.data);
                                that.list = that.list2;
                                break;
                            case 3:
                                that.list3 = that.list3.concat(response.data);
                                that.list = that.list3;
                                break;
                            default:
                                that.list2 = that.list2.concat(response.data);
                                that.list = that.list2;
                                break;
                        }
                        if(screen_status||search_info){
                            that.list=response.data;
                        }
                        that.isFirst = false;
                        that.showLoadEnd();
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            },
            resetData() {
                this.page = 1;
                this.isFirst = true;
                this.scroll_load_loading = false;
                this.scroll_load_end = false;
                this.list = [];
                this.list0 = [];
                this.list1 = [];
                this.list2 = [];
                this.list3 = [];
                this.screen_project='';
                this.screen_status='';
                this.screen_timeout='';
                this.isScreen=false;
				this.search_info="";
            },
            switchTab(index) {
                this.searchFlag = false;
				if(!this.choice_screen) this.choice_screen=true;
                if (!this.scroll_load_loading) {
                    index > -1 ? this.activeTab = index : void 0;
                    switch (index) {
                        case 0:
                            this.filter = 'all'
                            break;
                        case 1:
                            this.filter = 'create'
                            break;
                        case 2:
                            this.filter = 'handle'
                            break;
                        case 3:
                            this.filter = 'finish'
                            break;
                        default:
                            this.filter = 'handle'
                            break;
                    };
                    this.resetData();
                    this.fetchData();
                }
                localStorage.tab_id = index;
            },
            isSearch() {
                this.searchFlag = !this.searchFlag;
            },
            goToSearch(item) {
                this.searchFlag = false;
                if(item.id!='05'){
                    localStorage.express_id = item.id;
                    this.url('/search/')
                }else{
                    this.url('/search/courier')
                }
            },
           goToMsg() {
                let time = (new Date()).getTime();
                this.url('/message',{"ts":time});
            },
            addOne() {
                //                this.url('/order/edit');
                this.url('/order/type');
            },
            goInfo(item) {
                this.searchFlag = false;
                this.url('/order/'+item.task_id,{
                    _id:item.project_id,
                    type_id:item.type_id
                });
            },
            handleScroll() { //滚动加载监听事件
                if (this.$route.path == ('/')) {
                    let scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
                    if ((scrollTop+ window.innerHeight) >= document.body.scrollHeight - 1) {
                        if (this.list.length < 16) {
                            return false;
                        } else {
                            if(this.screen_project||this.screen_status||this.screen_timeout){
                                let screen_status='&project='+this.screen_project+'&status='+this.screen_status+'&screen_timeout='+this.screen_timeout;
                                this.loadTerminalData(screen_status);
                            }else if(this.search_info){
                                this.loadTerminalData(0,this.search_info);
                            }else{
                                this.loadTerminalData();
                            }                            
                        }
                    }
                }
            },
            loadTerminalData(screen_status,search_info) {
                let that = this,
                    api='',
                    page = that.page;
                switch (this.activeTab) {
                    case 0:
                        that.filter = 'all'
                        break;
                    case 1:
                        that.filter = 'create'
                        break;
                    case 2:
                        that.filter = 'handle'
                        break;
                    case 3:
                        that.filter = 'finish'
                        break;
                    default:
                        that.filter = 'handle'
                        break;
                }
                if(screen_status){
                    api=ajaxUrls.tasks + 'filter=' + that.filter+screen_status+ '&page=' + that.page;
                }else if(search_info){
                    api=ajaxUrls.tasks + 'filter=' + that.filter+'&terminal_name='+search_info+ '&page=' + that.page;
                }else{
                    api=ajaxUrls.tasks + 'filter=' + that.filter+ '&page=' + that.page;
                }
                that.showLoading();
                that.scroll_load_loading = true;
                getAjaxRequest("order_cache", api, that.version, 1 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {
                        that.hideLoading();
                        //测试用 //img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS
                        for (let i = 0; i < response.data.length; i++) {
                            response.data[i].head = '//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8';
                        }
                        that.scroll_load_loading = false;
                        that.list = that.list.concat(response.data);
                        that.page += 1;
                        that.showLoadEnd();
                        if (response.data.length < that.numPerPage) {
                            that.scroll_load_end = true;
                        }
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    that.hideLoading();
                    window.removeEventListener('scroll', that.handleScroll);
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
			select_serach(){
                this.searchFlag=false;
				this.isScreen=true;
			},
			select_screen(){
                this.resetData();
                this.choice_screen=false;
                let screen_type=['project','status','timeout'];
                for(let i=0;i<screen_type.length;i++){
                    this.resetItem(screen_type[i]);
                }
			},
			cancel(){
				this.isScreen=false;
			},
			search(){
                if(!this.search_info){
                   _util.showErrorTip('请输入终端号或者其他字符');
                   return false;
                }else{
                    this.fetchData(0,this.search_info);
                }
			},
            resetItem(name){
                for(let i=0;i<this.screen_type[name].length;i++){
                    this.screen_type[name][i].checked=false;
                }
            },
			check_screen(item){
                switch (item.type) {
                    case 'project':
                        this.resetItem('project');
                        item.checked=true;
                        break;
                    case 'status':
                        this.resetItem('status');
                        item.checked=true;
                        break;
                    case 'timeout':
                        this.resetItem('timeout');
                        item.checked=true;
                        break;    
                    default:
                        break;
                }
                if(item.project_id&&item.checked){
                    this.screen_project=item.project_id;
                }else if(item.status_id&&item.checked){
                    this.screen_status=item.status_id;
                }else if(item.timeout_status&&item.checked){
                    this.screen_timeout=item.timeout_status;
                }
			},
			confirm_screen(){
				this.choice_screen=true;
                if(this.screen_project||this.screen_status||this.screen_timeout){
                    let screen_status='&project='+this.screen_project+'&status='+this.screen_status+'&screen_timeout='+this.screen_timeout;
                    this.fetchData(screen_status);
                }
			},
            showLoading() { //显示正在加载数据状态
                this.scroll_load_loading = true;
                this.$refs.loading && this.$refs.loading.showLoading();
            },
            hideLoading() { //隐藏正在加载数据状态
                this.scroll_load_loading = false;
                this.$refs.loading && this.$refs.loading.hideLoading();
            },
            showLoadEnd() { //显示没有更多数据状态
                this.hideLoading();
                this.$refs.loading && this.$refs.loading.showEnd();
            }
        }
    }

</script>
<style>
    .gege-header .icsearch {
        right: 5px;
        left: auto;
    }
    
    @media screen and (max-width:370px) {
        .font-10 {
            font-size: 10px;
        }
    }

</style>
<style lang="sass" scoped>
    $tabactive: #07689f;
    $cf: #cfcfcf;
    .pt50 {
        padding-top: 43px;
    }
    
    .search {
        background: #666;
        top: 6.5%;
        right: 0px;
        z-index: 9999;
        .item {
            height: 30px;
            line-height: 30px;
            margin: 0px 10px;
            color: #fff;
            box-sizing: border-box;
            position: relative;
        }
        .item:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: #fff;
            transform: scale(1, .5);
        }
    }
    
    .nav {
        background-color: #fafafa;
        border-bottom: 1px $cf solid;
        width: 100%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        .tab {
            width: 25%;
            height: 42px;
            line-height: 42px;
            text-align: center;
            &:active {
                background-color: #eee;
            }
            &.active {
                color: $tabactive;
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    border: 1px $tabactive solid;
                    width: 40px;
                    margin-left: -20px;
                }
            }
        }
    }
    
    .add {
        background: url(//img.aimoge.com/Fq2jHaTMAD8ds8JCcZjYEXHBAERN) 0 0 no-repeat;
        background-size: 100%;
        bottom: 108px;
        right: 22px;
        width: 50px;
        height: 50px;
        line-height: 131px;
        color: $cf;
        z-index: 300;
        &:active {
            opacity: .6;
        }
    }
    
    .item {
        padding: 0 0 0 0;
        &:active {
            background-color: #eee;
        }
        .div {
            margin: 0 16px;
            border-bottom: 1px $cf solid;
            padding: 12px 0 12px 66px;
        }
        img {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            left: 16px;
            top: 12px;
        }
        .title {
            margin-bottom: 8px;
        }
        .user {
            /*margin: 0 75px 0 0;*/
            display: block;
        }
        .time {
            right: 0;
            top: 1px;
        }
        .line {
            line-height: 18px;
        }
        .gray {
            color: #908d8d;
            margin-right: 5px;
        }
        .status {
            color: #e4b358;
            background-image: url(//img.aimoge.com/FsSDETnGMxWOFzvF15BLkL9an2M-);
            background-size: 15px;
            background-repeat: no-repeat;
            background-position: 0 3px;
            text-indent: 20px;
            margin-top: 5px;
            &.s2 {
                color: #d75a48;
                background-image: url('//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15');
            }
            &.s3 {
                color: #a4d748;
                background-image: url('//img.aimoge.com/FoSwqghIf_uF504pPDsAEWTbBTJ_');
            }
        }
    }
	.screen{
		width:100%;
		top:43px;
	}
	.mt80{
		margin-top:86px;
	}
	.screen-info{
		margin-top:86px;
		padding:0 30px;
		.screen-item{
			.mt-6{
				margin-top: -6px
			}
			.item-title{
				height:36px;
				line-height:36px;
			}
			.item-content{
				width:100%;
				.item-btn{
					width:42%;
					border:1px solid #ccc;
					text-align:center;
					padding:4px 0;
					border-radius:10px;
					margin-bottom:6px;
				}
				.item-btn-active{
					background:#07689f;
					color:#fff;
				}
			}
		}

	}
	.screen-footer{
		width:100%;
		bottom:0;
		.confirm-btn{
			width:100%;
			color:#fff;
			text-align:center;
			padding:10px 0;
			background:#07689f;
			font-size:16px;
		}
	}
	.more-box{
        right: 0;
        top: 7%;
        background-color: #666;
        z-index: 8888;
        li{
            padding: 8px 20px;
            text-align: center;
            border-bottom: 1px solid #fff;
            color: #fff;
        }
        select {
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: none;
            color: transparent;
            border: none;
            outline: none;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            z-index: 301;
            option {
                color: #333;
            }
        }
    }
</style>
