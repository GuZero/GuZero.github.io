<template lang="jade">
div.home
	HeaderBar(
		:title="pageTitle",
		:btnconfig="btnconfig",
		:noborder="true",
		@msgBtnCallback="goToMsg",
		@searchBtnCallback="isSearch"
	)
	div.search.fixed(v-if="searchFlag")
		div.item(v-for="d in searchInfo", @click.stop.prevent="goToSearch(d)") {{d.value}}
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
				label ({{num}})
		div.left.tab.rel(:class="{active: activeTab == 3}", @click="switchTab(3)")
			div
				label 我的已办
				label
	div.mt44.pt50.pb60
		div.item.rel(v-for="item in list", @click.stop.prevent="goInfo(item.task_id)")
			img.abs(:src="item.head")
			div.div
				div.title.rel
					label.user.ellipsis.rel {{ item.creator }}发起的柜子运维工单
					label.time.f12.abs {{ item.time }}
				div.line.f12.rel
					label.gray.rel 终端名称:
					label {{ item.terminal_name }}
				div.line.f12.rel
					label.gray.rel 创建时间:
					label {{ item.created_at }}
				div.status.f12.s1.rel(v-if="item.status_code == 1") {{ item.status }}
				div.status.f12.s2.rel(v-if="item.status_code == 4"){{ item.status }}
				div.status.f12.s3.rel(v-if="item.status_code == 2") {{ item.status }}
		DataLoading(ref="loading")
	div.add.f12.center.fixed(@click="addOne") 创建
	FooterBar(:footerconfig="footerconfig")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import FooterBar from '../components/common/Footer'
    import DataLoading from '../components/common/DataLoading'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '运营支撑系统',
                btnconfig: {
                    isgoback: 0,
                    ismsg: 1,
                    issearch: 1
                },
                footerconfig: {
                    isorder: true
                },
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
                searchFlag: false
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            DataLoading
        },
        created() {
            this.searchInfo = [{
                id: '01',
                value: '存件订单'
            }, {
                id: '02',
                value: '寄件订单'
            }, {
                id: '03',
                value: '丰巢寄件'
            }, {
                id: '04',
                value: '菜鸟寄件'
            }]
        },
        mounted() {
            this.switchTab(2);
            window.localStorage.setItem('task_id', '1');
            //设置搜索订单的ID
            window.localStorage.setItem('express_id', '01');
            window.addEventListener('scroll', this.handleScroll);
        },
        activated() { //开启<keep-alive>，会触发activated事件
            // this.resetScrollTop();
            window.addEventListener('scroll', this.handleScroll);
        },
        watch: {
            //            '$route': 'fetchData'
        },
        beforeRouteEnter(to, from, next) {
            next();
        },
        beforeRouteUpdate(to, from, next) {
            this;
        },
        beforeRouteLeave(to, from, next) {
            next();
        },
        destroyed() {
            this;
        },
        methods: {
            fetchData() {
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
                //获取待办工单数量
                if (that.isFirst) {
                    that.getAjaxRequest("orderNum_cache", ajaxUrls.num, that.version, 30 * 1000, 6 * 60 * 60 * 1000, function(response) {
                        if (response.status == 0) {
                            that.num = response.data.task_numbers;
                        } else {
                            if (response.msg) _util.showErrorTip(response.data.msg);
                        }
                    },function(error){
                       _util.showErrorTip(error); 
                    });
                };
                that.showLoading();
                that.scroll_load_loading = true;
                that.getAjaxRequest("order_cache", ajaxUrls.tasks + 'filter=' + that.filter + '&page=' + that.page, that.version, 30 * 1000, 6 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {
                        //测试用
                        for (let i = 0; i < response.data.length; i++) {
                            response.data[i].head = '//img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS';
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
                        that.isFirst = false;
                        that.showLoadEnd();
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    _util.showErrorTip(error);
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
            },
            switchTab(index) {
                this.searchFlag = false;
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
            },
            isSearch() {
                this.searchFlag = !this.searchFlag;
            },
            goToSearch(item) {
                localStorage.express_id = item.id
                this.url('/search/')
            },
            goToMsg() {
                this.url('/message');
            },
            addOne() {
                this.url('/order/edit');
            },
            goInfo(_id) {
                this.searchFlag = false;
                localStorage.task_id = _id;
                this.url('/order/' + _id);
            },
            handleScroll() { //滚动加载监听事件
                if (!this.list.length < 16) {
                    if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                        this.loadTerminalData();
                    }
                }
            },
            loadTerminalData() {
                let that = this,
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
                that.showLoading();
                that.scroll_load_loading = true;
                that.getAjaxRequest("order_cache", ajaxUrls.tasks + 'filter=' + that.filter + '&page=' + that.page, that.version, 30 * 1000, 6 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {
                        that.hideLoading();
                        //测试用
                        for (let i = 0; i < response.data.length; i++) {
                            response.data[i].head = '//img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS';
                        }
                        that.scroll_load_loading = false;
                        that.list = that.list.concat(response.data);
                        that.showLoadEnd();
                        that.page += 1;
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    _util.showErrorTip(error);
                });
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

</style>
<style lang="sass" scoped>
    $tabactive: #07689f;
    $cf: #cfcfcf;
    .pt50 {
        padding-top: 43px;
    }
    
    .search {
        background: #8c8c8c;
        top: 6%;
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
            margin: 0 75px 0 0;
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

</style>
