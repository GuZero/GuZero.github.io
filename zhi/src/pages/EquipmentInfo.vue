<template lang="jade">
    div.equipmentinfo.pb60
        HeaderBar(
        :title="pageTitle"
        )
        div.mt44
            NoNetwork(v-show="isNoNetwork && !scroll_load_loading",@fetchDataCallBack="fetchData")
            div(v-show="!isNoNetwork && !scroll_load_loading")
                div.boxlist
                    div.title 箱柜列表
                    ul
                        li.item(v-for='(item,index) in bins',:key="item.rack_id")
                            div.item-info.flex.flex-align-center
                                label.label {{item.position}}
                                template(v-if="item.asset_num")
                                    div.type_box(@click="goToViewType(item,$event)",:class="{s1:item.status==0,s2:item.status>0}")
                                        i.type_img
                                        div 查看
                                    p.info.ellipsis.flexmodel(@click.stop.prevent="goToEidtEquipment('rack_id',item.rack_id,item.asset_num,$event)") {{item.asset_num}}
                                template(v-if="!item.asset_num")
                                    div 查看
                                    p.info.unactive.flexmodel(@click.stop.prevent="goToEidtEquipment('rack_id',item.rack_id,item.asset_num,$event)") 未填写
                                i.scan(@click.stop.prevent="goToScan('rack_id',item.rack_id,index,$event)")
                div.device
                    div.title 其他设备
                    ul
                        li.item(v-for='(item,index) in other',:key="item.id")
                            div.item-info
                                label.label {{item.name}}
                                template(v-if="item.asset_num")
                                    p.info.ellipsis(@click.stop.prevent="goToEidtEquipment('device_id',item.id,item.asset_num,$event)") {{item.asset_num}}
                                template(v-if="!item.asset_num")
                                    p.info.unactive(@click.stop.prevent="goToEidtEquipment('device_id',item.id,item.asset_num,$event)") 未填写
                                i.scan(@click.stop.prevent="goToScan('device_id',item.id,index,$event)")
            DataLoading(ref="loading")
        TransmitFooter(:footerconfig="footerconfig",:terminal_id="terminal_id")
        ModalDialog(ref="aboutModal")
</template>
<script>
    import HeaderBar from '../components/common/Header'
    import TransmitFooter from '../components/common/TransmitFooter'
    import ModalDialog from '../components/elements/ModalDialog'
    import NoNetwork from '../components/elements/NoNetwork'
    import DataLoading from '../components/common/DataLoading'

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
                scroll_load_loading: false,
                footerconfig: {
                    isequipment: true
                }
            }
        },
        created(){
            window.canGoBack = true;
        },
        mounted(){
            this.fetchData();
        },
        components: {
            HeaderBar,
            TransmitFooter,
            NoNetwork,
            ModalDialog,
            DataLoading
        },
        methods:{
            showLoading() { //显示正在加载数据状态
                this.scroll_load_loading = true;
                this.$refs.loading && this.$refs.loading.showLoading();
            },
            hideLoading() { //隐藏正在加载数据状态
                this.scroll_load_loading = false;
                this.$refs.loading && this.$refs.loading.hideLoading();
            },
            fetchData() {
                let that = this;
                that.bins=[].concat();
                that.other=[].concat();
                that.terminal_id = that.$route.params.code;  
                that.showLoading();
                setTimeout(function () {
                    getAjaxRequest("terminal_cache",ajaxUrls.basic + that.$route.params.code + '?info=device',that.version,20*1000,6*60*60*1000,
                        function (response) {
                            that.hideLoading();
                            that.isNoNetwork = false;
                            if (response.status == 0) {
                               that.bins = response.data.bins.concat();
                               that.other= response.data.other.concat();                    
                            }else {
                                if (response.msg) _util.showErrorTip(response.msg);
                            }
                        },
                        function (error) {
                            that.hideLoading();
                            // _util.showErrorTip('您的网络可能出了点问题:(');
                            that.isNoNetwork = true;
                        })
                },0);
            },
            goToViewType(_item,e){
                this.url('/terminal/'+this.terminal_id+'/equipmentinfo/'+_item.rack_id);
            },
            goToEidtEquipment(type,_id,info,e) {
                if (type == "rack_id") {
                    this.url('/terminal/'+this.terminal_id+'/equipmentinfo/edit',{rack_id:_id,asset_num:info})
                }else{
                    this.url('/terminal/'+this.terminal_id+'/equipmentinfo/edit',{device_id:_id,asset_num:info})
                }
            },
            goToScan(type,_id,index,e) {
                this.current_type = type;
                this.current_id=_id;
                this.current_index=index;
                var that = this;

                    if (window.mogeItsupport) {
                        window.mogeItsupport.startQRScan();
                    }else{
                        _util.showErrorTip('请使用APP进行此操作！');
                    }
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
                    .type_box{
                        width: 30px;
                        min-width: 30px;
                        text-align: center;
                        line-height: 16px;
                        margin-right: 12px;
                        .type_img{
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            background-size: 100%;
                            background-repeat: no-repeat;
                        }
                        &.s1{
                            color: #a4d748;
                            .type_img{
                                background-image: url("//img.aimoge.com/FoSwqghIf_uF504pPDsAEWTbBTJ_");
                            }
                        }
                        &.s2{
                            color: #d75a48;
                            .type_img{
                                background-image: url("//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15");
                            }
                        }
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
