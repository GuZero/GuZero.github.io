<template lang="jade">
    div.deposit_record
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44
            NoNetwork(v-show="isNoNetwork && !scroll_load_loading",@fetchDataCallBack="fetchData")
            div(v-show="!isNoNetwork")
                div.empty(v-if="!result.length&&!scroll_load_loading")
                    img.empty-img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp")
                    p.empty-info 暂无存件记录
                div.pd_16
                    div.list(v-for="d in result" v-if="result.length")
                        div
                           label.c_g1 订单状态：
                           lable {{d.state}}
                        div
                           label.c_g1 终端名称：
                           lable {{d.terminal_name}}   
                        div
                           label.c_g1 派件时间：
                           lable {{d.delivery_at}}
                        div
                           label.c_g1 取件时间：
                           lable {{d.fetch_at}}
                        div
                           label.c_g1 用户手机号：
                           lable {{d.receiver_telephone}}
                        div
                           label.c_g1 快递员手机号：
                           lable {{d.operator_telephone}}
                        div.num
                                span(style="font-size:10px")
                                    label.c_g1 箱门号编码：
                                    lable {{d.box}}                 
            DataLoading(ref="loading")
</template>
<script>
    import HeaderBar from '../components/common/Header'
    import Search from '../components/common/Search'
    import DataLoading from '../components/common/DataLoading'
    import NoNetwork from '../components/elements/NoNetwork'
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '存件记录',
                version: '1',
                isNoNetwork: false,
                key: this.$route.query.key,
                url: ajaxUrls.search1,

                //终端列表状态
                result: [],
                numPerPage: 16,
                page: 1,
                pageList: [],
                scrollTop: 0,
                scroll_load_loading: false,
                scroll_load_end: false
            }
        },
        components: {
            HeaderBar,
            NoNetwork,
            Search,
            DataLoading
        },
        mounted() {
            window.canGoBack = true;
            window.addEventListener('scroll', this.handleScroll);
        },
        activated() {
            window.canGoBack = true;
            if (this.$route.query.key != this.key) {
                this.reset();
            }
            this.fetchData();
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeRouteLeave(to, from, next) {
            window.removeEventListener('scroll', this.handleScroll);
            next();
        },
        methods: {
            handleScroll() { //滚动加载监听事件
                let scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    this.fetchData();
                }
            },
            reset() {
                document.body.scrollTop = 0;
                this.isNoNetwork = false;
                this.key = this.$route.query.key;
                this.result = [];
                this.page = 1;
                this.pageList = [];
                this.scroll_load_loading = false;
                this.scroll_load_end = false;
            },
            fetchData() {
                let that = this,
                    page = that.page,
                    _key = that.key;
                if (that.scroll_load_loading) {
                    return false;
                }
                if (that.scroll_load_end) {
                    return false;
                }
                if (that.pageList.indexOf(page) > -1) {
                    return false;
                }
                that.showLoading();
                getAjaxRequest("searchPage_cache", that.url + '' +"&box_id=" + _key + "&page=" + page, that.version, 30 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    that.hideLoading();
                    that.isNoNetwork = false;
                    if (response.status == 0) {
                        that.result = that.result.concat(response.data);
                        that.page += 1;
                        that.pageList = that.pageList.concat([page]);
                        if (response.data.length < that.numPerPage) {
                            that.showLoadEnd();
                        } else {
                            that.hideLoading();
                        }
                    } else {
                        that.hideLoading();
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    that.hideLoading();
                    that.isNoNetwork = true;
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
                this.scroll_load_end = true;
                if (this.result.length) {
                    this.$refs.loading && this.$refs.loading.showEnd();
                }
            },
        }
    }

</script>
<style lang="sass" scoped>
    .c_b {
        color: #07689f;
    }
    
    .c_g {
        color: #a3a3a3;
    }
    
    .c_g1 {
        color: #908d8d;
    }
    
    .main {
        width: 100%;
        position: absolute;
        overflow-y: scroll;
        top: 94px;
        bottom: 0px;
        -webkit-overflow-scrolling: touch;
    }
    
    .pd_16 {
        padding: 0 16px;
        div.img {
            width: 125px;
            height: 125px;
            padding-top: 70px;
            margin: 0 auto;
        }
    }
    
    .pd_20 {
        padding-top: 20px;
    }
    
    .item {
        position: relative;
        line-height: 35px;
        height: 35px;
        color: #a3a3a3;
    }
    
    .item:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #f4f4f4;
        transform: scale(1, .5);
    }
    
    .list {
        padding-top: 20px;
        padding-bottom: 18px;
        position: relative;
        div {
            font-size: 15px;
            height: 22px;
            line-height: 22px;
        }
        .num {
            margin-top: 5px;
            display: flex;
            justify-content: space-between;
        }
    }
    
    .list:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #f4f4f4;
        transform: scale(1, .5);
    }

</style>
