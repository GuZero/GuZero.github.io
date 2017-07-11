<template lang="jade">
    div.equipmentinfo.pb60
        HeaderBar(
        :title="pageTitle",
        origin="terminal"
        )
        template(v-if="isNoNetwork")
            div.no-network
                img.no-network-img(src='//img.aimoge.com/Fm6Kur5_5IsfnlIiRR2nErPqZkwE')
                div.no-network-info 暂无网络
                div.reload(@click.stop.prevent="fetchData") 重新加载
        template(v-if="!isNoNetwork")
            div.boxlist.mt44
                div.title 箱柜列表
                ul
                    li.item(v-for='(item,index) in bins',:key="item.rack_id")
                        div.item-info
                            label.label {{item.position}}
                            template(v-if="item.asset_num")
                                p.info.ellipsis {{item.asset_num}}
                            template(v-if="!item.asset_num")
                                p.info.unactive 未填写
            div.device
                div.title 其他设备
                ul
                    li.item(v-for='(item,index) in other',:key="item.id")
                        div.item-info
                            label.label {{item.name}}
                            template(v-if="item.asset_num")
                                p.info.ellipsis(@click.stop.prevent="goToEidtEquipment('device_id',item.id,item.asset_num)") {{item.asset_num}}
                            template(v-if="!item.asset_num")
                                p.info.unactive(@click.stop.prevent="goToEidtEquipment('device_id',item.id,item.asset_num)") 未填写
                            i.scan(@click.stop.prevent="goToScan('device_id',item.id,index)")
        TransmitFooter(:footerconfig="footerconfig",:terminal_id="terminal_id")
        ModalDialog(ref="aboutModal")
</template>
<script>
    import HeaderBar from '../components/common/Header'
    import TransmitFooter from '../components/common/TransmitFooter'
    import ModalDialog from '../components/elements/ModalDialog';
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bins:[],
                other:[],
                terminal_id: this.$route.params.code,
                pageTitle: '终端详情',
                version: '1',
                bodyBg: 'gray',
                current_id: '',
                current_type: '',
                current_index: '',
                isNoNetwork: false,
                footerconfig: {
                    isequipment: true
                }
            }
        },

        activated() {
            window.canGoBack = true;
            window.origin = "terminal";
            this.fetchData();
        },
        components: {
            HeaderBar,
            TransmitFooter,
            ModalDialog
        },
        methods:{
            fetchData() {
                let that = this;
                that.bins=[].concat();
                that.other=[].concat();
                that.isNoNetwork = false;
                that.terminal_id = that.$route.params.code;  
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
            },
            goToEidtEquipment(type,_id,info) {
                if (type == "rack_id") {
                    this.url('/terminal/'+this.terminal_id+'/equipmentinfo/edit',{rack_id:_id,asset_num:info})
                }else{
                    this.url('/terminal/'+this.terminal_id+'/equipmentinfo/edit',{device_id:_id,asset_num:info})
                }
            },
            goToScan(type,_id,index) {
                this.current_type = type;
                this.current_id=_id;
                this.current_index=index;
                var that = this;
//                if (_util.isIOS()) {
//                    if (window.webkit && window.webkit.messageHandlers) {
//                        window.webkit.messageHandlers.startQRScan.postMessage();
//                    }
//                }else{
                    if (window.mogeItsupport) {
                        window.mogeItsupport.startQRScan();
                    }
//                }
                window.QRScanSuccess = function(result){
                    window.QRScanSuccess = undefined;
                    that.saveEquipment(result);
                };
                window.QRScanFailed = function(msg){
                    window.QRScanFailed = undefined;
                    _util.showErrorTip(msg);
                };
            },
            saveEquipment(asset_num) {
                let that = this;
                let finishUrl = '';
                let postData ={};

                if (that.current_type == 'rack_id') {
                    finishUrl = ajaxUrls.basic +  that.$route.params.code + '/bins';
                    postData ={
                        rack_id: that.current_id,
                        asset_number: asset_num
                    }
                }else if (that.current_type == 'device_id') {
                    finishUrl = ajaxUrls.basic +  that.$route.params.code + '/other';
                    postData ={
                        device_id: that.current_id,
                        asset_num: asset_num
                    }

                }

                _util.showSysLoading();
                axios.post(finishUrl, postData, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        if (that.current_type == 'rack_id') {
                            let array = [].concat(that.bins);

                            let item = array[that.current_index];
                                item.asset_num = asset_num;
                            array.splice(that.current_index,1,item);

                            that.bins = [].concat(array);
                        }else if (that.current_type == 'device_id') {

                            let array = [].concat(that.other);
                            let item = array[that.current_index];
                                item.asset_num = asset_num;
                            array.splice(that.current_index,1,item);
                            that.other = [].concat(array);

                            // let item = that.other[that.current_index];
                            //     item.asset_num = asset_num;
                            // that.other.splice(that.current_index,1,item);
                        }
                    } else {
                        if (rsp.data.msg){
                            _util.showErrorTip(rsp.data.msg);
                        }
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                    
                });
            }

        }

    }

</script>

<style lang="sass" scoped>
    $color: #f00;
    .gray_2{
        color: #e3e3e3;
    }
    .equipmentinfo {
        padding-bottom: 60px;
        .title {
            height: 32px;
            line-height: 32px;
            color: #747474;
            padding: 0 16px;
        }
        .no-network {
            padding-top: 159px;
            .no-network-img {
                display: block;
                width: 122px;
                height: 122px;
                margin: 0 auto 16px;
            }
            .no-network-info {
                font-size: 14px;
                color: #6e6e6e;
                text-align: center;
            }
            .reload{
                margin: 42px auto 0;
                background: #07689f;
                height: 40px;
                line-height: 40px;
                width: 160px;
                color: #fff;
                font-size: 16px;
                text-align: center;
                border-radius: 24px;
            }
        }
        ul{
            padding-left: 16px;
            background-color: #fff;
            & li {
                background-color: #fff;
                color: #4d4d4d;
                font-size: 13px;
                overflow: hidden;
                width: 100%;
                left: 0;
                position: relative;
                box-sizing: border-box;
                 &:nth-child(1):before {
                    height: 0;
                }
                 &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #979797;
                    transform: scale(1, .5);
                    p {
                        text-align: left;
                    }
                }
                .item-info{
                    padding: 10px 50px 10px 80px;
                    box-sizing: border-box;
                    & .label{
                        width: 80px;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        height: 22px;
                        line-height: 22px;
                        margin-top: -11px;
                    }
                    .info.unactive{
                        color: #cfcfcf;
                    }
                }
                .scan {
                    content: '';
                    background: url('//img.aimoge.com/Fl1S3WqI_mdGIBD2toXw4pqk62g-') 0 0 no-repeat;
                    background-position: center center;
                    background-size: 14px auto;
                    display: block;
                    height: 44px;
                    width: 44px;
                    position: absolute;
                    right: 16px;
                    top: 50%;
                    margin-top: -22px;
                }

            }
        }
        .device {
            width: 100%;
            ul{
                overflow: auto;
                li p:nth-child(2){
                    width: 75%;
                }
            }
        }
    }

</style>
