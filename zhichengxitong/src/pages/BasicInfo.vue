<template lang="jade">
    div.basicinfo
        HeaderBar(
        :title="pageTitle",
        origin="terminal"
        )
        div.content.mt44
            div.nav
                div.title {{terminal_name}}
            div.item
                p.gray 终端标识
                p.black {{terminal_code}}
            div.item.item_btn
                div
                    div(:class="{ active: isActive }" @click.stop.prevent="getLocation('check')" ) 位置预览
                div.btn(@click.stop.prevent="getLocation" ) 采集
        div.manage
            div.item.info 管理员
            template(v-if="maintain_manager.length > 0")
                div.rel(v-for="t in maintain_manager")
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
                div.rel(v-for="t in operate_manager")
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
        TransmitFooter(:footerconfig="footerconfig",:terminal_id="terminal_id")

</template>
<script>
    import HeaderBar from '../components/common/Header'
    import TransmitFooter from '../components/common/TransmitFooter'
    import DataLoading from '../components/common/DataLoading'
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                terminal_name: '格格货栈',
                terminal_code: '',
                terminal_id: this.$route.params.code,
                pageTitle: '终端详情',
                bodyBg: 'gray',
                version: '1',
                location:{
                    "latitude": 0,
                    "longitude": 0
                },
                maintain_manager:  [],
                operate_manager:  [],
                is_yunwei_manager: '0',
                is_yunying_manager: '0',
                footerconfig: {
                    isbasic: true
                },
                isActive: false,
                scroll_load_loading: false,
                scroll_load_end: false
            }
        },
        created() {
            this.fetchData();
            window.canGoBack = true;
            window.origin = "terminal";

        },
        activated() {
            window.canGoBack = true;
            window.origin = "terminal";
        },
        components: {
            HeaderBar,
            TransmitFooter,
            DataLoading

        },
        watch: {
          '$route': 'fetchData'
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
            fetchData(){
                let that = this;
                if (!(that.$route.path == ('/terminal/'+that.$route.params.code))) {
                    return false;
                }
                _util.showSysLoading();
                that.terminal_id = that.$route.params.code;
                setTimeout(function () {
                    that.getAjaxRequest("terminal_cache",ajaxUrls.basic + that.$route.params.code + '?info=basic',that.version,20*1000,6*60*60*1000,
                        function (response) {
                               _util.hideSysLoading();
                            if (response.status == 0) {
                                let tempData = response.data;
                                that.terminal_name = tempData.terminal_name;
                                that.terminal_code = tempData.terminal_code;
                                that.location = tempData.location;
                                if (tempData.location && tempData.location.latitude && tempData.location.longitude) {
                                    that.isActive = true;
                                }
                                that.maintain_manager = tempData.operator1;
                                that.operate_manager = tempData.operator2;
                                that.is_yunwei_manager = tempData.is_yunwei_manager;
                                that.is_yunying_manager = tempData.is_yunying_manager;                     
                            }else {
                                if (response.msg) _util.showErrorTip(response.msg);
                            }
                        },
                        function (error) {
                            _util.hideSysLoading();
                            _util.showErrorTip(error);
                        })
                },0);
            },
            getLocation(action_type) {
                let type = 1;
                if (action_type == 'check') {
                    if (!this.isActive) {
                        return false;
                    }
                    type = 0;
                }
                window.location.href = "itsupport:///TerminalGeo?terminal_id="+this.$route.params.code+"&type="+type;
            },
            goToAllocation(operator,old_userid) {
                    this.url('/terminal/'+this.$route.params.code+'/allocation',{old_userid:old_userid,operator:operator});
            }
        }
    }

</script>

<style lang="sass" scoped>
    .black {
        color: #323232;
    }
    .active{
        color: #07689f;
    }
    .gray {
        color: #6e6e6e;
    }
    .content{
        border: 1px #cfcfcf solid;
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

</style>
