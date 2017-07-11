<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle",
            :btnconfig="btnconfig"
        )
        Search.fixed(
            ref="searchBar",
            class="top44",
            placeholder="搜索终端名称",
            v-model="terminalName",
            @searchInfo="searchTerminal(1)",
            @changeCallback1="isFlag1()",
            @changeCallback2="isFlag2()",
        )
        div.nav.fixed(v-if="!terminalName")
            div.tag.none.rel(@click="loadAreas(tab0, $event)", :class="{active: tabActive0}") {{ tab0.ar_name }}
            div.tag.rel(@click="loadCitys(tab1, $event)", v-if="tabData1", :class="{active: tabActive1}") {{ tab1.ar_name }}
            div.tag.rel(@click="loadTerminals(tab2, $event)", v-if="tabData2") {{ tab2.ar_name }}
        div.pb60.main(v-if="!terminalName")
            div.areas.rel.arrow(v-if="tabIndex == 0", v-for="a in areas", @click="loadCitys(a)")
                div.div {{ a.ar_name }}({{ a.terminal_number }})
            div.areas.rel.arrow(v-if="tabIndex == 1", v-for="c in citys", @click="loadTerminals(c)")
                div.div {{ c.city_name }}({{ c.terminal_number }})
            div(v-if="tabIndex == 2")
                div.areas.rel(v-for="t in terminals", @click.stop.prevent="goToInfo(t)")
                    div.div
                       div.title.rel {{ t.terminal_name }}
                       div.line.rel {{ t.region }}，{{ t.place }}，{{ t.terminal_code }}
            DataLoading(ref="loading" v-if="terminalName")
        div.nav.fixed(v-if="terminalName")
            div.tag.none.rel 全国
        div.pb60.main(v-if="terminalName")
            div.areas.rel(v-for="t in tn_terminals", @click.stop.prevent="goToInfo(t)")
                div.div
                   div.title.rel {{ t.terminal_name }}
                   div.line.rel {{ t.region }}，{{ t.place }}，{{ t.terminal_code }}
            DataLoading(ref="loading" v-if="isSearch")           
        FooterBar.fixed(:footerconfig="footerconfig",:class="{dis:is_IOS}")
