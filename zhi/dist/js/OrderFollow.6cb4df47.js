webpackJsonp([2],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.border[data-v-5ffa0aee] {\n  border-bottom: 1px solid #ccc;\n  border-top: 1px solid #ccc;\n}\n", ""]);

// exports


/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-order"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle
    }
  }), _c('div', {
    staticStyle: {
      "margin-top": "50px",
      "padding-left": "16px",
      "color": "#828282"
    }
  }, [_vm._v(_vm._s(_vm.name))]), _c('div', {
    staticClass: "pb60"
  }, [_c('Field', {
    staticClass: "border",
    attrs: {
      "tag": "跟进说明",
      "placeholder": "可以补充最新故障说明或者问题描述或者给出预处理时间",
      "textarea": true
    },
    model: {
      value: (_vm.content),
      callback: function($$v) {
        _vm.content = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "content"
    }
  }), _c('Field', {
    staticClass: "border",
    attrs: {
      "tag": "通知用户",
      "placeholder": "请输入用户手机号（非必填）",
      "input": true
    },
    model: {
      value: (_vm.customer_mobile),
      callback: function($$v) {
        _vm.customer_mobile = $$v
      },
      expression: "customer_mobile"
    }
  })], 1), _c('SubmitBtn', {
    attrs: {
      "text": "提交",
      "theme": "white"
    },
    on: {
      "submitCallback": _vm.submitFun
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5ffa0aee", module.exports)
  }
}

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4356186d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5ffa0aee\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderFollow.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5ffa0aee\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderFollow.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(143)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  "data-v-5ffa0aee",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\OrderFollow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrderFollow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ffa0aee", Component.options)
  } else {
    hotAPI.reload("data-v-5ffa0aee", Component.options)
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

/* harmony default export */ exports["default"] = {
    props: ["theme", "text"]
};

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.submits[data-v-530e9782] {\n  border-top: 1px #cfcfcf solid;\n  background-color: #f9f9f9;\n  color: #323232;\n  display: block;\n  width: 100%;\n  height: 51px;\n  line-height: 51px;\n  color: #333;\n  font-size: 16px;\n  left: 0;\n  bottom: 0;\n  z-index: 9000;\n}\n.submits.white[data-v-530e9782] {\n    background-color: #fff;\n    color: #07689f;\n}\n.submits[data-v-530e9782]:active {\n    background-color: #eee;\n}\n", ""]);

// exports


/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  "data-v-530e9782",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\elements\\SubmitBtn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SubmitBtn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-530e9782", Component.options)
  } else {
    hotAPI.reload("data-v-530e9782", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "submits center fixed",
    class: _vm.theme,
    on: {
      "click": function($event) {
        _vm.$emit('submitCallback')
      }
    }
  }, [_vm._v(_vm._s(_vm.text))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-530e9782", module.exports)
  }
}

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("4f4b56a4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-530e9782\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubmitBtn.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-530e9782\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubmitBtn.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 61:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ["tag", "value", "type", "placeholder", "maxlength", "readonly", "autocomplete", "input", "textarea", "p", "pvalue", "arrow", "select", "selectText", "options", "optionJsonConfig", "id", "value"],
    methods: {
        setParentVar: function setParentVar(value) {
            this.$emit('input', value.toString().trim());
        },
        getOptionKey: function getOptionKey(value, optionJsonConfig, options) {
            var result = null;
            for (var i = 0, len = options.length; i < len; i++) {
                if (options[i][optionJsonConfig.idname] == value) {
                    result = options[i][optionJsonConfig.textname];
                    break;
                }
            }
            if (!result && !value.toString().trim()) {
                return this.placeholder || '请选择（必选）';
            }
            return result || value;
        }
    }
};

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.filed[data-v-4c0b8495] {\n  background-color: #fff;\n  min-height: 54px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  margin-top: 8px;\n}\n.filed.textarea[data-v-4c0b8495] {\n    height: 116px;\n}\n.filed.textarea .box[data-v-4c0b8495] {\n      height: 116px;\n}\n.filed .text[data-v-4c0b8495] {\n    left: 0;\n    top: 0;\n    width: 88px;\n    padding: 16px 0;\n}\n.filed .box[data-v-4c0b8495] {\n    margin-left: 88px;\n    min-height: 54px;\n}\n.filed .box input[data-v-4c0b8495] {\n      height: 30px;\n      line-height: 30px;\n      width: 99%;\n      border: none;\n      position: relative;\n      top: 13px;\n      left: 0;\n      font-size: 13px;\n}\n.filed .box textarea[data-v-4c0b8495] {\n      height: 87px;\n      width: 99%;\n      position: relative;\n      top: 20px;\n      border: none;\n      resize: none;\n      color: #323232;\n      font-size: 13px;\n}\n.filed .box p[data-v-4c0b8495] {\n      margin: 0;\n      min-height: 30px;\n      line-height: 22px;\n      font-size: 13px;\n      text-align: right;\n      padding: 0 16px 22px 0;\n      top: 17px;\n      left: 0;\n}\n.filed .select[data-v-4c0b8495] {\n    height: 54px;\n}\n.filed .select label[data-v-4c0b8495] {\n      display: inline-block;\n      height: 54px;\n      line-height: 54px;\n      top: 0;\n      right: 0;\n      color: #323232;\n      font-size: 13px;\n      width: 100%;\n      text-align: right;\n      padding-right: 38px;\n      z-index: 300;\n}\n.filed .select select[data-v-4c0b8495] {\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 54px;\n      background: none;\n      color: transparent;\n      border: none;\n      outline: none;\n      appearance: none;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      z-index: 301;\n}\n.filed .select select option[data-v-4c0b8495] {\n        color: #333;\n}\n.filed .select.arrow[data-v-4c0b8495]:after {\n      content: '';\n      background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n      background-size: 100% auto;\n      display: block;\n      height: 28px;\n      width: 28px;\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      margin-top: -14px;\n}\n", ""]);

// exports


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(65)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  "data-v-4c0b8495",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\elements\\Field.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Field.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c0b8495", Component.options)
  } else {
    hotAPI.reload("data-v-4c0b8495", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "filed rel",
    class: {
      textarea: _vm.textarea
    },
    on: {
      "input": function($event) {
        _vm.setParentVar($event.target.value)
      }
    }
  }, [_c('div', {
    staticClass: "text abs center"
  }, [_vm._v(_vm._s(_vm.tag))]), _c('div', {
    staticClass: "box rel"
  }, [(_vm.p) ? _c('p', {
    staticClass: "rel"
  }, [_vm._v(_vm._s(_vm.pvalue))]) : _vm._e(), (_vm.input) ? _c('input', {
    attrs: {
      "type": _vm.type || 'text',
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autocomplete
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": function($event) {
        _vm.$emit('changeCallback')
      }
    }
  }) : _vm._e(), (_vm.textarea) ? _c('textarea', {
    attrs: {
      "placeholder": _vm.placeholder,
      "autocomplete": _vm.autocomplete,
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": function($event) {
        _vm.$emit('changeCallback')
      }
    }
  }) : _vm._e(), (_vm.select) ? _c('div', {
    staticClass: "select rel",
    class: {
      arrow: _vm.arrow
    }
  }, [_c('label', {
    staticClass: "abs ellipsis"
  }, [_vm._v(_vm._s(_vm.getOptionKey(_vm.selectText, _vm.optionJsonConfig, _vm.options)))]), _c('select', {
    staticClass: "abs",
    on: {
      "change": function($event) {
        _vm.$emit('changeCallback')
      }
    }
  }, [_c('option', [_vm._v("请选择（必选）")]), _vm._l((_vm.options), function(o) {
    return _c('option', {
      domProps: {
        "value": o[_vm.id]
      }
    }, [_vm._v(_vm._s(o[_vm.value]))])
  })], 2)]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c0b8495", module.exports)
  }
}

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6004a80a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c0b8495\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Field.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c0b8495\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Field.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_elements_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//    import Upload from '../components/common/Upload'


/*Upload(id="up1", ref="up1")*/
/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            bodyBg: 'gray',
            pageTitle: '跟进',
            name: '',
            customer_mobile: '',
            content: '',
            _id: this.$route.query._id || ''

        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        Field: __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default.a,
        SubmitBtn: __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default.a
    },
    mixins: [__webpack_require__(6)],
    created: function created() {
        window.canGoBack = true;
        window.origin = null;
        this.getInfo();
    },
    activated: function activated() {
        window.canGoBack = true;
        window.origin = null;
    },

    watch: {
        '$route': function $route() {
            if (this.$route.path == '/order/follow') {
                this.customer_mobile = '';
                this.content = '';
                this.getInfo();
            }
        }
    },
    methods: {
        submitFun: function submitFun() {
            if (!this.content) {
                _util.showErrorTip('请输入跟进说明');
            }
            var that = this,
                data = {
                customer_mobile: this.customer_mobile,
                content: this.content
            };
            axios.post(ajaxUrls.orderinfo + that.$route.query._id + '/deal', {
                action: 'commit',
                data: data
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (rsp) {
                _util.hideSysLoading();
                if (rsp.data.status == 0) {
                    _util.showErrorTip(rsp.data.msg);
                    that.url('/');
                } else {
                    _util.showErrorTip(rsp.data.msg);
                }
            }).catch(function (error) {
                _util.hideSysLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },

        //获取信息
        getInfo: function getInfo() {
            var that = this;
            // 获取当前工单信息
            getAjaxRequest("order_cache", ajaxUrls.orderinfo + that.$route.query._id, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function (response) {
                if (response.status == 0) {
                    that.name = response.data.terminal_name;
                } else {
                    if (response.msg) _util.showErrorTip(response.msg);
                }
            }, function (error) {
                _util.showErrorTip('当前无网络，请检查您的网络状态！');
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }

});