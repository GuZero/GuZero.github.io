webpackJsonp([12],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "noborder": true
    }
  }), _c('div', {
    staticClass: "nav top44 fixed"
  }, [_c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 0
    },
    on: {
      "click": function($event) {
        _vm.switchTab(0)
      }
    }
  }, [_vm._m(0)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 1
    },
    on: {
      "click": function($event) {
        _vm.switchTab(1)
      }
    }
  }, [_c('div', [_c('label', [_vm._v("工单")]), _c('label', [_c('span', [_vm._v("(")]), _c('span', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.task_num))]), _c('span', [_vm._v(")")])])])]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 2
    },
    on: {
      "click": function($event) {
        _vm.switchTab(2)
      }
    }
  }, [_vm._m(1)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 3
    },
    on: {
      "click": function($event) {
        _vm.switchTab(3)
      }
    }
  }, [_vm._m(2)])]), _c('div', {
    staticClass: "mt44 pt50"
  }, [(_vm.list.length <= 0 && !_vm.isFirst) ? [_vm._m(3)] : _vm._e(), (_vm.list.length > 0) ? [(_vm.activeTab == 1) ? _vm._l((_vm.list1), function(item) {
    return _c('div', {
      staticClass: "list"
    }, [_c('div', {
      staticClass: "item rel",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goDetail(item.href)
        }
      }
    }, [_c('p', {
      staticClass: "time"
    }, [_vm._v("8月10日 10:30 ")]), _c('div', {
      staticClass: "rel info"
    }, [_c('i', {
      class: {
        unreadStatus: !_vm.read
      }
    }), _c('div', {
      staticClass: "detail"
    }, [_c('div', {
      staticClass: "flag"
    }, [_vm._v(_vm._s(item.type))]), _c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.content))]), _c('div', {
      staticClass: "line f12 rel"
    }, [_c('label', {
      staticClass: "gray rel desc"
    }, [_vm._v("终端名称:")]), _c('label', [_vm._v(_vm._s(item.terminal_name))])]), _c('div', {
      staticClass: "line f12 rel"
    }, [_c('label', {
      staticClass: "gray rel desc"
    }, [_vm._v("创建时间:")]), _c('label', [_vm._v(_vm._s(item.terminal_name))])])])])])])
  }) : _vm._e(), (_vm.activeTab == 2) ? _vm._l((_vm.list2), function(item) {
    return _c('div', {
      staticClass: "list"
    }, [_c('div', {
      staticClass: "item rel"
    }, [_c('p', {
      staticClass: "time"
    }, [_vm._v("8月10日 10:30 ")]), _c('div', {
      staticClass: "rel info"
    }, [_c('i', {
      class: {
        unreadStatus: !_vm.read
      }
    }), _vm._m(4, true)])])])
  }) : _vm._e()] : _vm._e()], 2), _c('DataLoading', {
    ref: "loading"
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("预警")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("告警")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("合同")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "empty"
  }, [_c('img', {
    staticClass: "empty-img",
    attrs: {
      "src": "http://img.aimoge.com/FgP3EthHIeL0e8AaMRJSqj5mZKas"
    }
  }), _c('div', {
    staticClass: "empty-info"
  }, [_vm._v("暂无消息通知")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("青山湾花园格格货栈")]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("告警时间:")]), _c('label', [_vm._v("2016-09-21 19:40:30")])]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("告警内容:")]), _c('label', [_vm._v("开门失败")])]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("格口编码:")]), _c('label', [_vm._v("M0420")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18949de6", module.exports)
  }
}

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0d5dad84", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18949de6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-18949de6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(133)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(113),
  /* scopeId */
  "data-v-18949de6",
  /* cssModules */
  null
)
Component.options.__file = "C:\\workspace\\zhichengxitong\\src\\pages\\Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18949de6", Component.options)
  } else {
    hotAPI.reload("data-v-18949de6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Footer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_Footer__);
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
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            pageTitle: '消息中心',
            bodyBg: 'gray',
            btnconfig: {
                isgoback: 0,
                ismsg: 1,
                issearch: 1
            },
            activeTab: 1,
            warn_num: '0',
            task_num: '0',
            alarm_num: '0',
            contract_num: '0',
            filter: '',
            page: 1,
            scroll_load_loading: false,
            isFirst: true,
            scroll_load_end: false,
            "read": false,
            list: [],
            list0: [],
            list1: [],
            list2: [],
            list3: []
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        FooterBar: __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a
    },
    mounted: function mounted() {
        this.switchTab(1);
        window.addEventListener('scroll', this.handleScroll);
    },
    activated: function activated() {
        window.addEventListener('scroll', this.handleScroll);
    },

    watch: {
        '$route': 'fetchData'
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        this;
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        next();
    },
    destroyed: function destroyed() {
        this;
    },

    methods: {
        handleScroll: function handleScroll() {
            //滚动加载监听事件
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1 && !this.scroll_load_loading) {
                this.fetchData();
            }
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
            this.scroll_load_end = true;
            this.$refs.loading && this.$refs.loading.showEnd();
        },
        switchTab: function switchTab(index) {
            if (!(this.$route.path == '/message')) {
                return false;
            }
            if (index == 0 || index == 2 || index == 3) {
                _util.showErrorTip('敬请期待！');
                return false;
            }
            index > -1 ? this.activeTab = index : void 0;
            this.list = [];
            this.list0 = [];
            this.list1 = [];
            this.list2 = [];
            this.list3 = [];
            this.page = 1;
            this.isFirst = true;
            this.fetchData();
        },
        fetchData: function fetchData() {
            var that = this;
            if (that.scroll_load_loading) {
                return false;
            }
            if (that.scroll_load_end) {
                return false;
            }
            switch (that.activeTab) {
                case 0:
                    that.filter = 'warn';
                    break;
                case 1:
                    that.filter = 'tasks';
                    break;
                case 2:
                    that.filter = 'alarm';
                    break;
                case 3:
                    that.filter = 'contract';
                    break;
                default:
                    that.filter = 'tasks';
                    break;
            }
            that.showLoading();
            axios.get(ajaxUrls.messages + that.filter + "?page=" + that.page).then(function (rsp) {
                switch (that.activeTab) {
                    case 0:
                        that.list0 = that.list0.concat(rsp.data.data.news);
                        that.list = that.list0;
                        break;
                    case 1:
                        that.list1 = that.list1.concat(rsp.data.data.news);
                        that.list = that.list1;
                        break;
                    case 2:
                        that.list2 = that.list2.concat(rsp.data.data.news);
                        that.list = that.list2;
                        break;
                    case 3:
                        that.list3 = that.list3.concat(rsp.data.data.news);
                        that.list = that.list3;
                        break;
                    default:
                        that.list1 = that.list1.concat(rsp.data.data.news);
                        that.list = that.list1;
                        break;
                }
                that.isFirst = false;
                that.page += 1;
                if (that.list.length < 16) {
                    that.showLoadEnd();
                } else {
                    that.hideLoading();
                }
            });
        },
        goDetail: function goDetail(href) {
            this.url('/order/185');
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3), __webpack_require__(4)))

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.message .pt50[data-v-18949de6] {\n  padding-top: 43px;\n}\n.message .nav[data-v-18949de6] {\n  background-color: #fafafa;\n  border-bottom: 1px #cfcfcf solid;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.message .nav .num[data-v-18949de6] {\n    color: #d75a48;\n}\n.message .nav .tab[data-v-18949de6] {\n    width: 25%;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n}\n.message .nav .tab[data-v-18949de6]:active {\n      background-color: #eee;\n}\n.message .nav .tab.active[data-v-18949de6] {\n      color: #07689f;\n}\n.message .nav .tab.active .num[data-v-18949de6] {\n        color: #07689f;\n}\n.message .nav .tab.active[data-v-18949de6]:after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        border: 1px #07689f solid;\n        width: 40px;\n        margin-left: -20px;\n}\n.message .empty[data-v-18949de6] {\n  padding-top: 64px;\n}\n.message .empty .empty-img[data-v-18949de6] {\n    display: block;\n    width: 144px;\n    height: 144px;\n    margin: 0 auto 16px;\n}\n.message .empty .empty-info[data-v-18949de6] {\n    font-size: 14px;\n    color: #6e6e6e;\n    text-align: center;\n}\n.message .item[data-v-18949de6] {\n  padding: 24px 16px 0 16px;\n}\n.message .item .time[data-v-18949de6] {\n    display: block;\n    width: 135px;\n    height: 18px;\n    line-height: 18px;\n    margin: 0 auto 8px;\n    text-align: center;\n    background-color: #cfcfcf;\n    border-radius: 10px;\n    color: #fff;\n    font-size: 12px;\n}\n.message .item .gray[data-v-18949de6] {\n    color: #6e6e6e;\n}\n.message .item .flag[data-v-18949de6] {\n    font-size: 14px;\n    color: #07689f;\n}\n.message .item .info[data-v-18949de6] {\n    padding-left: 16px;\n}\n.message .item .info .unreadStatus[data-v-18949de6] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 8px;\n      width: 8px;\n      border-radius: 100%;\n      background-color: #d75a48;\n}\n.message .item .info .detail[data-v-18949de6] {\n      background-color: #fff;\n      border-radius: 10px;\n      padding: 8px 16px;\n      color: #323232;\n}\n.message .item .info .detail .title[data-v-18949de6] {\n        font-size: 14px;\n        margin-bottom: 8px;\n        font-weight: 700;\n}\n.message .item .info .detail .line[data-v-18949de6] {\n        padding-left: 60px;\n}\n.message .item .info .detail .desc[data-v-18949de6] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        width: 60px;\n        height: 14px;\n}\n", ""]);

// exports


/***/ })

});