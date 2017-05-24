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
                :arrow="true"
            )
            Field(tag="终端名称", placeholder="请输入终端名称（必填）", v-model.trim="terminalName", :input="true")
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
            Field(tag="超时设置", :pvalue="overtime", :input="true")
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
                terminalName: '',
                scene: '',
                scenes: [],
                fault: '（系统根据现场现象自动选择）',
                overtime: '（系统根据现场现象自动选择）',
                desc: '',
                val: ''
            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn
        },
        created() {
            //请求数据
            this.ordertypes = [{
                    id: '001',
                    value: '000001',
                    name: '普通工单'
                },
                {
                    id: '002',
                    value: '000002',
                    name: '运维工单'
                }
            ];

            let that = this;
            //获取现场现象
            axios.get(ajaxUrls.option).then(function(rsp) {
                let d = rsp.data;
                that.scenes = d.data.appearance;
                console.log(that.scenes);
            });
        },
        methods: {
            submitFun() {
                if (this.ordertype.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择工单类型！');
                    return false;
                }
                if (!this.terminalName) {
                    _util.showErrorTip('请输入终端名称！');
                    return false;
                }
                if (this.scene.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择现场现象！');
                    return false;
                }
                if (!this.desc) {
                    _util.showErrorTip('请输入问题描述！');
                    return false;
                }
            },
            testChange() {
                for (let i = 0; i < this.scenes.length; i++) {
                    for (let item in this.scenes[i]) {
                        if (item == 'id') {
                            if (this.scenes[i].id == this.val) {
                                this.fault = this.scenes[i].level;
                                console.log(this.fault);
                            }
                        }
                    }
                }
            },
            getValue(val) {
                this.val = val;
                console.log(this.val)
            }
        }
    }

</script>
