<template lang="jade">
    div(style="margin-top: 8px;")
        div.up-layer.fixed(ref="layer")
        div.mgAlert1.fixed.uploading.mgAlert(ref="mgAlert1")
            p
        div.title {{ text || '上传图片' }}
        div.upload.rel(ref="uploadbox")
            input(ref="upload", type="file", name="file", :id="id")
</template>

<script>
    export default {
        data() {
            return {
                crop: '/style300.png',
                uploadList: [],
                exitsList: [],
                photoNum: 0
            }
        },
        props: ["id", "text"],
        mounted() {
            let _id = this.id;
            window.upls[_id] = this;
            $LAB.$LAB.script('/src/lib/jquery.min.js')
                .script('/src/lib/jquery.uploadifive.min.js').wait(function() {
                    let $ = jQuery;
                    $.get("//api.aimoge.com/v1/upload/token", function(data) {
                        window.cancelThis = window.cancelThis == undefined ? function(obj, key) {
                            let res = [],
                                exList = [],
                                $obj = $(obj),
                                $uploader = $obj.parents('.uploadifive-queue'),
                                $upbtn = $uploader.next('.uploadifive-button'),
                                $file = $upbtn.find('input[name="file"]'),
                                _idl = $file.attr('id'),
                                that = window.upls[_idl],
                                l = that.uploadList,
                                uqi = '.uqi' + _idl,
                                $uqi = $obj.parent(uqi),
                                index = $uqi.index(uqi),
                                $remove = $uploader.find('.uploadifive-queue-item').eq(index);
                            for (let i = 0, len = l.length; i < len; i++) {
                                if (l[i] != key) {
                                    res.push(l[i]);
                                    exList.push(that.exitsList[i]);
                                }
                            }
                            that.uploadList = res;
                            that.exitsList = exList;
                            that.photoNum -= that.photoNum > 0 ? 1 : 0;
                            $file.uploadifive('cancel', $remove.data('file'));
                            $remove.remove();
                            $uqi.remove();
                        } : window.cancelThis;

                        let that = window.upls[_id];
                        $(that.$refs.upload).uploadifive({
                            'formData': {
                                'timestamp': (new Date()).getTime(),
                                'token': data.data.token
                            },
                            'fileType': 'image/*',
                            'fileObjName': 'file',
                            'fileSizeLimit': 10 * 1024,
                            'uploadLimit': 4,
                            'queueSizeLimit': 3,
                            'uploadScript': location.protocol == "http:" ? 'http://upload.qiniu.com' : 'https://up.qbox.me',
                            'onAddQueueItem': function(file) {
                                let $this = $(this),
                                    _id = $this.attr('id');
                                that.showLoad();
                                if (that.photoNum > 2) {
                                    that.hideLoad();
                                    _util.showErrorTip('最多不能超过3张！');
                                    $(this).uploadifive('cancel', file);
                                } else {
                                    if (that.checkExit(file)) {
                                        that.hideLoad();
                                        _util.showErrorTip('文件重复！');
                                        $(this).uploadifive('cancel', file);
                                    } else {
                                        that.exitsList.push(file.name + file.size);
                                    }
                                }
                            },
                            onCancel: function(file) {
                                let $data = this.data('uploadifive'),
                                    settings = null;
                                settings = $data.settings;
                                settings.uploadLimit++;
                            },
                            'onError': function(errorType) {
                                that.hideLoad();
                                if (errorType == 'FILE_SIZE_LIMIT_EXCEEDED') {
                                    _util.showErrorTip('文件最大不能超过10MB');
                                }
                                if (errorType == 'UPLOAD_LIMIT_EXCEEDED' && that.uploadList.length >= 3) {
                                    _util.showErrorTip('最多不能超过3张！');
                                }
                                if (errorType == 'QUEUE_LIMIT_EXCEEDED') {
                                    _util.showErrorTip('最多不能超过3张！');
                                }
                            },
                            'onProgress': function(file, e) {
                                if (e.lengthComputable) {
                                    var percent = Math.round((e.loaded / e.total) * 100);
                                }
                                $(that.$refs.mgAlert1).find('p').text('已上传 ' + percent + '%');
                            },
                            'onUploadComplete': function(file, data) {
                                var d = JSON.parse(data),
                                    id = $(this).attr('id');
                                that.uploadList.push(d.name.substring(0, 28));
                                $(that.$refs.uploadbox).find('.uploadifive-queue').append('<div class="rel left uqi' + id + '"><a href="javascript:;" class="cnupload abs" onclick="cancelThis(this,\'' + d.name.substring(0, 28) + '\');">+</a><img src="//img.aimoge.com/' + d.name.substring(0, 28) + that.crop + '"/></div>');
                                that.hideLoad();
                                that.photoNum += 1;
                            }
                        });
                    });
                });
        },
        methods: {
            showLoad() {
                $(this.$refs.mgAlert1).show();
                $(this.$refs.layer).show();
            },
            hideLoad() {
                $(this.$refs.mgAlert1).hide();
                $(this.$refs.layer).hide();
            },
            checkExit() {
                var s = file.name + file.size;
                for (var i = 0, len = this.exitsList.length; i < len; i++) {
                    if (s == this.exitsList[i]) {
                        return true;
                    }
                }
                return false;
            }
        }
    }

</script>
<style scoped>
    .title {
        background-color: #fff;
        padding: 8px 16px 8px 16px;
    }

</style>
<style lang="sass">
    .up-layer {
        display: none;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        z-index: 33330;
    }
    
    .uploading {
        background: url('//img.aimoge.com/Fmk8zWI05wAqS7_ry24rCqCzEsC2') 0 0 no-repeat #fff;
        background-size: 40px;
        background-position: center 15px;
        display: none;
        opacity: 1;
        padding: 1%;
        font-size: 13px;
        text-align: center;
        top: 35%;
        z-index: 33332;
        &.mshow {
            opacity: .93;
        }
        p {
            margin-top: 40px;
            height: 20px;
            font-size: 12px;
            color: #3c763d;
        }
    }
    
    .upload {
        overflow: hidden;
        background-color: #fff;
        padding: 0 16px 12px 16px;
        a.cnupload {
            text-decoration: none;
            -webkit-transform: rotate(-135deg);
            font-size: 23px;
            color: #fff;
            background-color: #EE3A3A;
            border-radius: 100%;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            top: 2px;
            right: 8px;
        }
    }
    
    .uploadifive-button,
    .uploadifive-button input,
    .uploadifive-queue img {
        width: 65px;
        height: 65px;
    }
    
    .uploadifive-queue {
        float: left;
        position: relative;
        &-item {
            display: none;
        }
        img {
            border: 1px #ddd solid;
            margin-right: 5px;
        }
    }
    
    .uploadifive-button {
        position: relative;
        background-color: #fff;
        border: 1px #ddd solid;
        float: left;
        .h {
            display: block;
            border: 1px #ddd solid;
            width: 30px;
            height: 0px;
            position: relative;
            top: 50%;
            left: 50%;
            margin-left: -15px;
            margin-top: -2px;
            &.hd {
                transform: rotate(90deg);
                -webkit-transform: rotate(90deg);
            }
        }
    }

</style>
