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
            Field(tag="终端名称", placeholder="请输入终端名称（必填）", v-model="terminalName", :input="true", @changeCallback="goInfo")
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
            Field(tag="超时设置", placeholder="请选择超时间", :input="true" v-model="overtime")
            Field(tag="问题描述", placeholder="请输入问题描述", v-model.trim="desc", :textarea="true")
        SubmitBtn(@submitCallback="submitFun", text="提交", theme="white")


</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Field from '../components/elements/Field'
    import SubmitBtn from '../components/elements/SubmitBtn'
    //    import calendar from '../components/common/calendar'




    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'dark',
                pageTitle: '创建/修改工单',
                ordertype: '',
                ordertypes: [],
                terminalName:"",
                scene: '',
                scenes: [],
                fault: '（系统根据现场现象自动选择）',
                overtime: '2017-06-2 14:35',
                desc: '',
                val: '',
                project_id: '',
                state: '',
                flag:false
            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn,
        },
        created() {
            //请求数据
            this.ordertypes = [{
                    id: '1',
                    name: '普通工单'
                },
                {
                    id: '2',
                    name: '运维工单'
                }
            ];
            if(localStorage.terminal_name){
                this.terminalName="";
            }else{
              window.localStorage.setItem('terminal_name',"");
              window.localStorage.setItem('terminal_code',"");
            }
            let that = this;
            //获取现场现象
            axios.get(ajaxUrls.option).then(function(rsp) {
                let d = rsp.data;
                that.scenes = d.data.appearance;
                //                console.log(that.scenes);
            });
        },
        watch:{
          '$route':'setName'
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
                let project_id = this.project_id,
                    terminal_code =localStorage.terminal_code,
                    appearance = this.val,
                    timeout = this.overtime,
                    state = this.state,
                    content = this.desc;

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
                    console.log(rsp.data)
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
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
                                    case 1:
                                        this.fault = '二级故障'
                                        break;
                                    case 1:
                                        this.fault = '三级故障'
                                        break;
                                    default:
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
            setName(){

              this.terminalName=localStorage.terminal_name;
            }

        }
    }

</script>
