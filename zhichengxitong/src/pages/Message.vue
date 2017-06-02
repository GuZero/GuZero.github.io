<template lang="jade">
    div.message
        HeaderBar(
            :title="pageTitle",
            :noborder="true"
        )
        div.nav.top44.fixed
            div.left.tab.rel(:class="{active: activeTab == 0}", @click="fetchData(0)")
                div
                    label 预警
                    label
            div.left.tab.rel(:class="{active: activeTab == 1}", @click="fetchData(1)")
                div
                    label 工单
                    label 
                        span (
                        span.num {{order_num}}
                        span )
            div.left.tab.rel(:class="{active: activeTab == 2}", @click="fetchData(2)")
                div
                    label 告警
                    label 
                        span (
                        span.num {{warn_num}}
                        span )
            div.left.tab.rel(:class="{active: activeTab == 3}", @click="fetchData(3)")
                div
                    label 合同
                    label
        div.mt44.pt50.pb60
            template(v-if="list.length <= 0")
                div.empty
                    img.empty-img(src='http://img.aimoge.com/FgP3EthHIeL0e8AaMRJSqj5mZKas')
                    div.empty-info 暂无消息通知
            template(v-else)
                template(v-if="activeTab == 1")
                    div.item.rel
                        p.time 8月10日 10:30 
                        div.rel.info
                            i(:class='{unreadStatus: !read}')
                            div.detail
                                div.flag 运维工单
                                div.title 系统发起的工单，待你处理
                                div.line.f12.rel
                                    label.gray.rel.desc 终端名称:
                                    label 青山湾花园格格货栈
                                div.line.f12.rel
                                    label.gray.rel.desc 创建时间:
                                    label 2016-09-21 19:40:30
                    div.item.rel
                        p.time 8月10日 10:30 
                        div.rel.info
                            i(:class='{unreadStatus: !read}')
                            div.detail
                                div.flag 运维工单
                                div.title 系统发起的工单，待你处理
                                div.line.f12.rel
                                    label.gray.rel.desc 终端名称:
                                    label 青山湾花园格格货栈
                                div.line.f12.rel
                                    label.gray.rel.desc 创建时间:
                                    label 2016-09-21 19:40:30
                template(v-if="activeTab == 2")
                    div.item.rel
                        p.time 8月10日 10:30 
                        div.rel.info
                            i(:class='{unreadStatus: !read}')
                            div.detail
                                div.title 青山湾花园格格货栈
                                div.line.f12.rel
                                    label.gray.rel.desc 告警时间:
                                    label 2016-09-21 19:40:30
                                div.line.f12.rel
                                    label.gray.rel.desc 告警内容:
                                    label 开门失败
                                div.line.f12.rel
                                    label.gray.rel.desc 格口编码:
                                    label M0420
                    div.item.rel
                        p.time 8月10日 10:30 
                        div.rel.info
                            i(:class='{unreadStatus: !read}')
                            div.detail
                                div.title 青山湾花园格格货栈
                                div.line.f12.rel
                                    label.gray.rel.desc 告警时间:
                                    label 2016-09-21 19:40:30
                                div.line.f12.rel
                                    label.gray.rel.desc 告警内容:
                                    label 开门失败
                                div.line.f12.rel
                                    label.gray.rel.desc 格口编码:
                                    label M0420
        DataLoading(ref="loading")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import FooterBar from '../components/common/Footer'
    import DataLoading from '../components/common/DataLoading'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '消息中心',
                bodyBg: 'gray',
                btnconfig: {
                    isgoback: 0,
                    ismsg: 1,
                    issearch: 1
                },
                footerconfig: {
                    isorder: true
                },
                activeTab: 2,
                order_num: '0',
                warn_num: '0',
                filter: '',
                page: 1,
                scroll_load_loading: false,
                scroll_load_end: false,
                "read": false,
                list: [],
                list1: [],
                list2: [
                        {
                            "read": false,
                            "terminal_name": "青山湾花园格格货栈", // 终端名称
                            "warning_at": "2016-09-21", // 告警时间
                            "content": "开门失败",// 告警内容
                            "encoding": "M0420" // 格口编码
                        }
                    ]
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            DataLoading
        },
        mounted() {
            this.fetchData(1);
            window.addEventListener('scroll', this.handleScroll);
        },
        activated() { 
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
            handleScroll() { //滚动加载监听事件
                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    // this.fetchData();
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
            },
            fetchData(index) {
                if (index == 0 || index == 3) {
                    _util.showErrorTip('敬请期待！');
                    return false;
                }
                index > -1 ? this.activeTab = index : void 0;
                //getDataByTabIndex post ajax
                let that = this;
                that.page = 1;
                that.list = [];
                that.hideLoading();
            },
            goDetail(_id) {
                this.flag=false;
                this.url('/order/' + _id);
            }
        }
    }

</script>
<style lang="sass" scoped>
    $tabactive: #07689f;
    $cf: #cfcfcf;
    .message {
        .pt50 {
            padding-top: 43px;
        }
        .nav {
            background-color: #fafafa;
            border-bottom: 1px $cf solid;
            width: 100%;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            .num{
                color: #d75a48;
            }
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
                    .num{
                        color: $tabactive;
                    }
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
        .empty{
            padding-top: 64px;
            .empty-img{
                display: block;
                width: 144px;
                height: 144px;
                margin: 0 auto 16px;
            }
            .empty-info{
                font-size: 14px;
                color: #6e6e6e;
                text-align: center;
            }
        }
        .item{
            padding: 24px 16px 0 16px;
            .time{
                display:block;
                width: 135px;
                height: 18px; 
                line-height: 18px;
                margin:0 auto 8px;
                text-align: center; 
                background-color: #cfcfcf;
                border-radius: 10px; 
                color: #fff;
                font-size: 12px;
            }
            .gray{
                color: #6e6e6e;
            }
            .flag{
                font-size: 14px;
                color: $tabactive;
            }
            .bloder{
            }
            .info{
                padding-left: 16px;
                .unreadStatus{
                    position: absolute;
                    top: 0; 
                    left: 0;
                    height: 8px; 
                    width: 8px; 
                    border-radius: 100%; 
                    background-color: #d75a48; 

                }
                .detail{
                    background-color:#fff;
                    border-radius: 10px;
                    padding: 8px 16px;
                    color: #323232;
                    .title{
                        font-size: 14px;
                        margin-bottom: 8px;
                        font-weight: 700;
                    }
                    .line{
                        padding-left: 60px;
                    }
                    .desc{
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        width: 60px;
                        height: 14px;
                    }
                }
            }
            

        }
    }

</style>