</template>
<script>
    import HeaderBar from '../components/common/Header'
    import FooterBar from '../components/common/Footer'
    import Search from '../components/common/Search'
    import DataLoading from '../components/common/DataLoading'
    export default {
        mixins: [require('../components/mixin/BodyBg')],

        data() {
            return {
                pageTitle: '终端列表',
                btnconfig: {
                    isgoback: 0
                },
                footerconfig: {
                    isterminal: true
                },
                version: '1',
                //搜索文本框字段
                terminalName: '',
                tabIndex: 0,
                tab0: {
                    ar_id: '',
                    ar_name: '全国'
                },
                tab1: {},
                tab2: {},
                areas: [],
                citys: [],
                ar_id: '',
                city_id: '',
                //分页每页16条
                numPerPage: 16,
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
                is_IOS:false,
                isSearch:false
            }
        },
        created() {
            window.canGoBack = false;
            window.origin = null;
        },
        components: {
            HeaderBar,
            FooterBar,
            Search,
            DataLoading
        },
        computed: {
            tabActive0() {
                return this.tabIndex == 1 || this.tabIndex == 2;
            },
            tabActive1() {
                return this.tabIndex == 2;
            },
            tabData1() { //是否显示2级导航
                return !this.emptyJson(this.tab1);
            },
            tabData2() { //是否显示3级导航
                return !this.emptyJson(this.tab2);
            }
        },
        watch: {
            terminalName: function(newVal) {
                if (newVal.trim()) {
                    //当开始搜索时，记住终端列表滚动条显示的位置
                    this.scrollTop = this.scrollTop || document.body.scrollTop;
                } else {
                    //搜索为空，隐藏搜索列表，恢复其默认滚动条位置
                    this.tn_scrollTop = 0;
                    this.isSearch=false;
                }
            },
            '$route': function(){
                if(this.$route.path==('/terminal')){
                    this.terminalName='';
                };
                if(this.$route.path!=('/terminal')){
                    if(this.is_IOS) this.is_IOS=false;
                }
            }
            
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this.resetScrollTop();
            this.loadAreaData();
            this.hideLoading();
        },
        activated() { //开启<keep-alive>，会触发activated事件
            window.canGoBack = false;
            window.origin = null;
            this.resetScrollTop();
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
        methods: {
            goToInfo(terminal) {
                this.url('/terminal/' + terminal.terminal_id);
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
            tabDisabled(e) { //导航是否可点击
                var flag = false;
                if (e && e.target.className.indexOf('active') < 0 && e.target.className.indexOf('div') < 0)
                    flag = true;
                return flag;
            },
            setNavState(data, e) {
                //列表@click不要传$event参数
                let eventFromNav = !!e ? true : false;
                if (eventFromNav) { //来自nav的点击
                    if (data.ar_name && data.ar_id == '') { //1级菜单
                        this.tabIndex = 0;
                        this.tab1 = {};
                        this.tab2 = {};
                    }
                    if (data.ar_name && data.ar_id != '') { //2级菜单
                        this.tabIndex = 1;
                        this.tab1 = {
                            ar_id: data.ar_id,
                            ar_name: data.ar_name
                        };
                        this.tab2 = {};
                    }
                } else { //来自list的点击
                    if (data.ar_name) {
                        this.tabIndex = 1;
                        this.tab1 = {
                            ar_id: data.ar_id,
                            ar_name: data.ar_name
                        };
                    }
                    if (data.city_name) {
                        this.tabIndex = 2;
                        this.tab2 = {
                            city_id: data.city_id,
                            ar_name: data.city_name
                        };
                    }
                }
            },
            resetDefaultConfig() {
                this.page = 1;
                this.pageList = [];
                this.terminals = [];
                this.scrollTop = 0;
                this.scroll_load_end = false;
                this.scroll_load_loading = false;
            },
            loadAreas(data, e) {
                if (this.tabDisabled(e)) return false;
                this.setNavState(data, e);
                this.resetDefaultConfig();
                //加载数据
                this.loadAreaData();
            },
            loadCitys(data, e) {
                let that = this;
                if (that.tabDisabled(e)) return false;
                that.setNavState(data, e);
                if (that.ar_id == data.ar_id) return false;
                //加载数据
                that.ar_id = data.ar_id;
                that.resetDefaultConfig();
                that.citys = [];
                that.showLoading();
                getAjaxRequest("terminal_cache", ajaxUrls.citys + data.ar_id, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000,
                    function(response) {
                        that.hideLoading();
                        if (response.status == 0) {
                            that.citys = response.data;
                        } else {
                            if (response.msg) _util.showErrorTip(response.msg);
                        }
                    },
                    function(error) {
                        that.hideLoading();
                        _util.showErrorTip('您的网络可能出了点问题:(');
                    })
            },
            loadTerminals(data, e) {
                if (this.tabDisabled(e)) return false;
                this.setNavState(data, e);
                //加载数据
                let that = this;
                that.city_id = data.city_id;
                that.resetDefaultConfig();
                that.loadTerminalData(true);
            },
            loadAreaData() {
                let that = this;
                if (that.areas && !that.areas.length) {
                    that.showLoading();
                    getAjaxRequest("terminal_cache", ajaxUrls.areas, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000,
                        function(response) {
                            that.hideLoading();
                            if (response.status == 0) {
                                that.areas = response.data;
                            } else {
                                if (response.msg) _util.showErrorTip(response.msg);
                            }
                        },
                        function(error) {
                            that.hideLoading();
                            _util.showErrorTip('您的网络可能出了点问题:(');
                        })
                }
            },
            loadTerminalData(isFirst) {
                let that = this,
                    page = that.page;
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

                getAjaxRequest("terminal_cache", ajaxUrls.terminals + that.ar_id + '/citys/' + that.city_id + '?page=' + page, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000,
                    function(response) {
                        that.hideLoading();
                        that.scroll_load_loading = false;
                        if (response.status == 0 && response.data && response.data.length) {
                            that.terminals = that.terminals.concat(response.data);
                            that.page += 1;
                            that.pageList = that.pageList.concat([page]);

                            if (response.data.length < that.numPerPage) {
                                that.scroll_load_end = true;
                            }
                        } else {
                            that.scroll_load_end = true;
                            if (isFirst) {
                                that.showLoadEnd();
                            }
                            if (response.status != 0) {
                                if (response.msg) _util.showErrorTip(response.msg);
                            }
                        }
                    },
                    function(error) {
                        that.hideLoading();
                        _util.showErrorTip('您的网络可能出了点问题:(');
                    })
            },
            searchTerminal(isFirst) {
                this.isSearch=true;
                let that = this,
                    page = 1,
                    _key = that.terminalName;
                if (isFirst) {
                    that.tn_page = 1;
                    that.tn_pageList = [];
                    that.tn_terminals = [];
                    that.tn_scrollTop = 0;
                    that.tn_scroll_load_loading = false;
                    that.tn_scroll_load_end = false;
                    document.body.scrollTop = 0;
                }
                page = that.tn_page;
                if (!_key || !_key.trim()) {
                    that.resetScrollTop(1);
                    _util.showErrorTip('请输入要搜索的终端名称');
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
                    getAjaxRequest("terminal_cache", ajaxUrls.searchTerminal + _key.trim() + '&page=' + page, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000,
                        function(response) {
                            that.hideLoading();
                            that.tn_scroll_load_loading = false;
                            if (response.status == 0 && response.data && response.data.length) {
                                that.tn_terminals = that.tn_terminals.concat(response.data);
                                that.tn_page += 1;
                                that.tn_pageList = that.tn_pageList.concat([page]);
                                if (response.length < that.numPerPage) {
                                    that.tn_scroll_load_end = true;
                                }
                            } else {
                                that.tn_scroll_load_end = true;
                                if (isFirst) {
                                    that.showLoadEnd();
                                }
                                if (response.status != 0) {
                                    if (response.msg) _util.showErrorTip(response.msg);
                                }
                            }
                        },
                        function(error) {
                            that.hideLoading();
                            _util.showErrorTip('您的网络可能出了点问题:(');
                        })
                }, 350);
            },
            handleScroll() { //滚动加载监听事件
                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    //只有终端列表和搜索结果开启分页加载
                    if (this.terminalName && this.terminalName.trim()) {
                        if (this.tn_scroll_load_end && this.$refs.loading) {
                            return this.showLoadEnd();
                        } else {
                            this.searchTerminal();
                        }
                    } else {
                        if (this.scroll_load_end && this.$refs.loading) {
                            return this.showLoadEnd();
                        } else {
                            if (this.tabIndex == 2) this.loadTerminalData();
                        }
                    }
                }
                //同步滚动条位置
                if (this.terminalName && this.terminalName.trim()) {
                    this.tn_scrollTop = document.body.scrollTop;
                } else {
                    if (this.tabIndex == 2) this.scrollTop = document.body.scrollTop + 2;
                }
            },
            isFlag1() {
                if (_util.isIOS()) {
                    this.is_IOS = true;
                }
            },
            isFlag2() {
                if (_util.isIOS()) {
                    this.is_IOS = false;
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
                this.$refs.loading && this.$refs.loading.showEnd();
            }
        }
    }

</script>
<style lang="sass" scoped>
    .pt50 {
        padding-top: 100px;
    }
    
    .main {
        width: 100%;
        position:absolute;
        overflow-y: scroll;
        height: 71%;
        top: 144px;
        -webkit-overflow-scrolling: touch;       
    }
    
    .arrow:after {
        content: '';
        background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;
        background-size: 100% auto;
        display: block;
        height: 28px;
        width: 28px;
        position: absolute;
        right: 12px;
        top: 50%;
        margin-top: -14px;
    }
    
    .areas:before,
    .nav:before {
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
    
    .nav {
        background-color: #fff;
        color: #4d4d4d;
        font-size: 16px;
        overflow: hidden;
        padding: 16px;
        width: 100%;
        left: 0;
        top: 90px;
        z-index: 300;
        box-sizing: border-box;
        .tag {
            float: left;
            padding-left: 32px;
            margin-left: 8px;
            &.active {
                color: #07689f;
            }
            &:before {
                content: '';
                display: block;
                position: absolute;
                background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;
                background-size: 100% auto;
                height: 26px;
                width: 26px;
                left: 0;
                top: 50%;
                margin-top: -13px;
            }
            &.none {
                margin: 0;
                padding-left: 0;
            }
            &.none:before {
                display: none;
            }
        }
    }
    
    .areas {
        font-size: 16px;
        box-sizing: border-box;
        overflow: hidden;
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
    
    .dis {
        display: none;
    }

</style>
