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
        <HeaderBar :title="pageTitle" :btnconfig="btnconfig" @callback="goback"></HeaderBar>
        <div style="height:44px;"></div>
        <div class="content mui-content">
            <div class="bg_img" style="background-size: 100% 100%;">
                <div class="img rel">
                    <div id="upload_box">
                        <a id="upload" @click="upLoad">
                            <button type="button" class="mui-btn mui-btn-outlined upload_btn">
                                上传图片
                            </button>
                            <input id="file" type="file" accept="image/*" multiple/>
                        </a>
                        <p class="font_14">建议上传1M以上 清晰度高的图片</p>
                    </div>
                    <div id="photo" @click="reelect"></div>
                </div>
            </div>
            <div class="text_box">
                <div class="text flex flex-pack-center flex-align-center" @click="input">
                    <p class="txt1 font_14">点击输入文字</p>
                    <div class="text_1">
                        <input type="text" maxlength="20" placeholder="打字要满八个字，很长的字" style="border:none;font-size:14px;" v-model="text" @input="checkText">
                    </div>
                </div>
            </div>
            <div class="choice_box" style="padding:16px 16px;">
                <div class="flex flex-pack-justify">
                    <div class="w_30 item_b color-1" @click="choiceTheme(theme1,$event,'#4285f4')">
                        交友派
                    </div>
                    <div class="w_30 item_b color-2" @click="choiceTheme(theme2,$event,'#e84a5f')">
                        宠物征婚
                    </div>
                    <div class="w_30 item_b color-3" @click="choiceTheme(theme3,$event,'#f09561')">
                        爱豆粉
                    </div>
                </div>
                <div class="flex flex-pack-justify" style="margin-top:10px;">
                    <div class="w_30 color-4 item_b" @click="choiceTheme(theme4,$event,'#a3c03f')">
                        晒娃魔
                    </div>
                    <div class="w_30 color-5 item_b" @click="choiceTheme(theme5,$event,'#ee7e79')">
                        秀恩爱
                    </div>
                    <div class="w_30 color-6 item_b" @click="userDefined($event)">
                        自定义
                    </div>
                </div>
            </div>
            <div class="btn_box">
                <button type="button" class="mui-btn btn_blue" @click="nextStep">下一步</button>
            </div>
        </div>
        <div id="hint" class="sysLoading1 fixed">
            <div class="hint_info">
                <img src="//img.aimoge.com/FsNN9KaeHuuk90DQlqyLtNxOPfdd" style="width:25%">
                <div>图片制作中...</div>
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
                isgoback: 0,
                isback: 1
            },
            _id: '',
            imgsrc: "",
            token: "",
            scroll_load_loading: false,
            scroll_load_end: false,
            url1: '',
            url2: '',
            text: '',
            theme1: './static/interaction/image/1.png',
            theme2: './static/interaction/image/2.png',
            theme3: './static/interaction/image/3.png',
            theme4: './static/interaction/image/4.png',
            theme5: './static/interaction/image/5.png',
            theme6: './static/interaction/image/6.png',
            category: '',
            flag: true,
            color: '',
        }
    },
    components: {
        HeaderBar
    },
    beforeRouteEnter: (to, from, next) => {
        $('#sysLoading').hide();
        next();
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
            formdata.append("x:source", "friend pet fans baby love");
            $('#sysLoading').show();
            $.ajax({
                url: location.protocol == "http:" ? 'http://upload.qiniu.com' : 'https://up.qbox.me',
                type: "POST",
                data: formdata,
                contentType: false,
                dataType: 'json',
                processData: false,
                success: function(respond) {
                    $('#sysLoading').hide();
                    that.imgsrc = window.img.imgsrc = respond.name;
                    that.url('./submit');
                    // console.log(that.imgsrc.substring(0, 28));
                },
                error: function(err) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                    that.resetData();
                }
            }).done(function(respond) {
                that.imgsrc = respond.name;
            });
        },
        upLoad() {
            $(".htmleaf-container").fadeIn(300);
            $("#photo").show();
            $('#upload_box').hide();
        },
        cancle() {//取消上传图
            $(".htmleaf-container").fadeOut(300);
            $('#photo').css({ 'background': 'none' })
            $("#photo").hide();
            $('#upload_box').show();
        },
        finish() {//完成上传图片
            $("#photo").css({
                'background-color': 'none',
                'background-size': '100%'
            });
            $("#error").hide();
            $(".htmleaf-container").hide();
            $('#upload_box').hide();
        },
        reelect() {//重新选择作品
            $("#file").click();
            $(".htmleaf-container").fadeIn(300);
            $("#photo").show();
        },
        input() {//点击输入文字
            $(".txt1").hide();
            $(".text_1").show();
        },
        setInfo() {//设置信息
            let that = this;
            //获取token值
            that.showLoading();
            axios.get(window.config.API + '/upload/token')
                .then(function(response) {
                    if (response.data.status == 0) {
                        that.hideLoading();
                        that.token = response.data.data.image_token;
                    } else {
                        if (response.data.msg) _util.showErrorTip(response.data.msg);
                    }
                })
                .catch(function(err) {
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
                loadStart: function() {
                    console.log("照片读取中");
                },
                loadComplete: function() {
                    console.log("照片读取完成");
                },
                clipFinish: function(dataURL) {
                    that.url2 = dataURL;
                }
            });
            window.img = {};
            $('#upload').click(() => {
                if (this.flag) {
                    $(".htmleaf-container").fadeIn(300);
                    $("#photoBox").show();
                }
            })
        },
        getBase64(url1, url2, content) {
            let Img1 = new Image(),
                Img2 = new Image(),
                dataURL = '';
            Img1.src = url1;
            Img2.src = url2;
            Img1.crossOrigin = "anonymous";
            Img2.crossOrigin = "anonymous";
            let canvas = document.createElement("canvas").getContext("2d"),
                width = Img1.width,
                height = Img1.height;
            // if (_util.isWeixin && _util.isIOS) {
            //     this.showInfo();
            // }
            let that = this;
            Img2.onload = function(event) {
                try {
                    canvas.width = 928;
                    canvas.height = 864;
                    let w = (928 - 623) / 2;
                    let h = 716;
                    canvas.drawImage(Img1, 0, 0, 928, 864);
                    canvas.drawImage(Img2, w, 44, 623, 623);
                    dataURL = canvas.canvas.toDataURL("image/png");
                    that.post_img(dataURL);
                } catch (e) {
                    alert(e)
                }
            }
            // if (_util.isWeixin && _util.isIOS) {
            //     that.hideInfo();
            // }
            // ctx.font = "36px microsoft yahei";
            // ctx.fillStyle = this.color;
            // ctx.fillText(content, w, h);            
        },
        choiceTheme(str, ev, color) {
            this.url1 = str;
            let el = ev.currentTarget;
            this.category = $(el).html().trim();
            $(".bg_img").css({ 'background-image': 'url(' + str + ')' });
            $('.img').show();
            this.color = color;
        },
        nextStep() {
            if (!this.text) {
                _util.showErrorTip("请输入您想要说的话！");
                return false;
            }
            if (!this.url2) {
                _util.showErrorTip("请您上传一张图片！");
                return false;
            }
            if (this.url1) {
                this.getBase64(this.url1, this.url2);
            } else {
                this.post_img(this.url2);
            }
            window.img.content = this.text;
            window.img.category = this.category;
        },
        checkText() {//校验文字
            if (this.text.length == 20) {
                _util.showErrorTip('最多输入二十个字！');
            }
        },
        resetData() {
            this.url1 = '';
            this.text = '';
            this.url2 = '';
            this.category = '';
        },
        userDefined(ev) {
            let el = ev.currentTarget;
            this.category = $(el).html().trim()
            $('.img').hide();
            $(".bg_img").css({ 'background-image': 'url(' + this.url2 + ')' });
            this.url1 = '';
        },
        compress(img) {
            var initSize = img.src.length;
            var width = img.width;
            var height = img.height;

            //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
            var ratio;
            if ((ratio = width * height / 4000000) > 1) {
                ratio = Math.sqrt(ratio);
                width /= ratio;
                height /= ratio;
            } else {
                ratio = 1;
            }
            let canvas = document.createElement("canvas"),
                ctx = canvas.getContext("2d"),
                tCanvas = document.createElement("canvas"),
                tctx = canvas.getContext("2d");
            canvas.width = width;
            canvas.height = height;

            //        铺底色
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            //如果图片像素大于100万则使用瓦片绘制
            var count;
            if ((count = width * height / 1000000) > 1) {
                count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片

                //            计算每块瓦片的宽和高
                var nw = ~~(width / count);
                var nh = ~~(height / count);

                tCanvas.width = nw;
                tCanvas.height = nh;

                for (var i = 0; i < count; i++) {
                    for (var j = 0; j < count; j++) {
                        tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);

                        ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                    }
                }
            } else {
                ctx.drawImage(img, 0, 0, width, height);
            }

            //进行最小压缩
            var ndata = canvas.toDataURL('image/jpeg', 0.6);

            console.log('压缩前：' + initSize);
            console.log('压缩后：' + ndata.length);
            console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");

            tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

            return ndata;

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
        goback() {
            this.url('./', null, 1);
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
    padding: 16px 58px;
}

