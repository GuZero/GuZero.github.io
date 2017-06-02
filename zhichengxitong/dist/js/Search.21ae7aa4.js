webpackJsonp([8],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-order"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle
    }
  }), _c('Search', {
    staticClass: "top44 fixed",
    attrs: {
      "placeholder": "搜索手机号"
    },
    on: {
      "changeCallback": function($event) {
        _vm.searchByKey(1)
      }
    },
    model: {
      value: (_vm.terminalName),
      callback: function($$v) {
        _vm.terminalName = $$v
      },
      expression: "terminalName"
    }
  }), _c('div', {
    staticClass: "mt44 pt50 pb60"
  }, [_c('div', {
    staticClass: "pd_16"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._v("搜索结果：共"), _c('span', {
    staticClass: "c_b"
  }, [_vm._v(" " + _vm._s(_vm.num) + " ")]), _vm._v("条 ")]), (_vm.flag) ? _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp",
      "width": "100%",
      "height": "100%"
    }
  }), _c('p', {
    staticClass: "c_g",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("暂无搜索结果")])]) : _vm._e(), _vm._l((_vm.result), function(d) {
    return (!_vm.flag) ? _c('div', {
      staticClass: "list"
    }, [_c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("订单状态：")]), _c('lable', [_vm._v(_vm._s(d.state))])], 1), _c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("存件时间：")]), _c('lable', [_vm._v(_vm._s(d.delivery_at))])], 1), _c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("取件时间：")]), _c('lable', [_vm._v(_vm._s(d.fetch_at))])], 1), _c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("用户手机：")]), _c('lable', [_vm._v(_vm._s(d.operator_telephone) + "   ")])], 1), _c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("快递员手机：")]), _c('lable', [_vm._v(_vm._s(d.operator_telephone) + "          ")])], 1)]) : _vm._e()
  })], 2), _c('DataLoading', {
    ref: "loading"
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1ec05aa9", module.exports)
  }
}

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("220e4a68", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1ec05aa9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1ec05aa9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(125)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  "data-v-1ec05aa9",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ec05aa9", Component.options)
  } else {
    hotAPI.reload("data-v-1ec05aa9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
    props: ["placeholder"],
    methods: {
        setParentVar: function setParentVar(value) {
            this.$emit('input', value);
        }
    }
};

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 50px 0 50px;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n", ""]);

// exports


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  "data-v-2b720269",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b720269", Component.options)
  } else {
    hotAPI.reload("data-v-2b720269", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('div', {
    staticClass: "input rel"
  }, [_c('input', {
    staticClass: "rel",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    on: {
      "input": function($event) {
        _vm.setParentVar($event.target.value)
      },
      "keyup": function($event) {
        _vm.$emit('changeCallback')
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b720269", module.exports)
  }
}

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7e3e8802", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b720269\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b720269\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading__);
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


//    import FooterBar from '../components/common/Footer'


//     div.num
//                        span(style="font-size:10px") 
//                            label.c_g1 箱门号编码： 
//                            lable 11111
//                        span(style="font-size:10px")    
//                            label.c_g1 取件编码：
//                            lable 1111
/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            //                bodyBg: 'gray',
            pageTitle: '运营支撑系统',
            footerconfig: {
                isterminal: true
            },
            terminalName: '',
            flag: true,
            num: '0',
            result: [],
            url: '',
            //终端列表状态
            page: 1,
            pageList: [],
            terminals: [],
            scrollTop: 0,
            scroll_load_loading: false,
            scroll_load_end: false,
            //搜索结果状态
            tn_page: 1,
            tn_pageList: [],
            tn_terminals: [],
            tn_scrollTop: 0,
            tn_scroll_load_loading: false,
            tn_scroll_load_end: false,
            tn_delay: null

        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        //            FooterBar,
        Search: __WEBPACK_IMPORTED_MODULE_1__components_common_Search___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a
    },
    mounted: function mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    activated: function activated() {
        //开启<keep-alive>，会触发activated事件
        // this.resetScrollTop();
        window.addEventListener('scroll', this.handleScroll);
    },
    created: function created() {
        var id = localStorage.express_id;
        switch (id) {
            case '01':
                this.url = ajaxUrls.search1;
                break;
            case '02':
                this.url = ajaxUrls.search2;
                break;
            case '03':
                this.url = ajaxUrls.search3;
                break;
            case '04':
                this.url = ajaxUrls.search4;
                break;
            default:
                this.url = ajaxUrls.search1;
                break;
        }
    },

    methods: {
        handleScroll: function handleScroll() {
            //滚动加载监听事件
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                if (this.terminalName) {
                    this.loadTerminalData();
                }
            }
        },
        resetScrollTop: function resetScrollTop(showLoadEnd) {
            //                if (showLoadEnd) this.showLoadEnd();
            if (this.terminalName && this.terminalName.trim()) {
                document.body.scrollTop = this.tn_scrollTop;
            } else {
                if (this.tabIndex == 2 && this.scrollTop) {
                    document.body.scrollTop = this.scrollTop;
                } else {
                    document.body.scrollTop = 0;
                }
            }
        },
        loadTerminalData: function loadTerminalData(isFirst) {
            var that = this,
                page = that.page,
                _key = that.terminalName;
            if (that.scroll_load_loading || that.isLoading()) {
                return false;
            }
            if (that.scroll_load_end) {
                return false;
            }
            if (that.pageList.indexOf(page) > -1) {
                return false;
            }
            that.showLoading();
            that.scroll_load_loading = true;
            axios.get(that.url + _key.trim() + "&page=" + page).then(function (rsp) {
                var d = rsp.data;
                that.hideLoading();
                that.scroll_load_loading = false;
                if (d.status == 0 && d.data && d.data.length) {
                    that.result = that.result.concat(d.data);
                    that.page += 1;
                    that.pageList = that.pageList.concat([page]);

                    if (d.data.length < that.numPerPage) {
                        that.scroll_load_end = true;
                    }
                } else {
                    that.scroll_load_end = true;
                    if (isFirst) {
                        that.showLoadEnd();
                    }
                }
            });
        },
        searchByKey: function searchByKey(isFirst) {
            var that = this,
                page = 1,
                _key = that.terminalName;
            if (isFirst) {
                that.tn_page = 1;
                that.tn_pageList = [];
                that.terminals = [];
                that.tn_scrollTop = 0;
                that.tn_scroll_load_loading = false;
                that.tn_scroll_load_end = false;
                document.body.scrollTop = 0;
            }
            page = that.tn_page;
            if (!_key || !_key.trim()) {
                that.resetScrollTop(1);
                return false;
            }
            if (that.tn_delay) {
                return false;
            }
            if (that.tn_scroll_load_loading || that.isLoading()) {
                return false;
            }
            if (that.tn_scroll_load_end) {
                return false;
            }
            if (that.tn_pageList.indexOf(page) > -1) {
                return false;
            }
            if (this.terminalName == "") {
                that.flag = true;
                that.num = 0;
            } else {
                axios.get(that.url + _key.trim() + "&page=" + page).then(function (rsp) {
                    var d = rsp.data;
                    console.log(d.data);
                    if (d.status == "0") {
                        that.flag = false;
                        if (d.data.length == 0) {
                            that.num = 0;
                        } else {
                            that.num = d.data.length;
                        }
                        that.result = that.result.concat(d.data);
                    } else {
                        that.flag = !that.flag;
                    }
                });
            };
            console.log(this.terminalName);
        },
        isLoading: function isLoading() {
            //是否已显示“正在加载数据状态”节点
            this.$refs.loading && this.$refs.loading.isLoading();
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
        showLoadEnd: function showLoadEnd() {
            //显示没有更多数据状态
            this.hideLoading();
            this.$refs.loading && this.$refs.loading.showEnd();
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.c_b[data-v-1ec05aa9] {\n  color: #07689f;\n}\n.c_g[data-v-1ec05aa9] {\n  color: #a3a3a3;\n}\n.c_g1[data-v-1ec05aa9] {\n  color: #908d8d;\n}\n.pd_16[data-v-1ec05aa9] {\n  padding: 0 16px;\n}\n.pd_16 div.img[data-v-1ec05aa9] {\n    width: 125px;\n    height: 125px;\n    padding-top: 70px;\n    margin: 0 auto;\n}\n.empty[data-v-1ec05aa9] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-1ec05aa9] {\n  position: relative;\n  line-height: 35px;\n  height: 35px;\n  color: #a3a3a3;\n}\n.item[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n.list[data-v-1ec05aa9] {\n  padding-top: 20px;\n  padding-bottom: 18px;\n  position: relative;\n}\n.list div[data-v-1ec05aa9] {\n    font-size: 12px;\n    height: 22px;\n    line-height: 22px;\n}\n.list .num[data-v-1ec05aa9] {\n    margin-top: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n.list[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n", ""]);

// exports


/***/ }

});