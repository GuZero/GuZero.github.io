<template lang="jade">
    div.endrecvbox
        HeaderBar(
            :title="pageTitle",
            :btnconfig="btnconfig"
        )
        div.indexLoading.center.fixed(v-show="isShowLoading") 上传中...
        template(v-if="isNoNetwork")
            NoNetwork(@fetchDataCallBack="fetchData")
        template(v-if="!isNoNetwork")
            div.boxlist.mt44
                div.item_title 共 <span class="green">{{boxInfos.length}}</span> 件设备
                div.item(v-for="(info,index) in boxInfos",:key="index") {{index+1}}、{{info}}
                template(v-if="img_urls.length")
                    div.form_img(v-for="(img_src,index) in img_urls",:key="index")
                        p 到货验收单:
                        img(:src="img_url")
            div.fixed.flex-g.btn_box(v-if="!isUpload")
                div.btn(@click="continueHandle") 继续添加设备
                div.upload_btn.btn 上传到货验收单
                    input.upload_img_btn(type="file",name="files",@change="uploadFile",accept="image/jpeg,image/jpg,image/png,image/svg")

</template>
<script>
    import HeaderBar from '../components/common/Header';
    import ModalDialog from '../components/elements/ModalDialog';
    import NoNetwork from '../components/elements/NoNetwork';
    export default {
        mixins: [require('../components/mixin/BodyBg')],
        data() {
            return {
                pageTitle: '确认收货',
                version: '1',
                btnconfig: {
                    isgoback: 1
                },
                isNoNetwork: false,
                boxInfos: [],
                isShowLoading: false,
                isUpload: false,
                token: '',
                img_urls: [],
                img_url: '',
                temp_urls:[]
            }
        },
        created(){
            window.canGoBack = true;
            this.boxInfos = store.get('RecvBoxInfo') || [];
            this.fetchData();
        },
        mounted(){
        },
        components: {
            HeaderBar,
            ModalDialog,
            NoNetwork
        },
        methods:{
            showLoading(){
                this.isShowLoading = true;
            },
            hideLoading(){
                this.isShowLoading = false;
            },
            fetchData() {
                let that = this;
                axios.get('//api.gegebox.com/v1/upload/token')
                    .then(function(response) {
                        if (response.data.status == 0) {
                            that.token = response.data.data.image_token;
                        } else {
                            if (response.data.msg) _util.showErrorTip(response.data.msg);
                        }
                    })
                    .catch(function(err) {
                        // _util.showErrorTip('您的网络可能出了点问题:(');
                    })
            },
            convertBase64ToBlob(data) {
                var mimeString = data.split(',')[0].split(':')[1].split(';')[0];
                var byteString = atob(data.split(',')[1]);
                var ab = new ArrayBuffer(byteString.length);
                var ia = new Uint8Array(ab);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                var bb = (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
                if (bb) {
                    //    console.log('BlobBuilder');        
                    bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder)();
                    bb.append(ab);
                    return bb.getBlob(mimeString);
                } else {
                    //    console.log('Blob');  
                    bb = new Blob([ab], {
                        'type': (mimeString)
                    });
                    return bb;
                }
            },
            uploadImg(_filere,_base64,index,length){
                if (!this.token) {
                    this.isNoNetwork = true;
                    return false;
                }
                let that = this;
                let formdata = new FormData();
                let blob = that.convertBase64ToBlob(_base64);
                let file = new File([blob], _filere.name);
                formdata.append("file", file,_filere.name);
                formdata.append("token", that.token);
                formdata.append("x:source", "arrival acceptance form zcxtapp");
                $.ajax({
                    url: location.protocol == "http:" ? 'http://upload.qiniu.com' : 'https://up.qbox.me',
                    type: "POST",
                    data: formdata,
                    contentType: false,
                    dataType: 'json',
                    processData: false,
                    success: function(response) {
                        that.temp_urls.push(response.name);
                        if (index == (length-1)) {
                            that.uploadCtx();
                        }
                    },
                    error: function(err) {
                        that.hideLoading();
                        _util.showErrorTip('您的网络可能出了点问题:(');
                    }
                });
            },
            uploadFile(e) {
                /*上传到货验收单时将之前所有的设备信息一起上传，
                *上传成功后将验收单显示出来并将按钮隐藏，
                *等下次进入就是一个新的内容，
                *所以要清空旧内容的localstorge*/
                if (!this.boxInfos.length) {
                   _util.showErrorTip("设备不能为空，请先添加设备！");
                   return false;
                }
                let ele = e.target || window.target,that= this;
                if (ele.files.length > 1 ) {
                    _util.showErrorTip('只能上传1张图片！');
                    return false;
                }
                if (ele.files.length < 1 ) {
                    _util.showErrorTip('只能上传1张图片！');
                    return false;
                }
                that.showLoading();
                
                function singalUpload(filere,_index,_length){
                    console.log(
                        '文件名：', filere.name,
                        '文件大小：', filere.size,
                        '文件类型：', filere.type
                    )
                    var reader = new FileReader();
                    if (/image/.test(filere.type)) {
                        reader.readAsDataURL(filere);
                    } else {
                        _util.showErrorTip('图片格式不正确!');
                        that.hideLoading();
                        return false;
                    }
                    reader.onerror = function() {
                        that.hideLoading();
                        _util.showErrorTip("无法读取文件，错误" + reader.error.code);
                        return false;
                    }
                    reader.onload = function() {
                        if ((reader.result.length)/1000 > 10000) {
                            that.hideLoading();
                            showMsg('请选择10M以内的图片！')
                            return false;
                        }
                        that.uploadImg(filere,reader.result,_index,_length);
                    }
                }
                for(var i = 0, length1 = ele.files.length; i < length1; i++){
                    singalUpload(ele.files[i],i,length1);
                }
            },
            uploadCtx(){ //上传所有内容操作
                let that = this;
                axios.post(ajaxUrls.basic+"cabinet/confirm", {"cabinet_codes":that.boxInfos,"check_pict":that.temp_urls[0]}, {
                    withCredentials: true
                }).then(function(rsp) {
                    that.hideLoading();
                    if (rsp.data.status == 0) { //图片上传
                        that.img_url = "//img.aimoge.com/"+that.temp_urls[0].substring(0,28);
                        that.img_urls = [].concat(that.temp_urls);
                        that.temp_urls = null;
                        _util.showSuccessTip("上传成功！");
                        that.isUpload = true;//不允许再次上传，相当于此次验收已经结束
                        store.remove('RecvBoxInfo');
                    } else if (rsp.data.status == 1) {
                        let error_code = rsp.data.data.error_codes;
                        _util.showErrorTip("设备编号不存在，请重新添加正确编号！");
                        that.temp_urls = [];
                        for(var i = 0, length1 = error_code.length; i < length1; i++){
                            let index = that.boxInfos.indexOf(error_code[i]);
                            if (index >= 0) {
                                that.boxInfos.splice(index, 1);
                            }
                        }
                        store.set('RecvBoxInfo',that.boxInfos);
                    } else {
                        if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                    }
                }).catch(function(error) {
                    that.hideLoading();
                    // _util.showErrorTip('您的网络可能出了点问题:(');
                });
            },
            continueHandle(){
                this.$router.go(-1);//相当于回到操作页面
            }

        }

    }

