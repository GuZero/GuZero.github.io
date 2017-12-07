<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        Search(
            class="top44",
            placeholder="搜索快递员手机号",
            v-model="terminalName",
            @searchInfo="searchByKey(1)",
            :class="{fixed:!isIOS,abs:isIOS}"
            v-focus
        )
        div.pb60.pt50.mt44
           div.pd_16(v-if="false")
                div.img
                 img( src="//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp" width="100%" height="100%")
                 p.c_g(style="text-align: center") 查无此人
            div.search-info    
                div.pd_16
                    div.list
                        div
                            label.c_g1 快递员手机号：
                            lable 111111111111
                        div
                            label.c_g1 快递员姓名：
                            lable 张三 
                        div
                            label.c_g1 快递公司：
                            lable 圆通
                        div
                            label.c_g1 城市区域：
                            lable 南京
                        div
                            label.c_g1 账号状态：
                            lable 可用
                div.btn-box.flex-g.flex
                    div.btn-item.record(@click.stop.prevent="intoRecord") 充值记录
                    div.btn-item(@click.stop.prevent="intoDetails") 查看详情
            div.pd_20
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
                pageTitle: '搜索快递员',
                footerconfig: {
                    isterminal: true
                },
                terminalName: '',
                scroll_load_loading: false,
                scroll_load_end: false,
                isSearchInfo:false
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
            this.$refs.loading.hideLoading();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        methods: {
            searchByKey(isFirst) {
                let that = this,
                    page = 1,
                    _key = that.terminalName;
                let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
                if (!reg.test(_key) && _key.trim()) {
                    let reg1 = /^1[3|4|5|7|8][0-9]{9}$/;
                    if (!reg1.test(_key.trim())) {
                        _util.showErrorTip('请输入完整的手机号!');
                        return false;
                    }
                }
                if (!_key || !_key.trim()) {
                    _util.showErrorTip('请输入完整的手机号!');
                    return false;
                }
                 if (that.scroll_load_loading || that.isLoading()) {
                    return false;
                }
                if (that.scroll_load_end) {
                    return false;
                }
                that.showLoading();
                setTimeout(()=>{
                    that.hideLoading();
                    that.isSearchInfo=true;
                },1000)
            },
            intoRecord(){
                this.url('/couires/record/1');
            },
            intoDetails(){
                this.url('/couires/details/2');
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
        padding-bottom: 6px;
        position: relative;
        div {
            height: 22px;
            line-height: 22px;
        }
    }
    .btn-box{
        width:100%;
        background:#f0f0f2;
        border-bottom:1px solid #bbbbbb;
        border-top:1px solid #bbbbbb;
        .btn-item{
            text-align:center;
            padding:9px 0;
            width:50%;
        }
        .record{
            border-right:1px solid #bbbbbb;
        }
    }
</style>
