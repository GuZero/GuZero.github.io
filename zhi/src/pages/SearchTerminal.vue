<template lang="jade">
    div.search-terminal
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder='搜索终端名称',
            v-model="terminalName",
            @searchInfo="searchTerminal",            
        )
        div.mt44.pt50.pb60
            NoNetwork(v-show="isNoNetwork && !scroll_load_loading",@fetchDataCallBack="loadTerminalData")
            div(v-show="!isNoNetwork")
                div.empty(v-if="!terminals.length && !scroll_load_loading")
                    img.empty-img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp")
                    p.empty-info 暂无终端
                div.areas.rel(v-for="t in terminals", @click.stop.prevent="goToInfo(t)")
                    div.div
                       div.title.rel {{ t.terminal_name }}
                       div.line.rel {{ t.terminal_code }}
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
                pageTitle: '搜索终端名称',
                terminalName: '',
                //终端列表状态
                page: 1,
                pageList: [],
                terminals: [],
                scroll_load_loading: false,
                scroll_load_end: false,
                delay: null,
                NoNetwork: false
            }
        },
        components: {
            HeaderBar,
            Search,
            DataLoading,
            NoNetwork
        },
        created() { //开启<keep-alive>，会触发activated事件
            window.canGoBack = true;
            window.origin = null;
        },
        mounted() {
            this.loadTerminalData();
            window.addEventListener('scroll', this.handleScroll);
        },
         beforeRouteLeave: (to, from, next) => {
            window.removeEventListener('scroll', this.handleScroll);
            next();
        },
        methods: {
            handleScroll() { //滚动加载监听事件
                let scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    this.loadTerminalData();
                }
            },
            isLoading() { //是否已显示“正在加载数据状态”节点
                this.$refs.loading && this.$refs.loading.isLoading();
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
                if (this.terminals.length) {
                    this.$refs.loading && this.$refs.loading.showEnd();
                }
            },
            loadTerminalData() {
                let that = this,
                    page = that.page,
                    _key = that.terminalName;
                if (that.scroll_load_loading || that.isLoading()) {
                    return false;
                }
                if (that.scroll_load_end) {
                    return false;
                }
                if (that.pageList.indexOf(page) > -1) {
                    return false;
                }
                that.showLoading();
                that.scroll_load_loading = true;
                getAjaxRequest("order_cache", ajaxUrls.searchTerminal + _key.trim() + "&page=" + page, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function(response) {
                    that.hideLoading();
                    that.isNoNetwork = false;
                    if (response.status == 0) {
                        that.scroll_load_loading = false;
                        if (response.data && response.data.length) {
                            that.terminals = that.terminals.concat(response.data);
                            that.page += 1;
                            that.pageList = that.pageList.concat([page]);
                            if (response.data.length < that.numPerPage) {
                                that.scroll_load_end = true;
                            }
                        } else {
                            that.scroll_load_end = true;
                            that.showLoadEnd();
                        }
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    that.hideLoading();
                    that.isNoNetwork = true;
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            searchTerminal(isFirst) {
                let that = this;
                that.delay = setTimeout(function() {
                    window.clearTimeout(that.delay);
                    that.delay = null;
                    that.page = 1;
                    that.pageList = [];
                    that.terminals = [];
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    that.scroll_load_loading = false;
                    that.scroll_load_end = false;
                    that.loadTerminalData();
                }, 350);
            },
            goToInfo(item) {
                localStorage.terminal_code = item.terminal_code;
                localStorage.terminal_name = item.terminal_name;
                this.$router.go(-1);
                return false;
            }
        }
    }

</script>
<style lang="sass" scoped>
    .empty {
        padding: 16px;
        color: #4d4d4d;
    }
    
    .item {
        padding: 0 0 0 16px;
        color: #4d4d4d;
        &:active {
            background-color: #eee;
        }
        .box {
            padding: 16px 0;
            border-bottom: 1px #cfcfcf solid;
        }
    }
    
    .areas {
        font-size: 16px;
        &:before {
            margin-left: 16px;
        }
        &:active {
            background-color: #eee;
        }
        .div {
            padding: 16px 0;
            margin-left: 16px;
            .title {
                color: #323232;
                margin-bottom: 3px;
                padding-right: 16px;
            }
            .line {
                color: #6e6e6e;
                font-size: 14px;
                padding-right: 16px;
            }
        }
    }
    
    .areas:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #979797;
        transform: scale(1, .5);
    }

</style>