</script>

<style lang="sass" scoped>
    $color: #f00;
    $green: #07689f;
    .gray_2{
        color: #e3e3e3;
    }
    .green{
        color: $green;
    }
    .indexLoading { 
        background-color: rgba(51,51,51,.9);
        color: #fff;
        z-index: 9999;
        width: 150px;
        border-radius: 5px;
        left: 50%;
        margin-left: -75px;
        height: 20px;
        padding: 50px 0 15px;
        top: 36%;
    }
    .indexLoading:before { 
        background-image: url('//img.aimoge.com/FhDyAl9aqWcGzIHgUOrfyqm8xVr1');
        display: block;
        width: 24px;
        height: 24px;
        top: 17px;
        margin-left: -12px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        left: 50%;
        content: '';
    }
    .endrecvbox {
        .boxlist{
            padding: 0 16px 60px;
            .item_title{
                padding: 16px 0;
                font-size: 16px;
            }
            .item{
                padding-bottom: 12px;
            }
            .form_img{
                font-size: 16px;
                p{
                    margin-bottom: 12px;
                }
                img{
                    width: 100%;

                }
            }
        }
        .btn_box{
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            border-top: 1px solid #cfcfcf;
            .center{
                text-align: center;
            }
            .btn{
                position: relative;
                width: 50%;
                color: $green;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }
            .upload_btn:before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 1px;
                height: 100%;
                background-color: #cfcfcf;
            }
            .upload_img_btn{
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
        }
    }

</style>
