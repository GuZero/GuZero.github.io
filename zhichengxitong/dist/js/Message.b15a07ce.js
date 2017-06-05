webpackJsonp([13],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.message .pt50[data-v-aff66454] {\n  padding-top: 43px;\n}\n.message .nav[data-v-aff66454] {\n  background-color: #fafafa;\n  border-bottom: 1px #cfcfcf solid;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.message .nav .num[data-v-aff66454] {\n    color: #d75a48;\n}\n.message .nav .tab[data-v-aff66454] {\n    width: 25%;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n}\n.message .nav .tab[data-v-aff66454]:active {\n      background-color: #eee;\n}\n.message .nav .tab.active[data-v-aff66454] {\n      color: #07689f;\n}\n.message .nav .tab.active .num[data-v-aff66454] {\n        color: #07689f;\n}\n.message .nav .tab.active[data-v-aff66454]:after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        border: 1px #07689f solid;\n        width: 40px;\n        margin-left: -20px;\n}\n.message .empty[data-v-aff66454] {\n  padding-top: 64px;\n}\n.message .empty .empty-img[data-v-aff66454] {\n    display: block;\n    width: 144px;\n    height: 144px;\n    margin: 0 auto 16px;\n}\n.message .empty .empty-info[data-v-aff66454] {\n    font-size: 14px;\n    color: #6e6e6e;\n    text-align: center;\n}\n.message .item[data-v-aff66454] {\n  padding: 24px 16px 0 16px;\n}\n.message .item .time[data-v-aff66454] {\n    display: block;\n    width: 135px;\n    height: 18px;\n    line-height: 18px;\n    margin: 0 auto 8px;\n    text-align: center;\n    background-color: #cfcfcf;\n    border-radius: 10px;\n    color: #fff;\n    font-size: 12px;\n}\n.message .item .gray[data-v-aff66454] {\n    color: #6e6e6e;\n}\n.message .item .flag[data-v-aff66454] {\n    font-size: 14px;\n    color: #07689f;\n}\n.message .item .info[data-v-aff66454] {\n    padding-left: 16px;\n}\n.message .item .info .unreadStatus[data-v-aff66454] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 8px;\n      width: 8px;\n      border-radius: 100%;\n      background-color: #d75a48;\n}\n.message .item .info .detail[data-v-aff66454] {\n      background-color: #fff;\n      border-radius: 10px;\n      padding: 8px 16px;\n      color: #323232;\n}\n.message .item .info .detail .title[data-v-aff66454] {\n        font-size: 14px;\n        margin-bottom: 8px;\n        font-weight: 700;\n}\n.message .item .info .detail .line[data-v-aff66454] {\n        padding-left: 60px;\n}\n.message .item .info .detail .desc[data-v-aff66454] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        width: 60px;\n        height: 14px;\n}\n", ""]);

// exports


/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

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
        _vm.fetchData(0)
      }
    }
  }, [_vm._m(0)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 1
    },
    on: {
      "click": function($event) {
        _vm.fetchData(1)
      }
    }
  }, [_c('div', [_c('label', [_vm._v("工单")]), _c('label', [_c('span', [_vm._v("(")]), _c('span', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.order_num))]), _c('span', [_vm._v(")")])])])]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 2
    },
    on: {
      "click": function($event) {
        _vm.fetchData(2)
      }
    }
  }, [_c('div', [_c('label', [_vm._v("告警")]), _c('label', [_c('span', [_vm._v("(")]), _c('span', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.warn_num))]), _c('span', [_vm._v(")")])])])]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 3
    },
    on: {
      "click": function($event) {
        _vm.fetchData(3)
      }
    }
  }, [_vm._m(1)])]), _c('div', {
    staticClass: "mt44 pt50 pb60"
  }, [(_vm.list.length <= 0) ? [_vm._m(2)] : [(_vm.activeTab == 1) ? [_c('div', {
    staticClass: "item rel"
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
  }, [_vm._v("运维工单")]), _c('div', {
    staticClass: "title"
  }, [_vm._v("系统发起的工单，待你处理")]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("终端名称:")]), _c('label', [_vm._v("青山湾花园格格货栈")])]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("创建时间:")]), _c('label', [_vm._v("2016-09-21 19:40:30")])])])])]), _c('div', {
    staticClass: "item rel"
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
  }, [_vm._v("运维工单")]), _c('div', {
    staticClass: "title"
  }, [_vm._v("系统发起的工单，待你处理")]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("终端名称:")]), _c('label', [_vm._v("青山湾花园格格货栈")])]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("创建时间:")]), _c('label', [_vm._v("2016-09-21 19:40:30")])])])])])] : _vm._e(), (_vm.activeTab == 2) ? [_c('div', {
    staticClass: "item rel"
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
  }, [_vm._v("格口编码:")]), _c('label', [_vm._v("M0420")])])])])]), _c('div', {
    staticClass: "item rel"
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
  }, [_vm._v("格口编码:")]), _c('label', [_vm._v("M0420")])])])])])] : _vm._e()]], 2), _c('DataLoading', {
    ref: "loading"
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("预警")]), _c('label')])
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
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aff66454", module.exports)
  }
}

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2e9794b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-aff66454\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-aff66454\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(148)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(129),
  /* scopeId */
  "data-v-aff66454",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aff66454", Component.options)
  } else {
    hotAPI.reload("data-v-aff66454", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            pageTitle: '消息中心',
            bodyBg: 'gray',
            btnconfig: {
                isgoback: 0,
                ismsg: 1,
                issearch: 1
            },
            footerconfig: {
                isorder: true
            },
            activeTab: 2,
            order_num: '0',
            warn_num: '0',
            filter: '',
            page: 1,
            scroll_load_loading: false,
            scroll_load_end: false,
            "read": false,
            list: [],
            list1: [],
            list2: [{
                "read": false,
                "terminal_name": "青山湾花园格格货栈", // 终端名称
                "warning_at": "2016-09-21", // 告警时间
                "content": "开门失败", // 告警内容
                "encoding": "M0420" // 格口编码
            }]
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        FooterBar: __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a
    },
    mounted: function mounted() {
        this.fetchData(1);
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
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                // this.fetchData();
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
            this.$refs.loading && this.$refs.loading.showEnd();
        },
        fetchData: function fetchData(index) {
            if (index == 0 || index == 3) {
                _util.showErrorTip('敬请期待！');
                return false;
            }
            index > -1 ? this.activeTab = index : void 0;
            //getDataByTabIndex post ajax
            var that = this;
            that.page = 1;
            that.list = [];
            that.hideLoading();
        },
        goDetail: function goDetail(_id) {
            this.flag = false;
            this.url('/order/' + _id);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }

});