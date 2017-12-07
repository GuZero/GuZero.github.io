<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44",
            placeholder="搜索手机号/终端名称",
            v-model="terminalName",
            @searchInfo="searchByKey(1)",
            :class="{fixed:!isIOS,abs:isIOS}"
            v-focus
        )
        div.pb60.pt50.mt44
           div.pd_16
                div.item 搜索结果：共
                    span.c_b &nbsp {{num}}
                    span 条
                div.img(v-if="flag")
                 img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp" width="100%" height="100%")
                 p.c_g(style="text-align: center") 暂无搜索结果
            div.pd_16(v-if="isFlag1")
                div.list(v-for="d in result" @click.stop.prevent="" v-if="!flag")
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
                            span(style="font-size:10px")
                                label.c_g1 取件码：
                                lable {{d.password}}                   
            div.pd_16(v-if="isFlag2")
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 订单状态：
                       lable {{d.status}}
                    div
                       label.c_g1 终端名称：
                       lable {{d.terminal_name}}   
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
            div.pd_16(v-if="isFlag3")
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 寄件状态：
                       lable {{d.state}}
                    div
                       label.c_g1 终端名称：
                       lable {{d.terminal_name}}   
                    div
                       label.c_g1 寄件时间：
                       lable {{d.delivery_at}}
                    div
                       label.c_g1 寄件人手机号：
                       lable {{d.fetch_at}}
            div.pd_16(v-if="isFlag4")
                div.list(v-for="d in result" v-if="!flag")
                    div
                       label.c_g1 寄件状态：
                       lable {{d.state}}
                    div
                       label.c_g1 终端名称：
                       lable {{d.terminal_name}}   
                    div
                       label.c_g1 寄件时间：
                       lable {{d.begin_time}}
                    div
                       label.c_g1 寄件人手机号：
                       lable {{d.mobile}}
            div.pd_20
                DataLoading(ref="loading")
</template>
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
                pageList: [],
                //终端列表状态
                numPerPage: 16,
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
                error: false,
                isIOS: false
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
            if (_util.isIOS()) {
                this.isIOS =true;
            }
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
            window.addEventListener('scroll', this.handleScroll);
        },
        watch: {
            '$route': 'getUrl',
        },
        beforeRouteLeave(to, from, next) {
            let scrollTop = document.body.scrollTop;
            this.scrollTop = this.scrollTop || scrollTop;
            this.tn_scrollTop = this.tn_scrollTop || scrollTop;
            window.removeEventListener('scroll', this.handleScroll);
            next();
        },
        methods: {
            handleScroll() { //滚动加载监听事件
                let scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                    if (this.result.length < 16) {
                        return false;
                    } else {
                        if (this.scroll_load_end && this.$refs.loading) {
                            return this.showLoadEnd();
                        } else {
                            if (this.terminalName && !this.error) {
                                this.loadTerminalData();
                            }
                        }
                    }
                }
            },
            resetScrollTop(showLoadEnd) {
                if (showLoadEnd) this.showLoadEnd();
                if (this.terminalName && this.terminalName.trim()) {
                    document.body.scrollTop = this.tn_scrollTop;
                } else {
                    if (this.scrollTop) {
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
                if (that.pageList.indexOf(page) > -1) {
                    return false;
                }

                that.showLoading();
                that.scroll_load_loading = true;
                getAjaxRequest("searchPage_cache", that.url + _key.trim() + "&page=" + page, that.version, 30 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    that.hideLoading();
                    that.error = false;
                    if (response.status == 0) {
                        that.scroll_load_loading = false;
                        if (response.status == 0 && response.data && response.data.length) {
                            that.result = that.result.concat(response.data);
                            that.num = that.result.length;
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
                        }
                        that.showLoadEnd();
                    } else {
                        if (response.msg) _util.showErrorTip(response.data.msg);
                    }
                }, function(error) {
                    that.hideLoading();
                    that.showLoadEnd();
                    that.error = true;
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            searchByKey(isFirst) {
                let that = this,
                    page = 1,
                    _key = that.terminalName;
                let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
                if (!reg.test(_key) && _key.trim()) {
                    let reg1 = /^1[3|4|5|7|8][0-9]{9}$/;
                    if (!reg1.test(_key.trim())) {
                        _util.showErrorTip('请输入完成的手机号!');
                        return false;
                    }
                }
                if (!_key || !_key.trim()) {
                    that.flag = true;
                    that.num = 0;
                    that.resetScrollTop(1);
                    that.hideLoading();
                    that.result = [];
                    _util.showErrorTip('请输入完成的手机号或终端名称');
                    return false;
                }
                if (that.tn_scroll_load_loading || that.isLoading()) {
                    return false;
                }
                this.showLoading();
                that.result = [];
                that.flag = false;
                if (that.isFlag1 || that.isFlag2 || that.isFlag3 || that.isFlag4) {
                    getAjaxRequest("search_cache", that.url + _key.trim() + "&page=" + page, that.version, 30 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                        that.hideLoading();
                        if (response.status == 0) {
                            that.tn_scroll_load_loading = false;
                            if (response.data) {
                                that.flag = false;
                                if (response.data.length == 0) {
                                    that.num = 0;
                                    that.flag = true;
                                } else if (response.data.length < 16) {
                                    that.showLoadEnd();
                                    that.num = response.data.length;
                                } else {
                                    that.num = response.data.length;
                                }
                                that.result = that.result.concat(response.data);
                                if (!that.result.lenght == 0) that.showLoadEnd();
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
                        that.hideLoading();
                        _util.showErrorTip('当前无网络，请检查您的网络状态！');
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
                        this.pageTitle = '存件订单';
                        break;
                    case '02':
                        this.url = ajaxUrls.search2;
                        this.isFlag2 = true;
                        this.isFlag1 = false;
                        this.isFlag3 = false;
                        this.isFlag4 = false;
                        this.pageTitle = '寄存订单';
                        break;
                    case '03':
                        this.url = ajaxUrls.search3;
                        this.isFlag3 = true;
                        this.isFlag1 = false;
                        this.isFlag2 = false;
                        this.isFlag4 = false;
                        this.pageTitle = '丰巢寄件';
                        break;
                    case '04':
                        this.url = ajaxUrls.search4;
                        this.isFlag4 = true;
                        this.isFlag2 = false;
                        this.isFlag3 = false;
                        this.isFlag1 = false;
                        this.pageTitle = '菜鸟寄件';
                        break;
                    default:
                        this.url = ajaxUrls.search1;
                        break;
                }
                this.hideLoading();
                this.result = [];
                this.num = 0;
                this.flag = true;
                this.terminalName="";
            },
            into_details_order(item){
                this.$router.push('/search/' + item.order_id+'/details');
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
