webpackJsonp([4],{

/***/ 20:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-522c657e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\moge-www\\templates\\adinteraction\\src\\pages\\Make.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Make.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-522c657e", Component.options)
  } else {
    hotAPI.reload("data-v-522c657e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_util) {module.exports = {
    activated: function activated() {
        _util.changePageTitle(this.pageTitle || '');
        document.body.addClassName(this.bodyBg || '');
    },
    mounted: function mounted() {
        document.body.addClassName(this.bodyBg || '');
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        document.body.removeClassName(this.bodyBg || '');
        next();
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, _util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(25)],
    data: function data() {
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
            color: ''
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        $('#sysLoading').hide();
        next();
    },
    mounted: function mounted() {
        this.setInfo();
    },

    methods: {
        post_img: function post_img(data) {
            //上传图片到七牛
            var that = this;
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
                success: function success(respond) {
                    $('#sysLoading').hide();
                    that.imgsrc = window.img.imgsrc = respond.name;
                    that.url('./submit');
                    // console.log(that.imgsrc.substring(0,28));
                },
                error: function error(err) {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                    that.resetData();
                }
            }).done(function (respond) {
                that.imgsrc = respond.name;
            });
        },
        upLoad: function upLoad() {
            $(".htmleaf-container").fadeIn(300);
            $("#photo").show();
            $('#upload_box').hide();
        },
        cancle: function cancle() {
            //取消上传图
            $(".htmleaf-container").fadeOut(300);
            $('#photo').css({ 'background': 'none' });
            $("#photo").hide();
            $('#upload_box').show();
        },
        finish: function finish() {
            //完成上传图片
            $("#photo").css({
                'background-color': 'none',
                'background-size': '100%'
            });
            $("#error").hide();
            $(".htmleaf-container").hide();
            $('#upload_box').hide();
        },
        reelect: function reelect() {
            //重新选择作品
            $("#file").click();
            $(".htmleaf-container").fadeIn(300);
            $("#photo").show();
        },
        input: function input() {
            //点击输入文字
            $(".txt1").hide();
            $(".text_1").show();
        },
        msgAlert: function msgAlert(type, msg) {
            //弹出窗口
            $('.msg_' + type).html(msg);
            $('.msg_' + type).animate({
                'top': 0
            }, 500);
            setTimeout(function () {
                $('.msg_' + type).animate({
                    'top': '-30px'
                }, 500);
            }, 2000);
        },
        setInfo: function setInfo() {
            var _this = this;

            //设置信息
            var htmlstyle = "<style>body{padding:0;margin:0;}.msg{color:#FFF;width:100%;height:30px;text-align:center;font-size:14px;line-height:30px;position:fixed;top: -30px;z-index:9999;}" + ".msg_success{background-color:#1fcc6c;}" + ".msg_warning{background-color:#e94b35;}" + ".msg_primary{background-color:#337ab7;}" + ".msg_info{background-color:#5bc0de;}</style>";
            $('head').append(htmlstyle);
            $('body').prepend('<div class="msg msg_success"></div>' + '<div class="msg msg_warning"></div>' + '<div class="msg msg_primary"></div>' + '<div class="msg msg_info"></div>');
            var that = this;
            //获取token值
            that.showLoading();
            axios.get(window.config.API + '/upload/token').then(function (response) {
                if (response.data.status == 0) {
                    that.hideLoading();
                    that.token = response.data.data.image_token;
                } else {
                    if (response.data.msg) _util.showErrorTip(response.data.msg);
                }
            }).catch(function (err) {
                console.log(err);
                that.hideLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
            //裁剪图片
            var clipArea = new bjj.PhotoClip("#clipArea", {
                size: [310, 290],
                outputSize: [580, 620],
                file: "#file",
                view: "#photo",
                ok: "#finish",
                loadStart: function loadStart() {
                    console.log("照片读取中");
                },
                loadComplete: function loadComplete() {
                    console.log("照片读取完成");
                },
                clipFinish: function clipFinish(dataURL) {
                    that.url2 = dataURL;
                }
            });
            window.img = {};
            $('#upload').click(function () {
                if (_this.flag) {
                    $(".htmleaf-container").fadeIn(300);
                    $("#photoBox").show();
                }
            });
        },
        getBase64: function getBase64(url1, url2, content) {
            var Img1 = new Image(),
                Img2 = new Image(),
                dataURL = '';
            Img1.src = url1;
            Img2.src = url2;
            Img1.crossOrigin = "Anonymous";
            Img2.crossOrigin = "Anonymous";
            var canvas = document.createElement("canvas"),
                width = Img1.width,
                height = Img1.height,
                ctx = canvas.getContext("2d");
            canvas.width = 928;
            canvas.height = 864;
            var w = (928 - 623) / 2;
            var h = 716;
            ctx.drawImage(Img1, 0, 0, 928, 864);
            ctx.drawImage(Img2, w, 44, 623, 623);
            ctx.font = "36px microsoft yahei";
            ctx.fillStyle = this.color;
            ctx.fillText(content, w, h);
            dataURL = canvas.toDataURL("image/jpeg");
            this.post_img(dataURL);
        },
        choiceTheme: function choiceTheme(str, ev, color) {
            this.url1 = str;
            var el = ev.currentTarget;
            this.category = $(el).html().trim();
            $(".bg_img").css({ 'background-image': 'url(' + str + ')' });
            this.color = color;
        },
        nextStep: function nextStep() {
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
            window.img.content = this.text;
            window.img.category = this.category;
        },
        checkText: function checkText() {
            //校验文字
            if (this.text.length == 20) {
                _util.showErrorTip('最多输入二十个字！');
            }
        },
        resetData: function resetData() {
            this.url1 = '';
            this.text = '';
            this.url2 = '';
            this.category = '';
        },
        showLoading: function showLoading() {
            //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading: function hideLoading() {
            //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        },
        goback: function goback() {
            this.url('./', null, 1);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(0)))

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.gege-header[data-v-522c657e] {\r\n    background: #4285f4;\n}\n.bg_img[data-v-522c657e] {\r\n    width: 100%;\r\n    height: 40vh;\r\n    padding: 16px 58px;\n}\n.img[data-v-522c657e] {\r\n    width: 100%;\r\n    border: 1px dashed #b2b2b2;\r\n    height: 100%;\r\n    background: #fff;\n}\n.bg_img a input[type=file][data-v-522c657e] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    border: solid 1px #ddd;\r\n    opacity: 0;\r\n    z-index: 111;\n}\n.text_box[data-v-522c657e] {\r\n    padding: 8px 16px;\r\n    height: 60px;\r\n    padding-top: 2px;\n}\n.text_box>div[data-v-522c657e] {\r\n    width: 100%;\r\n    border: 1px solid #b2b2b2;\r\n    border-radius: 5px;\n}\n.item_b[data-v-522c657e] {\r\n    /* border: 1px solid #b2b2b2; */\r\n    border-radius: 5px;\r\n    line-height: 60px;\r\n    text-align: center;\r\n    height: 60px;\r\n    font-weight: 600;\n}\n#photoBox[data-v-522c657e] {\r\n    display: none;\n}\n.btn_box[data-v-522c657e] {\r\n    padding: 16px 35px;\n}\n.white[data-v-522c657e] {\r\n    background: #fff;\n}\n.btn_blue[data-v-522c657e] {\r\n    border: 0.01px solid #4285f4;\r\n    background-color: #4285f4;\r\n    font-size: 15px;\r\n    padding: 7px 0;\r\n    width: 100%;\r\n    color: #fff;\r\n    border-radius: 4px;\n}\n.color-1[data-v-522c657e] {\r\n    color: #4285f4;\r\n    border-color: #4285f4;\r\n    background: url('//img.aimoge.com/FtRLlVNKgiD2aEgS78a-YIvCYGke') center center;\r\n    background-size: 100% 100%;\n}\n.color-2[data-v-522c657e] {\r\n    color: #e84a5f;\r\n    border-color: #e84a5f;\r\n    background: url('//img.aimoge.com/Fj0nzAz8u-91kgBeyihf29Ei0UqE') center center;\r\n    background-size: 100% 100%;\n}\n.color-3[data-v-522c657e] {\r\n    color: #f09561;\r\n    border-color: #f09561;\r\n    background: url('//img.aimoge.com/Fm4vZMtxjCJ49_zdtm9pqdg4dNJk') center center;\r\n    background-size: 100% 100%;\n}\n.color-4[data-v-522c657e] {\r\n    color: #a3c03f;\r\n    border-color: #a3c03f;\r\n    background: url('//img.aimoge.com/FsbHqihnc41gKFBSa4SdYNx8OWzy') center center;\r\n    background-size: 100% 100%;\n}\n.color-5[data-v-522c657e] {\r\n    color: #ee847f;\r\n    border-color: #ee847f;\r\n    background: url('//img.aimoge.com/Fljlka7gzAiHi5hknBcT0nqpnm1w') center center;\r\n    background-size: 100% 100%;\n}\n.color-6[data-v-522c657e] {\r\n    color: #b196e1;\r\n    border-color: #b196e1;\r\n    background: url('//img.aimoge.com/FhS5yI9fwBc9beqO6ZnmqvmqQ__f') center center;\r\n    background-size: 100% 100%;\n}\n.flex_m[data-v-522c657e] {\r\n    display: flex;\n}\n.w_30[data-v-522c657e] {\r\n    width: 30%;\n}\n#photo[data-v-522c657e] {\r\n    display: none;\r\n    position: absolute;\n}\n#upload_box[data-v-522c657e]{\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    padding-top: 30%;\n}\n#upload_box a[data-v-522c657e]{\r\n    width: 50%;\r\n    display: block;\r\n    margin: 0 auto;\n}\r\n", ""]);

// exports


/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "make1"
  }, [_c('div', {
    staticClass: "htmleaf-container"
  }, [_c('div', {
    attrs: {
      "id": "clipArea"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', [_c('div', {
    staticClass: "mui-row color_w"
  }, [_c('div', {
    staticClass: "mui-col-xs-6 mui-text-left"
  }, [_c('span', {
    on: {
      "click": _vm.cancle
    }
  }, [_vm._v("取消")])]), _vm._v(" "), _c('div', {
    staticClass: "mui-col-xs-6 mui-text-right"
  }, [_c('span', {
    attrs: {
      "id": "finish"
    },
    on: {
      "click": _vm.finish
    }
  }, [_vm._v("完成")])])])])])]), _vm._v(" "), _c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    },
    on: {
      "callback": _vm.goback
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "44px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content mui-content"
  }, [_c('div', {
    staticClass: "bg_img",
    staticStyle: {
      "background-size": "100% 100%"
    }
  }, [_c('div', {
    staticClass: "img rel"
  }, [_c('div', {
    attrs: {
      "id": "upload_box"
    }
  }, [_c('a', {
    attrs: {
      "id": "upload"
    },
    on: {
      "click": _vm.upLoad
    }
  }, [_c('button', {
    staticClass: "mui-btn mui-btn-outlined upload_btn",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("\n                            上传图片\n                        ")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "file",
      "type": "file",
      "accept": "image/*",
      "multiple": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "font_14"
  }, [_vm._v("建议上传1M以上 清晰度高的图片")])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "photo"
    },
    on: {
      "click": _vm.reelect
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "text_box"
  }, [_c('div', {
    staticClass: "text",
    on: {
      "click": _vm.input
    }
  }, [_c('p', {
    staticClass: "txt1 font_14"
  }, [_vm._v("点击输入文字")]), _vm._v(" "), _c('div', {
    staticClass: "text_1"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.text),
      expression: "text"
    }],
    staticStyle: {
      "border": "none",
      "font-size": "14px"
    },
    attrs: {
      "type": "text",
      "maxlength": "20",
      "placeholder": "打字要满八个字，很长的字"
    },
    domProps: {
      "value": (_vm.text)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.text = $event.target.value
      }, _vm.checkText]
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "choice_box",
    staticStyle: {
      "padding": "16px 16px"
    }
  }, [_c('div', {
    staticClass: "flex_m",
    staticStyle: {
      "justify-content": "space-between"
    }
  }, [_c('div', {
    staticClass: "w_30 item_b color-1",
    on: {
      "click": function($event) {
        _vm.choiceTheme(_vm.theme1, $event, '#4285f4')
      }
    }
  }, [_vm._v("\n                    交友派\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "w_30 item_b color-2",
    on: {
      "click": function($event) {
        _vm.choiceTheme(_vm.theme2, $event, '#e84a5f')
      }
    }
  }, [_vm._v("\n                    宠物征婚\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "w_30 item_b color-3",
    on: {
      "click": function($event) {
        _vm.choiceTheme(_vm.theme3, $event, '#f09561')
      }
    }
  }, [_vm._v("\n                    爱豆粉\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "flex_m",
    staticStyle: {
      "justify-content": "space-between",
      "margin-top": "10px"
    }
  }, [_c('div', {
    staticClass: "w_30 color-4 item_b",
    on: {
      "click": function($event) {
        _vm.choiceTheme(_vm.theme4, $event, '#a3c03f')
      }
    }
  }, [_vm._v("\n                    晒娃魔\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "w_30 color-5 item_b",
    on: {
      "click": function($event) {
        _vm.choiceTheme(_vm.theme5, $event, '#ee7e79')
      }
    }
  }, [_vm._v("\n                    秀恩爱\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "w_30 color-6 item_b",
    on: {
      "click": function($event) {
        _vm.choiceTheme(_vm.theme6, $event, '#b196e1')
      }
    }
  }, [_vm._v("\n                    自定义\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "btn_box"
  }, [_c('button', {
    staticClass: "mui-btn btn_blue",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.nextStep
    }
  }, [_vm._v("下一步")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-522c657e", module.exports)
  }
}

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("818dedc4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-522c657e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Make.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-522c657e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Make.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }

});