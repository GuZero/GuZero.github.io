webpackJsonp([10],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.empty[data-v-57410245] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-57410245] {\n  padding: 0 0 0 16px;\n  color: #4d4d4d;\n}\n.item[data-v-57410245]:active {\n    background-color: #eee;\n}\n.item .box[data-v-57410245] {\n    padding: 16px 0;\n    border-bottom: 1px #cfcfcf solid;\n}\n.areas[data-v-57410245] {\n  font-size: 16px;\n}\n.areas[data-v-57410245]:before {\n    margin-left: 16px;\n}\n.areas[data-v-57410245]:active {\n    background-color: #eee;\n}\n.areas .div[data-v-57410245] {\n    padding: 16px 0;\n    margin-left: 16px;\n}\n.areas .div .title[data-v-57410245] {\n      color: #323232;\n      margin-bottom: 3px;\n      padding-right: 16px;\n}\n.areas .div .line[data-v-57410245] {\n      color: #6e6e6e;\n      font-size: 14px;\n      padding-right: 16px;\n}\n.areas[data-v-57410245]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #979797;\n  transform: scale(1, 0.5);\n}\n", ""]);

// exports


/***/ },

/***/ 121:
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
      "placeholder": "搜索终端名称"
    },
    on: {
      "changeCallback": function($event) {
        _vm.searchTerminal(1)
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
  }, [_vm._l((_vm.terminals), function(t) {
    return _c('div', {
      staticClass: "areas rel",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToInfo(t)
        }
      }
    }, [_c('div', {
      staticClass: "div"
    }, [_c('div', {
      staticClass: "title rel"
    }, [_vm._v(_vm._s(t.terminal_name))]), _c('div', {
      staticClass: "line rel"
    }, [_vm._v(_vm._s(t.terminal_code))])])])
  }), _c('DataLoading', {
    ref: "loading"
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57410245", module.exports)
  }
}

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("03619eae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-57410245\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchTerminal.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-57410245\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchTerminal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(141)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(121),
  /* scopeId */
  "data-v-57410245",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\SearchTerminal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchTerminal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57410245", Component.options)
  } else {
    hotAPI.reload("data-v-57410245", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 44:
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

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 50px 0 50px;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n", ""]);

// exports


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(51),
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

/***/ 51:
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

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7e3e8802", content, false);
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

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls, _util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search__ = __webpack_require__(48);
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





/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            pageTitle: '搜索终端名称',
            terminalName: '',
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
            tn_delay: null,
            userID: ''
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        Search: __WEBPACK_IMPORTED_MODULE_1__components_common_Search___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a
    },
    mounted: function mounted() {
        window.canGoBack = true;
        window.origin = null;
        this.loadTerminalData();
        window.addEventListener('scroll', this.handleScroll);
    },
    activated: function activated() {
        //开启<keep-alive>，会触发activated事件
        // this.resetScrollTop();
        window.canGoBack = true;
        window.origin = null;
        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll: function handleScroll() {
            //滚动加载监听事件
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                this.loadTerminalData();
            }
        },
        loadTerminalData: function loadTerminalData() {
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
            that.getAjaxRequest("searchTerminal_cache", ajaxUrls.searchTerminal + _key.trim() + "&page=" + page, that.version, 30 * 1000, 6 * 60 * 60 * 1000, function (response) {
                if (response.status == 0) {
                    that.hideLoading();
                    that.scroll_load_loading = false;
                    if (response.data && response.data.length) {
                        that.terminals = that.terminals.concat(response.data);
                        that.page += 1;
                        that.pageList = that.pageList.concat([page]);
                        if (response.data.length < that.numPerPage) {
                            that.scroll_load_end = true;
                        }
                    } else {
                        that.scroll_load_end = true;
                        that.showLoadEnd();
                    }
                } else {
                    if (response.msg) _util.showErrorTip(response.data.msg);
                }
            }, function (error) {
                _util.showErrorTip(error);
            });
        },
        searchTerminal: function searchTerminal(isFirst) {
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
            //延时350ms触发搜索事件
            that.tn_delay = setTimeout(function () {
                window.clearTimeout(that.tn_delay);
                that.tn_delay = null;
                that.showLoading();
                that.tn_scroll_load_loading = true;
                axios.get(ajaxUrls.searchTerminal + _key.trim() + '&page=' + page).then(function (rsp) {
                    var d = rsp.data;
                    that.hideLoading();
                    that.tn_scroll_load_loading = false;
                    if (d.status == 0 && d.data && d.data.length) {
                        that.terminals = that.terminals.concat(d.data);
                        that.tn_page += 1;
                        that.tn_pageList = that.tn_pageList.concat([page]);

                        if (d.data.length < that.numPerPage) {
                            that.tn_scroll_load_end = true;
                        }
                    } else {
                        that.tn_scroll_load_end = true;
                        if (isFirst) {
                            that.showLoadEnd();
                        }
                    }
                });
            }, 350);
        },
        resetScrollTop: function resetScrollTop(showLoadEnd) {
            if (showLoadEnd) this.showLoadEnd();
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
        goToInfo: function goToInfo(item) {
            localStorage.terminal_code = item.terminal_code;
            localStorage.terminal_name = item.terminal_name;
            this.$router.replace('/order/edit');
            return {};
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(1)))

/***/ }

});