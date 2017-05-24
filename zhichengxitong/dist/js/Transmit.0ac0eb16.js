webpackJsonp([5],{

/***/ 120:
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
      staticClass: "box f16 rel",
      on: {
        "click": function($event) {
          _vm.deal(item)
        }
      }
    }, [_vm._v(_vm._s(item.name))])]) : _vm._e()
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd55e51e", module.exports)
  }
}

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e5d48bfe", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bd55e51e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Transmit.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bd55e51e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Transmit.vue");
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
__webpack_require__(136)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  "data-v-bd55e51e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\Transmit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Transmit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd55e51e", Component.options)
  } else {
    hotAPI.reload("data-v-bd55e51e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 47:
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

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 50px 0 50px;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n", ""]);

// exports


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(50),
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

/***/ 50:
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
var content = __webpack_require__(48);
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

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls, _util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search__ = __webpack_require__(49);
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




/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            pageTitle: '转发',
            username: '',
            result: [],
            userID: ''
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
                var that = this;
                axios.get(ajaxUrls.user + that.username).then(function (rsp) {
                    that.result = rsp.data.data;
                });
            }
        },
        deal: function deal(item) {
            this.userID = item.user_id;
            console.log(this.userID);
            var user_id = this.userID,
                action = 'forward',
                task_id = localStorage.task_id,
                that = this;
            axios.post(ajaxUrls.orderinfo + task_id + '/deal', {
                user_id: user_id,
                action: action
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (rsp) {
                _util.hideSysLoading();
                var that = this;
                if (rsp.data.status == 0) {
                    _util.showErrorTip(rsp.data.msg);
                    window.history.go(-1);
                } else {
                    _util.showErrorTip(rsp.data.msg);
                }
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4)))

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.empty[data-v-bd55e51e] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-bd55e51e] {\n  padding: 0 0 0 16px;\n  color: #4d4d4d;\n}\n.item[data-v-bd55e51e]:active {\n    background-color: #eee;\n}\n.item .box[data-v-bd55e51e] {\n    padding: 16px 0;\n    border-bottom: 1px #cfcfcf solid;\n}\n", ""]);

// exports


/***/ }

});