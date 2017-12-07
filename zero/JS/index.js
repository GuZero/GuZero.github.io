define(['zepto','vue','dom','touch','qiniu','exif','common','swiper','dataServices','vueRouter'],function(zepto,Vue,dom,touch,qiniu,exif,common,Swiper,dataServices,VueRouter){
    Vue.use(VueRouter);
    var winHeight=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
    var vm = new Vue({
        el:'#wallIndex',
        data:{
            loading:false,
            menu:[{name:'送祝福',orderType:"1",select:true,subList:[]},
                {name:"想表白",orderType:"2",select:false,subList:[]},
                {name:"爱明星",orderType:"5",select:false,subList:[]},
                {name:"上弹幕",orderType:"4",select:false}],
            selectStar: true,
            showBarrage: false,
            showUploadBtn:true,
            showStarImg:false,
            selectImg:"",
            uploadImg:"",
            imgData:{
                uploadImgData:"",
                selectImgData:"",
                uploadStarImgData:"",//选择的明星图片
                cutImgData:"",//生成的切图
                bigImgData:"",//生成的大图
                smallImgData:"",//生成的小图
                imgWidth:"",//上传的图片宽度
                imgHeight:"",//上传的图片高度
                orderType:"",//订单类型
                templateType:"",//模板类型
                smallImgUrl:"",//小图路径
                bigImgUrl:"",//大图路径
                adText:"点击输入你要说的话",//文字信息

            },
            uploadConfig:{
                domainUrl:"",upToken:""
            },
            uploadTimes:0,
            submitAble:true
        },
        methods:{
            getPath:function(){
                switch (location.hostname) {
                    //TODO 第一套测试环境
                    case "fengchaobox.sit.sf-express.com":
                        return  "http://fengchaobox.sit.sf-express.com/dropbox";
                        break;
                    //TODO 第二套测试环境
                    case "internetweb-sit2.fcbox.com":
                        return "http://internetweb-sit2.fcbox.com/dropbox";
                        break;
                    //TODO 第三套测试环境
                    case "testedms.fcbox.com":
                        return "http://testedms.fcbox.com";
                        break;
                    //TODO 生产环境
                    case "edms.fcbox.com":
                        return "http://edms.fcbox.com";
                        break;
                    //TODO 默认本机
                    default :
                        return  'http://'+location.hostname+':'+location.port
                }
            },

            /**
             * 将上传的图片进行压缩，减少页面大小
             * 旋转操作也放在此处
             */
            filterImage: function(image, width, height, deg) {
                function rotateImg(img, direction,canvas){
                    var min_step = 0;
                    var max_step = 3;
                    if (img == null)return;

                    var height = img.height;
                    var width = img.width;
                    //var step = img.getAttribute('step');
                    var step = 2;
                    if (step == null) {
                        step = min_step;
                    }
                    if (direction == 'right') {
                        step++;
                        //旋转到原位置，即超过最大值
                        step > max_step && (step = min_step);
                    } else {
                        step--;
                        step < min_step && (step = max_step);
                    }
                    //旋转角度以弧度值为参数
                    var degree = step * 90 * Math.PI / 180;
                    var ctx = canvas.getContext('2d');
                    switch (step) {
                        case 0:
                            canvas.width = width;
                            canvas.height = height;
                            ctx.drawImage(img, 0, 0);
                            break;
                        case 1:
                            canvas.width = height;
                            canvas.height = width;
                            ctx.rotate(degree);
                            ctx.drawImage(img, 0, -height);
                            break;
                        case 2:
                            canvas.width = width;
                            canvas.height = height;
                            ctx.rotate(degree);
                            ctx.drawImage(img, -width, -height);
                            break;
                        case 3:
                            canvas.width = height;
                            canvas.height = width;
                            ctx.rotate(degree);
                            ctx.drawImage(img, -width, 0);
                            break;
                    }
                    return ctx;
                }
                function rotatePic(img){
                    var lastCanvas = document.createElement('canvas');
                    var lastCtx = lastCanvas.getContext('2d');
                    rotateImg(img,'left',lastCanvas);
                    lastCtx.save();
                    lastCtx.restore();//保存状态

                    return lastCanvas;
                }
                var canvas = document.createElement('canvas');
                var moveLeft;
                var u = navigator.userAgent;
                if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && !deg){
                    if(width > height){
                        deg =1;
                    }else{
                        deg=5;
                    }
                }

                if(deg == 6 || deg ==8 || deg == 3 || deg == 5 || deg == 1){
                    var max = (width > height) ? width : height;
                    var min = (width > height) ? height : width;
                    moveLeft = (max-min)/2;
                    canvas.width = max;
                    canvas.height = max;
                }else{
                    canvas.width = width;
                    canvas.height = height;
                }
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';//绘制背景色，白色
                ctx.fillRect(0,0,canvas.width,canvas.height);

                if(deg) {
                    //ctx.rotate(deg * Math.PI / 180);
                    switch(deg){
                        case 6:
                            ctx.drawImage(image, 0, moveLeft, width, height);
                            var lastCanvas = rotatePic(canvas);
                            return lastCanvas.toDataURL('image/jpeg', 0.8);
                            break;
                        case 1:
                            ctx.drawImage(image, 0, 0, width, height);
                            return canvas.toDataURL('image/jpeg', 0.8);
                            break;
                        case 8:
                            ctx.drawImage(image, 0, moveLeft, width, height);
                            var lastCanvas = rotatePic(canvas);
                            var lastCanvas2 = rotatePic(lastCanvas);
                            var lastCanvas3 = rotatePic(lastCanvas2);
                            return lastCanvas3.toDataURL('image/jpeg', 0.8);
                            break;
                        case 3:
                            ctx.drawImage(image, moveLeft, 0, width, height);
                            var lastCanvas = rotatePic(canvas);
                            var lastCanvas2 = rotatePic(lastCanvas);
                            return lastCanvas2.toDataURL('image/jpeg', 0.8);
                            break;
                        case 5:
                            ctx.drawImage(image, moveLeft, 0, width, height);
                            return canvas.toDataURL('image/jpeg', 0.8);
                            break;
                        default:
                            ctx.drawImage(image, 0, 0, width, height);
                            return canvas.toDataURL('image/jpeg', 0.8);
                            break;
                    }
                }else {
                    //android 系统
                    ctx.drawImage(image, 0, 0, width, height);
                    return canvas.toDataURL('image/jpeg', 0.9);
                }
            },

            /**
             * 初始化爱情、祝福类、商业模板的拖拽,放缩事件
             * 开源库touch.js
             */
            initTouch: function(touchPad, img) {
                var offx = 0, offy = 0;
                var scale = 1;
                var currScale;

                function formatTransform(offx, offy, scale) {
                    var translate = 'translate3d(' + (offx + 'px,') + (offy + 'px,') + '0)';
                    scale = 'scale(' + scale + ')';
                    //var rotate = 'rotate('+deg+'deg)';
                    return translate + ' ' + scale;
                }

                touch.on(touchPad, 'touchstart', function (ev) {
                    ev.preventDefault();
                });

                touch.on(touchPad, 'drag', function(ev) {
                    var currOffx = offx + ev.x;
                    var currOffy = offy + ev.y;
                    img.style.webkitTransform = formatTransform(currOffx, currOffy, scale);
                });

                touch.on(touchPad, 'dragend', function(ev) {
                    offx += ev.x;
                    offy += ev.y;
                });

                touch.on(touchPad, 'pinch', function(ev) {
                    if(typeof ev.scale != 'undefined') {
                        /*if(currScale>1.5||currScale<0.2){
                         return;
                         }*/
                        currScale = ev.scale - 1 + scale;
                        img.style.webkitTransform = formatTransform(offx, offy, currScale);
                    }
                });

                touch.on(touchPad, 'pinchend', function() {
                    /*if(currScale>1.5||currScale<0.8){
                     return;
                     }*/
                    scale = currScale;
                });
            },

            /**
             * 计算出img在frame中的可见部分相对于img和frame的坐标及尺寸，用于爱情、祝福类图片切图
             */
            intersect: function($frame, $img) {

                var imgX = 0, imgY = 0, imgW = 0, imgH = 0;
                var frmX = 0, frmY = 0;
                var imgOffset, frmOffset;
                var left, right, top, bottom;

                imgOffset = $img.offset();//图片的偏移对象
                frmOffset = $frame.offset();//画框的偏移对象
                left = imgOffset.left - frmOffset.left;//图片到边框左边的距离 去除1px的边框
                right = left + imgOffset.width;//画框模型是border-box，所以图片宽度需要减去边框的宽度
                top = imgOffset.top - frmOffset.top;//图片到边框上边的距离
                bottom = top + imgOffset.height;

                //图片在画框内
                if(!(right <= 0 || left >= frmOffset.width || bottom <= 0 || top >= frmOffset.height)) {
                    if(left < 0) {
                        imgX = -left;
                        frmX = 0;
                        imgW = (right < frmOffset.width) ? right : frmOffset.width;
                    } else {
                        imgX = 0;
                        frmX = left;
                        imgW = (right < frmOffset.width ? right : frmOffset.width) - left;
                    }

                    if(top < 0) {
                        imgY = -top;
                        frmY = 0;
                        imgH = (bottom < frmOffset.height) ? bottom : frmOffset.height;
                    } else {
                        imgY = 0;
                        frmY = top;
                        imgH = ((bottom < frmOffset.height) ? bottom : frmOffset.height) - top;
                    }

                }
                var ratio;
                if(vm.imgData.imgWidth>=vm.imgData.imgHeight){
                    ratio= vm.imgData.imgWidth / $img.width();//图片真实宽度 与 图片CSS宽度
                }else{
                    ratio = vm.imgData.imgHeight / $img.height();//图片真实宽度 与 图片CSS宽度
                }

                return {
                    frame: {x: frmX, y: frmY, w: (imgW), h: (imgH)},
                    image: {x: imgX * ratio, y: imgY * ratio, w: imgW * ratio, h: imgH* ratio}
                };
            },

            /**
             * base64编码
             * @param {Object} str
             */
            base64encode:function(str){
                var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var out, i, len;
                var c1, c2, c3;
                len = str.length;
                i = 0;
                out = "";
                while (i < len) {
                    c1 = str.charCodeAt(i++) & 0xff;
                    if (i == len) {
                        out += base64EncodeChars.charAt(c1 >> 2);
                        out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                        out += "==";
                        break;
                    }
                    c2 = str.charCodeAt(i++);
                    if (i == len) {
                        out += base64EncodeChars.charAt(c1 >> 2);
                        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                        out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                        out += "=";
                        break;
                    }
                    c3 = str.charCodeAt(i++);
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                    out += base64EncodeChars.charAt(c3 & 0x3F);
                }
                return out;
            },

            //生成uuid
            uuid:function() {
                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 36; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }
                s[14] = "4";
                s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);

                s[8] = s[13] = s[18] = s[23] = "-";

                var uuid = s.join("");
                return uuid;
            },

            //根据base64生成MD5值
            getMd5:function(type,base64){
                var bytes=window.atob(base64.split(',')[1]);        //去掉url的头，并转换为byte

                //处理异常,将ascii码小于0的转换为大于0
                var ab = new ArrayBuffer(bytes.length);
                var ia = new Uint8Array(ab);
                for (var j = 0; j < bytes.length; j++) {
                    ia[j] = bytes.charCodeAt(j);
                }

                var blob = new Blob( [ab] , {type : 'image/png'});
                var read = new FileReader();
                read.readAsBinaryString(blob);
                read.onload = function(evt){
                    if(evt.target.readyState == FileReader.DONE){
                        //二进制数据结果
                        var imgFlag = evt.target.result;
                        //进行md5加密
                        var spark = new SparkMD5();
                        spark.appendBinary(imgFlag);
                        var md5 = spark.end();
                        if(type=='small'){
                            localStorage.setItem('smallImgMd5',md5);
                        }
                        if(type=='big'){
                            localStorage.setItem('bigImgMd5',md5);
                        }
                    }
                }
            },

            //计算文件流大小
            fileSize:function(str){
                var fileSize;
                if(str.indexOf('=')>0){
                    var indexOf=str.indexOf('=');
                    str=str.substring(0,indexOf);//把末尾的’=‘号去掉
                }

                fileSize=parseInt(str.length-(str.length/8)*2);
                return fileSize;
            },

            //图片上传耗时统计接口
            timeCount:function(startTime,endTime,url,countTime){
                var machine = vm.getPath();
                $.ajax({
                    type:'post',
                    url:machine+'/hibox/weixin/advertisement/uploadCostTime',
                    data:"startTm="+startTime+"&endTm="+endTime+"&url="+url+"&consumeTime="+countTime+"&random="+new Date().getTime(),
                    success:function(resp){

                    }
                })
            },

            //上传图片大小限制
            fileSizeLimit:function(file){
                var size =(~~(10 * file.size / 1024 / 1024)) / 10 ;
                if(size>5){
                    common.showTips("最大支持上传5M,您上传的文件大小超过限制!");
                    vm.loading = false;
                    return false;
                }

                var u = navigator.userAgent;
                if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
                    var ver = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                    ver = parseInt(ver[1], 10);
                    if(ver<9){
                        common.showTips("需要IOS9及以上才可上传");
                        vm.loading = false;
                        return false;
                    }
                    if(size>3){
                        common.showTips("最大支持上传3M,您上传的文件大小超过限制!");
                        vm.loading = false;
                        return false;
                    }
                }
                return true;
            },

            getListLength:function(str){
                var targetStr = str;
                if(str.length>0){
                    return targetStr.replace(/[\u0391-\uFFE5]/g,"aa").length;
                }else{
                    return 0;
                }
            },

            //上传本地图片
            fileUploadImg:function(){
                common.showLoading("上传中，请稍候...");
                var that = event.currentTarget;
                var file = that.files[0];
                if(!file) {
                    return;
                }
                if(!vm.fileSizeLimit(file)){
                    common.hideLoading();
                    return;
                }

                //获取旋转角度
                var Orientation = null;
                //获取照片方向角属性，用户旋转控制
                EXIF.getData(file, function(){
                    EXIF.getAllTags(this);
                    Orientation = EXIF.getTag(this, 'Orientation');
                    var reader = new FileReader();
                    reader.readAsDataURL(file);			// 将文件以Data URL形式进行读入页面
                    reader.onload = function() {
                        var base64 = this.result;
                        var img  = new Image();

                        img.onload = function() {
                            var src = vm.filterImage(img, this.width, this.height,Orientation);//将图片进行压缩，减少页面大小
                            vm.imgData.imgHeight = this.height;
                            vm.imgData.imgWidth = this.width;
                            var realImg = new Image();
                            realImg.onload = function() {
                                vm.imgData.uploadImgData = realImg.src;
                                common.hideLoading();
                                vm.showUploadBtn = false;
                                vm.initDrag();
                            };
                            realImg.src = src;
                        };
                        img.src = base64;
                    };
                });

                //解决onchange事件不会二次触发的问题
                var clone = that.cloneNode(true);
                clone.onchange = arguments.callee; //克隆不会复制动态绑定事件
                clone.value = '';
                that.parentNode.replaceChild(clone, that);

            },

            //初始化拖拽
            initDrag:function(){
                var timeout = setTimeout(function(){
                    var touchContainer = document.getElementById('frame');
                    var uploadImg = document.getElementById('uploadImg');
                    //初始化图片拖拽操作
                    vm.initTouch(touchContainer, uploadImg);
                    clearTimeout(timeout);
                },500);
            },

            //生成大图
            cutPic:function(){
                var canvas0 = document.createElement('canvas');

                canvas0.width = 1080;
                canvas0.height = 1920;

                var ctx = canvas0.getContext('2d');
                ctx.fillStyle = '#ffffff';//绘制背景色
                ctx.fillRect(0,0,canvas0.width,canvas0.height);

                var uploadContainer = "";
                var uploadImg ="";
                if(vm.selectStar){
                    uploadContainer = document.getElementById('starContainer');
                    uploadImg = document.getElementById('starImg');
                }else{
                    uploadContainer = document.getElementById('uploadContainer');
                    uploadImg = document.getElementById('uploadImg');
                }

                var cutParam = vm.intersect($(uploadContainer), $(uploadImg));

                var f = cutParam.frame;
                var i = cutParam.image;

                var cutHeight = $(uploadContainer).height();
                var proportion = (canvas0.height)/cutHeight;

                var cutImg =  new Image();
                if(vm.selectStar){
                    cutImg.crossOrigin = "Anonymous";
                }
                cutImg.onload = function(){
                    ctx.drawImage(cutImg,
                        i.x, i.y, i.w, i.h,
                        f.x*proportion, f.y*proportion, f.w*proportion+2, f.h*proportion);

                    var base64 = canvas0.toDataURL('image/jpeg',0.7);
                    vm.imgData.cutImgData = base64;
                    vm.generateBigImg();
                }
                if(vm.selectStar){
                    cutImg.src = vm.imgData.uploadStarImgData;
                }else{
                    cutImg.src = vm.imgData.uploadImgData;
                }
            },

            //给大图添加水印
            generateBigImg:function(){
                var bigCanvas = document.createElement('canvas'),
                    bigCtx = bigCanvas.getContext('2d'),
                    bigImg = new Image;
                bigCanvas.width = 1080;
                bigCanvas.height = 1920;
                bigCtx.fillStyle = '#ffffff';//绘制背景色
                bigCtx.fillRect(0,0,bigCanvas.width,bigCanvas.height);
                bigImg.onload=function(){
                    bigCtx.drawImage(bigImg,
                        0, 0, 1080, 1920,
                        0, 0, 1080, 1920);
                    //ios  两张图片合成  必须添加延时操作
                    var bigTimeout =   setTimeout(function(){
                        var watermark = new Image();

                        watermark.crossOrigin = "Anonymous";
                        watermark.onload = function(){
                            bigCtx.drawImage(watermark,
                                0, 0, 1080, 1920,
                                0, 0, 1080, 1920);
                            var bigBase64 = bigCanvas.toDataURL('image/jpeg',0.7);

                            //存储大图base64  用于裁剪出小图
                            vm.imgData.bigImgData = bigBase64;
                            //将大图传递到七牛
                            vm.uploadQiniu(vm.imgData.bigImgData,'big');
                            //裁剪小图
                            vm.generateSmallImg();
                        };
                        watermark.src = vm.imgData.selectImgData;
                        clearTimeout(bigTimeout);
                    },500);

                };
                bigImg.src = vm.imgData.cutImgData;
            },

            //根据大图裁剪出小图
            generateSmallImg:function(){
                var smallCanvas = document.createElement('canvas'),
                    smallCtx = smallCanvas.getContext('2d'),
                    smallImg = new Image;

                smallCanvas.width = 900;
                smallCanvas.height = 1440;
                smallCtx.fillStyle = '#ffffff';//绘制背景色
                smallCtx.fillRect(0,0,smallCanvas.width,smallCanvas.height);

                smallImg.onload = function(){
                    //上下裁剪96像素
                    smallCtx.drawImage(smallImg,
                        0, 96, 1080, 1728,
                        0, 0, 900, 1440);
                    var smallBase64 = smallCanvas.toDataURL('image/jpeg',0.7);
                    vm.imgData.smallImgData = smallBase64;
                    vm.uploadQiniu(vm.imgData.smallImgData,'small');
                }
                smallImg.src = vm.imgData.bigImgData;
            },

            //上传七牛
            uploadQiniu:function(target,type){
                /*把头部的data:image/png;base64,去掉.*/
                var pic = target.split(',')[1];

                var md5 = vm.getMd5(type,target);
                var key = vm.uuid();
                var picurl = vm.uploadConfig.domainUrl;
                key = vm.base64encode(key);		  //设置图片的文件名
                var filesize = vm.fileSize(pic);  //当前文件大小
                var url = "http://up.qiniu.com/putb64/"+filesize+"/key/"+key;
                var startTime = Date.parse(new Date());
                var xhr = new XMLHttpRequest();
                xhr.onload=function(){
                    if (xhr.readyState==4){
                        var endTime = Date.parse(new Date());
                        var countTime =endTime-startTime;
                        vm.timeCount(startTime,endTime,url,countTime);
                        vm.uploadTimes = vm.uploadTimes + 1;
                        //获取返回的hash值、文件名
                        var data = xhr.responseText;
                        data = $.parseJSON(data);
                        if(data.key){
                            //获取文件名称 拼接图片存储路径
                            picurl = picurl+"/"+data.key;
                            if(type=="small"){
                                vm.imgData.smallImgUrl = picurl;
                                if(vm.uploadTimes == 2 ){
                                    vm.uploadTimes =0;
                                    vm.gotoPreviewPage();
                                }
                            }
                            if(type=="big"){
                                vm.imgData.bigImgUrl = picurl;
                                if(vm.uploadTimes == 2 ){
                                    vm.uploadTimes =0;
                                    vm.gotoPreviewPage();
                                }
                            }
                        }else{
                                common.hideLoading();
                                vm.uploadTimes =0;
                                common.showTips("图片上传失败，请重新上传！");
                        }
                    }

                }
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
                xhr.setRequestHeader("Authorization", "UpToken "+vm.uploadConfig.upToken);
                xhr.send(pic);
            },

            //缓存设置
            setLocalStorageParam:function () {
                //TODO 初始设置start
                localStorage.setItem('orderType',vm.form.orderType);// 广告的订单类型 1=祝福类，2=爱情类，3=商业类，4=弹幕
                localStorage.setItem('templateType',vm.form.templateType);//
                localStorage.setItem('adText',vm.form.adText);//测试文字
                localStorage.setItem('bigImgUrl',vm.form.bigImgUrl);//大图
                localStorage.setItem('smallImgUrl',vm.form.smallImgUrl);//小图
            },

            //跳转历史订单页面
            gotoHistoryList:function(){
                window.location.href = "historyView.html?v="+(new Date().getTime());
            },

            //跳转下单页面
            gotoNextPage:function(){
                var machine = vm.getPath();
                window.location.href = machine+"/hibox/weixinpay/wall_ordersubmit.html?v="+(new Date().getTime());
            },

            getUseData:function(baseData){
                for(var i=0;i<baseData.length;i++){
                    var obj = {
                        name:baseData[i].scatterTemplateName,
                        templateId:baseData[i].templateId,
                        thumbnailPath:baseData[i].thumbnailPath,
                        artWorkPath:baseData[i].artWorkPath,
                    }
                    var scatterOrderType = parseInt(baseData[i].scatterOrderType);
                    switch(scatterOrderType){
                        case 1:
                            vm.menu[0].subList.push(obj);

                            break;
                        case 2:
                            vm.menu[1].subList.push(obj);

                            break;
                        case 5:
                            vm.menu[2].subList.push(obj);
                            break;
                    }
                }
            },

            //获取模板配置信息
            getAdConfig:function(){
                common.showLoading("加载中，请稍候...");
                var templateMd5 = localStorage.getItem("templateMd5");
                dataServices.get('mallbackend').getTempConfig({
                    data: {
                        tempMd5:templateMd5
                    }
                }).done(function (resp) {
                    if(resp.data.templateChange == true){
                        var resultList = resp.data.scatterTempDtos;
                        vm.getUseData(resultList);
                        localStorage.setItem("templateMd5",resp.data.templateMd5);
                        var dataObj = JSON.stringify(vm.menu);
                        localStorage.setItem("templateEntity",dataObj);
                    }else{
                        //读取缓存中模板配置信息，并转换为对象
                        vm.menu = JSON.parse(localStorage.getItem("templateEntity"));
                    }
                    vm.initSwiper();
                    //模板随机
                    var typeIndex = Math.floor(Math.random()*3);
                    vm.selectType(typeIndex);

                }).fail(function (resp) {

                }).always(function () {
                    common.hideLoading();
                });

            },

            //获取上传七牛配置信息
            get7niuConfig:function(){
                dataServices.get('mallbackend').getUploadToken({

                }).done(function (resp) {
                    if(resp.data){
                        vm.uploadConfig.domainUrl = resp.data.domainUrl;
                        vm.uploadConfig.upToken = resp.data.upToken;
                    }
                }).fail(function (resp) {

                }).always(function () {

                });
            },

            //初始换swiper滑动插件
            initSwiper:function(){
                var swiperTimeout = setTimeout(function(){
                    var swiper = new Swiper('.swiper-container', {
                        slidesPerView: 4.5,
                        spaceBetween: 10,
                        observer:true,//修改swiper自己或子元素时，自动初始化swiper
                        observeParents:true,//修改swiper的父元素时，自动初始化swiper
                        freeMode: true
                    });
                },100);
            },

            selectType:function(index){
                vm.showBarrage = false;
                for(var i in vm.menu){
                    vm.menu[i].select = false;
                }
                vm.menu[index].select = true;
                if(index < 3){
                    vm.imgData.selectImgData = vm.menu[index].subList[0].artWorkPath;
                    vm.imgData.templateType = vm.menu[index].subList[0].templateId;
                }
                vm.imgData.orderType = vm.menu[index].orderType;
                switch(index){
                    case 2:
                        vm.selectStar = true;
                        break;
                    case 3:
                        vm.showBarrage = true;
                        break;
                    default:
                        vm.selectStar = false;
                        vm.showBarrage = false;
                }
            },

            selectTemp:function(item){
                vm.imgData.selectImgData = item.artWorkPath;
                vm.imgData.templateType = item.templateId;
            },

            //确定
            submitFun:function(){
                if(vm.submitAble){
                    var orderType = parseInt(vm.imgData.orderType);
					localStorage.setItem('adText',"");
                    switch(orderType){
                        case 5:
                            if(vm.imgData.uploadStarImgData == ""){
                                common.showTips('请选择明星');
                                return false;
                            }
                            break;
                        case 4:
                            if(vm.imgData.adText == ""){
                                common.showTips('请输入文字');
                            }else{
                                localStorage.setItem('orderType',vm.imgData.orderType);
                                localStorage.setItem('adText',vm.imgData.adText);
								localStorage.setItem('templateType',"17");
                                var machine = vm.getPath();
                                //跳转柜机选择页面
                                window.location.href = machine+'/staticResource/wechat/activity/advertisement/pages/selectBox.html?v='+(new Date().getTime());
                            }
                            return false;
                            break;
                        default:
                            if(vm.imgData.uploadImgData == ""){
                                common.showTips('请上传图片');
                                return false;
                            };
                    }
                    common.showLoading("上传中，请稍候...");
                    //裁剪生成用于柜机展示的大小图
                    vm.cutPic();

                }
            },

            //跳转预览页
            gotoPreviewPage:function(){
                //TODO 初始设置start
                localStorage.setItem('orderType',vm.imgData.orderType);// 广告的订单类型 1=祝福类，2=爱情类，3=商业类，4=弹幕
                localStorage.setItem('templateType',vm.imgData.templateType);//
                localStorage.setItem('adText',vm.imgData.adText);//测试文字
                localStorage.setItem('bigImgUrl',vm.imgData.bigImgUrl);//大图
                localStorage.setItem('smallImgUrl',vm.imgData.smallImgUrl);//小图
                common.hideLoading();
                router.go('generatePicTemp');
            },

            initData:function(){
                vm.getAdConfig();
                vm.get7niuConfig();
            },

            //跳转明星图库列表
            chooseStar:function(){
                vm.showUploadBtn = false;
                router.go('starList');
            },

            //输入框获取焦点事件,清理默认的显示文字
            doFocus:function(){
                if(vm.imgData.adText == "点击输入你要说的话"){
                    vm.imgData.adText = "";
                }
            },
        },
        created:function(){
            this.$nextTick(function () {
                common.showLoading("加载中，请稍候...");
                vm.initData();
            });
        }
    });

    //创建明星列表模板
    var starListPageTemp = Vue.extend({
        template:"#starListPage",
        data:function(){
            return{
                respData:[],    //后端返回基数据
                selectDataList:[],  //模糊匹配过滤的数据列表
                baseData:[],    //列表基数据
                starList:[],    //展示列表数据
                letterList:[],  //字母过滤数据
                keyword:"",     //查询数据
                startAnchor:0,  //加载开始位置
                endAnchor:0,     //加载结束位置
                isShow:false,   //false 显示列表一  true 显示列表二
                top:0           //滚动区域高度
            }
        },

        created:function(){
            var that = this;
            this.$nextTick(function () {
                //查询明星数据
                that.queryStarAlbumInfo();
                $(".starList").css("height",winHeight);
                that.addScrollListener();
            });
        },
        methods:{
            //跳转相册列表
            showPicStore:function(param){
                sessionStorage.setItem("starId",param);
                router.go('picStoreTemp');
            },
            //跳转上巢主页面
            showMainPage:function(){
                router.go('/');
            },
            //判断滑动过程中 是否越界 如果越界 重新加载数据
            overFlow:function(currentScrollTop,flag){
                //上拉 true 下拉false
                if(flag){
                    if((currentScrollTop+30)>this.endAnchor){
                        this.renderList(currentScrollTop);
                    }
                }else{
                    if((currentScrollTop-15)<this.startAnchor){
                        this.renderList(currentScrollTop);
                    }
                }
            },

            //重新加载明星列表数据
            renderList:function(topValue){
                var preNum = 10,nextNum=20;
                var baseData = this.baseData;
                var arr=[];
                for(var i=0;i<baseData.length;i++){
                    if(topValue>=baseData[i].top&&topValue<=baseData[i+1].top){
                        var index = i+1;
                        preNum = (preNum>index) ? index : preNum;
                        nextNum = (nextNum>(baseData.length-index)) ?(baseData.length-index):nextNum;
                        arr = baseData.slice((index-preNum),(index+nextNum));
                        this.startAnchor = baseData[index-preNum+1].top;
                        this.endAnchor = baseData[index+nextNum-1].top;
                    }
                }
                this.starList = arr;
            },

            //定位滚动条位置
            scrollPosition:function(topValue){
                var width = document.body.scrollWidth;
                //rem 转px 滚动到相应位置
                $('.listContainer').scrollTop(topValue*width/10);
            },

            //按名称过滤明星列表
            searchStarList:function(value){
                var s = this.respData;
                if (value == "") return;
                var arr = [];
                var patt = new RegExp(value);
                for(var i = 0; i < s.length; i++){
                    var obj={};
                    if(patt.test(s[i].starName)){
                        obj.name=s[i].starName;
                        obj.picUrl = s[i].frontCoverPath;
                        obj.starId = s[i].starId;
                        arr.push(obj);
                    }
                }
                this.selectDataList = arr;
            },

            //侦听滚动条事件
            addScrollListener:function(){
                var count = 0, interval1, interval2,currentScrollTop,startScrollTop, that=this;
                $('.listContainer').scroll(function(){

                    currentScrollTop = $('.listContainer').scrollTop();
                    var width = document.body.scrollWidth;
                    var topValue = (currentScrollTop*10)/width;

                    //判断上滑true,下滑false
                    var flag = currentScrollTop>startScrollTop ? true: false;
                    that.overFlow(topValue,flag);

                    //判断是否滑动截止
                    clearInterval(interval1);
                    count++;
                    interval1=setInterval(function(){
                        var currentCount = count;
                        clearTimeout(interval2);

                        interval2 =  setTimeout(function(){
                            if(currentCount == count){
                                clearInterval(interval1);
                                clearTimeout(interval2);
                                that.renderList(topValue);
                            }
                        },50);
                    },100);
                });

                $('.listContainer').on('touchstart',function(){
                    startScrollTop = $('.listContainer').scrollTop();
                });
            },

            //查询明星列表
            queryStarAlbumInfo:function () {
                var starMd5 = localStorage.getItem("starMd5");
                var that = this;
                dataServices.get('mallbackend').queryStarAlbumInfo({
                    data: {
                        starMd5:starMd5
                    }
                }).done(function (resp) {
                    if(resp.data.starChange){

                        localStorage.setItem("starMd5",resp.data.starMd5);
                        that.respData = resp.data.data;
                        var starEntity = JSON.stringify(that.respData);
                        localStorage.setItem("starListEntity",starEntity);
                        that.baseData = that.generateStarList(that.respData);
                    }else{
                        that.respData = JSON.parse(localStorage.getItem("starListEntity"));
                        that.baseData = that.generateStarList(that.respData);
                    }

                    //构造明星列表
                    if(that.baseData.length>20){
                        that.starList = that.baseData.slice(0,20);
                    }else{
                        that.starList = that.baseData;
                    }

                }).fail(function (resp) {

                }).always(function () {

                });
            },

            //初始化明星列表模拟数据
            getStarList:function(){
                //获取数据
                var respData = this.generateData();
                this.baseData = this.generateStarList(respData);

                //构造明星列表
                if(this.baseData.length>20){
                    this.starList = this.baseData.slice(0,20);
                }else{
                    this.starList = this.baseData;
                }
            },

            //生成侧边栏数据
            structureLetter:function(tipsName,top){
                var rightObj = {};
                rightObj.top = top;
                rightObj.name = tipsName;
                this.letterList.push(rightObj);
            },

            //生成模拟数据
            generateData:function(){
                var num = 20;
                var data=[];
                for(var i=0;i<num;i++){
                    var tipsName = String.fromCharCode(65+i);//生成A-Z
                    for(var j=0;j<10;j++){
                        var obj={};
                        obj.starId=j;
                        obj.starName = tipsName+j;
                        obj.starAbc = tipsName;
                        obj.frontCoverPath = 'http://fengchao.8686c.com/staticResource/program/wechat/activity/advertisement/images/bestFriendsNew.png';
                        data.push(obj);
                    }
                }
                this.respData = data;
                return data;
            },

            //删除数据
            clearDSelectData:function(){
                this.keyword = "";
            },

            //构建明星列表数据
            generateStarList:function(data){
                var mainList = [],top = 0;
                for(var i=0;i<26;i++){
                    var tipObj = {},tipStyle={},add=false;
                    var tipsName = String.fromCharCode(65+i);//生成A-Z
                    tipObj.name=tipsName;
                    tipObj.dataStatus = 0;
                    tipObj.top = top;
                    tipStyle.top = top+'rem';
                    tipObj.styleList = tipStyle;
                    for(var j=0;j<data.length;j++){
                        if(data[j].starAbc == tipsName){
                            var obj = {},listStyle={};
                            //添加A-Z tips头部
                            if(!add){
                                mainList.push(tipObj);
                                add = true;
                                this.structureLetter(tipsName,top);
                                top=top+0.6;
                            }
                            listStyle.top=top+'rem';
                            obj.name = data[j].starName;
                            obj.dataStatus=1;
                            obj.top = top;
                            obj.picUrl = data[j].frontCoverPath;
                            obj.styleList = listStyle;
                            obj.starId = data[j].starId;
                            mainList.push(obj);
                            top=top+2.4;
                        }
                    }
                }
                var width = document.body.scrollWidth;
                this.top =top*width/10;
                $('#allContainer').css("height",this.top);
                return mainList;
            }
        },
        watch:{
            keyword:function(){
                var value = this.keyword.trim();
                if(value.length>0){
                    //滚动条复位
                    $('.listContainer').scrollTop(0);
                    this.isShow = true;
                    this.searchStarList(value);
                    $('.selector-input').css('width','6rem');
                }else{
                    this.isShow = false;
                    $('.selector-input').css('width','7rem');
                }
            }
        },
        route: {
            data: function(transition){
                transition.next();
            }
        }
    });

    //创建明星图库模板
    var picStoreTemp = Vue.extend({
        template:"#picStore",
        data:function(){
            return{
                imgArray:[11]
            }
        },
        methods:{
            queryStarAlbumMedias:function(){
                var self = this;
                var starId = sessionStorage.getItem("starId");
                dataServices.get('mallbackend').queryStarAlbumMedias({
                    data: {
                        starId:starId
                    }
                }).done(function (resp) {
                    var imgList= resp.data;
                    self.imgArray = imgList;
                }).fail(function (resp) {

                }).always(function () {

                });
            },
            viewPic:function(param){
                sessionStorage.setItem("selectStarPic",param);
                router.go('selectPicTemp');
            }
        },
        created:function(){
            var that = this;
            this.$nextTick(function(){
                $(".picStore").css("height",winHeight);
                that.queryStarAlbumMedias();
            });
        },
        route: {
            data: function(transition){
                transition.next();
            }
        }
    });

    //创建明星图片预览模板
    var selectPicTemp = Vue.extend({
        template:"#selectPic",
        data:function(){
            return{
                selectPic:""
            }
        },
        methods:{
            goToPrePage:function(){
                router.go('picStoreTemp');
            },
            backToMainPage:function(){
                $('#starUploadImg').attr('src',this.selectPic);
                var scanImg = new Image();
                scanImg.onload = function(){
                    vm.imgData.imgHeight = this.height;
                    vm.imgData.imgWidth = this.width;
                };
                scanImg.src = this.selectPic;
                vm.imgData.uploadStarImgData = this.selectPic;
                router.go('/');
            }
        },
        created:function(){
            var that = this;
            that.selectPic = sessionStorage.getItem('selectStarPic');
            this.$nextTick(function () {
                $(".selectPic").css("height",winHeight);
            });
        }
    });

    //创建合成图片预览模板
    var generatePicTemp = Vue.extend({
        template:"#picReviewTemp",
        data:function(){
            return{
                generateSmallImg:""
            }
        },
        methods:{
            goToSelectBox:function(){
                var machine = vm.getPath();
                //跳转柜机选择
                window.location.href = machine+'/staticResource/wechat/activity/advertisement/pages/selectBox.html?v='+(new Date().getTime());
            },
            backToUpload:function(){
                router.go('/');
            }
        },
        created:function(){
            this.generateSmallImg = localStorage.getItem('smallImgUrl');
            this.$nextTick(function () {
                $(".picReviewTemp").css("height",winHeight);
            });
        }
    });

    /* 创建路由器  */
    var router = new VueRouter({});

    /* 创建路由映射  */
    router.map({
        //映射到明星列表模板
        'starList':{
            component:starListPageTemp
        },
        //映射到图库模板
        'picStoreTemp':{
            component:picStoreTemp
        },
        //映射到选中图片预览模板
        'selectPicTemp':{
            component:selectPicTemp
        },
        //映射到合成图片预览模板
        'generatePicTemp':{
            component:generatePicTemp
        }
    });

    /* 启动路由  */
    var App = Vue.extend({});
    router.start(App, '#app');

    function onBridgeReady() {
        // 通过下面这个API禁止分享微信  QQ
        WeixinJSBridge.call('hideOptionMenu');
    };
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    }else{
        onBridgeReady();
    }
});