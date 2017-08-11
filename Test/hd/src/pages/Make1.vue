<template>
    <div class="make1">
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
        <div style="height:44px;"></div>
        <div class="content mui-content">
            <div class="bg_img">
                <div class="img rel">
                    <div id="uploadBox">
                        <a id="upload" @click="upLoad">
                            <button type="button" class="mui-btn mui-btn-outlined upload_btn">
                                上传图片
                            </button>
                            <input id="file" type="file" accept="image/*" multiple/>
                        </a>
                        <p class="font_14">建议上传1M以上 清晰度高的图片</p>
                    </div>
                    <div id="photo"></div>
                </div>
            </div>
            <div class="text_box">
                <div class="text" @click="input">
                    <p class="txt1 font_14">点击输入文字</p>
                    <div class="text_1">
                        <input type="text" maxlength="8" placeholder="打字要满八个字，很长的字" style="border:none;font-size:14px;" v-model="text">
                    </div>
                </div>
            </div>
            <div class="choice_box" style="padding:16px 16px;">
                <div class="flex_m" style="justify-content: space-between;">
                    <div class="w_30 item_b color-1" @click="choiceTheme(theme1)">
                        交友派
                    </div>
                    <div class="w_30 item_b color-2">
                        宠物征婚
                    </div>
                    <div class="w_30 item_b color-3">
                        爱豆粉
                    </div>
                </div>
                <div class="flex_m" style="justify-content: space-between;margin-top:10px;">
                    <div class="w_30 color-4 item_b">
                        晒娃魔
                    </div>
                    <div class="w_30 color-5 item_b">
                        秀恩爱
                    </div>
                    <div class="w_30 color-6 item_b">
                        自定义
                    </div>
                </div>
            </div>
            <div class="btn_box">
                <button type="button" class="mui-btn btn_blue" @click="nextStep">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '../components/Header'
export default {
    mixins: [require('../components/mixin/BodyBg')],
    data() {
        return {
            pageTitle: '上屏制作',
            bodyBg: 'bg_white',
            btnconfig: {
                isgoback: 1
            },
            _id: '',
            imgsrc: "",
            token: "",
            scroll_load_loading: false,
            scroll_load_end: false,
            url1: '//img.aimoge.com/FsUaurOIuKTQVXGzhewZ3zCWNVwr',
            url2: '',
            text: '',
            theme1: 'src/static/image/1.jpg',

        }
    },
    components: {
        HeaderBar
    },
    mounted() {
        this.setInfo();
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
                    // _util.showErrorTip('图片制作完成！');
                    that.imgsrc = respond.name;
                    that.url('./submit');
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
            var htmlstyle = "<style>body{padding:0;margin:0;}.msg{color:#FFF;width:100%;height:30px;text-align:center;font-size:14px;line-height:30px;position:fixed;top: -30px;z-index:9999;}" +
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
                    that.url2 = dataURL;
                }
            });
            if (localStorage.img_src) {
                localStorage.img_src = '';
            } else {
                window.localStorage.setItem('img_src', '');
            }
        },
        getBase64(url1, url2, content) {
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
        choiceTheme(str) {
            this.url1 = str;
            $(".bg_img").css({ 'background-image': 'url(' + str + ')' });
        },
        nextStep() {
            if (!this.url1) {
                this.msgAlert("warning", "请选择一类主题！");
                return false;
            }
            if (!this.text) {
                this.msgAlert("warning", "请输入您想要说的话！");
                return false;
            }
            if (!this.url2) {
                this.msgAlert("warning", "请您上传一张图片！");
                return false;
            }
            this.getBase64(this.url1, this.url2, this.text);
            localStorage.img_src = this.imgsrc;
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
.gege-header {
    background: #4285f4;
}

.bg_img {
    width: 100%;
    height: 40vh;
    padding: 16px 35px;
}

.img {
    width: 100%;
    border: 1px dashed #b2b2b2;
    height: 100%;
    background: #fff;
}

.img a input[type=file] {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border: 0;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    border: solid 1px #ddd;
    opacity: 0;
}

.text_box {
    padding: 8px 16px;
    height: 60px;
    padding-top: 2px;
}

.text_box>div {
    width: 100%;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
}

.item_b {
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    line-height: 60px;
    text-align: center;
    height: 60px;
    /* margin-right: 20px; */
}

.btn_box {
    padding: 16px 35px;
}

.white {
    background: #fff;
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

.color-1 {
    color: #4285f4;
    border-color: #4285f4;
}

.color-2 {
    color: #e84a5f;
    border-color: #4285f4;
}

.color-3 {
    color: #f09561;
    border-color: #f09561;
}

.color-4 {
    color: #a3c03f;
    border-color: #a3c03f;
}

.color-5 {
    color: #ee847f;
    border-color: #ee847f;
}

.color-6 {
    color: #b196e1;
    border-color: #b196e1;
}

.flex_m {
    display: flex;
}

.w_30 {
    width: 30%;
}
</style>

