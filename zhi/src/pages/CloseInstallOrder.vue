<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div(style="margin-top:50px;padding-left:16px;color:#828282") {{name}}
        div.pb60
            Field(
                tag="终端现象",
                v-model="scene",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="scenes",
                :selectText="scene",
                :select="true",
                :arrow="true",
                @input="getValue",
                @changeCallback="change"

            )
            Field(tag="备注（处理结果）", placeholder="请输入处理方式", v-model.trim="desc", :textarea="true")
            Field(
                tag="开始安装时间",
                v-model="result",
                placeholder="请输入处理结果（必填）",
                :input="true",
            )
            Field(
                tag="实际安装时间",
                v-model="result",
                placeholder="请输入处理结果（必填）",
                :input="true",
            )
            Field(
                tag="是否安装地坪和雨棚",
                v-model="result",
                placeholder="请输入处理结果（必填）",
                :input="true",
            )
            Field(
                tag="是否有透明柜",
                v-model="problem",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'name', textname: 'name', idname: 'id'}",
                :options="problems",
                :selectText="problem",
                :select="true",
                :arrow="true",
                @input="getValue1", 
                @changeCallback="change1"              
            )  
            Field(
                tag="问题原因",
                v-model="categroy",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="categroys",
                :selectText="categroy",
                :select="true",
                :arrow="true",
                @input="getValue2"               
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
                :arrow="true",
                @input="getValue3"
            )
            Field(tag="处理方式", placeholder="请输入处理方式", v-model.trim="desc", :textarea="true")
        SubmitBtn(@submitCallback="submitFun", text="提交", theme="white")
</template>

<script>
    import HeaderBar from '../components/common/Header'
    //    import Upload from '../components/common/Upload'
    import Field from '../components/elements/Field'
    import SubmitBtn from '../components/elements/SubmitBtn'
    /*Upload(id="up1", ref="up1")*/
    export default {

        data() {
            return {
                bodyBg: 'dark',
                pageTitle: '关闭',
                name: '',
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
                _id: this.$route.query._id || '',
                cause_id: ""
            }
        },
        components: {
            HeaderBar,
            Field,
            SubmitBtn,
            //            Upload,

        },
        mixins: [require('../components/mixin/BodyBg')],
        created() {
            window.canGoBack = true;
            window.origin = null;
            this.getInfo();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': function() {
                if (this.$route.path == ('/order/close')) {
                    //清空页面的内容
                    this.scene = '请选择（必选）';
                    this.scenes = [];
                    this.problem = '请选择（必选）';
                    this.problems = [];
                    this.categroy = '请选择（必选）';
                    this.categroys = [];
                    this.result = '';
                    this.log = '请选择（必选）';
                    this.logs = [];
                    this.desc = '';
                    this.getInfo();
                }
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
                //                if (!$(this.$refs.up1.$el).find('.uploadifive-queue-item.complete').length) {
                //                    _util.showErrorTip('请上传图片！');
                //                    return false;
                //                };
                let appearance = this.val,
                    reason = this.cause_id,
                    yunwei_type = this.yunwei_type,
                    remark = this.result,
                    hasCatchLogZh = this.hasCatchLogZh,
                    deal = this.desc,
                    tasks_id=this.$route.query._id,
                    that = this;
                axios.post(ajaxUrls.orderinfo + that.$route.query._id + '/deal', {
                    action:'close',
                    appearance: appearance,
                    tasks_id:tasks_id,
                    reason: reason,
                    type: yunwei_type,
                    remark: remark,
                    has_catch_log: hasCatchLogZh,
                    deal: deal
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
            //获取现象原因的ID
            getValue(val) {
                this.val = val;
            },
            //获取问题原因的ID
            getValue1(val) {
                this.cause_id = val;
            },
            //获取故障原因的ID
            getValue2(val) {
                this.yunwei_type = val;
            },
            //是否抓取日志
            getValue3(val) {
                this.hasCatchLogZh = val;
            },
            change() {
                let that = this;
                that.categroy = "";
//                console.log(that.val,'xian');
                //获取故障分类
                getAjaxRequest("order_cache", ajaxUrls.fault + 'appearance=' + that.val, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    that.problems = response.data;
                    if (that.problems.length == 1) {
                        that.getValue1(response.data[0].id);
                        that.change1();
                        that.problem = response.data[0].name;
                    } else {
                        that.problem = "";
                    }
                }, function(error) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            change1() {
                let that = this;
                //获取问原因
                getAjaxRequest("order_cache", ajaxUrls.fault + 'type=' + that.cause_id, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    that.categroys = response.data;
                    if (that.categroys.length == 1) {
                        that.getValue2(response.data[0].id);
                        that.categroy = response.data[0].name;
                    } else {
                        that.categroy = "";
                    }
                }, function(error) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            //获取信息
            getInfo() {
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
                // 获取当前工单信息
                getAjaxRequest("order_cache", ajaxUrls.orderinfo + that.$route.query._id, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {
                        that.name = response.data.terminal_name;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function(error) {
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
                //获取现场现象
                getAjaxRequest("order_cache", ajaxUrls.fault, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    if (response.status == 0) {
                        that.scenes = response.data;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function(error) {
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });

            }



        }
    }

</script>
