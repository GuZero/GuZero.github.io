<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44 fixed",
            placeholder="搜索手机号/终端名称",
            v-model="terminalName",
            @changeCallback="searchByKey(1)"
        )
        div.mt44.pt50.pb60
           div.pd_16
                div.item 搜索结果：共
                    span.c_b &nbsp {{num}}
                    span 条
                div.img(v-if="flag")
                 img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp" width="100%" height="100%")
                 p.c_g(style="text-align: center") 暂无搜索结果
            div.pd_16(v-if="isFlag1")
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 订单状态：
                       lable {{d.state}}
                    div
                       label.c_g1 存件时间：
                       lable {{d.fetch_at}}
                    div
                       label.c_g1 取件时间：
                       lable {{d.delivery_at}}
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
                            span(style="font-size:10px")
                                label.c_g1 取件码：
                                lable {{d.password}}
                div(v-if="!flag")
                    DataLoading(ref="loading")
            div.pd_16(v-if="isFlag2")
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 订单状态：
                       lable {{d.status}}
                    div
                       label.c_g1 下单时间：
                       lable {{d.order_at}}
                    div
                       label.c_g1 存件时间：
                       lable {{d.deliver_at}}
                    div
                       label.c_g1 取件时间：
                       lable {{d.fetch_at}}
                    div
                       label.c_g1 过期时间：
                       lable {{d.expried_at}}
                    div
                       label.c_g1 用户手机号：
                       lable {{d.user}}
                    div.num
                            span(style="font-size:10px")
                                label.c_g1 箱门号编码：
                                lable {{d.box}}
                            span(style="font-size:10px")
                                label.c_g1 寄存码：
                                lable {{d.password}}
                div(v-if="!flag")
                    DataLoading(ref="loading")
            div.pd_16(v-if="isFlag3")
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 寄件状态：
                       lable {{d.state}}
                    div
                       label.c_g1 寄件时间：
                       lable {{d.delivery_at}}
                    div
                       label.c_g1 寄件人手机号：
                       lable {{d.fetch_at}}
                div(v-if="!flag")
                    DataLoading(ref="loading")
            div.pd_16(v-if="isFlag4")
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 寄件状态：
                       lable {{d.state}}
                    div
                       label.c_g1 寄件时间：
                       lable {{d.begin_time}}
                    div
                       label.c_g1 寄件人手机号：
                       lable {{d.mobile}}
            div.pd_20
                DataLoading(ref="loading")



