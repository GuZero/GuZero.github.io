<template lang="jade">
    div.create-order
        HeaderBar(
            :title="pageTitle"
        )
        div.mt44.pb60(style="margin-top: 52px;")            
            Field(tag="分类",:input="true",v-model.trim="type")
            Field(tag="标题",:input="true",v-model.trim="title")
            Field(tag="问题描述", placeholder="请输入问题描述", v-model.trim="desc", :textarea="true", autocomplete="new-password")
            Field(tag="快递员手机号", placeholder="快递员手机号", :input="true",v-model.trim="operator_mobile")
            Field(
                tag="快递员城市",
                v-model="city",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="citys",
                :selectText="city",
                :select="true",
                :arrow="true",
                @input="getID"
            )
            Field(
                tag="选择优先级",
                v-model="priority",
                placeholder="请选择（必选）",
                :optionJsonConfig="{valuename: 'id', textname: 'name', idname: 'id'}",
                :options="prioritys",
                :selectText="priority",
                :select="true",
                :arrow="true",
                @input="getID"
            )
            Field(tag="超时设置", placeholder="请选择超时间", :input="true", v-model="dateline", type="datetime-local")            
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
                pageTitle: '柜子安装工单',
                type: '', //分类
                title: '', //标题
                desc: '', //内容
                operator_mobile: '', //快递员手机号
                city: '',
                citys: [], //快递员城市
                priority: '',
                prioritys: [], //优先级
                dateline: '', //超时时间     
                val: ''
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
            //获取现场现象
            this.getInfo();
        },
        activated() {
            window.canGoBack = true;
            window.origin = null;
        },
        watch: {
            '$route': function() {
                if (this.$route.path == ('/order/operation')) {
                    this.type = '';
                    this.title = '';
                    this.desc = '';
                    this.operator_mobile = '';
                    this.city = '请选择（必选）';
                    this.citys = [];
                    this.priority = '';
                    this.prioritys = [];
                    this.dateline = '';
                    this.getInfo();
                }
            }
        },
        methods: {
            submitFun() {
                if (!this.desc) {
                    _util.showErrorTip('请输入问题描述！');
                    return false;
                };
                 if (!this.operator_mobile) {
                    _util.showErrorTip('请输入快递员手机号！');
                    return false;
                };
                if (this.ordertype.indexOf('选择') > -1) {
                    _util.showErrorTip('请选择快递员城市！');
                    return false;
                };
               
                if (this.priority.indexOf('选择') > -1) {
                    _util.showErrorTip('请选优先级！');
                    return false;
                };                
                let project_id = this.project_id,
                    terminal_code = localStorage.terminal_code,
                    customer_mobile = this.customer_mobile,
                    deadline = this.date ? this.setDate(this.date) : '',
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
            //获取工单类型ID
            getID(val) {
                this.project_id = val;
            },
            getValue(val) {
                this.val = val;
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
            setData(data) {
                var arry = []
                for (var key of Object.keys(data)) {
                    let obj = Object.create(null);
                    obj.id = key;
                    obj.name = data[key];
                    arry.push(obj);
                }
                return arry
            },
            getInfo() {
                this.type = localStorage.type_name;
                let that = this;
                //获取现场现象
                _util.showSysLoading();
                getAjaxRequest("order_cache", ajaxUrls.option, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
                    _util.hideSysLoading();
                    if (response.status == 0) {

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

