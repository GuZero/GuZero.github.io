webpackJsonp([9],{

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-order"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    }
  }), _c('Search', {
    ref: "searchBar",
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
  }), (!_vm.terminalName) ? _c('div', {
    staticClass: "nav fixed"
  }, [_c('div', {
    staticClass: "tag none rel",
    class: {
      active: _vm.tabActive0
    },
    on: {
      "click": function($event) {
        _vm.loadAreas(_vm.tab0, $event)
      }
    }
  }, [_vm._v(_vm._s(_vm.tab0.ar_name))]), (_vm.tabData1) ? _c('div', {
    staticClass: "tag rel",
    class: {
      active: _vm.tabActive1
    },
    on: {
      "click": function($event) {
        _vm.loadCitys(_vm.tab1, $event)
      }
    }
  }, [_vm._v(_vm._s(_vm.tab1.ar_name))]) : _vm._e(), (_vm.tabData2) ? _c('div', {
    staticClass: "tag rel",
    on: {
      "click": function($event) {
        _vm.loadTerminals(_vm.tab2, $event)
      }
    }
  }, [_vm._v(_vm._s(_vm.tab2.ar_name))]) : _vm._e()]) : _vm._e(), (!_vm.terminalName) ? _c('div', {
    staticClass: "mt44 pt50 pb60"
  }, [_vm._l((_vm.areas), function(a) {
    return (_vm.tabIndex == 0) ? _c('div', {
      staticClass: "areas rel arrow",
      on: {
        "click": function($event) {
          _vm.loadCitys(a)
        }
      }
    }, [_c('div', {
      staticClass: "div"
    }, [_vm._v(_vm._s(a.ar_name) + "(" + _vm._s(a.terminal_number) + ")")])]) : _vm._e()
  }), _vm._l((_vm.citys), function(c) {
    return (_vm.tabIndex == 1) ? _c('div', {
      staticClass: "areas rel arrow",
      on: {
        "click": function($event) {
          _vm.loadTerminals(c)
        }
      }
    }, [_c('div', {
      staticClass: "div"
    }, [_vm._v(_vm._s(c.city_name) + "(" + _vm._s(c.terminal_number) + ")")])]) : _vm._e()
  }), (_vm.tabIndex == 2) ? _c('div', _vm._l((_vm.terminals), function(t) {
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
    }, [_vm._v(_vm._s(t.region) + _vm._s(t.place) + _vm._s(t.terminal_code))])])])
  })) : _vm._e(), _c('DataLoading', {
    ref: "loading"
  })], 2) : _vm._e(), (_vm.terminalName) ? _c('div', {
    staticClass: "nav fixed"
  }, [_c('div', {
    staticClass: "tag none rel"
  }, [_vm._v("全国")])]) : _vm._e(), (_vm.terminalName) ? _c('div', {
    staticClass: "mt44 pt50 pb60"
  }, [_vm._l((_vm.tn_terminals), function(t) {
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
    }, [_vm._v(_vm._s(t.region) + _vm._s(t.place) + _vm._s(t.terminal_code))])])])
  }), _c('DataLoading', {
    ref: "loading"
  })], 2) : _vm._e(), _c('FooterBar', {
    attrs: {
      "footerconfig": _vm.footerconfig
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6351f186", module.exports)
  }
}

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("270eacf1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6351f186\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Terminal.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6351f186\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Terminal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(134)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(116),
  /* scopeId */
  "data-v-6351f186",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\Terminal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Terminal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6351f186", Component.options)
  } else {
    hotAPI.reload("data-v-6351f186", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Footer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_Search__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_common_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_DataLoading__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_DataLoading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_common_DataLoading__);
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
    mixins: [__webpack_require__(6)],

    data: function data() {
        return {
            pageTitle: '终端列表',
            btnconfig: {
                isgoback: 0
            },
            footerconfig: {
                isterminal: true
            },
            version: '1',
            //搜索文本框字段
            terminalName: '',
            tabIndex: 0,
            tab0: {
                ar_id: '',
                ar_name: '全国'
            },
            tab1: {},
            tab2: {},
            areas: [],
            citys: [],
            ar_id: '',
            city_id: '',
            //分页每页16条
            numPerPage: 16,
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
    created: function created() {
        window.canGoBack = false;
        window.origin = null;
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        FooterBar: __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default.a,
        Search: __WEBPACK_IMPORTED_MODULE_2__components_common_Search___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_3__components_common_DataLoading___default.a
    },
    computed: {
        tabActive0: function tabActive0() {
            return this.tabIndex == 1 || this.tabIndex == 2;
        },
        tabActive1: function tabActive1() {
            return this.tabIndex == 2;
        },
        tabData1: function tabData1() {
            //是否显示2级导航
            return !this.emptyJson(this.tab1);
        },
        tabData2: function tabData2() {
            //是否显示3级导航
            return !this.emptyJson(this.tab2);
        }
    },
    watch: {
        terminalName: function terminalName(newVal) {
            if (newVal.trim()) {
                //当开始搜索时，记住终端列表滚动条显示的位置
                this.scrollTop = this.scrollTop || document.body.scrollTop;
            } else {
                //搜索为空，隐藏搜索列表，恢复其默认滚动条位置
                this.tn_scrollTop = 0;
            }
        }
    },
    mounted: function mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.resetScrollTop();
        this.loadAreaData();
    },
    activated: function activated() {
        //开启<keep-alive>，会触发activated事件
        window.canGoBack = false;
        window.origin = null;
        this.resetScrollTop();
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        //离开当前路由触发该事件
        //保存滚动条位置，卸载滚动加载事件
        var scrollTop = document.body.scrollTop;
        this.scrollTop = this.scrollTop || scrollTop;
        this.tn_scrollTop = this.tn_scrollTop || scrollTop;
        window.removeEventListener('scroll', this.handleScroll);
        next();
    },

    methods: {
        goToInfo: function goToInfo(terminal) {
            this.url('/terminal/' + terminal.terminal_id);
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
        tabDisabled: function tabDisabled(e) {
            //导航是否可点击
            var flag = false;
            if (e && e.target.className.indexOf('active') < 0 && e.target.className.indexOf('div') < 0) flag = true;
            return flag;
        },
        setNavState: function setNavState(data, e) {
            //列表@click不要传$event参数
            var eventFromNav = !!e ? true : false;
            if (eventFromNav) {
                //来自nav的点击
                if (data.ar_name && data.ar_id == '') {
                    //1级菜单
                    this.tabIndex = 0;
                    this.tab1 = {};
                    this.tab2 = {};
                }
                if (data.ar_name && data.ar_id != '') {
                    //2级菜单
                    this.tabIndex = 1;
                    this.tab1 = {
                        ar_id: data.ar_id,
                        ar_name: data.ar_name
                    };
                    this.tab2 = {};
                }
            } else {
                //来自list的点击
                if (data.ar_name) {
                    this.tabIndex = 1;
                    this.tab1 = {
                        ar_id: data.ar_id,
                        ar_name: data.ar_name
                    };
                }
                if (data.city_name) {
                    this.tabIndex = 2;
                    this.tab2 = {
                        city_id: data.city_id,
                        ar_name: data.city_name
                    };
                }
            }
        },
        resetDefaultConfig: function resetDefaultConfig() {
            this.page = 1;
            this.pageList = [];
            this.terminals = [];
            this.scrollTop = 0;
            this.scroll_load_end = false;
            this.scroll_load_loading = false;
        },
        loadAreas: function loadAreas(data, e) {
            if (this.tabDisabled(e)) return false;
            this.setNavState(data, e);
            this.resetDefaultConfig();
            //加载数据
            this.loadAreaData();
        },
        loadCitys: function loadCitys(data, e) {
            var that = this;
            if (that.tabDisabled(e)) return false;
            that.setNavState(data, e);
            if (that.ar_id == data.ar_id) return false;
            //加载数据
            that.ar_id = data.ar_id;
            that.resetDefaultConfig();
            that.citys = [];
            that.showLoading();
            getAjaxRequest("terminal_cache", ajaxUrls.citys + data.ar_id, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function (response) {
                that.hideLoading();
                if (response.status == 0) {
                    that.citys = response.data;
                } else {
                    if (response.msg) _util.showErrorTip(response.msg);
                }
            }, function (error) {
                that.hideLoading();
                _util.showErrorTip('当前无网络，请检查您的网络状态！');
            });
        },
        loadTerminals: function loadTerminals(data, e) {
            if (this.tabDisabled(e)) return false;
            this.setNavState(data, e);
            //加载数据
            var that = this;
            that.city_id = data.city_id;
            that.resetDefaultConfig();
            that.loadTerminalData(true);
        },
        loadAreaData: function loadAreaData() {
            var that = this;
            if (that.areas && !that.areas.length) {
                that.showLoading();
                getAjaxRequest("terminal_cache", ajaxUrls.areas, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function (response) {
                    that.hideLoading();
                    if (response.status == 0) {
                        that.areas = response.data;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function (error) {
                    that.hideLoading();
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            }
        },
        loadTerminalData: function loadTerminalData(isFirst) {
            var that = this,
                page = that.page;
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

            getAjaxRequest("terminal_cache", ajaxUrls.terminals + that.ar_id + '/citys/' + that.city_id + '?page=' + page, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function (response) {
                that.hideLoading();
                that.scroll_load_loading = false;
                if (response.status == 0 && response.data && response.data.length) {
                    that.terminals = that.terminals.concat(response.data);
                    that.page += 1;
                    that.pageList = that.pageList.concat([page]);

                    if (response.data.length < that.numPerPage) {
                        that.scroll_load_end = true;
                    }
                } else {
                    that.scroll_load_end = true;
                    if (isFirst) {
                        that.showLoadEnd();
                    }
                    if (response.status != 0) {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }
            }, function (error) {
                that.hideLoading();
                _util.showErrorTip('当前无网络，请检查您的网络状态！');
            });
        },
        searchTerminal: function searchTerminal(isFirst) {
            var that = this,
                page = 1,
                _key = that.terminalName;
            if (isFirst) {
                that.tn_page = 1;
                that.tn_pageList = [];
                that.tn_terminals = [];
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
                getAjaxRequest("terminal_cache", ajaxUrls.searchTerminal + _key.trim() + '&page=' + page, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function (response) {
                    that.hideLoading();
                    that.tn_scroll_load_loading = false;
                    if (response.status == 0 && response.data && response.data.length) {
                        that.tn_terminals = that.tn_terminals.concat(response.data);
                        that.tn_page += 1;
                        that.tn_pageList = that.tn_pageList.concat([page]);
                        if (response.length < that.numPerPage) {
                            that.tn_scroll_load_end = true;
                        }
                    } else {
                        that.tn_scroll_load_end = true;
                        if (isFirst) {
                            that.showLoadEnd();
                        }
                        if (response.status != 0) {
                            if (response.msg) _util.showErrorTip(response.msg);
                        }
                    }
                }, function (error) {
                    that.hideLoading();
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            }, 350);
        },
        handleScroll: function handleScroll() {
            //滚动加载监听事件
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                //只有终端列表和搜索结果开启分页加载
                if (this.terminalName && this.terminalName.trim()) {
                    if (this.tn_scroll_load_end && this.$refs.loading) {
                        return this.showLoadEnd();
                    } else {
                        this.searchTerminal();
                    }
                } else {
                    if (this.scroll_load_end && this.$refs.loading) {
                        return this.showLoadEnd();
                    } else {
                        if (this.tabIndex == 2) this.loadTerminalData();
                    }
                }
            }
            //同步滚动条位置
            if (this.terminalName && this.terminalName.trim()) {
                this.tn_scrollTop = document.body.scrollTop;
            } else {
                if (this.tabIndex == 2) this.scrollTop = document.body.scrollTop + 2;
            }
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

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.pt50[data-v-6351f186] {\n  padding-top: 100px;\n}\n.arrow[data-v-6351f186]:after {\n  content: '';\n  background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n  background-size: 100% auto;\n  display: block;\n  height: 28px;\n  width: 28px;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  margin-top: -14px;\n}\n.areas[data-v-6351f186]:before,\n.nav[data-v-6351f186]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #979797;\n  transform: scale(1, 0.5);\n}\n.nav[data-v-6351f186] {\n  background-color: #fff;\n  color: #4d4d4d;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 16px;\n  width: 100%;\n  left: 0;\n  top: 90px;\n  z-index: 300;\n}\n.nav .tag[data-v-6351f186] {\n    float: left;\n    padding-left: 32px;\n    margin-left: 8px;\n}\n.nav .tag.active[data-v-6351f186] {\n      color: #07689f;\n}\n.nav .tag[data-v-6351f186]:before {\n      content: '';\n      display: block;\n      position: absolute;\n      background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n      background-size: 100% auto;\n      height: 26px;\n      width: 26px;\n      left: 0;\n      top: 50%;\n      margin-top: -13px;\n}\n.nav .tag.none[data-v-6351f186] {\n      margin: 0;\n      padding-left: 0;\n}\n.nav .tag.none[data-v-6351f186]:before {\n      display: none;\n}\n.areas[data-v-6351f186] {\n  font-size: 16px;\n}\n.areas[data-v-6351f186]:before {\n    margin-left: 16px;\n}\n.areas[data-v-6351f186]:active {\n    background-color: #eee;\n}\n.areas .div[data-v-6351f186] {\n    padding: 16px 0;\n    margin-left: 16px;\n}\n.areas .div .title[data-v-6351f186] {\n      color: #323232;\n      margin-bottom: 3px;\n      padding-right: 16px;\n}\n.areas .div .line[data-v-6351f186] {\n      color: #6e6e6e;\n      font-size: 14px;\n      padding-right: 16px;\n}\n", ""]);

// exports


/***/ }

});