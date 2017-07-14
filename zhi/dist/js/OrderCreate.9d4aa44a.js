webpackJsonp([3],{

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-order"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle
    }
  }), _c('div', {
    staticClass: "mt44 pb60",
    staticStyle: {
      "margin-top": "52px"
    }
  }, [_c('Field', {
    attrs: {
      "tag": "工单类型",
      "placeholder": "请选择（必选）",
      "optionJsonConfig": {
        valuename: 'id',
        textname: 'name',
        idname: 'id'
      },
      "options": _vm.ordertypes,
      "selectText": _vm.ordertype,
      "select": true,
      "arrow": true
    },
    on: {
      "input": _vm.getID
    },
    model: {
      value: (_vm.ordertype),
      callback: function($$v) {
        _vm.ordertype = $$v
      },
      expression: "ordertype"
    }
  }), _c('Field', {
    attrs: {
      "tag": "分类",
      "placeholder": "请选择（必选）",
      "optionJsonConfig": {
        valuename: 'id',
        textname: 'name',
        idname: 'id'
      },
      "options": _vm.scenes,
      "selectText": _vm.scene,
      "select": true,
      "arrow": true
    },
    on: {
      "input": _vm.getValue,
      "changeCallback": _vm.testChange
    },
    model: {
      value: (_vm.scene),
      callback: function($$v) {
        _vm.scene = $$v
      },
      expression: "scene"
    }
  }), _c('Field', {
    attrs: {
      "tag": "终端名称",
      "placeholder": "请输入终端名称（必填）",
      "input": true,
      "readonly": "readonly",
      "autocomplete": "new-password"
    },
    on: {
      "changeCallback": _vm.goInfo
    },
    model: {
      value: (_vm.terminalName),
      callback: function($$v) {
        _vm.terminalName = $$v
      },
      expression: "terminalName"
    }
  }), _c('Field', {
    attrs: {
      "tag": "标题",
      "input": true
    },
    model: {
      value: (_vm.title),
      callback: function($$v) {
        _vm.title = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "title"
    }
  }), _c('Field', {
    attrs: {
      "tag": "问题描述",
      "placeholder": "请输入问题描述",
      "textarea": true,
      "autocomplete": "new-password"
    },
    model: {
      value: (_vm.desc),
      callback: function($$v) {
        _vm.desc = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "desc"
    }
  }), _c('Field', {
    attrs: {
      "tag": "超时设置",
      "placeholder": "请选择超时间",
      "input": true,
      "type": "datetime-local"
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  }), _c('Field', {
    attrs: {
      "tag": "报修人",
      "placeholder": "手机号",
      "input": true
    },
    model: {
      value: (_vm.report),
      callback: function($$v) {
        _vm.report = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "report"
    }
  }), _c('Field', {
    attrs: {
      "tag": "通知用户",
      "placeholder": "用户手机号(非必填)",
      "input": true
    },
    model: {
      value: (_vm.customer_mobile),
      callback: function($$v) {
        _vm.customer_mobile = (typeof $$v === 'string' ? $$v.trim() : $$v)
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
     require("vue-hot-reload-api").rerender("data-v-2a68d2b9", module.exports)
  }
}

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("31bdc1a9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2a68d2b9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderCreate.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2a68d2b9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderCreate.vue");
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
__webpack_require__(135)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(115),
  /* scopeId */
  "data-v-2a68d2b9",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\OrderCreate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrderCreate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a68d2b9", Component.options)
  } else {
    hotAPI.reload("data-v-2a68d2b9", Component.options)
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
        "value": o.id
      }
    }, [_vm._v(_vm._s(o.name))])
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

/***/ 83:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            bodyBg: 'dark',
            pageTitle: '创建/修改工单',
            ordertype: '',
            ordertypes: [],
            terminalName: "",
            scene: '',
            scenes: [],
            // fault: '（系统根据现场现象自动选择）',
            desc: '',
            val: '',
            project_id: '',
            state: '',
            flag: false,
            date: '',
            input: true,
            title: '',
            report: '',
            customer_mobile: ''
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        Field: __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default.a,
        SubmitBtn: __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default.a
    },
    created: function created() {
        window.canGoBack = true;
        window.origin = null;
        //请求数据
        if (localStorage.terminal_name) {
            this.terminalName = "";
        } else {
            window.localStorage.setItem('terminal_name', "");
            window.localStorage.setItem('terminal_code', "");
        }
        //获取现场现象
        this.getInfo();
    },
    activated: function activated() {
        window.canGoBack = true;
        window.origin = null;
    },

    watch: {
        '$route': function $route() {
            if (this.$route.path == '/order/edit') {
                //清空页面内容
                this.ordertypes = [];
                this.scene = '请选择（必选）';
                this.scenes = [];
                // this.fault = '';
                this.date = '';
                this.desc = '';
                this.title = '';
                this.report = '';
                this.customer_mobile = '';
                this.getInfo();
                localStorage.terminal_name = '';
            }
        }
    },
    methods: {
        submitFun: function submitFun() {
            if (this.ordertype.indexOf('选择') > -1) {
                _util.showErrorTip('请选择工单类型！');
                return false;
            };
            if (!this.terminalName) {
                _util.showErrorTip('请输入终端名称！');
                return false;
            };
            if (this.scene.indexOf('选择') > -1) {
                _util.showErrorTip('请选择分类！');
                return false;
            };
            if (!this.desc) {
                _util.showErrorTip('请输入问题描述！');
                return false;
            };
            // if (!this.date) {
            //     _util.showErrorTip('请输入超时时间！');
            //     return false;
            // };
            if (!this.report) {
                _util.showErrorTip('请输入保修人手机号！');
                return false;
            };
            var project_id = this.project_id,
                terminal_code = localStorage.terminal_code,
                customer_mobile = this.customer_mobile;
            that = this, data = {
                project_id: this.project_id,
                pid: 0,
                type: this.val,
                terminal_code: localStorage.terminal_code,
                title: this.title,
                content: this.desc,
                report: this.report,
                priority: 1,
                deadline: this.setDate(this.date)
            };
            axios.post(ajaxUrls.task, {
                project_id: project_id,
                terminal_code: terminal_code,
                customer_mobile: customer_mobile,
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
                    //                        that.url('/')
                } else {
                    _util.showErrorTip(rsp.data.msg);
                }
            }).catch(function (error) {
                _util.hideSysLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },

        /*testChange() {
            for (let i = 0; i < this.scenes.length; i++) {
                for (let item in this.scenes[i]) {
                    if (item == 'id') {
                        if (this.scenes[i].id == this.val) {
                            this.state = this.scenes[i].level
                            switch (this.state) {
                                case 1:
                                    this.fault = '一级故障'
                                    break;
                                case 2:
                                    this.fault = '二级故障'
                                    break;
                                case 3:
                                    this.fault = '三级故障'
                                    break;
                                default:
                                    this.fault = '一级故障'
                                    break;
                            }
                        }
                    }
                }
            }
        },*/
        //获取工单类型ID
        getID: function getID(val) {
            this.project_id = val;
        },
        getValue: function getValue(val) {
            this.val = val;
        },
        goInfo: function goInfo() {
            this.url('/searchterminal');
        },
        setDate: function setDate(str) {
            var x = str,
                year = x.substring(0, 4),
                month = x.substring(5, 7),
                day = x.substring(8, 10),
                hour = x.substring(11, 13),
                minute = x.substring(14),
                format = year + "-" + day + "-" + month + ' ' + hour + ':' + minute;
            if (_util.isIOS()) {
                format = format.substring(0, 16);
            }
            return format;
        },
        setData: function setData(strMap) {
            var arry = [];
            for (var i = 0; i > strMap.length; i++) {
                var obj = Object.create(null);
                for (var j = 0; j > Object.keys(strMap).length; j++) {
                    obj[id] = Object.keys(strMap)[j];
                }
                arry.push(obj);
            }
            return arry;
        },
        getInfo: function getInfo() {
            this.ordertypes = [{
                id: '1',
                name: '柜子运维'
            }];
            this.scenes = [{
                id: '100',
                name: '黑屏'
            }, {
                id: '111',
                name: '黑斑'
            }, {
                id: '114',
                name: '屏幕亮度过暗'
            }, {
                id: '121',
                name: '白屏或花屏'
            }, {
                id: '125',
                name: '闪屏'
            }, {
                id: '128',
                name: '卡屏'
            }, {
                id: '131',
                name: '触摸不灵'
            }, {
                id: '140',
                name: '柜门无法关闭'
            }, {
                id: '128',
                name: '卡屏'
            }, {
                id: '131',
                name: '触摸不灵'
            }, {
                id: '140',
                name: '柜门无法关闭'
            }, {
                id: '151',
                name: '系统重复重启'
            }, {
                id: '158',
                name: '扫描器不能正常工作'
            }, {
                id: '164',
                name: '系统错误,请稍后再试！'
            }, {
                id: '170',
                name: '调取监控（格格）'
            }, {
                id: '179',
                name: '需更改地址描述'
            }, {
                id: '182',
                name: '占柜需清理对应格口'
            }, {
                id: '185',
                name: '其他'
            }, {
                id: '188',
                name: '网络问题'
            }, {
                id: '202',
                name: '调取监控（裹裹）'
            }];
            this.terminalName = localStorage.terminal_name;
            var that = this;
            //获取现场现象
            //                _util.showSysLoading();
            //                getAjaxRequest("order_cache", ajaxUrls.option, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function(response) {
            //                    _util.hideSysLoading();
            //                    if (response.status == 0) {
            //                        let arr = response.type['1']['0'];
            //                    } else {
            //                        if (response.msg) _util.showErrorTip(response.msg);
            //                    }
            //                }, function(error) {
            //                    _util.hideSysLoading();
            //                    _util.showErrorTip('您的网络可能出了点问题:(');
            //                });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.filed[data-v-2a68d2b9] {\n  background-color: #fff;\n  min-height: 54px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  margin-top: 8px;\n}\n.filed .text[data-v-2a68d2b9] {\n    left: 0;\n    top: 0;\n    width: 88px;\n    padding: 16px 0;\n}\n.filed .box[data-v-2a68d2b9] {\n    margin-left: 88px;\n    min-height: 54px;\n}\n.input[data-v-2a68d2b9] {\n  font-size: 16px;\n  readonly: \"readonly\";\n}\n", ""]);

// exports


/***/ }

});