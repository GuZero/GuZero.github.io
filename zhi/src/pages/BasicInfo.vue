<template lang="jade">
    div.basicinfo.pb60
        HeaderBar(
        :title="pageTitle",
        :btnconfig="btnconfig",
        @moreBtnCallback="showMore"
        )
        div.fixed.more-box.box-triangle(v-if="isShowMore")
            ul
                li.rel(@click="moreOperator('restart')") 重启APP
                li.rel(@click="moreOperator('reboot')") 重启系统
                li.rel(@click="moreOperator('updateConfig')") 更新设置
                li.rel(@click="moreOperator('updateAds')") 更新广告
                li.rel(@click="clearTerminal()") 清空终端
        div.content.mt44
            NoNetwork(v-show="isNoNetwork && !scroll_load_loading",@fetchDataCallBack="fetchData")
            div(v-show="!isNoNetwork && !scroll_load_loading")
                div.nav
                    div.title {{terminal_name}}
                div.edition
                    div.item.pd5
                        p.gray 终端标识
                        p.black {{terminal_code}}
                    div.item.pd5
                        p.gray 广告标识
                        p.black {{terminal_code}}
                    div.item.pd5
                        p.gray 终端上线时间
                        p.black {{launched_at}} 
                    div.item.pd5
                        p.gray 上次启动时间
                        p.black {{boot_time}} 
                    div.item.pd5
                        p.gray 心跳频率
                        p.black {{heartbeat}}
                    div.item.pd5
                        p.gray 网点
                        p.black {{dot}}
                    div.item.pd5
                        p.gray 状态
                        p.black {{status_desc}}                          
                div.edition
                    p 版本信息 
                    div.item.pd5
                        p.gray  主程序
                        p.black {{manager_version}}
                    div.item.pd5
                        p.gray  后台服务
                        p.black {{behind_version}}
                    div.item.pd5
                        p.gray  image版本号
                        p.black {{image_version}}
                    div.item.pd5
                        p.gray  android版本号
                        p.black {{android_version}}
                    div.item.pd5
                        p.gray  监控程序
                        p.black {{monitor_version}}
                div.edition
                    p 业务配置 
                    div.item.pd5
                        p.gray  超时时间
                        p.black {{delay_time}}
                    div.item.pd5
                        p.gray  是否计费
                        p.black {{account_info}}
                    div.item.pd5
                        p.gray  计费详情
                        p.black {{rule}}
                    div.item.pd5
                        p.gray  是否绑定微信
                        p.black {{is_weixin}}
                 div.edition
                    p 位置信息 
                    div.item.pd5
                        p.gray  区域
                        p.black {{area}}
                    div.item.pd5
                        p.gray  小区名称
                        p.black {{community}}
                    div.item.pd5
                        p.gray  小区地址
                        p.black {{community_address}}
                    div.item.pd5
                        p.gray  柜子位置
                        p.black {{position}}
                    div.item.pd5.flex-g.flex-justify-between.flex-align-center
                        div   
                            p.gray  地图定位
                            div
                                div(:class="{ active: isActive }" @click.stop.prevent="getLocation('check')" ) 位置预览
                        div                
                            div.btn(@click.stop.prevent="getLocation" ) 采集                                          
                div.manage
                    div.item.info 管理员
                    template(v-if="maintain_manager.length > 0")
                        div.rel(v-for="t in maintain_manager",:key="t.user_id")
                            div.item.item_btn
                                div
                                    p.gray 运维管理员
                                    a.black(href="#" v-if="t.name") {{ t.name }}
                                        label(href="#" v-if="t.telephone") （{{ t.telephone }}）
                                div.btn(@click.stop.prevent="goToAllocation('1',t.user_id)" v-if="is_yunwei_manager == '0'") 分配
                    template(v-else)
                        div.rel
                            div.item.item_btn
                                div
                                    p.gray 运维管理员
                                div.btn(@click.stop.prevent="goToAllocation('1')" v-if="is_yunwei_manager == '0'") 分配
                    template(v-if="operate_manager.length> 0")
                        div.rel(v-for="t in operate_manager",:key="t.user_id")
                            div.item.item_btn
                                div
                                    p.gray 运营管理员
                                    a.black(href="#" v-if="t.name") {{ t.name }} 
                                        label(href="#" v-if="t.telephone") （{{ t.telephone }}）
                                div.btn(@click.stop.prevent="goToAllocation('2',t.user_id)"  v-if="is_yunying_manager == '0'") 分配
                    template(v-else)
                        div.rel
                            div.item.item_btn
                                div
                                    p.gray 运营管理员
                                div.btn(@click.stop.prevent="goToAllocation('2')" v-if="is_yunying_manager == '0'") 分配
            DataLoading(ref="loading")
        SelectBox(ref="selectBox",:selectList="reasons",itemInfo="text",selectTitle="请选择清空终端原因",@selectCallback="selectReason")
        ModalDialog(ref="confirmModal", @confirmCallback="confirmOperate")
        TransmitFooter(:footerconfig="footerconfig",:terminal_id="terminal_id")

