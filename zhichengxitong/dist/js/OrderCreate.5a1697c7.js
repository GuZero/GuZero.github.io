webpackJsonp([2],{

/***/ 102:
/***/ function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\moge\\zhichengxitong\\src\\components\\common\\calendar.vue'\n    at Error (native)");

/***/ },

/***/ 106:
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
    model: {
      value: (_vm.ordertype),
      callback: function($$v) {
        _vm.ordertype = $$v
      },
      expression: "ordertype"
    }
  }), _c('Field', {
    attrs: {
      "tag": "终端名称",
      "placeholder": "请输入终端名称（必填）",
      "input": true
    },
    model: {
      value: (_vm.terminalName),
      callback: function($$v) {
        _vm.terminalName = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "terminalName"
    }
  }), _c('Field', {
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
      "tag": "故障等级",
      "pvalue": _vm.fault,
      "p": true
    }
  }), _c('Field', {
    attrs: {
      "tag": "超时设置",
      "pvalue": _vm.overtime,
      "input": true
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.open($event, 'picker3')
      }
    },
    model: {
      value: (_vm.calendar.items.picker3.value),
      callback: function($$v) {
        _vm.calendar.items.picker3.value = $$v
      },
      expression: "calendar.items.picker3.value"
    }
  }), _c('Field', {
    attrs: {
      "tag": "问题描述",
      "placeholder": "请输入问题描述",
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
  }, [_c('calender', {
    attrs: {
      "show": _vm.calendar.show,
      "type": _vm.calendar.type,
      "value": _vm.calendar.value,
      "x": _vm.calendar.x,
      "y": _vm.calendar.y,
      "begin": _vm.calendar.begin,
      "end": _vm.calendar.end,
      "range": _vm.calendar.range,
      "weeks": _vm.calendar.weeks,
      "months": _vm.calendar.months,
      "sep": _vm.calendar.sep
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a68d2b9", module.exports)
  }
}

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  null,
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

/***/ 42:
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

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.submits[data-v-530e9782] {\n  border-top: 1px #cfcfcf solid;\n  background-color: #f9f9f9;\n  color: #323232;\n  display: block;\n  width: 100%;\n  height: 51px;\n  line-height: 51px;\n  color: #333;\n  font-size: 16px;\n  left: 0;\n  bottom: 0;\n  z-index: 9000;\n}\n.submits.white[data-v-530e9782] {\n    background-color: #fff;\n    color: #07689f;\n}\n.submits[data-v-530e9782]:active {\n    background-color: #eee;\n}\n", ""]);

// exports


/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(45),
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

/***/ 45:
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

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4f4b56a4", content, false);
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

/***/ 52:
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

/* harmony default export */ exports["default"] = {
    props: ["tag", "value", "type", "placeholder", "maxlength", "input", "textarea", "p", "pvalue", "arrow", "select", "selectText", "options", "optionJsonConfig"],
    methods: {
        setParentVar: function setParentVar(value) {
            this.$emit('input', value.toString().trim());
        },
        getOptionKey: function getOptionKey(value, optionJsonConfig, options) {
            var result = null;
            for (var i = 0, len = options.length; i < len; i++) {
                if (options[i][optionJsonConfig.valuename] == value) {
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

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.filed[data-v-4c0b8495] {\n  background-color: #fff;\n  min-height: 54px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  margin-top: 8px;\n}\n.filed.textarea[data-v-4c0b8495] {\n    height: 116px;\n}\n.filed.textarea .box[data-v-4c0b8495] {\n      height: 116px;\n}\n.filed .text[data-v-4c0b8495] {\n    left: 0;\n    top: 0;\n    width: 88px;\n    padding: 16px 0;\n}\n.filed .box[data-v-4c0b8495] {\n    margin-left: 88px;\n    min-height: 54px;\n}\n.filed .box input[data-v-4c0b8495] {\n      height: 30px;\n      line-height: 30px;\n      width: 99%;\n      border: none;\n      position: relative;\n      top: 13px;\n      left: 0;\n      font-size: 13px;\n}\n.filed .box textarea[data-v-4c0b8495] {\n      height: 87px;\n      width: 99%;\n      position: relative;\n      top: 20px;\n      border: none;\n      resize: none;\n      color: #323232;\n      font-size: 13px;\n}\n.filed .box p[data-v-4c0b8495] {\n      margin: 0;\n      min-height: 30px;\n      line-height: 22px;\n      font-size: 13px;\n      text-align: right;\n      padding: 0 16px 22px 0;\n      top: 17px;\n      left: 0;\n}\n.filed .select[data-v-4c0b8495] {\n    height: 54px;\n}\n.filed .select label[data-v-4c0b8495] {\n      display: inline-block;\n      height: 54px;\n      line-height: 54px;\n      top: 0;\n      right: 0;\n      color: #323232;\n      font-size: 13px;\n      width: 100%;\n      text-align: right;\n      padding-right: 38px;\n      z-index: 300;\n}\n.filed .select select[data-v-4c0b8495] {\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 54px;\n      background: none;\n      color: transparent;\n      border: none;\n      outline: none;\n      appearance: none;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      z-index: 301;\n}\n.filed .select select option[data-v-4c0b8495] {\n        color: #333;\n}\n.filed .select.arrow[data-v-4c0b8495]:after {\n      content: '';\n      background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n      background-size: 100% auto;\n      display: block;\n      height: 28px;\n      width: 28px;\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      margin-top: -14px;\n}\n", ""]);

// exports


/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(59),
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

/***/ 59:
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
      "maxlength": _vm.maxlength
    },
    domProps: {
      "value": _vm.value
    }
  }) : _vm._e(), (_vm.textarea) ? _c('textarea', {
    attrs: {
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength
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
  }, [_c('option', [_vm._v(" ")]), _vm._l((_vm.options), function(o) {
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

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6004a80a", content, false);
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

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls, _util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_elements_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_calendar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_common_calendar__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        var _calendar;

        return {
            bodyBg: 'dark',
            pageTitle: '创建/修改工单',
            ordertype: '',
            ordertypes: [],
            terminalName: '',
            scene: '',
            scenes: [],
            fault: '（系统根据现场现象自动选择）',
            overtime: '（系统根据现场现象自动选择）',
            desc: '',
            val: '',
            calendar: (_calendar = {
                show: true,
                x: 0,
                y: 0,
                picker: "",
                type: "date",
                value: "",
                begin: "",
                end: ""
            }, _defineProperty(_calendar, 'value', ""), _defineProperty(_calendar, 'sep', "/"), _defineProperty(_calendar, 'weeks', []), _defineProperty(_calendar, 'months', []), _defineProperty(_calendar, 'range', false), _defineProperty(_calendar, 'items', {
                // 单选模式
                picker1: {
                    type: "date",
                    begin: "2016-08-20",
                    end: "2016-08-25",
                    value: "2016-08-21",
                    sep: "-",
                    weeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                // 2个日期模式
                picker2: {
                    type: "date",
                    value: "",
                    range: true,
                    sep: "."
                },
                // 日期时间模式
                picker3: {
                    type: "datetime",
                    value: "",
                    sep: "-"
                },
                // 日期时间模式
                picker4: {
                    type: "time",
                    value: ""
                }
            }), _calendar)
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        Field: __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default.a,
        SubmitBtn: __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default.a,
        calender: __WEBPACK_IMPORTED_MODULE_3__components_common_calendar__["default"]
    },
    created: function created() {
        //请求数据
        this.ordertypes = [{
            id: '001',
            value: '000001',
            name: '普通工单'
        }, {
            id: '002',
            value: '000002',
            name: '运维工单'
        }];

        var that = this;
        //获取现场现象
        axios.get(ajaxUrls.option).then(function (rsp) {
            var d = rsp.data;
            that.scenes = d.data.appearance;
            console.log(that.scenes);
        });
    },

    watch: {
        'calendar.value': function calendarValue(value) {
            this.calendar.items[this.calendar.picker].value = value;
        }
    },
    methods: {
        submitFun: function submitFun() {
            if (this.ordertype.indexOf('选择') > -1) {
                _util.showErrorTip('请选择工单类型！');
                return false;
            }
            if (!this.terminalName) {
                _util.showErrorTip('请输入终端名称！');
                return false;
            }
            if (this.scene.indexOf('选择') > -1) {
                _util.showErrorTip('请选择现场现象！');
                return false;
            }
            if (!this.desc) {
                _util.showErrorTip('请输入问题描述！');
                return false;
            }
        },
        open: function open(e, type) {
            // 设置类型
            this.calendar.picker = type;
            this.calendar.type = this.calendar.items[type].type;
            this.calendar.range = this.calendar.items[type].range;
            this.calendar.begin = this.calendar.items[type].begin;
            this.calendar.end = this.calendar.items[type].end;
            this.calendar.value = this.calendar.items[type].value;
            // 可不用写
            this.calendar.sep = this.calendar.items[type].sep;
            this.calendar.weeks = this.calendar.items[type].weeks;
            this.calendar.months = this.calendar.items[type].months;

            this.calendar.show = true;
            this.calendar.x = e.target.offsetLeft;
            this.calendar.y = e.target.offsetTop + e.target.offsetHeight + 8;
        },
        testChange: function testChange() {
            for (var i = 0; i < this.scenes.length; i++) {
                for (var item in this.scenes[i]) {
                    if (item == 'id') {
                        if (this.scenes[i].id == this.val) {
                            this.fault = this.scenes[i].level;
                            console.log(this.fault);
                        }
                    }
                }
            }
        },
        getValue: function getValue(val) {
            this.val = val;
            console.log(this.val);
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4)))

/***/ }

});