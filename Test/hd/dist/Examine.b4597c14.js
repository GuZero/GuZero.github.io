webpackJsonp([5],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\Zero\\hd\\src\\pages\\Examine.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Examine.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef0a46fe", Component.options)
  } else {
    hotAPI.reload("data-v-ef0a46fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__(3);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            pageTitle: '正在审核',
            btnconfig: {
                isgoback: 1
            },
            city_id: '',
            city_count: '',
            scroll_load_loading: false,
            scroll_load_end: false
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a
    },
    created: function created() {
        this.getInfo();
    },

    methods: {
        getInfo: function getInfo() {
            var that = this;
            // console.log(localStorage.city_id);
            that.city_id = "3201";
            that.showLoading();
            axios.get('http://api.dev.aimoge.com/v1/media/adinteraction/info?city_id=' + that.city_id).then(function (res) {
                console.log(res.data);
                if (res.data.status == 0) {
                    that.hideLoading();
                    if (res.data.city_count == null) {
                        that.city_count = 0;
                    } else {
                        that.city_count = res.data.city_count;
                    }
                } else {
                    if (res.data.msg) _util.showErrorTip(res.data.msg);
                }
            }).catch(function (err) {
                that.hideLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
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
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "examine"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-content pd10"
  }, [_c('div', {
    staticClass: "mui-content-padded"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mui-text-center margin16"
  }, [_c('p', {
    staticClass: "mui-h4 mui-ellipsis color_w line_h30"
  }, [_vm._v("\n                    格格小编对着\n                    "), _c('span', {
    attrs: {
      "id": "city_count"
    }
  }, [_vm._v(_vm._s(_vm.city_count))]), _vm._v("个作品\n                ")]), _vm._v(" "), _c('p', {
    staticClass: "mui-h4 mui-ellipsis color_w line_h30"
  }, [_vm._v("\n                    凝视中...\n                ")])]), _vm._v(" "), _vm._m(1)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mui-text-center"
  }, [_c('div', {
    staticStyle: {
      "width": "110px",
      "height": "80px",
      "display": "inline-block"
    }
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/FusiskJqzeh-IeU39DPXStckIv-U",
      "alt": "",
      "width": "100%",
      "height": "100%"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mui-table-view weixi pd10"
  }, [_c('div', {
    staticClass: "mui-row mui-text-center"
  }, [_c('div', {
    staticStyle: {
      "width": "105px",
      "height": "105px",
      "display": "inline-block"
    }
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/Fr57mf2VPXU-JXi3ABQY226rGXcl",
      "alt": "",
      "width": "100%",
      "height": "100%"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "mui-row mui-text-center font_14 line_h30 margin16"
  }, [_vm._v("\n                    微信关注格格小区\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "mui-row mui-text-center font_14 line_h30"
  }, [_vm._v("\n                    超能箱菜单查看互动作品的状态\n                ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef0a46fe", module.exports)
  }
}

/***/ })

});