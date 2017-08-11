<template>
    <div class="make">
        <!--裁剪部分-->
        <div class="htmleaf-container">
            <div id="clipArea"></div>
            <div class="footer">
                <div>
                    <div class="mui-row color_w">
                        <div class="mui-col-xs-6 mui-text-left">
                            <span @click="cancle">取消</span>
                        </div>
                        <div class="mui-col-xs-6 mui-text-right">
                            <span @click="finish" id="finish">完成</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig"></HeaderBar>
        <div class="mui-content-padded">
            <div class="mui-row">
                <div class="mui-col-xs-5" @click="switchTab(0)">
                    <button type="button" class="mui-btn mui-btn-outlined btn" id="make_btn" :class="{active:activeTab==0}">
                        1.制作
                    </button>
                </div>
                <div class="mui-col-xs-2"></div>
                <div class="mui-col-xs-5" @click="switchTab(1)">
                    <button type="button" class="mui-btn mui-btn-outlined btn" id="choice_btn" :class="{active:activeTab==1}">
                        2.选择柜机
                    </button>
                </div>
            </div>
            <div class="show" v-if="activeTab==0">
                <div class="mui-card">
                    <div class="mui-card-header mui-card-media">
                        <div id="uploadBox">
                            <a id="upload" @click="upLoad">
                                <button type="button" class="mui-btn mui-btn-outlined upload_btn">
                                    上传图片
                                </button>
                                <input id="file" type="file" accept="image/*" multiple/>
                            </a>
                            <p class="font_14">建议上传1M以上 清晰度高的图片</p>
                        </div>
                        <div id="error">
                            <p class="font_14">咣咣，上传失败/(ㄒoㄒ)/~~</p>
                            <div class="mui-text-center">
                                <button type="button" class="mui-btn mui-btn-outlined upload_btn margin20" id="retry">重试</button>
                            </div>
                            <a id="reelect" class="font_14" @click="reelect">
                                <label for="file">重选作品
                                </label>
                            </a>
                        </div>
                        <div id="photo"></div>
                    </div>
                    <div class="mui-card-content">
                        <div class="text" @click="input">
                            <p class="txt1 font_14">点击输入文字</p>
                            <div class="text_1">
                                <textarea maxlength="140" id="text" rows="2" v-model="text" @input="checkText"></textarea>
                                <p id="num1" class="mui-text-right font_14">
                                    <span id="word">0</span>/140</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cabinet" class="margin45" v-if="activeTab==1">
                <ul class="mui-table-view line_h30">
                    <li class="mui-table-view-cell">
                        <div class="mui-row ">
                            <div class="mui-col-xs-2 mui-text-center">
                                <div style="width:18px;height:18px; display: inline-block">
                                    <img class="mui-pull-left" src="//img.aimoge.com/FjHjVjKxuwijQBc6c_9jq9Ru0v9c" width="100%" height="100%">
                                </div>
                            </div>
                            <div class="mui-col-xs-8 margin-5" @click.stop.prevent="gotoInfo('chooseCity')">
                                <p class="mui-ellipsis">{{city_name}}</p>
                            </div>
                            <div class="mui-col-xs-2 mui-text-right">
                                <div style="width:18px;height:18px;display: inline-block">
                                    <img src="//img.aimoge.com/FnvoecOAQ0w2pmYfw0BfkPjXlvHC" width="100%" height="100%">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="mui-table-view margin5">
                    <li class="mui-table-view-cell">
                        <div class="mui-row">
                            <div class="mui-col-xs-2 mui-text-center">
                                <div style="width:18px;height: 18px; display: inline-block">
                                    <img src="//img.aimoge.com/FgsAPXW3eFt4MN3pHyGaq6_B-fjQ" alt="" width="100%" height="100%">
                                </div>
                            </div>
                            <div class="mui-col-xs-10">
                                <p class="mui-ellipsis">选择展示日期</p>
                            </div>
                        </div>
                    </li>
                    <li class="mui-table-view-cell">
                        <div class="mui-row" id="chooseDate">
                            <!-- <div class="mui-col-xs-4 mui-text-center">{{start_date}}</div>
                            <div class="mui-col-xs-4 mui-text-center">------</div>
                            <div class="mui-col-xs-4 mui-text-center">{{end_date}}</div> -->
                            <DateTime></DateTime>
                        </div>
                    </li>
                </ul>
                <div class="mui-row margin145">
                    <div class="mui-col-xs-3 mui-text-right" @click="isAgree">
                        <div class="agree" v-show="flag">
                            <img src="//img.aimoge.com/FtRcBl62d6oHvi4N6OfL2xSYkREC" alt="" width="100%" height="100%">
                        </div>
                        <div class="agree" v-show="!flag">
                            <img src="//img.aimoge.com/FhK_8jHkPbHUvC7yuZgnh5XzAmfy" alt="" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="mui-col-xs-9" @click="gotoInfo('agreement')">
                        <a class="agreement">同意柜机屏幕展示协议</a>
                    </div>
                </div>
    
            </div>
            <button type="button" class="mui-btn mui-btn-primary mui-btn-block bottom" @click="submit" v-if="activeTab==0">下一步</button>
            <button type="button" class="mui-btn mui-btn-primary mui-btn-block bottom" @click="postData" v-if="activeTab==1">提交</button>
        </div>
        <div id="time">
            <div class="mui-row mui-table-view-cell">
                <div class="mui-col-xs-6 font_14" @click="isShow(0)">
                    取消
                </div>
                <div class="mui-col-xs-6 blue mui-text-right font_14" @click="isShow(2)">
                    确定
                </div>
            </div>
            <ul class="mui-table-view" id="date">
                <li class="mui-table-view-cell mui-text-center" v-for="(d,index) in date" :key="d" @click="chooseSDate(d,index)" :class="{'dateActive':index==dateIndex}">
                    <div class="mui-row" id="week1">
                        <div class="mui-col-xs-5 mui-text-right">{{d.monday}}</div>
                        <div class="mui-col-xs-2">到</div>
                        <div class="mui-col-xs-5 mui-text-left">{{d.sunday}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
import DateTime from '../components/DateTime'
import { setValAndReqNow, getFormatData } from '../lib/js/date.20170615'
export default {
    data() {
        return {
            pageTitle: '制作中',
            btnconfig: {
                isgoback: 1,
            },
            _id: '',
            imgsrc: "",
            token: "",
            scroll_load_loading: false,
            scroll_load_end: false,
            activeTab: 0,
            text: '',
            token: '',
            start_date: '开始时间',
            end_date: '结束时间',
            date: [],
            dateIndex: null,
            flag: true,
            city_name: '请选择城市',
            ciyt_id: '',
            url1:'//img.aimoge.com/FohnmdyrZ46WyRHiqYrgUU-YERVW',
            url2:'',
        }
    },
    components: {
        HeaderBar,
        DateTime
    },
    created() {

    },
    mounted() {
        this.setInfo();
    },
    watch: {
        '$route': function () {
            if (this.$route.path == ('/make')) {
                if (this.city_id != "") {
                    this.text = "";
                    this.start_date = '开始时间';
                    this.end_date = '结束时间';
                    this.city_name = '请选择城市';
                    this.city_id = '';
                }
                this.city_id = localStorage._id;
                this.city_name = localStorage._name;
            }
        }
    },
    methods: {
        post_img(data) {//上传图片到七牛
            let that = this;
            var blobBin = atob(data.split(',')[1]);
            var array = [];
            for (var i = 0; i < blobBin.length; i++) {
                array.push(blobBin.charCodeAt(i));
            }
            var file = new Blob([new Uint8Array(array)], {
                type: 'image/png'
            });
            var formdata = new FormData();
            formdata.append("file", file);
            formdata.append("token", that.token);
            formdata.append("x:source", "dapinghudong");
            $('#sysLoading').show();
            $.ajax({
                url: location.protocol == "http:" ? 'http://upload.qiniu.com' : 'https://up.qbox.me',
                type: "POST",
                data: formdata,
                contentType: false,
                dataType: 'json',
                processData: false,
                success: function (respond) {
                    $('#sysLoading').hide();
                    that.imgsrc = respond.name;
                    console.log(that.imgsrc);
                },
                error: function (err) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                }
            }).done(function (respond) {
                that.imgsrc = respond.name;
            });
        },
        upLoad() {
            $(".htmleaf-container").fadeIn(300);
            $("#photo").show();
        },
        cancle() {//取消上传图
            $(".htmleaf-container").fadeOut(300);
            $("#photo").hide();
        },
        finish() {//完成上传图片
            $("#photo").css({
                'background-color': 'none',
                'background-size': '100%'
            });
            $("#uploadBox").hide();
            $("#error").hide();
            $(".htmleaf-container").hide();
        },
        reelect() {//重新选择作品
            $(".htmleaf-container").fadeIn(300);
            $("#photo").show();
            $("#file").on("click", function () { });
        },
        input() {//点击输入文字
            $(".txt1").hide();
            $(".text_1").show();
        },
        switchTab(index) {//点击制作/点击选择柜子
            switch (index) {
                case 0:
                    this.activeTab = 0;
                    this.pageTitle = '制作中';
                    this.submitTxt = '下一步';
                    break;
                case 1:
                    this.activeTab = 1;
                    this.pageTitle = '选择快递柜';
                    this.submitTxt = '提交';
                    break;
                default:
                    break;
            }

        },
        submit() {//下一步&&提交
            if (!this.text) {
                this.msgAlert("warning", "请输入您想要说的话");
                return false;
            }
            if (!this.imgsrc) {
                this.msgAlert("warning", "请您上传一张图片");
                return false;
            }
            this.activeTab = 1;
            this.pageTitle = '选择快递柜';
        },
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
            let that = this;
            //获取token值
            that.showLoading();
            axios.get('http://api.dev.aimoge.com/v1/upload/token')
                .then(function (response) {
                    if (response.data.status == 0) {
                        that.hideLoading();
                        that.token = response.data.data.image_token;
                    } else {
                        if (response.data.msg) _util.showErrorTip(response.data.msg);
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    that.hideLoading();
                    _util.showErrorTip('您的网络可能出了点问题:(');
                })
            //裁剪图片
            var clipArea = new bjj.PhotoClip("#clipArea", {
                size: [310, 290],
                outputSize: [580, 620],
                file: "#file",
                view: "#photo",
                ok: "#finish",
                loadStart: function () {
                    // _util.showSysLoading()
                    console.log("照片读取中");
                },
                loadComplete: function () {
                    // _util.hideSysLoading();
                    console.log("照片读取完成");
                },
                clipFinish: function (dataURL) {
                   that.url2=dataURL;
                   console.log(that.url1,that.text);
                   that.getBase64(that.url1,that.url2,that.text);
                }
            });
            //设置时间格式
            for (let i = 0; i < 4; i++) {
                this.date.push(setValAndReqNow(i + 2));
                this.date[i].monday = getFormatData(this.date[i].monday);
                this.date[i].sunday = getFormatData(this.date[i].sunday);
            }
        },
        checkText() { //文字限制
            let len = this.text.length;
            if (len > 139) {
                that.msgAlert("warning", "您输入超出了字数限制");
            }
            let num = 140 - len;
            $("#word").text(len);
        },
        isShow(i) {
            switch (i) {
                case 0:
                    $("#time").animate({
                        bottom: '-20%'
                    }, "slow", function () {
                        $("#time").hide();
                    });
                    break;
                case 1:
                    $("#time").show();
                    $("#time").animate({
                        bottom: '0'
                    }, "slow");
                    break;
                case 2:
                    if (this.start_date == "开始时间") {
                        this.msgAlert("warning", "请选择时间");
                        return false;
                    }
                    $("#time").animate({
                        bottom: '-20%'
                    }, "slow", function () {
                        $("#time").hide();
                    });
                    break;
                default:
                    break;
            }

        },
        chooseSDate(d, i) {//选择时间
            this.start_date = d.monday;
            this.end_date = d.sunday;
            this.dateIndex = i;
            $("#time").animate({
                bottom: '-20%'
            }, "slow", function () {
                $("#time").hide();
            });
        },
        isAgree() {
            this.flag = !this.flag;
        },
        gotoInfo(name) {
            this.url('/' + name);
        },
        postData() {
            if (this.start_date == "开始时间" && this.end_date == "结束时间") {
                this.msgAlert("warning", "请选择展示的日期");
                return false;
            }
            if (this.ciyt_id == '') {
                this.msgAlert("warning", "请选择您要展示的城市");
                return false;
            }
            if (!this.flag) {
                this.msgAlert("warning", "抱歉您还没有同意展示协议");
                return false;
            }
            let data = {
                content: this.text,
                image: this.imgsrc,
                city_id: this.city_id,
                start_date: this.start_date,
                end_date: this.end_date,
            };
            let that = this;
            axios.post('http://api.dev.aimoge.com/v1/media/adinteraction', { data: JSON.stringify(data) }, {
                withCredentials: true,
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                }
            }).then((rsp) => {
                console.log(rsp.data);
            }).catch((err) => {
                console.log(err);
            })
        },
        getBase64(url1, url2,content) {
            let Img1 = new Image(),
                Img2 = new Image(),
                dataURL = '';
            Img1.src = url1;
            Img2.src = url2;
            Img1.crossOrigin = "Anonymous";
            Img2.crossOrigin = "Anonymous";
            let canvas = document.createElement("canvas"),
                width = Img1.width,
                height = Img1.height,
                ctx = canvas.getContext("2d");
            ctx.drawImage(Img1, 0, 0, width, height);
            ctx.drawImage(Img2, 30, 30);
            ctx.font = "20px microsoft yahei";
            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.fillText(content, 100, 100);
            dataURL = canvas.toDataURL("image/jpeg");
            this.post_img(dataURL);
        },
        showLoading() { //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading() { //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        },
    }
}
</script>
<style scoped>
.agree {
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-right: 5px;
    margin-top: 3px;
}
</style>

