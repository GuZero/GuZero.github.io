<template lang="jade">
    div.basicinfo.pb60
        HeaderBar(
        :title="pageTitle",
        origin="terminal"
        )
        div.content.mt44
            div.nav
                div.title {{terminal_name}}
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
            div.item.pd5.item_map
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
                //终端详情信息
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
                scroll_load_end: false
            }
        },
        created() {
            window.canGoBack = true;
            window.origin = "terminal";

        },
        activated() {
            window.canGoBack = true;
            window.origin = "terminal";
            let that = this;
            that.terminal_name = '';
            that.terminal_code = '';
            that.launched_at= '';
            that.boot_time='';
            that.heartbeat='';
            that.dot='';
            that.status_desc='';
            //版本信息
            that.manager_version='';
            that.behind_version='';
            that.image_version='';
            that.android_version='';
            that.monitor_version='';
            //业务配置
            that.delay_time='';
            that.account_info='';
            that.rule='';
            that.is_weixin='';
            //位置信息
            that.area='';
            that.community='';
            that.community_address='';
            that.position='';
            
            that.location = {
                    "latitude": 0,
                    "longitude": 0
                };
            that.isActive = false;
            that.maintain_manager = [];
            that.operate_manager = [];
            that.is_yunwei_manager = '0';
            that.is_yunying_manager = '0';
            this.fetchData();
        },
        components: {
            HeaderBar,
            TransmitFooter,
            DataLoading
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
   
                _util.showSysLoading();
                that.terminal_id = that.$route.params.code;
                setTimeout(function() {
                    getAjaxRequest("terminal_cache", ajaxUrls.basic + that.$route.params.code + '?info=basic', that.version, 20 * 1000, 6 * 60 * 60 * 1000,
                        function(response) {
                            _util.hideSysLoading();
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
                            _util.hideSysLoading();
                            _util.showErrorTip('您的网络可能出了点问题:(');
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
            }
        }
    }

</script>

<style lang="sass" scoped>
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
    .content {
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
