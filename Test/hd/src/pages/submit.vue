<template>
    <div class="submit">
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
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
                <div style="padding:0px 50px; font-size:14px;padding-bottom:20px;">
                    <DateTime></DateTime>
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
                <div class="item" v-for="(d,index) in arry" :key="d.terminal_code" @click="choiceItem(index)" :class="{disabled:d.id=='02'}">
                    <div class="icon">
                        <div class="choice_icon" v-if="activeTab==index"></div>
                    </div>
                    <p>{{d.terminal_name}}</p>
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
                    <div class="mui-col-xs-7 margin-5">
                        <p class="mui-ellipsis">收费标注</p>
                    </div>
                    <div class="mui-col-xs-3" style="text-align:right;">
                        <div class="color_B">共计4元</div>
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
                <button type="button" class="mui-btn btn_blue" @click="nextStep">微信支付</button>
            </div>
        </div>
        <ModalDialog ref="confirmModal" @confirmCallback="setData"></ModalDialog>
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
import DateTime from '../components/DateTime'
import ModalDialog from '../components/ModalDialog'
export default {
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: '确认提交',
            bodyBg: 'bg_white',
            btnconfig: {
                isgoback: 1
            },
            day: '0',
            chest: '2',
            scroll_load_loading: false,
            scroll_load_end: false,
            start_date: '开始时间',
            end_date: '结束时间',
            activeTab: '0',
            arry: [],
            flag: true,
        }
    },
    components: {
        HeaderBar,
        DateTime,
        ModalDialog,
    },
    mounted() {
        this.setInfo();
    },
    watch: {
        '$route': function () {
            if (this.$route.path == ('/submit')) {
                let arr1 = Array.from(window.Data.t_c);
                let arr2 = Array.from(window.Data.t_n);
                this.arry = this.setData(arr1, arr2)
            }
        }
    },
    methods: {
        msgAlert(type, msg) {//弹出窗口
            $('.msg_' + type).html(msg);
            $('.msg_' + type).animate({
                'top': 0
            }, 500);
            setTimeout(function () {
                $('.msg_' + type).animate({
                    'top': '-30px'
                }, 500)
            }, 2000);
        },
        setInfo() {//设置信息
            var htmlstyle = "<style>body{padding:0;margin:0;}.msg{color:#FFF;width:100%;height:30px;text-align:center;font-size:14px;line-height:30px;position:fixed;top: -30px;z-index:20;}" +
                ".msg_success{background-color:#1fcc6c;}" +
                ".msg_warning{background-color:#e94b35;}" +
                ".msg_primary{background-color:#337ab7;}" +
                ".msg_info{background-color:#5bc0de;}</style>";
            $('head').append(htmlstyle);
            $('body').prepend('<div class="msg msg_success"></div>' +
                '<div class="msg msg_warning"></div>' +
                '<div class="msg msg_primary"></div>' +
                '<div class="msg msg_info"></div>');
            // this.arry = [{ 'name': '1865创意园二楼格格货栈', 'id': '01' }, { 'name': '1865创意园二楼格格货栈', 'id': '02' }, { 'name': '1865创意园二楼格格货栈', 'id': '03' },];
        },
        showAlert() {
            this.$refs.confirmModal.showModal({
                text: '该日期内部分柜机已被预定，您可以请重选'
            });
        },
        isAgree() {
            this.flag = !this.flag;
        },
        choiceItem(index) {
            this.activeTab = index;
        },
        gotoInfo(name) {
            this.url('/' + name);
        },
        setData(arr1, arr2) {
            let Array = []
            for (let i = 0; i < arr1.length; i++) {
                let obj = Object.create(null);
                obj.terminal_code = arr1[i];
                obj.terminal_name = arr2[i];
                Array.push(obj);
            }
            return Array
        },
        nextStep() {
            //  this.$refs.confirmModal.showModal({
            //     text: '该日期内部分柜机已被预定，您可以请重选'
            // });
            // _util.showErrorTip('请选择分类！');
            this.showInfo();
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
    display: flex;
    align-items: center;
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
</style>

