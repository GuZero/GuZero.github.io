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
            div.rel(v-for="t in maintain_manager")
                div.item.item_btn
                    div
                        p.gray 运维管理员
                        a.black(href="#" v-if="t.name") {{ t.name }}
                            lable(href="#" v-if="t.telephone")（{{ t.telephone }}）
                    div.btn(@click.stop.prevent="goToAllocation(t.user_id,'1')" ) 分配
            div.rel(v-for="t in operate_manager")
                div.item.item_btn
                    div
                        p.gray 运营管理员
                        a.black(href="#" v-if="t.name") {{ t.name }} 
                            lable(href="#" v-if="t.telephone")（{{ t.telephone }}）
                    div.btn(@click.stop.prevent="goToAllocation(t.user_id,'2')" ) 分配
        TransmitFooter(:footerconfig="footerconfig",:terminal_id="terminal_id")

</template>
<script>
    import HeaderBar from '../components/common/Header'
    import TransmitFooter from '../components/common/TransmitFooter'
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                terminal_name: '格格货栈',
                terminal_code: '00000283921',
                terminal_id: this.$route.params.code,
                pageTitle: '终端详情',
                bodyBg: 'gray',
                location:{
                    "latitude": 0,
                    "longitude": 0
                },
                maintain_manager:  [
                    {
                        "name": "",
                        "telephone": ""
                    }
                ],
                operate_manager:  [
                    {
                        "name": "",
                        "telephone": ""
                    }
                ],
                footerconfig: {
                    isbasic: true
                },
                isActive: false
            }
        },
        created() {
            this.fetchData();
        },
        components: {
            HeaderBar,
            TransmitFooter
        },
        watch: {
          '$route': 'fetchData'
        },
        methods:{
            fetchData(){
                let that = this;
                if (that.$route.path == '/terminal') {
                    return false;
                }
                that.terminal_id = that.$route.params.code;
                setTimeout(function () {
                    axios.get(ajaxUrls.basic + that.$route.params.code + '?info=basic')
                        .then(function(rsp) {
                            let tempData = rsp.data.data;
                            that.terminal_name = tempData.terminal_name;
                            that.terminal_code = tempData.terminal_code;
                            that.location = tempData.location;

                            if (tempData.location && tempData.location.latitude && tempData.location.longitude) {
                               that.isActive = true;
                            }
                            that.maintain_manager = tempData.operator1.length > 0 ?tempData.operator1:that.maintain_manager;
                            that.operate_manager = tempData.operator2.length > 0 ?tempData.operator2:that.operate_manager;
                        })
                },0);
            },
            getLocation(action_type) {
                var type = 1;
                if (action_type == 'check') {
                    if (!this.isActive) {
                        return false;
                    }
                    type = 0;
                }
                window.location.href = "/TerminalGeo?terminal_id="+that.$route.params.code+"&type="+type;
            },
            goToAllocation(old_userid,operator) {
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
