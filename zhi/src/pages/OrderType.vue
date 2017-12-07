<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60(style="margin-top: 52px;")
             Field(
                tag="工单类型",
                v-model="ordertype",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="ordertypes",
                :selectText="ordertype",
                :select="true",
                :arrow="true",
                @input="getID",
                @changeCallback="selectType"
            )
             Field(
                tag="具体类别",
                v-model="scene",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="scenes",
                :selectText="scene",
                :select="true",
                :arrow="true",
                @input="getValue",
                @changeCallback="testChange"
            )                  
            SubmitBtn(text="下一步", @submitCallback="nextStep") 下一步
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import SubmitBtn from '../components/elements/SubmitBtn'
    import Field from '../components/elements/Field'
    import ModalDialog from '../components/elements/ModalDialog'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '工单',
                bodyBg: 'gray',
                ordertype: '',
                ordertypes: [],
                scene: '',
                scenes: [],
                project_id: '',
                type_id: '',
                type: null
            }
        },
        computed: {},
        components: {
            HeaderBar,
            Field,
            ModalDialog,
            SubmitBtn
        },
        mounted() {
            window.canGoBack = true;
            window.origin = null;
            this.getInfo();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        methods: {
            //获取工单类型ID
            getID(val) {
                this.project_id = val;
            },
            //获取具体类别ID
            getValue(val) {
                this.type_id = val;
            },
            selectType() {
                let that = this;
                that.scenes = [];
                that.scene = '请选择（必选）'
                let data = that.type;
                let val = that.project_id
                switch (val) {
                    case '1':
                        that.scenes = that.setData(data[val]['0'])
                        break;
                    case '2':
                        that.scenes = that.setData(data[val]['0'])
                        break;
                    case '3':
                        that.scenes = that.setData(data[val]['0'])
                        break;
                    case '4':
                        that.scenes = that.setData(data[val]['0'])
                        break;
                    default:
                        that.scenes = that.setData(data[1]['0'])
                        break;
                }
            },
            setData(data) {
                var arry = [];
                for (var key of Object.keys(data)) {
                    let obj = Object.create(null);
                    obj.id = key;
                    obj.name = data[key];
                    arry.push(obj);
                }
                return arry
            },
            setOrderType(data) {
                var arry = [];
                for (var key of Object.keys(data)) {
                    let obj = Object.create(null);
                    obj.id = key;
                    obj.name = data[key].project_name;
                    arry.push(obj);
                }
                return arry
            },
            nextStep() {
                if (this.ordertype.indexOf('选择') > -1||this.ordertype=='') {
                    _util.showErrorTip('请选择工单类型！');
                    return false;
                };
                if (this.scene.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择具体类别');
                    return false;
                };
                let id = this.project_id,
                    that = this;
                switch (id) {
                    case '1':
                        this.url('/order/maintain', {
                            _id: id,
                            type_id: that.type_id,
                            type_name:that.type[id]['0'][that.scene]
                        })
                        break;
                    case '2':
                        this.url('/order/operation', {
                            _id: id,
                            type_id: that.type_id,
                            type_name:that.type[id]['0'][that.scene]
                        })
                        break;
                    case '3':
                        this.url('/order/install', {
                            _id: id,
                            type_id: that.type_id
                        })
                        break;
                    case '4':
                        this.url('/order/cooperate', {
                            _id: id,
                            type_id: that.type_id,
                            type_name:that.type[id]['0'][that.scene]
                        })
                        break;
                    default:
                        this.url('/order/operation', {
                            _id: id,
                            type_id: that.type_id
                        })
                        break;
                }
            },
            getInfo() {
                let that = this;
                //获取现场现象
                _util.showSysLoading();
                getAjaxRequest("order_cache", ajaxUrls.option, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    _util.hideSysLoading();
                    if (response.status == 0) {
                        let type = response.data.project;
                        that.type = response.data.type;
                        that.ordertypes = that.setOrderType(type);
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            }
        }
    }

</script>

<style lang="sass" scoped>
    .filed {
        background-color: #fff;
        min-height: 54px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin-top: 8px;
        .text {
            left: 0;
            top: 0;
            width: 88px;
            padding: 16px 0;
        }
        .box {
            margin-left: 88px;
            min-height: 54px;
        }
    }
    
    .input {
        font-size: 16px;
        readonly: "readonly";
    }

</style>
