webpackJsonp([13],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.nav[data-v-aff66454] {\n  background-color: #fff;\n  border-bottom: 1px #cfcfcf solid;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.nav .tab[data-v-aff66454] {\n    width: 25%;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n}\n.nav .tab[data-v-aff66454]:active {\n      background-color: #eee;\n}\n.nav .tab.active[data-v-aff66454] {\n      color: #07689f;\n}\n.nav .tab.active[data-v-aff66454]:after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        border: 1px #07689f solid;\n        width: 40px;\n        margin-left: -20px;\n}\n", ""]);

// exports


/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle
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
  }, [_vm._m(1)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 2
    },
    on: {
      "click": function($event) {
        _vm.fetchData(2)
      }
    }
  }, [_c('div', [_c('label', [_vm._v("我的待办")]), _c('label', [_vm._v("(" + _vm._s(_vm.num) + ")")])])]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 3
    },
    on: {
      "click": function($event) {
        _vm.fetchData(3)
      }
    }
  }, [_vm._m(2)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("所有任务")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("我创建的")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("我的已办")]), _c('label')])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            bodyBg: 'gray',
            pageTitle: '消息中心',
            activeTab: 2
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a
    },
    methods: {
        fetchData: function fetchData(index) {
            index > -1 ? this.activeTab = index : void 0;
            //getDataByTabIndex post ajax
            var that = this;
            that.page = 1;
            that.list = [];
            that.$refs.loading && that.$refs.loading.showLoading();
        }
    }
};

/***/ }

});