</template>
<script>
    import HeaderBar from '../components/common/Header'
    import TransmitFooter from '../components/common/TransmitFooter'
    import DataLoading from '../components/common/DataLoading'
    import ModalDialog from '../components/elements/ModalDialog'
    import SelectBox from '../components/elements/SelectBox'
    import NoNetwork from '../components/elements/NoNetwork'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                //终端详情信息
                btnconfig: {
                    isgoback: 1,
                    ismore: 1
                },
                terminal_name: '',
                terminal_code: '',
                terminal_id: this.$route.params.code,
                pageTitle: '终端详情',
                launched_at:'',
                boot_time:'',
                heartbeat:'',
                dot:'',//网点
                status_desc:'',//状态
                //版本信息
                manager_version:'',//版本信息 主程序
                behind_version:'',//版本信息 后台服务
                image_version:'',//版本信息 image 
                android_version:'',//版本信息 Android
                monitor_version:'',//版本信息 监控程序
                //业务配置
                delay_time:'',//超时时间
                account_info:'',//是否计费
                rule:'',//计费详情
                is_weixin:'',//是否绑定微信
                //位置信息
                area:'',//区域
                community:'',//小区名称
                community_address:'',//小区地址
                position:'',//柜子位置
                
                bodyBg: 'gray',
                version: '1',
                location: {
                    "latitude": 0,
                    "longitude": 0
                },
                maintain_manager: [],
                operate_manager: [],
                is_yunwei_manager: '0',
                is_yunying_manager: '0',
                footerconfig: {
                    isbasic: true
                },
                isActive: false,
                scroll_load_loading: false,
                isNoNetwork: false,
                isShowMore: false,//是否弹出更多操作选项
                chooseOperateType: '',//选择的操作类型
                reasons: [{'text': '硬件故障','id': '1'},{'text': '系统故障','id': '2'},{'text': '网络问题','id': '3'},{'text': '点位位置变更','id': '4'},{'text': '点位需撤除','id': '5'},{'text': '供电/更换接电位置问题','id': '6'},{'text': '物业/业主阻挠施工','id': '7'},{'text': '开发合同问题','id': '8'},{'text': '欠费问题','id': '9'},{'text': '其他','id': '10'}]

            }
        },
        created() {
            window.canGoBack = true;
        },
        mounted(){
            this.fetchData();
        },
        components: {
            HeaderBar,
            TransmitFooter,
            DataLoading,
            ModalDialog,
            SelectBox,
            NoNetwork
        },

        methods: {
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
                that.showLoading();
                that.terminal_id = that.$route.params.code;
                setTimeout(function() {
                    getAjaxRequest("terminal_cache", ajaxUrls.basic + that.$route.params.code + '?info=basic', that.version, 20 * 1000, 6 * 60 * 60 * 1000,
                        function(response) {
                            that.hideLoading();
                            that.isNoNetwork = false;
                            if (response.status == 0) {
                                let tempData = response.data;
                                //终端详情的基本信息
                                that.terminal_name = tempData.terminal_name;
                                that.terminal_code = tempData.terminal_code;
                                that.launched_at=tempData.launched_at;
                                that.boot_time=tempData.boot_time;
                                that.heartbeat=tempData.heartbeat;
                                that.dot=tempData.dot;
                                that.status_desc=tempData.status_desc;
                                //版本信息
                                that.manager_version=tempData.manager_version;
                                that.behind_version=tempData.behind_version;
                                that.image_version=tempData.image_version;
                                that.android_version=tempData.android_version;
                                that.monitor_version=tempData.monitor_version;
                                //业务配置
                                that.delay_time=tempData.delay_time;
                                that.account_info=tempData.account_info;
                                that.rule=tempData.rule;
                                that.is_weixin=tempData.is_weixin;
                                //位置信息
                                that.area=tempData.area;
                                that.community=tempData.community;
                                that.community_address=tempData.community_address;
                                that.position=tempData.position;
                                
                                that.location = tempData.location;
                                if (tempData.location && tempData.location.latitude && tempData.location.longitude) {
                                    that.isActive = true;
                                }
                                that.maintain_manager = tempData.operator1;
                                that.operate_manager = tempData.operator2;
                                that.is_yunwei_manager = tempData.is_yunwei_manager;
                                that.is_yunying_manager = tempData.is_yunying_manager;
                            } else {
                                if (response.msg) _util.showErrorTip(response.msg);
                            }
                        },
                        function(error) {
                            that.hideLoading();
                            that.isNoNetwork = true;
                        })
                }, 0);
            },
            getLocation(action_type) {
                let type = 1;
                if (action_type == 'check') {
                    if (!this.isActive) {
                        return false;
                    }
                    type = 0;
                }
                window.location.href = "gegemis:///TerminalGeo?terminal_id=" + this.$route.params.code + "&type=" + type;
            },
            goToAllocation(operator, old_userid) {
                this.url('/terminal/' + this.$route.params.code + '/allocation', {
                    old_userid: old_userid,
                    operator: operator
                });
            },
            showMore(){
                this.isShowMore = !this.isShowMore;
            },
            moreOperator(type){
                let info = "",that = this;
                that.chooseOperateType = type;
                switch (type) {
                    case "restart":
                        {
                            info = "重启APP";
                        }
                        break;
                    case "reboot":
                        {
                            info = "重启系统";
                        }
                        break;
                    case "updateConfig":
                        {
                            info = "更新设置";
                        }
                        break;
                    case "updateAds":
                        {
                            info = "更新广告";
                        }
                        break;
                    case "boxManage":
                        {
                            info = "箱体管理";
                            that.url("/terminal/"+this.$route.params.code+"/manage");
                            return false;
                        }
                        break;
                    default:
                        break;
                }
                that.$refs.confirmModal.showModal({
                    hideTitle: true,
                    text: '确认是否执行 '+info+' 操作？',
                    cancelText: '取消',
                    confirmText: '确定'
                });
            },
            confirmOperate(){
                let that = this;
                let type = that.chooseOperateType;
                _util.showSysLoading();
                axios.post(ajaxUrls.basic+this.$route.params.code+"/operation", {"action":type}, {
                    withCredentials: true
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showSuccessTip("执行成功！");
                    } else {
                        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            clearTerminal(){
                //1.弹窗选择本次清柜原因；2.直到本次清柜任务完成，即该终端下无未取走快件，当做本次清柜结束，期间非首次点击“清空终端”无需再输入清柜原因。
                let reasonStore = store.get('clearTerminalReasonStore') || null;
                if (reasonStore && Object.keys(reasonStore).length) {
                    let date = (new Date()).getTime();
                    if ( date - reasonStore.ts < 30*60*1000 && reasonStore.terminal_id == this.$route.params.code) { //两次选择相差半小时以内
                        this.url("/terminal/"+this.$route.params.code+"/clean");
                        return  false;
                    }else{
                        store.remove("clearTerminalReasonStore");
                    }
                }
                this.isShowSelectBox = true;
                this.$refs.selectBox.isShowSelectBox = true;
            },
            selectReason(_reson){
                let reason = _reson;
                reason.ts = (new Date()).getTime();
                reason.terminal_id = this.$route.params.code;
                this.$refs.selectBox.isShowSelectBox = false;
                store.set('clearTerminalReasonStore',reason);
                this.url("/terminal/"+this.$route.params.code+"/clean");
            }
        }
    }

</script>

<style lang="sass" scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform:  translate(-50%,-50%) scale(0);
  }

  100% {
    transform:  translate(-50%,-50%) scale(1);
  }
}
    .black {
        color: #323232;
    }
    
    .active {
        color: #07689f;
    }
    
    .gray {
        color: #6e6e6e;
    }
    .item_map{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .box-triangle:before{
        left: 70%;
    }
    .more-box{
        right: 0;
        top: 7%;
        background-color: #666;
        z-index: 8888;
        li{
            padding: 8px 20px;
            text-align: center;
            border-bottom: 1px solid #fff;
            color: #fff;
        }
        select {
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: none;
            color: transparent;
            border: none;
            outline: none;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            z-index: 301;
            option {
                color: #333;
            }
        }
    }
    .content {
        .nav {
            background-color: #fff;
            color: #4d4d4d;
            font-size: 16px;
            padding: 16px 0px;
            width: 100%;
            .title {
                font-size: 18px;
                text-align: center;
                color: #323232;
            }
        }
    }
    
    .item:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 90%;
        height: 1px;
        background-color: #eee;
        transform: scale(1, .5);
    }
    
    .item {
        background-color: #fff;
        color: #4d4d4d;
        font-size: 14px;
        overflow: hidden;
        padding: 10px 16px;
        width: 100%;
        left: 0;
        z-index: 300;
        position: relative;
        box-sizing: border-box;
        p a {
            color: #07689f;
            font-size: 14px;
        }
    }
    
    .item_btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .btn {
        padding: 4px 8px;
        border-radius: 4px;
        color: #07689f;
        border: 1px solid #07689f;
        font-size: 14px;
        width: 66px;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
        height: 30px;
    }

    .manage {
        margin-top: 8px;
        position: relative;
        bottom: 0px;
        background: #fff;
        overflow: auto;
        .item.info {
            padding: 10px 16px;
            color: #6e6e6e;
            font-size: 12px;
        }
    }
    .pd5{
        padding: 5px 16px;
        p{
            margin: 3px 0px;
        }
    }

    .edition>p{
     margin-left: 16px;
    }
</style>
