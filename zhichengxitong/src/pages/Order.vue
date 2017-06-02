<template lang="jade">
div.home
	HeaderBar(
		:title="pageTitle",
		:btnconfig="btnconfig",
		:noborder="true",
		@msgBtnCallback="goToMsg",
		@searchBtnCallback="isSearch"
	)
	div.search(v-if="searchFlag")
		div.item(v-for="d in searchInfo", @click.stop.prevent="goToSearch(d)") {{d.value}}
	div.nav.top44.fixed
		div.left.tab.rel(:class="{active: activeTab == 0}", @click="fetchData(0)")
			div
				label 所有任务
				label
		div.left.tab.rel(:class="{active: activeTab == 1}", @click="fetchData(1)")
			div
				label 我创建的
				label
		div.left.tab.rel(:class="{active: activeTab == 2}", @click="fetchData(2)")
			div
				label 我的待办
				label ({{num}})
		div.left.tab.rel(:class="{active: activeTab == 3}", @click="fetchData(3)")
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
                flag: true,
                scroll_load_loading: false,
                scroll_load_end: false,
                list: [],
                list1: [],
                list2: [],
                list3: [],
                searchInfo: [],
                searchFlag:false
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            DataLoading
        },
        created() {
            this.fetchData();
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
            '$route': 'fetchData'
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
            fetchData(index) {
                this.searchFlag=false;
                index > -1 ? this.activeTab = index : void 0;
                //getDataByTabIndex post ajax
                let that = this;
                that.page = 1;
                that.list = [];
                that.$refs.loading && that.$refs.loading.showLoading();
                setTimeout(function() {
                    switch (index) {
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

                    //获取待办工单数量
                    axios.get(ajaxUrls.num)
                        .then(function(rsp) {
                            that.num = rsp.data.data.task_numbers;
                        });
                    that.$refs.loading && that.$refs.loading.showLoading();
                    axios.get(ajaxUrls.tasks + 'filter=' + that.filter)
                        .then(function(rsp) {

                            for (let i = 0; i < rsp.data.data.length; i++) {
                                rsp.data.data[i].head = '//img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS';
                            }
                            that.list2 = rsp.data.data;
                            that.list = that.list2;

                            that.showLoadEnd();
                        });


                }, 500);
            },
            isSearch() {
                this.searchFlag=!this.searchFlag;
            },
             goToSearch(item) {
                localStorage.express_id=item.id 
                this.url('/search/')
            },
            goToMsg() {
                this.url('/message');
            },
            addOne() {
                this.url('/order/edit');
            },
            goInfo(_id) {

                localStorage.task_id = _id;
                this.flag = false;
                this.url('/order/' + _id);
            },
            handleScroll() { //滚动加载监听事件
                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    this.loadTerminalData();
                }
            },
            loadTerminalData() {
                let that = this,
                    page = that.page;
                if (that.activeTab == '0') {
                    if (this.flag) {
                        that.showLoading();
                        that.scroll_load_loading = true;
                        axios.get(ajaxUrls.tasks + 'page=' + page).then(function(rsp) {
                            let d = rsp.data;
                            that.hideLoading();
                            for (let i = 0; i < d.data.length; i++) {
                                d.data[i].head = '//img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS';
                            }
                            that.scroll_load_loading = false;
                            that.list = that.list.concat(d.data);
                            that.page += 1;
                        })
                    }
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

</style>
<style lang="sass" scoped>
    $tabactive: #07689f;
    $cf: #cfcfcf;
    .pt50 {
        padding-top: 43px;
    }
    
    .search {
        background: #8c8c8c;
        position: absolute;
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
            top: 0;
            width: 100%;
            height: 1px;
            background-color: #fff;
            transform: scale(1, .5);
        }
    }
    
    .nav {
        background-color: #fff;
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
