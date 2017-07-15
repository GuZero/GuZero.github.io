<template lang="jade">
    div.edit-equipment
        HeaderBar(
            :title="pageTitle",
            :btnconfig="btnconfig",
            @finishBtnCallback="goToFinish"
        )
        div.mt44
            div.input.rel
                input(placeholder="请输入终端设备信息", v-model="asset_num" type="text" v-focus)
                label.clear-btn(@click.stop.prevent ='clearInput') 清空
</template>

<script>
    import HeaderBar from '../components/common/Header'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '终端设备信息',
                bodyBg: 'gray',
                btnconfig: {
                    isgoback: 1,
                    isfinish: 1
                },
                rack_id: this.$route.query.rack_id,
                device_id: this.$route.query.device_id,
                asset_num: this.$route.query.asset_num
            }
        },
        directives: {
          focus: {
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
          }
        },
        created() {
            window.canGoBack = true;
            window.origin = null;
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        components: {
            HeaderBar
        },
        watch: {
          '$route': function (route) {
                this.rack_id = this.$route.query.rack_id;
                this.device_id = this.$route.query.device_id;
                this.asset_num = this.$route.query.asset_num;
            }
        },
        methods: {
            goToFinish() {
                let that = this,
                    finishUrl = '',
                    postData ={};
                if (_util.getById('sysLoading').style.display == 'block') return false;
                if (that.rack_id) {
                    finishUrl = ajaxUrls.basic +  that.$route.params.code + '/bins';
                    postData ={
                        rack_id: that.rack_id,
                        asset_number: that.asset_num
                    }
                }else if (that.device_id) {
                    finishUrl = ajaxUrls.basic +  that.$route.params.code + '/other';
                    postData ={
                        device_id: that.device_id,
                        asset_num: that.asset_num
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
                        that.url('/terminal/'+that.$route.params.code + '/equipmentinfo');
                    } else {
                        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            clearInput() {
                this.asset_num = '';
            }
        }
    }

</script>

<style lang="sass" scoped>
    .input {
        font-size: 14px;
        padding: 16px;
        background: #fff;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        input {
            border: none;
            font-size: 14px;
            width: 100%;
            height: 20px;
            line-height: 20px;
        }
        .clear-btn{
            position: absolute;
            top: 0;
            right: 16px;
            height: 52px;
            line-height: 52px;
        }
    }

</style>
