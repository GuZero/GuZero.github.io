<template>
    <div class="submit">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @callback="goBack"></HeaderBar>
        <div style="height:44px;"></div>
        <div class="content mui-content rel">
            <div class="time_box">
                <div class="mui-row">
                    <div class="mui-col-xs-1" style="margin-right:15px;">
                        <div style="width:24px;height:24px; display: inline-block;margin-top:5px;">
                            <img src="//img.aimoge.com/FoWx8gJnGyp3c_Ov9fWCG0eVgMUH" alt="" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="mui-col-xs-10">
                        <p class="mui-ellipsis">选择时间(已选
                            <span class="color_B" id="day"> {{day}} </span>天)</p>
                    </div>
                </div>
                <div style="padding:0px 36px; font-size:14px;padding-bottom:20px;">
                    <div class="mui-row">
                        <input type="text" readonly id="start_date" v-model="start_date" :value="value" class="input mui-col-xs-5 mui-text-center" placeholder="开始时间" @input="resetData">
                        <span class="mui-col-xs-2 mui-text-center">----</span>
                        <input type="text" readonly id="end_date" v-model="end_date" :value="value" class="input mui-col-xs-5 mui-text-center" placeholder="结束时间" @input="resetData">
                    </div>
                </div>
            </div>
            <div class="hight_8 abs"></div>
            <div class="choice_box">
                <div class="mui-row ">
                    <div class="mui-col-xs-1" style="margin-right:15px;">
                        <div style="width:24px;height:20px; display: inline-block;margin-top:5px;">
                            <img src="//img.aimoge.com/Fv1Ojcrc0kcNoo0OdHAeMvHATYdn" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="mui-col-xs-8 margin-5">
                        <p class="mui-ellipsis">选择柜机（已选
                            <span class="color_B">{{chest}}</span>个）</p>
                    </div>
                    <div class="mui-col-xs-2" style="text-align:right;" @click="gotoInfo('choiceChest')">
                        <div class="add_icon">+</div>
                    </div>
                </div>
                <div style="max-height:120px;overflow-y: scroll">
                    <div class="item terminal flex flex-align-center" v-for="(d,index) in arry" :key="d.terminal_code" @click="choiceItem(d,$event)" data-id="terminal" :class="{disabled:d.succed==1}">
                        <div class="icon">
                            <div class="choice_icon" v-show="false"></div>
                        </div>
                        <p>{{d.terminal_name}}</p>
                    </div>
                    <div class="item city flex flex-align-center" v-for="item in c_arry" :key="item.city_id" @click="choiceItem(item,$event)" data-id="city">
                        <div class="icon">
                            <div class="choice_icon" v-show="false"></div>
                        </div>
                        <p>{{item.city_name}}</p>
                    </div>
                </div>
            </div>
            <div class="hight_8 abs"></div>
            <div class="charge_box">
                <div class="mui-row ">
                    <div class="mui-col-xs-1" style="margin-right:15px;">
                        <div style="width:24px;height:24px; display: inline-block;margin-top:5px;">
                            <img src="//img.aimoge.com/FgrEPLTkazeV_rEeBomK3P3gr15p" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="mui-col-xs-6 margin-5">
                        <p class="mui-ellipsis">收费标注</p>
                    </div>
                    <div class="mui-col-xs-4" style="text-align:right;margin-top:6px;">
                        <div class="color_B">共计{{total}}元</div>
                    </div>
                </div>
                <div class="text">
                    首次使用1元/柜/天，最多3柜；正常3元/柜/天；
                </div>
            </div>
            <div class="mui-row" style="margin-top:30px;">
                <div class="mui-col-xs-4 mui-text-right" @click="isAgree">
                    <div class="agree" v-show="flag">
                        <img src="//img.aimoge.com/FqfmB3mlFn4U9FLh8saH4QE7UhCj" alt="" width="100%" height="100%">
                    </div>
                    <div class="agree" v-show="!flag">
                        <img src="//img.aimoge.com/FhHbgqJrv_v_bFqO3f3Cckg5tuHT" alt="" width="100%" height="100%">
                    </div>
                </div>
                <div class="mui-col-xs-8" @click="gotoInfo('agreement')">
                    <a class="agreement">同意柜机屏幕展示协议</a>
                </div>
            </div>
            <div class="btn_box">
                <button type="button" class="mui-btn btn_blue" @click="nextStep">支付</button>
            </div>
        </div>
        <ModalDialog ref="confirmModal" @confirmCallback="resetDate"></ModalDialog>
        <div id="hint" class="sysLoading1 fixed">
            <div class="hint_info">
                <img src="//img.aimoge.com/FsNN9KaeHuuk90DQlqyLtNxOPfdd" style="width:25%">
                <div>互动屏预定中...</div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
