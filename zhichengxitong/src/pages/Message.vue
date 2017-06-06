<template lang="jade">
    div.message
        HeaderBar(
            :title="pageTitle",
            :noborder="true"
        )
        div.nav.top44.fixed
            div.left.tab.rel(:class="{active: activeTab == 0}", @click="switchTab(0)")
                div
                    label 预警
                    label
            div.left.tab.rel(:class="{active: activeTab == 1}", @click="switchTab(1)")
                div
                    label 工单
                    label 
                        span (
                        span.num {{task_num}}
                        span )
            div.left.tab.rel(:class="{active: activeTab == 2}", @click="switchTab(2)")
                div
                    label 告警
                    label 
            div.left.tab.rel(:class="{active: activeTab == 3}", @click="switchTab(3)")
                div
                    label 合同
                    label
        div.mt44.pt50
            template(v-if="list.length <= 0 && !isFirst")
                div.empty
                    img.empty-img(src='http://img.aimoge.com/FgP3EthHIeL0e8AaMRJSqj5mZKas')
                    div.empty-info 暂无消息通知
            template(v-if="list.length > 0")
                template(v-if="activeTab == 1")
                    div.list(v-for="(item,index) in list")
                        div.item.rel(@click.stop.prevent="goDetail(item.id,item.href,index)")
                            p.time {{item.created_at | converTime}}
                            div.rel.info
                                i(:class='{ unreadStatus: converReadTime(item.readed_at) }')
                                div.detail
                                    div.flag {{item.type}}
                                    div.title {{item.content}}
                                    div.line.f12.rel
                                        label.gray.rel.desc 终端名称:
                                        label {{item.terminal_name}}
                                    div.line.f12.rel
                                        label.gray.rel.desc 创建时间:
                                        label {{item.created_at}}
                template(v-if="activeTab == 2")
                    div.list(v-for="item in list2")
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
                activeTab: 1,
                warn_num: '0',
                task_num: '0',
                alarm_num: '0',
                contract_num: '0',
                filter: '',
                page: 1,
                scroll_load_loading: false,
                isFirst: true,
                scroll_load_end: false,
                list: [],
                list0: [],
                list1: [],
                list2: [],
                list3: []
            }
        },
        components: {
            HeaderBar,
            FooterBar,
            DataLoading
        },
        mounted() {
            this.switchTab(1);
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
        filters: {
            converTime: function (value) {
                if (!value) return '';
                value = value.toString();
                return parseInt(value.substring(5,7)) + '月' +  parseInt(value.substring(8,10)) + '日 ' + value.substring(11,16);
            }
         },
        methods: {
            handleScroll() { //滚动加载监听事件
                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    this.fetchData();
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
                this.scroll_load_end = true;
                this.$refs.loading && this.$refs.loading.showEnd();
            },
            formatDate(value) {
                let date =new Date(value),
                    Y = date.getFullYear(),
                    m = date.getMonth() + 1,
                    d = date.getDate(),
                    H = date.getHours(),
                    i = date.getMinutes(),
                    s = date.getSeconds();
                if(m < 10) {
                 m ='0'+ m;
                }
                if(d < 10) {
                 d ='0'+ d;
                }
                if(H < 10) {
                 H ='0'+ H;
                }
                if(i < 10) {
                 i ='0'+ i;
                }
                if(s < 10) {
                 s ='0'+ s;
                }
                // 获取时间格式 2017-01-03 10:13:48 
                var t = Y+'-'+m+'-'+d+' '+H+':'+i+':'+s;
                // 获取时间格式 2017-01-03
                // var t = Y +'-'+ m +'-'+ d;
                return t;
            },
            converReadTime: function (value) {
                if (!value) return '';
                value = value.toString();
                if (value.substring(0,1) == '-' || value.substring(0,4) == '0000') {
                    return true;
                }else{
                    return false;
                }
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
                if (!(this.$route.path == '/message')) {
                    return false;
                }
                if (index == 0 || index == 2 || index == 3 ) {
                    _util.showErrorTip('敬请期待！');
                    return false;
                }
                index > -1 ? this.activeTab = index : void 0;
                switch (index) {
                    case 0:
                        this.filter = 'warn';
                        break;
                    case 1:
                        this.filter = 'tasks';
                        break;
                    case 2:
                        this.filter = 'alarm';
                        break;
                    case 3:
                        this.filter = 'contract';
                        break;
                    default:
                        this.filter = 'tasks';
                        break;
                }
                this.resetData();
                this.fetchData();
            },
            fetchData() {
                let that = this;
                if (that.scroll_load_loading) {
                    return false;
                }
                if (that.scroll_load_end) {
                    return false;
                }
 
                that.showLoading();
                axios.get(ajaxUrls.messages + that.filter + "?page=" + that.page)
                    .then(function(rsp) {
                        switch (that.activeTab) {
                            case 0:
                                that.list0 = that.list0.concat(rsp.data.data.news);
                                that.list = that.list0;
                                that.warn_num =  that.list0.length;
                                break;
                            case 1:
                                that.list1 = that.list1.concat(rsp.data.data.news);
                                that.list = that.list1;
                                that.task_num =  that.list1.length;

                                break;
                            case 2:
                                that.list2 = that.list2.concat(rsp.data.data.news);
                                that.list = that.list2;
                                that.alarm_num =  that.list2.length;
                                break;
                            case 3:
                                that.list3 = that.list3.concat(rsp.data.data.news);
                                that.list = that.list3;
                                that.contract_num =  that.list3.length;
                                break;
                            default:
                                that.list1 = that.list1.concat(rsp.data.data.news);
                                that.list = that.list1;
                                that.task_num =  that.list1.length;
                                break;
                        }
                        that.isFirst = false;
                        that.page += 1;
                        if (rsp.data.data.news.length < 5) {
                            that.showLoadEnd();
                            
                        }else{
                            that.hideLoading();
                        }
                    });
            },
            goDetail(_id,href,index) {
                let that = this;
                let item = that.list[index];
                if (!that.converReadTime(item.readed_at)) {
                    that.url(href);
                    return false;
                }
                axios.post( ajaxUrls.messages + that.filter, {
                    message_id: _id
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    if (rsp.data.status == 0) {
                        let date = new Date();
                        let item = that.list[index];
                            item.readed_at = that.formatDate();
                        that.list.splice(index,1,item);
                        that.url(href);
                    }else {
                        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                    }
                });
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
                        min-height: 22px;
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
