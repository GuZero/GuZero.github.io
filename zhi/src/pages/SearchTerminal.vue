<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder='搜索终端名称',
            v-model="terminalName",
            @changeCallback="searchTerminal(1)"
        )
        div.mt44.pt50.pb60
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
                scrollTop: 0,
                scroll_load_loading: false,
                scroll_load_end: false,
                //搜索结果状态
                tn_page: 1,
                tn_pageList: [],
                tn_terminals: [],
                tn_scrollTop: 0,
                tn_scroll_load_loading: false,
                tn_scroll_load_end: false,
                tn_delay: null,
                userID: ''
            }
        },
        components: {
            HeaderBar,
            Search,
            DataLoading
        },
        mounted() {
            window.canGoBack = true;
            window.origin = null;
            this.loadTerminalData();
            window.addEventListener('scroll', this.handleScroll);
        },
        activated() { //开启<keep-alive>，会触发activated事件
            // this.resetScrollTop();
            window.canGoBack = true;
            window.origin = null;
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() { //滚动加载监听事件
                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    this.loadTerminalData();
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
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            },
            searchTerminal(isFirst) {
                let that = this,
                    page = 1,
                    _key = that.terminalName;
                if (isFirst) {
                    that.tn_page = 1;
                    that.tn_pageList = [];
                    that.terminals = [];
                    that.tn_scrollTop = 0;
                    that.tn_scroll_load_loading = false;
                    that.tn_scroll_load_end = false;
                    document.body.scrollTop = 0;
                }
                page = that.tn_page;
                if (!_key || !_key.trim()) {
                    that.resetScrollTop(1);
                    return false;
                }
                if (that.tn_delay) {
                    return false;
                }
                if (that.tn_scroll_load_loading || that.isLoading()) {
                    return false;
                }
                if (that.tn_scroll_load_end) {
                    return false;
                }
                if (that.tn_pageList.indexOf(page) > -1) {
                    return false;
                }
                //延时350ms触发搜索事件
                that.tn_delay = setTimeout(function() {
                    window.clearTimeout(that.tn_delay);
                    that.tn_delay = null;
                    that.showLoading();
                    that.tn_scroll_load_loading = true;
                    axios.get(ajaxUrls.searchTerminal + _key.trim() + '&page=' + page)
                        .then(function(rsp) {
                            let d = rsp.data;
                            that.hideLoading();
                            that.tn_scroll_load_loading = false;
                            if (d.status == 0 && d.data && d.data.length) {
                                that.terminals = that.terminals.concat(d.data);
                                that.tn_page += 1;
                                that.tn_pageList = that.tn_pageList.concat([page]);

                                if (d.data.length < that.numPerPage) {
                                    that.tn_scroll_load_end = true;
                                }
                            } else {
                                that.tn_scroll_load_end = true;
                                if (isFirst) {
                                    that.showLoadEnd();
                                }
                            }
                        });
                }, 350);
            },
            resetScrollTop(showLoadEnd) {
                if (showLoadEnd) this.showLoadEnd();
                if (this.terminalName && this.terminalName.trim()) {
                    document.body.scrollTop = this.tn_scrollTop;
                } else {
                    if (this.tabIndex == 2 && this.scrollTop) {
                        document.body.scrollTop = this.scrollTop;
                    } else {
                        document.body.scrollTop = 0;
                    }
                }
            },
            goToInfo(item) {
                localStorage.terminal_code = item.terminal_code;
                localStorage.terminal_name = item.terminal_name;
                this.$router.replace('/order/edit');
                return {

                };
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
                this.$refs.loading && this.$refs.loading.showEnd();
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
