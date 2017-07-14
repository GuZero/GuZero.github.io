webpackJsonp([7],{

/***/ 126:
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
    attrs: {
      "tag": "现场现象",
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
      "changeCallback": _vm.change
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
      "tag": "问题原因",
      "placeholder": "请选择（必选）",
      "optionJsonConfig": {
        valuename: 'name',
        textname: 'name',
        idname: 'id'
      },
      "options": _vm.problems,
      "selectText": _vm.problem,
      "select": true,
      "arrow": true
    },
    on: {
      "input": _vm.getValue1,
      "changeCallback": _vm.change1
    },
    model: {
      value: (_vm.problem),
      callback: function($$v) {
        _vm.problem = $$v
      },
      expression: "problem"
    }
  }), _c('Field', {
    attrs: {
      "tag": "故障分类",
      "placeholder": "请选择（必选）",
      "optionJsonConfig": {
        valuename: 'id',
        textname: 'name',
        idname: 'id'
      },
      "options": _vm.categroys,
      "selectText": _vm.categroy,
      "select": true,
      "arrow": true
    },
    on: {
      "input": _vm.getValue2
    },
    model: {
      value: (_vm.categroy),
      callback: function($$v) {
        _vm.categroy = $$v
      },
      expression: "categroy"
    }
  }), _c('Field', {
    attrs: {
      "tag": "处理结果",
      "placeholder": "请输入处理结果（必填）",
      "input": true
    },
    model: {
      value: (_vm.result),
      callback: function($$v) {
        _vm.result = $$v
      },
      expression: "result"
    }
  }), _c('Field', {
    attrs: {
      "tag": "抓取日志",
      "placeholder": "请选择（必选）",
      "optionJsonConfig": {
        valuename: 'id',
        textname: 'name',
        idname: 'id'
      },
      "options": _vm.logs,
      "selectText": _vm.log,
      "select": true,
      "arrow": true
    },
    on: {
      "input": _vm.getValue3
    },
    model: {
      value: (_vm.log),
      callback: function($$v) {
        _vm.log = $$v
      },
      expression: "log"
    }
  }), _c('Field', {
    attrs: {
      "tag": "处理方式",
      "placeholder": "请输入处理方式",
      "textarea": true
    },
    model: {
      value: (_vm.desc),
      callback: function($$v) {
        _vm.desc = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "desc"
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
     require("vue-hot-reload-api").rerender("data-v-6e4cbecb", module.exports)
  }
}

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\OrderClose.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrderClose.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e4cbecb", Component.options)
  } else {
    hotAPI.reload("data-v-6e4cbecb", Component.options)
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

/***/ 82:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            bodyBg: 'dark',
            pageTitle: '处理结果',
            name: '',
            scene: '',
            scenes: [],
            problem: '',
            problems: [],
            categroy: '',
            categroys: [],
            result: '',
            results: [],
            log: '',
            logs: [],
            desc: '',
            val: "",
            reason: "",
            yunwei_type: "",
            hasCatchLogZh: "",
            _id: this.$route.query._id || '',
            cause_id: ""
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
            if (this.$route.path == '/order/close') {
                //清空页面的内容
                this.scene = '请选择（必选）';
                this.scenes = [];
                this.problem = '请选择（必选）';
                this.problems = [];
                this.categroy = '请选择（必选）';
                this.categroys = [];
                this.result = '';
                this.log = '请选择（必选）';
                this.logs = [];
                this.desc = '';
                this.getInfo();
            }
        }
    },
    methods: {
        submitFun: function submitFun() {
            if (this.scene.indexOf('选择') > -1) {
                _util.showErrorTip('请选择现场现象！');
                return false;
            }
            if (this.problem.indexOf('选择') > -1) {
                _util.showErrorTip('请选择问题原因！');
                return false;
            }
            if (this.categroy.indexOf('选择') > -1) {
                _util.showErrorTip('请选择故障分类！');
                return false;
            }
            if (!this.result) {
                _util.showErrorTip('请输入处理结果！');
                return false;
            }
            if (this.log.indexOf('选择') > -1) {
                _util.showErrorTip('请选择抓取日志！');
                return false;
            }
            if (!this.desc) {
                _util.showErrorTip('请输入处理方式！');
                return false;
            }
            //                if (!$(this.$refs.up1.$el).find('.uploadifive-queue-item.complete').length) {
            //                    _util.showErrorTip('请上传图片！');
            //                    return false;
            //                };
            var appearance = this.val,
                reason = this.cause_id,
                yunwei_type = this.yunwei_type,
                remark = this.result,
                hasCatchLogZh = this.hasCatchLogZh,
                deal = this.desc,
                that = this;
            axios.post(ajaxUrls.orderinfo + that.$route.query._id + '/close', {
                appearance: appearance,
                reason: reason,
                yunwei_type: yunwei_type,
                remark: remark,
                hasCatchLogZh: hasCatchLogZh,
                deal: deal
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

        //获取现象原因的ID
        getValue: function getValue(val) {
            this.val = val;
        },

        //获取问题原因的ID
        getValue1: function getValue1(val) {
            this.cause_id = val;
        },

        //获取故障原因的ID
        getValue2: function getValue2(val) {
            this.yunwei_type = val;
        },

        //是否抓取日志
        getValue3: function getValue3(val) {
            this.hasCatchLogZh = val;
        },
        change: function change() {
            var that = this;
            that.categroy = "";
            //获取问题原因
            getAjaxRequest("order_cache", ajaxUrls.fault + that.val, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function (response) {
                that.problems = response.data;
                if (that.problems.length == 1) {
                    that.getValue1(response.data[0].id);
                    that.change1();
                    that.problem = response.data[0].name;
                } else {
                    that.problem = "";
                }
            }, function (error) {
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },
        change1: function change1() {
            var that = this;
            //获取故障分类
            getAjaxRequest("order_cache", ajaxUrls.fault + that.cause_id, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function (response) {
                that.categroys = response.data;
                if (that.categroys.length == 1) {
                    that.getValue2(response.data[0].id);
                    that.categroy = response.data[0].name;
                } else {
                    that.categroy = "";
                }
            }, function (error) {
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },

        //获取信息
        getInfo: function getInfo() {
            this.logs = [{
                id: '1',
                name: '是'
            }, {
                id: '0',
                name: '否'
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
            //获取现场现象
            getAjaxRequest("order_cache", ajaxUrls.option, that.version, 20 * 1000, 0.5 * 60 * 60 * 1000, function (response) {
                if (response.status == 0) {
                    that.scenes = response.data.appearance;
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