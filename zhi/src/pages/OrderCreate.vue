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
                @input="getID"
            )
            Field(tag="终端名称", placeholder="请输入终端名称（必填）", v-model="terminalName", :input="true", @changeCallback="goInfo", readonly="readonly")
            Field(
                tag="现场现象",
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
            Field(tag="故障等级", :pvalue="fault", :p="true")
            Field(tag="超时设置", placeholder="请选择超时间", :input="true", v-model="date", type="datetime-local")
            Field(tag="问题描述", placeholder="请输入问题描述", v-model.trim="desc", :textarea="true")
        SubmitBtn(@submitCallback="submitFun", text="提交", theme="white")


</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Field from '../components/elements/Field'
    import SubmitBtn from '../components/elements/SubmitBtn'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'dark',
                pageTitle: '创建/修改工单',
                ordertype: '',
                ordertypes: [],
                terminalName: "",
                scene: '',
                scenes: [],
                fault: '（系统根据现场现象自动选择）',
                desc: '',
                val: '',
                project_id: '',
                state: '',
                flag: false,
                date: '',
                input:true
            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn,
        },
        created() {
            window.canGoBack = true;
            window.origin = null;
            //请求数据
            this.ordertypes = [{
                id: '1',
                name: '柜子运维'
            }];
            if (localStorage.terminal_name) {
                this.terminalName = "";
            } else {
                window.localStorage.setItem('terminal_name', "");
                window.localStorage.setItem('terminal_code', "");
            }
            //获取现场现象
            this.getInfo();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': 'setName'
        },
        methods: {
            submitFun() {
                if (this.ordertype.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择工单类型！');
                    return false;
                };
                if (!this.terminalName) {
                    _util.showErrorTip('请输入终端名称！');
                    return false;
                };
                if (this.scene.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择现场现象！');
                    return false;
                };
                if (!this.desc) {
                    _util.showErrorTip('请输入问题描述！');
                    return false;
                };
                if (!this.date) {
                    _util.showErrorTip('请输入超时时间！');
                    return false;
                };
                let project_id = this.project_id,
                    terminal_code = localStorage.terminal_code,
                    appearance = this.val,
                    timeout = this.setDate(this.date),
                    state = this.state,
                    content = this.desc,
                    that = this;
                axios.post(ajaxUrls.task, {
                    project_id: project_id,
                    terminal_code: terminal_code,
                    appearance: appearance,
                    timeout: timeout,
                    state: state,
                    content: content
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    //                    console.log(rsp.data)
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                        that.url('/')
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');

                })
            },
            testChange() {
                for (let i = 0; i < this.scenes.length; i++) {
                    for (let item in this.scenes[i]) {
                        if (item == 'id') {
                            if (this.scenes[i].id == this.val) {
                                this.state = this.scenes[i].level
                                switch (this.state) {
                                    case 1:
                                        this.fault = '一级故障'
                                        break;
                                    case 2:
                                        this.fault = '二级故障'
                                        break;
                                    case 3:
                                        this.fault = '三级故障'
                                        break;
                                    default:
                                        this.fault = '一级故障'
                                        break;
                                }
                            }
                        }
                    }
                }
            },
            //获取工单类型ID
            getID(val) {
                this.project_id = val;
            },
            getValue(val) {
                this.val = val;
                //                console.log(this.val)
            },
            goInfo() {
                this.url('/searchterminal');
            },
            setName() {
                this.terminalName = localStorage.terminal_name;
            },
            setDate(str) {
                let x = str,
                    year = x.substring(0, 4),
                    month = x.substring(5, 7),
                    day = x.substring(8, 10),
                    hour = x.substring(11, 13),
                    minute = x.substring(14),
                    format = year + "-" + day + "-" + month + ' ' + hour + ':' + minute;
                return format;
            },
            getInfo() {
                let that = this;
                //获取现场现象
                _util.showSysLoading();
                getAjaxRequest("order_cache", ajaxUrls.option, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    _util.hideSysLoading();
                    if (response.status == 0) {
                        that.scenes = response.data.appearance;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
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
    .input{
        font-size: 16px;
        readonly:"readonly";
    }
    

</style>
