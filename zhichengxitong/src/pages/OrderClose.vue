<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60(style="margin-top: 52px;")
            Field(
                tag="现场现象",
                v-model="scene",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="scenes",
                :selectText="scene",
                :select="true",
                :arrow="true",
                @input="getValue"
            )
            Field(
                tag="问题原因",
                v-model="problem",
                placeholder="请选择（必选",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="problems",
                :selectText="problem",
                :select="true",
                :arrow="true",
                @input="getValue"
            )
            Field(
                tag="故障分类",
                v-model="categroy",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="categroys",
                :selectText="categroy",
                :select="true",
                :arrow="true"
            )
            Field(
                tag="处理结果",
                v-model="result",
                placeholder="请输入处理结果（必填）",
                :input="true",

            )
            Field(
                tag="抓取日志",
                v-model="log",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="logs",
                :selectText="log",
                :select="true",
                :arrow="true"
            )
            Field(tag="处理方式", placeholder="请输入处理方式", v-model.trim="desc", :textarea="true")
            Upload(id="up1", ref="up1")
        SubmitBtn(@submitCallback="submitFun", text="提交", theme="white")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    import Upload from '../components/common/Upload'
    import Field from '../components/elements/Field'
    import SubmitBtn from '../components/elements/SubmitBtn'

    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                bodyBg: 'dark',
                pageTitle: '处理结果',
                scene: '',
                scenes: [],
                problem: '',
                problems: [],
                categroy: '',
                categroys: [],
                result: '',
                results: [],
                log: '',
                logs: [],
                desc: '',
                val: "",
                reason: "",
                yunwei_type: "",
                hasCatchLogZh: "",
                _id: this.$route.query._id || ''
            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn,
            Upload
        },
        created() {
            this.categroys = [{
                    id: '001',
                    name: 'categroys1'
                },
                {
                    id: '002',
                    name: 'categroys2'
                },
                {
                    id: '003',
                    name: 'categroys3'
                }
            ];
            this.logs = [{
                    id: '1',
                    name: '是',
                },
                {
                    id: '0',
                    name: '否',
                }
            ];
            let that = this;
            //获取现场现象
            axios.get(ajaxUrls.option).then(function(rsp) {
                let d = rsp.data;
                that.scenes = d.data.appearance;
            });
            //获取故障分类
            this.$on('changeCallback', function(text){
                console.log(text);
            });
            if(!that.val==""){
              let that = this;
              axios.get(ajaxUrls.fault + that.val).then(function(rsp) {
                  let d = rsp.data;
                  that.problems = d.data;
                  console.log(that.problems);
              });
            }
        },

        methods: {
            submitFun() {
                if (this.scene.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择现场现象！');
                    return false;
                }
                if (this.problem.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择问题原因！');
                    return false;
                }
                if (this.categroy.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择故障分类！');
                    return false;
                }
                if (!this.result) {
                    _util.showErrorTip('请输入处理结果！');
                    return false;
                }
                if (this.log.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择抓取日志！');
                    return false;
                }
                if (!this.desc) {
                    _util.showErrorTip('请输入处理方式！');
                    return false;
                }
                if (!$(this.$refs.up1.$el).find('.uploadifive-queue-item.complete').length) {
                    _util.showErrorTip('请上传图片！');
                    return false;
                };
                let appearance = this.val,
                    reason = this.reason,
                    yunwei_type = this.yunwei_type,
                    remark = this.result,
                    hasCatchLogZh = this.hasCatchLogZh,
                    deal = this.desc,
                    task_id = localStorage.task_id,
                    that = this;
                axios.post(ajaxUrls.orderinfo + task_id + '/close', {

                }, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function(rsp) {
                    _util.hideSysLoading();
                    if (rsp.data.status == 0) {
                        _util.showErrorTip(rsp.data.msg);
                    } else {
                        _util.showErrorTip(rsp.data.msg);
                    }
                })
            },
            getValue(val) {
                this.val = val;
                console.log(this.val);

            }

        }
    }

</script>
