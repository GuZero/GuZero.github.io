webpackJsonp([4],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-e2ca51fc",
  /* cssModules */
  null
)
Component.options.__file = "D:\\Zero\\hd\\src\\pages\\details.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2ca51fc", Component.options)
  } else {
    hotAPI.reload("data-v-e2ca51fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 33:
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
    mixins: [__webpack_require__(22)],
    data: function data() {
        return {
            pageTitle: '作品详情',
            bodyBg: 'bg_gray',
            btnconfig: {
                isgoback: 1
            },
            start_date: '2017-07-11',
            end_date: '2017-09-13'
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a
    },
    mounted: function mounted() {
        this.getData();
    },

    watch: {
        '$route': function $route() {
            if (this.$route.path == '/details') {
                this.getData();
            }
        }

    },
    methods: {
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
        getData: function getData() {
            var that = this;
            that.showLoading();
            axios.get('http://api.dev.aimoge.com/v1/media/adinteraction/' + that.$route.query._id).then(function (res) {
                if (res.data.status == 0) {
                    that.hideLoading();
                    console.log(res.data);
                } else {
                    if (res.data.msg) _util.showErrorTip(res.data.msg);
                }
            }).catch(function (err) {
                console.log(err);
                that.hideLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.gege-header[data-v-e2ca51fc] {\r\n    background: #4285f4;\n}\n.header[data-v-e2ca51fc] {\r\n    height: 25vh;\r\n    background: #4285f4;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    align-items: center;\n}\n.header .title[data-v-e2ca51fc] {\r\n    font-size: 30px;\r\n    margin-bottom: 28px;\n}\n.items[data-v-e2ca51fc] {\r\n    display: flex;\r\n    font-size: 14px;\r\n    justify-content: space-between;\r\n    color: #8a8a8a;\n}\n.items p[data-v-e2ca51fc] {\r\n    margin-top: 8px;\r\n    text-align: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "details"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "44px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content mui-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "info",
    staticStyle: {
      "background": "#fff",
      "border-bottom": "1px solid #dfdfdf",
      "margin-bottom": "16px"
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("上屏柜机")]), _vm._v(" "), _c('div', [_vm._v("\n                        " + _vm._s(_vm.start_date) + " ---- " + _vm._s(_vm.end_date) + "\n                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "info",
    staticStyle: {
      "background": "#fff",
      "border-bottom": "1px solid #dfdfdf",
      "border-top": "1px solid #dfdfdf"
    }
  }, [_c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("支付金额")]), _vm._v(" "), _c('div', {
    staticClass: "mui-ellipsis-2"
  }, [_vm._v("\n                      " + _vm._s(21.00) + "元\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("下单时间")]), _vm._v(" "), _c('div', [_vm._v("\n                      " + _vm._s('09-20') + "   " + _vm._s('10:30') + "\n                    ")])])])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("上屏中")]), _vm._v(" "), _c('div', [_vm._v("内容不符，已安排微信退款，请注意查收")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("上屏柜机")]), _vm._v(" "), _c('div', {
    staticClass: "mui-ellipsis-2",
    staticStyle: {
      "min-width": "65%"
    }
  }, [_c('p', {
    staticStyle: {
      "margin-top": "0"
    }
  }, [_vm._v("1865创意园东二楼格格货栈")]), _vm._v(" "), _c('p', [_vm._v("1865创意园东二楼格格货栈")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e2ca51fc", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("4552e246", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e2ca51fc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./details.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e2ca51fc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./details.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});