import ModalDialog from '../components/ModalDialog'
export default {
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: '确认提交',
            bodyBg: 'bg_white',
            btnconfig: {
                isback: 1,
                isgoback: 0,
            },
            day: '0',
            chest: 0,
            scroll_load_loading: false,
            scroll_load_end: false,
            start_date: '',
            end_date: '',
            activeTab: '0',
            arry: [],
            c_arry: [],
            flag: true,
            terminals: [],
            citys: [],
            succed: null,
            total: 0,
            city_id: '',
            //支付信息
            order: {
                service: 'media_adinteraction_service',
                total_fee: 1,
                pay_id: '',
                pay_Type: 4,
                order_id: '',
                status: 0,
                total_num: 1
            },
        }
    },
    components: {
        HeaderBar,
        ModalDialog,
    },
    beforeRouteLeave: (to, from, next) => {
        $('#sysLoading').show();
        next();
    },
    beforeRouteEnter: (to, from, next) => {
        $('#sysLoading').hide();
        next();
    },
    mounted() {
        this.setInfo();
    },
    watch: {
        '$route': function() {
            if (this.$route.path == ('/submit')) {
                this.chest = 0;
                this.total = 0;
                this.terminals = [];
                this.citys = [];
                this.c_arry = [];
                $(".choice_icon").hide();
                if (window.Data.t_c && window.Data.t_n) {
                    let arr1 = window.Data.t_c;
                    let arr2 = window.Data.t_n;
                    let code = '';
                    let _id = window.Data.city_id;
                    for (let i = 0; i < arr1.length; i++) {
                        code += '&terminal_code=' + arr1[i];
                    }
                    if (arr1 && arr2 && _id) {
                        this.verify(_id, code);
                    }
                }
                if (window.Data.city) {
                    this.c_arry.push(window.Data.city)
                }
            }
        },
    },
    methods: {
        setInfo() { //设置信息
            $(".choice_icon").hide();
            this.init();
        },
        showAlert() {
            this.$refs.confirmModal.showModal({
                text: '该日期内部分柜机已被预定，您可以请重选'
            });
        },
        isAgree() {
            this.flag = !this.flag;
        },
        choiceItem(item, ev, index) {
            let el = ev.currentTarget;
            let id = $(el).data("id");
            let icon = $(el).children('.icon').children();
            let day = parseInt($("#day").html());
            if (id == 'city' && this.terminals.length == 0) {
                if ($(icon).is(":hidden")) {
                    $(icon).show();
                    this.city_id = '';
                    this.citys.add(item.city_id);
                    this.chest++;
                    this.total += item.price * day;
                } else {
                    $(icon).hide();
                    this.citys.remove(item.city_id);
                    this.chest--;
                    this.total -= item.price * day;
                }
            } else if (id == 'terminal' && this.citys.length == 0) {
                if ($(icon).is(":hidden")) {
                    if (item.succed == 1) {
                        this.showAlert();
                        return false;
                    }
                    $(icon).show();
                    this.terminals.add(item.terminal_code);
                    this.chest++;
                    this.total = day * 3 * this.chest;
                    this.city_id = item.city_id;
                } else {
                    $(icon).hide();
                    this.total
                    this.terminals.remove(item.terminal_code);
                    this.chest--;
                    this.total = day * 3 * this.chest;
                }
            } else {
                _util.showErrorTip('抱歉！包城和选择柜机您只能选择一个');
            }
        },
        gotoInfo(name) {
            if (name == 'choiceChest') {
                if (this.start_date == '' || this.end_date == '') {
                    _util.showErrorTip('请先选择时间再选择柜机');
                    return false;
                }
            }
            this.url('/' + name);
        },
        setData(arr1, arr2, status, _id) {
            let arr = []
            for (let i = 0; i < arr1.length; i++) {
                let obj = Object.create(null);
                obj.terminal_code = arr1[i];
                obj.terminal_name = arr2[i];
                obj.succed = status;
                obj.city_id = _id;
                arr.push(obj);
            }
            return arr;
        },
        setData1(arr1, arr2, arr3) {
            let arr = []
            for (let i = 0; i < arr1.length; i++) {
                let obj = Object.create(null);
                obj.city_id = arr1[i];
                obj.city_name = arr2[i];
                obj.price = arr3[i];
                arr.push(obj);
            }
            return arr;
        },
        resetData() {
            if (this.start_date && this.end_date) {
                this.arry = [];
                this.c_arry = [];
                this.chest = 0;
                this.total = 0;
            }
        },
        resetDate() {
            this.start_date = '开始时间';
            this.end_date = '结束时间';
            $('#day').html('0');
        },
        nextStep() {
            this.postData();
        },
        verify(cityID, code) {
            let that = this;
            axios.get('/media/adinteraction/inspect?city_id=' + cityID + code + '&start_date=' + this.start_date + '&end_date=' + this.end_date)
                .then(function(response) {
                    if (response.data.status == 0) {
                        that.hideLoading();
                        that.succed = response.data.data.succed;
                        that.arry = that.setData(window.Data.t_c, window.Data.t_n, that.succed, cityID);
                    } else {
                        if (response.data.msg) _util.showErrorTip(response.data.msg);
                    }
                })
                .catch(function(err) {
                    that.hideLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
        },
        postData() {
            if (!this.start_date && !this.end_date) {
                _util.showErrorTip("请选择展示的日期");
                return false;
            }
            if (this.citys.length == 0 && this.terminals.length == 0) {
                _util.showErrorTip("请选择柜机");
                return false;
            }
            if (!this.flag) {
                _util.showErrorTip("抱歉您还没有同意展示协议");
                return false;
            }
            let content = window.img.content ? window.img.content : '',
                image = window.img.imgsrc,
                terminal_codes = this.terminals,
                city_id = this.city_id ? this.city_id : this.citys,
                start_date = this.start_date,
                end_date = this.end_date,
                category = window.img.category;
            let data = {
                content: content,
                image: image,
                terminal_codes: terminal_codes,
                city_id: city_id,
                start_date: start_date,
                end_date: end_date,
                category: category
            };
            let that = this;
            that.showInfo();
            axios.post('/media/adinteraction', data).then((rsp) => {
                if (rsp.data.status == 0) {
                    that.hideInfo();
                    let data = rsp.data.data;
                    that.order.order_id = data._id;
                    that.order.total_fee = data.fee;
                    that.order.pay_id = data.pay_id;
                    that.order.status = data.status;
                    that.goPay();
                } else {
                    that.hideInfo();
                    _util.showErrorTip(res.data.msg);
                }
            }).catch((err) => {
                console.log(err);
                that.hideInfo();
                _util.showErrorTip('您的网络可能出了点问题:(');
            })
        },
        init() {
            let m = new Date().getMonth() + 1,
                d = new Date().getDate() + 1,
                time = new Date().getHours(),
                that = this;
            if (time > 17 || time == 17) {
                d = d + 1;
            }
            var startDate = new LCalendar();
            startDate.init({
                'trigger': '#start_date', //标签id
                'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
                'minDate': (new Date().getFullYear()) + '-' + m + '-' + d, //最小日期
                'maxDate': (new Date().getFullYear()) + '-' + 12 + '-' + 31, //最大日期
            });
            var endDate = new LCalendar();
            endDate.init({
                'trigger': '#end_date', //标签id
                'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
                'minDate': (new Date().getFullYear()) + '-' + m + '-' + d, //最小日期
                'maxDate': (new Date().getFullYear()) + '-' + 12 + '-' + 31 //最大日期
            });
        },
        goBack() {
            $('#sysLoading').show();
            this.url('/make');
            $('#sysLoading').hide();
        },
        goPay() {
            let that = this;
            let search = {
                "order_id": that.order.order_id,
                "service": that.order.service,
                "pay_Type": that.order.pay_Type,
                "total_fee": that.order.total_fee,
                "total_num": that.order.total_num,
                "callbackurl": encodeURIComponent("/adinteraction?#/examine")
            }

            function goPay() {
                window.location.href = '/pay?pay_types=' + search.pay_Type + '&order_ids=' + search.order_id + '&service=' + search.service + '&total_fee=' + search.total_fee + '&total_num=' + search.total_num + '&callbackurl=' + search.callbackurl;
            }
            if (that.order.status == 211) {
                this.confirmPayCancel(goPay)
            } else {
                window.location.href = '/pay?pay_types=' + search.pay_Type + '&order_ids=' + search.order_id + '&service=' + search.service + '&total_fee=' + search.total_fee + '&total_num=' + search.total_num + '&callbackurl=' + search.callbackurl;
            }
        },
        confirmPayCancel(callback) {
            let that = this;
            let data = {
                "service": that.order.service,
                "pay_id": that.order.pay_id,
                "pay_type": that.order.pay_Type,
                "result": 300,
                "error_msg": '用户主动取消',
                "pay_info": {}
            }
            axios.post(window.config.PAY + '/pay/' + that.order.pay_id, data).then((rsp) => {
                if (rsp.status == 0 && rsp.data) {
                    if (callback) callback();
                } else {
                    _util.showErrorTip('支付失败');
                    that.$route.go(0);
                }
            })
        },
        showLoading() { //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading() { //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        },
        showInfo() {
            $("#hint").fadeIn("slow");
        },
        hideInfo() {
            $("#hint").fadeOut("slow");
        },
    }
}

</script>
<style scoped>
.gege-header {
    background: #4285f4;
}

.color_B {
    color: #4285f4;
}

.content {
    padding: 18px;
}

.btn_blue {
    border: 0.01px solid #4285f4;
    background-color: #4285f4;
    font-size: 15px;
    padding: 7px 0;
    width: 100%;
    color: #fff;
    border-radius: 4px;
}

.hight_8 {
    height: 8px;
    background: #ececec;
    width: 100%;
    left: 0;
}

.add_icon {
    width: 36px;
    height: 25px;
    color: #fff;
    background: #4285f4;
    font-size: 24px;
    text-align: center;
    line-height: 25px;
    border-radius: 4px;
    display: inline-block;
}

.choice_box {
    margin-top: 8px;
    padding: 15px 0;
}

.item {
    margin: 10px auto;
}

.item .icon {
    width: 18px;
    height: 18px;
    border: 1px solid #979797;
    border-radius: 3px;
}

.choice_icon {
    width: 10px;
    height: 5px;
    border-bottom: 2px solid #4788f4;
    border-left: 2px solid #4788f4;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    /* IE 9 */
    -moz-transform: rotate(-45deg);
    /* Firefox */
    -webkit-transform: rotate(-45deg);
    /* Safari 和 Chrome */
    -o-transform: rotate(-45deg);
    margin-top: 3px;
    margin-left: 3px;
}

.item p {
    font-size: 14px;
    color: #4d4d4d;
    margin-left: 18px;
}

.disabled {
    opacity: .4;
}

.charge_box {
    margin-top: 8px;
    padding: 16px 0px;
}

.charge_box .text {
    margin-top: 10px;
    font-size: 16px;
    color: #7b7b7b;
}

.agree {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 5px;
    margin-top: 2px;
}

.agreement {
    color: #bfbfbf;
    text-decoration: underline;
    font-size: 14px;
}

.btn_box {
    margin-top: 10px;
}

.hint_info {
    width: 70%;
    height: 130px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -35%;
    margin-top: -65px;
    background: #fff;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    z-index: 90001;
    border-radius: 5px;
    padding-top: 16px;
}

.input {
    border: none;
    font-size: 14px;
    width: 40%;
    padding: 0px;
    height: 25px;
    margin-bottom: 0px;
}
</style>
