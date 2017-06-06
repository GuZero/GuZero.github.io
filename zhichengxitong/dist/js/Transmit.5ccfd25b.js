webpackJsonp([9],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.empty[data-v-687eddcc] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-687eddcc] {\n  padding: 0 0 0 16px;\n  color: #4d4d4d;\n}\n.item[data-v-687eddcc]:active {\n    background-color: #eee;\n}\n.item .box[data-v-687eddcc] {\n    padding: 16px 0;\n    border-bottom: 1px #cfcfcf solid;\n}\n", ""]);

// exports


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

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
      "placeholder": "搜索姓名（如输入\"何\"）"
    },
    on: {
      "changeCallback": _vm.searchByKey
    },
    model: {
      value: (_vm.username),
      callback: function($$v) {
        _vm.username = $$v
      },
      expression: "username"
    }
  }), _c('div', {
    staticClass: "mt44 pt50 pb60"
  }, [(!_vm.result.length) ? _c('div', {
    staticClass: "empty f16 rel"
  }, [_vm._v("无搜索结果")]) : _vm._e(), _vm._l((_vm.result), function(item) {
    return (_vm.result.length) ? _c('div', {
      staticClass: "item rel"
    }, [_c('div', {
      staticClass: "box f16 rel"
    }, [_vm._v(_vm._s(item.username))])]) : _vm._e()
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-687eddcc", module.exports)
  }
}

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("33fd8cea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-687eddcc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Transmit.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-687eddcc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Transmit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(143)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(122),
  /* scopeId */
  "data-v-687eddcc",
  /* cssModules */
  null
)
Component.options.__file = "C:\\workspace\\zhichengxitong\\src\\pages\\Transmit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Transmit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-687eddcc", Component.options)
  } else {
    hotAPI.reload("data-v-687eddcc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
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
    props: ["placeholder"],
    methods: {
        setParentVar: function setParentVar(value) {
            this.$emit('input', value);
        }
    }
});

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.search[data-v-42e0725c] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input[data-v-42e0725c] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 50px 0 50px;\n}\n.input[data-v-42e0725c]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-42e0725c] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  "data-v-42e0725c",
  /* cssModules */
  null
)
Component.options.__file = "C:\\workspace\\zhichengxitong\\src\\components\\common\\Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42e0725c", Component.options)
  } else {
    hotAPI.reload("data-v-42e0725c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

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
     require("vue-hot-reload-api").rerender("data-v-42e0725c", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6aa7a041", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-42e0725c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-42e0725c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_Search__);
//
//
//
//
//
//
//
//
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
            pageTitle: '转发',
            username: '',
            result: []
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        Search: __WEBPACK_IMPORTED_MODULE_1__components_common_Search___default.a
    },
    mounted: function mounted() {},

    methods: {
        searchByKey: function searchByKey() {
            if (!this.username) {
                this.result = [];
            } else {
                this.result = [{
                    _id: '00001',
                    username: 'jerry'
                }, {
                    _id: '00002',
                    username: 'jsonay'
                }, {
                    _id: '00003',
                    username: 'Linda'
                }];
            }
        }
    }
});

/***/ })

});