.img {
    width: 100%;
    border: 1px dashed #b2b2b2;
    height: 100%;
    background: #fff;
}

.bg_img a input[type=file] {
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
    z-index: 111;
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
    /* border: 1px solid #b2b2b2; */
    border-radius: 5px;
    line-height: 60px;
    text-align: center;
    height: 60px;
    font-weight: 600;
}

#photoBox {
    display: none;
}

.btn_box {
    padding: 16px 35px;
}

.white {
    background: #fff;
}

.upload_btn {
    border: 1px solid #4285f4;
    color: #4285f4;
    width: 100%;
    font-size: 14px;
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
    background: url('//img.aimoge.com/FtRLlVNKgiD2aEgS78a-YIvCYGke') center center;
    background-size: 100% 100%;
}

.color-2 {
    color: #e84a5f;
    border-color: #e84a5f;
    background: url('//img.aimoge.com/Fj0nzAz8u-91kgBeyihf29Ei0UqE') center center;
    background-size: 100% 100%;
}

.color-3 {
    color: #f09561;
    border-color: #f09561;
    background: url('//img.aimoge.com/Fm4vZMtxjCJ49_zdtm9pqdg4dNJk') center center;
    background-size: 100% 100%;
}

.color-4 {
    color: #a3c03f;
    border-color: #a3c03f;
    background: url('//img.aimoge.com/FsbHqihnc41gKFBSa4SdYNx8OWzy') center center;
    background-size: 100% 100%;
}

.color-5 {
    color: #ee847f;
    border-color: #ee847f;
    background: url('//img.aimoge.com/Fljlka7gzAiHi5hknBcT0nqpnm1w') center center;
    background-size: 100% 100%;
}

.color-6 {
    color: #b196e1;
    border-color: #b196e1;
    background: url('//img.aimoge.com/FhS5yI9fwBc9beqO6ZnmqvmqQ__f') center center;
    background-size: 100% 100%;
}

.w_30 {
    width: 30%;
}

#photo {
    display: none;
    position: absolute;
}

#upload_box {
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 30%;
}

#upload_box a {
    width: 50%;
    display: block;
    margin: 0 auto;
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

