<template lang="jade">
    div.Record
        HeaderBar(
            :title="pageTitle"
        )
        div.content.mt44
            div.item
                div.item-time ———{{'2017-07-10 12:31:05'}}———
                div.bg_w
                    div.item-text
                        lable 历史余额：
                        span  37.9
                    div.item-text
                        lable 充值金额：
                        span  5
                    div.item-text
                        lable 赠送金额：
                        span  0
                    div.item-text
                        lable 充值渠道：
                        span  在线充值
                    div.item-text
                        lable 备    注：  
                        span  充值5元            

</template>
<script>
    import HeaderBar from '../components/common/Header'
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '充值记录',
                version: '1',
                bodyBg: 'gray'
            }
        },
        created(){
            window.canGoBack = true;
        },
        mounted(){
        },
        components: {
            HeaderBar
        },
        methods:{
            fetchData() {
                let that = this;
                _util.showSysLoading();
                setTimeout(function () {
                    getAjaxRequest("terminal_cache",ajaxUrls.basic + that.$route.params.code + '?info=device',that.version,20*1000,6*60*60*1000,
                        function (response) {
                            _util.hideSysLoading();
                            if (response.status == 0) {
                               that.bins = response.data.bins.concat();
                               that.other= response.data.other.concat();                    
                            }else {
                                if (response.msg) _util.showErrorTip(response.msg);
                            }
                        },
                        function (error) {
                            _util.hideSysLoading();
                            _util.showErrorTip('您的网络可能出了点问题:(');
                            that.isNoNetwork = true;
                        })
                },0);
            }
        }

    }

</script>

<style lang="sass" scoped>
    $color: #f00;
    .gray_2{
        color: #e3e3e3;
    }

    .content{
        padding:16px;
        .item{
           
            .item-time{
                text-align:center;
            }
        }
        .bg_w{
            padding:6px;
            background:#fff;
        }
    }
</style>