</template>
<!--<script src="https://unpkg.com/element-ui/lib/index.js"></script>-->
<script>
    import HeaderBar from '../components/common/Header'
    //    import FooterBar from '../components/common/Footer'
    import Search from '../components/common/Search'
    import DataLoading from '../components/common/DataLoading'
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                //                bodyBg: 'gray',
                pageTitle: '运营支撑系统',
                footerconfig: {
                    isterminal: true
                },
                terminalName: '',
                flag: true,
                isFlag1: false,
                isFlag2: false,
                isFlag3: false,
                isFlag4: false,
                num: 0,
                result: [],
                url: '',
                //终端列表状态
                page: 1,
                scrollTop: 0,
                scroll_load_loading: false,
                scroll_load_end: false,
                //搜索结果状态
                tn_page: 1,
                tn_scrollTop: 0,
                tn_scroll_load_loading: false,
                tn_scroll_load_end: false,
                tn_delay: null,
            }
        },
        directives: {
            focus: {
                inserted: function(el) {
                    // 聚焦元素
                    el.focus()
                }
            }
        },
        components: {
            HeaderBar,
            //            FooterBar,
            Search,
            DataLoading
        },
        mounted() {
            window.canGoBack = true;
            window.origin = null;
            this.getUrl();
            window.addEventListener('scroll', this.handleScroll);
            this.hideLoading();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': 'getUrl',
        },
        beforeRouteLeave(to, from, next) {
            this.terminalName = '';
            next();
        },
        activated() { //开启<keep-alive>，会触发activated事件
            // this.resetScrollTop();
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() { //滚动加载监听事件
                if (!this.result.lenght < 16) {
                    if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                        if (this.terminalName) {
                            this.loadTerminalData();
                        }
                    }
                }
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
            loadTerminalData(isFirst) {
                let that = this,
                    page = that.page,
                    _key = that.terminalName;
                if (that.scroll_load_loading || that.isLoading()) {
                    return false;
                }
                if (that.scroll_load_end) {
                    return false;
                }
                that.showLoading();
                that.scroll_load_loading = true;
                that.getAjaxRequest("searchPage_cache", that.url + _key.trim() + "&page=" + page, that.version, 30 * 1000, 6 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {
                        that.hideLoading();
                        that.scroll_load_loading = false;
                        if (response.status == 0 && response.data && response.data.length) {
                            that.result = that.result.concat(response.data);
                            that.num = that.result.length;
                            that.page += 1;
                            if (response.data.length < that.numPerPage) {
                                that.scroll_load_end = true;
                            }
                        } else {
                            that.scroll_load_end = true;
                            if (isFirst) {
                                that.showLoadEnd();
                            }
                        }
                        that.showLoadEnd();
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    _util.showErrorTip(error);
                });
            },
            searchByKey(isFirst) {
                let that = this,
                    page = 1,
                    _key = that.terminalName;
                if (isFirst) {
                    that.tn_page = 1;
                    that.tn_scrollTop = 0;
                    that.result = [];
                    that.tn_scroll_load_loading = false;
                    that.tn_scroll_load_end = false;
                    document.body.scrollTop = 0;
                }
                page = that.tn_page;
                if (!_key || !_key.trim()) {
                    that.flag = true;
                    that.num = 0;
                    that.resetScrollTop(1);
                    that.hideLoading();
                    that.result = [];
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
                this.showLoading();
                if (that.isFlag1 || that.isFlag2 || that.isFlag3 || that.isFlag4) {
                    //                    axios.get(that.url + _key.trim() + "&page=" + page)
                    //                        .then(function(rsp) {
                    //                            let d = rsp.data;
                    //                            that.hideLoading();
                    //                            that.tn_scroll_load_loading = false;
                    //                            console.log(d.data);
                    //                            if (d.data) {
                    //                                that.flag = false;
                    //                                if (d.data.length == 0) {
                    //                                    that.num = 0;
                    //                                    that.flag = true;
                    //                                }else if(d.data.length<16){
                    //                                    that.showLoadEnd();
                    //                                }
                    //                                else {
                    //                                    that.num = d.data.length;
                    //                                }
                    //                                that.result = that.result.concat(d.data);
                    //                                if (d.data.length < that.numPerPage) {
                    //                                    that.tn_scroll_load_end = true;
                    //                                }
                    //                            } else {
                    //                                that.flag = true;
                    //                                that.tn_scroll_load_end = true;
                    //                                if (isFirst) {
                    //                                    that.showLoadEnd();
                    //                                }
                    //                            }
                    //
                    //                        });
                    that.getAjaxRequest("search_cache", that.url + _key.trim() + "&page=" + page, that.version, 20 * 1000, 6 * 60 * 60 * 1000, function(response) {
                        if (response.status == 0) {
                            that.hideLoading();
                            that.tn_scroll_load_loading = false;
                            if (response.data) {
                                that.flag = false;
                                if (response.data.length == 0) {
                                    that.num = 0;
                                    that.flag = true;
                                } else if (response.data.length < 16) {
                                    that.showLoadEnd();
                                } else {
                                    that.num = response.data.length;
                                }
                                that.result = that.result.concat(response.data);
                                if (response.data.length < that.numPerPage) {
                                    that.tn_scroll_load_end = true;
                                }
                            } else {
                                that.flag = true;
                                that.tn_scroll_load_end = true;
                                if (isFirst) {
                                    that.showLoadEnd();
                                }
                            }
                        } else {
                            if (response.msg) _util.showErrorTip(response.data.msg);
                        }
                    }, function(error) {
                        _util.showErrorTip(error);
                    });
                }
            },
            getUrl() {
                let id = localStorage.express_id;
                switch (id) {
                    case '01':
                        this.url = ajaxUrls.search1;
                        this.isFlag1 = true;
                        this.isFlag2 = false;
                        this.isFlag3 = false;
                        this.isFlag4 = false;
                        break;
                    case '02':
                        this.url = ajaxUrls.search2;
                        this.isFlag2 = true;
                        this.isFlag1 = false;
                        this.isFlag3 = false;
                        this.isFlag4 = false;
                        break;
                    case '03':
                        this.url = ajaxUrls.search3;
                        this.isFlag3 = true;
                        this.isFlag1 = false;
                        this.isFlag2 = false;
                        this.isFlag4 = false;
                        break;
                    case '04':
                        this.url = ajaxUrls.search4;
                        this.isFlag4 = true;
                        this.isFlag2 = false;
                        this.isFlag3 = false;
                        this.isFlag1 = false;
                        break;
                    default:
                        this.url = ajaxUrls.search1;
                        break;
                }
                if (!this.terminalName == '') this.terminalName = '';
                this.result = [];
                this.num = 0;
                this.flag = true;
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
    .c_b {
        color: #07689f;
    }
    
    .c_g {
        color: #a3a3a3;
    }
    
    .c_g1 {
        color: #908d8d;
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
    
    .empty {
        padding: 16px;
        color: #4d4d4d;
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
            font-size: 12px;
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
