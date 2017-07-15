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
            Field(
                tag="分类",
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
            Field(tag="终端名称", placeholder="请输入终端名称（必填）", v-model="terminalName", :input="true", @changeCallback="goInfo", readonly="readonly",autocomplete="new-password" )
            //- Field(tag="故障等级", :pvalue="fault", :p="true")
            Field(tag="标题",:input="true",v-model.trim="title")
            Field(tag="问题描述", placeholder="请输入问题描述", v-model.trim="desc", :textarea="true", autocomplete="new-password")
            Field(tag="超时设置", placeholder="请选择超时间", :input="true", v-model="date", type="datetime-local")
            Field(tag="报修人", placeholder="手机号", :input="true",v-model.trim="report")
            Field(tag="通知用户", placeholder="用户手机号(非必填)", :input="true",v-model.trim="customer_mobile")
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
                // fault: '（系统根据现场现象自动选择）',
                desc: '',
                val: '',
                project_id: '',
                state: '',
                flag: false,
                date: '',
                input: true,
                title: '',
                report: '',
                customer_mobile: ''
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
            '$route': function() {
                if (this.$route.path == ('/order/edit')) {
                    //清空页面内容
                    this.ordertypes = [];
                    if (!localStorage.terminal_name) {
                        this.scene = '请选择（必选）';
                        this.scenes = [];
                    }
                    // this.fault = '';
                    this.date = '';
                    this.desc = '';
                    this.title = '';
                    this.report = '';
                    this.customer_mobile = '';
                    this.getInfo();
                    localStorage.terminal_name = ''
                }
            }
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
                    _util.showErrorTip('请选择分类！');
                    return false;
                };
                if (!this.desc) {
                    _util.showErrorTip('请输入问题描述！');
                    return false;
                };
//                if (!this.date) {
//                    _util.showErrorTip('请输入超时时间！');
//                    return false;
//                };
                if (!this.report) {
                    _util.showErrorTip('请输入报修人手机号！');
                    return false;
                };
                let project_id = this.project_id,
                    terminal_code = localStorage.terminal_code,
                    customer_mobile = this.customer_mobile,
                    deadline=this.date?this.setDate(this.date):'',
                    that = this,
                    data = {
                        project_id: this.project_id,
                        pid: 0,
                        type: this.val,
                        terminal_code: localStorage.terminal_code,
                        title: this.title,
                        content: this.desc,
                        report: this.report,
                        priority: 1,
                        deadline: deadline
                    };
                axios.post(ajaxUrls.task, {
                    project_id: project_id,
                    terminal_code: terminal_code,
                    customer_mobile: customer_mobile,
                    data: data
                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                        that.url('/')
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
            },
            /*testChange() {
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
            },*/
            //获取工单类型ID
            getID(val) {
                this.project_id = val;
            },
            getValue(val) {
                this.val = val;
            },
            goInfo() {
                this.url('/searchterminal');
            },
            setDate(str) {
                let x = str,
                    year = x.substring(0, 4),
                    month = x.substring(5, 7),
                    day = x.substring(8, 10),
                    hour = x.substring(11, 13),
                    minute = x.substring(14),
                    format = year + "-" + day + "-" + month + ' ' + hour + ':' + minute;
                if (_util.isIOS()) {
                    format = format.substring(0, 16);
                }
                return format;
            },
            setData(strMap) {
                var arry = []
                for (let i = 0; i > strMap.length; i++) {
                    let obj = Object.create(null);
                    for (let j = 0; j > Object.keys(strMap).length; j++) {
                        obj[id] = Object.keys(strMap)[j];
                    }
                    arry.push(obj);
                }
                return arry
            },
            getInfo() {
                this.ordertypes = [{
                    id: '1',
                    name: '柜子运维'
                }];
                this.scenes = [{
                        id: '100',
                        name: '黑屏',
                    }, {
                        id: '111',
                        name: '黑斑',
                    }, {
                        id: '114',
                        name: '屏幕亮度过暗',
                    }, {
                        id: '121',
                        name: '白屏或花屏',
                    }, {
                        id: '125',
                        name: '闪屏',
                    }, {
                        id: '128',
                        name: '卡屏',
                    },
                    {
                        id: '131',
                        name: '触摸不灵',
                    }, {
                        id: '140',
                        name: '柜门无法关闭',
                    }, {
                        id: '128',
                        name: '卡屏',
                    }, {
                        id: '131',
                        name: '触摸不灵',
                    }, {
                        id: '140',
                        name: '柜门无法关闭',
                    }, {
                        id: '151',
                        name: '系统重复重启',
                    }, {
                        id: '158',
                        name: '扫描器不能正常工作',
                    }, {
                        id: '164',
                        name: '系统错误,请稍后再试！',
                    }, {
                        id: '170',
                        name: '调取监控（格格）',
                    }, {
                        id: '179',
                        name: '需更改地址描述',
                    }, {
                        id: '182',
                        name: '占柜需清理对应格口',
                    }, {
                        id: '185',
                        name: '其他',
                    }, {
                        id: '188',
                        name: '网络问题',
                    }, {
                        id: '202',
                        name: '调取监控（裹裹）',
                    }
                ]
                this.terminalName = localStorage.terminal_name;
                let that = this;
                //获取现场现象
                //                _util.showSysLoading();
                //                getAjaxRequest("order_cache", ajaxUrls.option, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                //                    _util.hideSysLoading();
                //                    if (response.status == 0) {
                //                        let arr = response.type['1']['0'];
                //                    } else {
                //                        if (response.msg) _util.showErrorTip(response.msg);
                //                    }
                //                }, function(error) {
                //                    _util.hideSysLoading();
                //                    _util.showErrorTip('您的网络可能出了点问题:(');
                //                });
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
