<template lang="jade">
    div.equipmentinfo
        HeaderBar(
        :title="pageTitle",
        origin="terminal"
        )
        div.boxlist.mt44
            div.title 箱柜列表
            ul
                li.item(v-for='(a,index) in bins')
                    div.item-info
                        label.label {{a.position}}
                        p.info(@click.stop.prevent="goToEidtEquipment('rack_id',a.rack_id,a.asset_num)" v-if="a.asset_num") {{a.asset_num}}
                        p.info.unactive(@click.stop.prevent="goToEidtEquipment('rack_id',a.rack_id,a.asset_num)" v-else) 未填写
                        i.scan(@click.stop.prevent="goToScan('rack_id',a.rack_id,index)")
        div.device
            div.title 其他设备
            ul
                li.item(v-for='(a,index) in other')
                    div.item-info
                        label.label {{a.name}}
                        p.info(@click.stop.prevent="goToEidtEquipment('device_id',a.id,a.asset_num)" v-if="a.asset_num") {{a.asset_num}}
                        p.info.unactive(@click.stop.prevent="goToEidtEquipment('device_id',a.id,a.asset_num)" v-else) 未填写
                        i.scan(@click.stop.prevent="goToScan('device_id',a.id,index)")
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
                bodyBg: 'gray',
                current_id: '',
                current_type: '',
                current_index: '',
                footerconfig: {
                    isequipment: true
                }
            }
        },
        created() {
            this.fetchData();
        },
        components: {
            HeaderBar,
            TransmitFooter,
            ModalDialog
        },
        watch: {
          '$route': 'fetchData'
        },
        methods:{
            fetchData() {
                let that = this;
                if (!(that.$route.path == ('/terminal/'+that.$route.params.code+'/equipmentinfo'))) {
                    return false;
                }
                _util.showSysLoading();
                that.terminal_id = that.$route.params.code;
                setTimeout(function () {
                    axios.get(ajaxUrls.basic +  that.$route.params.code + '?info=device')
                        .then(function(rsp) {
                            _util.hideSysLoading();
                            that.bins = rsp.data.data.bins;
                            that.other=rsp.data.data.other;
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
                let that = this;
                window.QRScanSuccess = function(result){
                    that.saveEquipment(result);
                    window.QRScanSuccess = undefined;
                };
                window.QRScanFailed = function(msg){
                    _util.showErrorTip(msg);
                    window.QRScanFailed = undefined;
                };
                if (_util.isIOS()) {
                    if (window.webkit && window.webkit.messageHandlers) {
                        window.webkit.messageHandlers.startQRScan.postMessage();
                    }
                }else{
                    if (window.mogeItsupport) {
                        window.mogeItsupport.startQRScan();
                    }
                }
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
                        device_id: current_id,
                        asset_num: asset_num
                    }
                 _util.showErrorTip(postData);
                    
                }
                 _util.showErrorTip(asset_num);

                _util.showSysLoading();
                axios.post(finishUrl, postData, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                 _util.showErrorTip("1222");

                    if (rsp.data.status == 0) {
                        if (that.current_type == 'rack_id') {
                            let item = that.bins[that.current_index];
                                item.asset_num = asset_num;
                            that.bins.splice(that.current_index,1,item);
                        }else if (that.current_type == 'device_id') {
                            let item = that.other[that.current_index];
                                item.asset_num = asset_num;
                            that.other.splice(that.current_index,1,item);
                        }
                    } else {
                        if (rsp.data.msg){
                            _util.showErrorTip(rsp.data.msg);
                        }
                    }
                }).catch(function(error) {
                    _util.showErrorTip(error);
                    
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
        padding-bottom: 50px;
        .title {
            height: 32px;
            line-height: 32px;
            color: #747474;
            padding: 0 16px;
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
                    background: url('http://img.aimoge.com/Fl1S3WqI_mdGIBD2toXw4pqk62g-') 0 0 no-repeat;
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
