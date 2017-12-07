<template lang="jade">
    div.recvbox
        HeaderBar(
            :title="pageTitle",
            :btnconfig="btnconfig",
            @endBtnCallback="endBtnHandle"
        )
        template(v-if="isNoNetwork")
            NoNetwork(@fetchDataCallBack="fetchData")
        template(v-if="!isNoNetwork")
            div.content.mt44
                div.title 请选择一种录入方式
                div.scan_enter.enter_btn(@click="gotoScan")
                    img(src="//img.aimoge.com/Fv3Q5JsGaSeNZcQL5PUUNNopAI2N")
                div.text_enter.enter_btn(@click="goToEdit")
                    img(src="//img.aimoge.com/FulCMq-fvgH3_XDg65hbG4nEFrok")
</template>
<script>
    import HeaderBar from '../components/common/Header'
    import ModalDialog from '../components/elements/ModalDialog'
    import NoNetwork from '../components/elements/NoNetwork'
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '快递柜信息',
                version: '1',
                btnconfig: {
                    isgoback: 1,
                    isend:1
                },
                isNoNetwork: false,
                boxInfos: []
            }
        },
        created(){
            window.canGoBack = true;
        },
        mounted(){
        },
        components: {
            HeaderBar,
            ModalDialog,
            NoNetwork
        },
        methods:{
            fetchData() {
                
            },
            goToEdit(){
                this.url('/recvbox/edit');
            },
            gotoScan(){
                var that = this;
                if (window.mogeItsupport) {
                    window.mogeItsupport.startQRScan();
                }else{
                    _util.showErrorTip("请使用APP进行此操作！");
                    return false;
                }
                window.QRScanSuccess = function(result){
                    window.QRScanSuccess = undefined;
                    that.EnterBox(result);
                };
                window.QRScanFailed = function(msg){
                    window.QRScanFailed = undefined;
                    _util.showErrorTip(msg);
                };
            },
            EnterBox(result) {
                let that = this;
                let boxInfos = store.get('RecvBoxInfo')||[];
                if (boxInfos.indexOf(result) == -1) {
                    boxInfos.push(result);
                    store.set('RecvBoxInfo',boxInfos);   
                    _util.showSuccessTip("添加成功！");
                }else{
                    _util.showErrorTip('此编码已经存在！');
                }
            },
            endBtnHandle(){
                this.url('/recvbox/end');
            }

        }

    }

</script>

<style lang="sass" scoped>
    $color: #f00;
    .gray_2{
        color: #e3e3e3;
    }
    .recvbox {
        text-align: center;
        .title{
            padding: 98px 0 64px;
            color: #6e6e6e;
            font-size: 18px;

        }
        .enter_btn{
            img{
                width: 69%;
            }
        }
        .scan_enter{
            margin-bottom: 48px;
        }
    }

</style>
