webpackJsonp([2],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  "data-v-2ff3a29f",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\calendar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] calendar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ff3a29f", Component.options)
  } else {
    hotAPI.reload("data-v-2ff3a29f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 106:
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:\\moge\\zhichengxitong\\src\\pages\\OrderCreate.vue:31\n    29|         )\n    30|         calender (\n  > 31|             :show.sync=\"calendar.show\",\n    32|             :type=\"calendar.type\",\n    33|             :value.sync=\"calendar.value\",\n    34|             :x=\"calendar.x\",\n\nUnexpected token )\n    at assertExpression (D:\\moge\\node_modules\\jade\\lib\\lexer.js:30:3)\n    at Object.code (D:\\moge\\node_modules\\jade\\lib\\lexer.js:584:23)\n    at Object.next (D:\\moge\\node_modules\\jade\\lib\\lexer.js:936:15)\n    at Object.lookahead (D:\\moge\\node_modules\\jade\\lib\\lexer.js:113:46)\n    at Parser.lookahead (D:\\moge\\node_modules\\jade\\lib\\parser.js:102:23)\n    at Parser.peek (D:\\moge\\node_modules\\jade\\lib\\parser.js:79:17)\n    at Parser.tag (D:\\moge\\node_modules\\jade\\lib\\parser.js:773:22)\n    at Parser.parseTag (D:\\moge\\node_modules\\jade\\lib\\parser.js:759:17)\n    at Parser.parseExpr (D:\\moge\\node_modules\\jade\\lib\\parser.js:211:21)\n    at Parser.parseExpr (D:\\moge\\node_modules\\jade\\lib\\parser.js:252:21)\n    at Parser.block (D:\\moge\\node_modules\\jade\\lib\\parser.js:729:25)\n    at Parser.tag (D:\\moge\\node_modules\\jade\\lib\\parser.js:838:24)\n    at Parser.parseTag (D:\\moge\\node_modules\\jade\\lib\\parser.js:759:17)\n    at Parser.parseExpr (D:\\moge\\node_modules\\jade\\lib\\parser.js:211:21)\n    at Parser.block (D:\\moge\\node_modules\\jade\\lib\\parser.js:729:25)\n    at Parser.tag (D:\\moge\\node_modules\\jade\\lib\\parser.js:838:24)\n    at Parser.parseTag (D:\\moge\\node_modules\\jade\\lib\\parser.js:759:17)\n    at Parser.parseExpr (D:\\moge\\node_modules\\jade\\lib\\parser.js:211:21)\n    at Parser.block (D:\\moge\\node_modules\\jade\\lib\\parser.js:729:25)\n    at Parser.tag (D:\\moge\\node_modules\\jade\\lib\\parser.js:838:24)\n    at Parser.parseTag (D:\\moge\\node_modules\\jade\\lib\\parser.js:759:17)\n    at Parser.parseExpr (D:\\moge\\node_modules\\jade\\lib\\parser.js:211:21)\n    at Parser.parse (D:\\moge\\node_modules\\jade\\lib\\parser.js:122:25)\n    at parse (D:\\moge\\node_modules\\jade\\lib\\index.js:104:21)\n    at Object.exports.compile (D:\\moge\\node_modules\\jade\\lib\\index.js:205:16)\n    at D:\\moge\\node_modules\\consolidate\\lib\\consolidate.js:336:58\n    at D:\\moge\\node_modules\\consolidate\\lib\\consolidate.js:144:5\n    at Promise._execute (D:\\moge\\node_modules\\bluebird\\js\\release\\debuggability.js:300:9)\n    at Promise._resolveFromExecutor (D:\\moge\\node_modules\\bluebird\\js\\release\\promise.js:483:18)\n    at new Promise (D:\\moge\\node_modules\\bluebird\\js\\release\\promise.js:79:10)");

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function(){},staticRenderFns:[]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ff3a29f", module.exports)
  }
}

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("48556a99", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2ff3a29f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./calendar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2ff3a29f\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./calendar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
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

/***/ 65:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: {
        show: {
            type: Boolean,
            twoWay: true,
            default: false
        },
        type: {
            type: String,
            default: "date"
        },
        value: {
            type: String,
            twoWay: true,
            default: ""
        },
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        begin: {
            type: String,
            twoWay: true,
            default: ""
        },
        end: {
            type: String,
            default: ""
        },
        range: {
            type: Boolean,
            default: false
        },
        rangeBegin: {
            type: Array,
            default: Array
        },
        rangeEnd: {
            type: Array,
            default: Array
        },
        sep: {
            type: String,
            twoWay: true,
            default: ""
        },
        weeks: {
            type: Array,
            default: function _default() {
                return ['日', '一', '二', '三', '四', '五', '六'];
            }
        },
        months: {
            type: Array,
            default: function _default() {
                return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            }
        }
    },
    data: function data() {
        return {
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            days: [],
            today: [],
            currentMonth: Number,
            monthString: ""
        };
    },
    created: function created() {
        var _this = this;

        this.init();
        // 延迟绑定事件，防止关闭
        window.setTimeout(function () {
            document.addEventListener('click', function (e) {
                e.stopPropagation();
                _this.cancel();
            }, false);
        }, 500);
    },

    // 测试用
    watch: {
        // year(val, old) {
        //     console.log("new %s old %s time:%s", val, old, +new Date)
        // },
        show: function show() {
            this.init();
        },
        value: function value() {
            this.init();
        }
    },
    methods: {
        // 日期补零
        zero: function zero(n) {
            return n < 10 ? '0' + n : n;
        },

        // 初始化一些东西
        init: function init() {
            var now = new Date();
            if (this.value != "") {
                if (this.value.indexOf("-") != -1) this.sep = "-";
                if (this.value.indexOf(".") != -1) this.sep = ".";
                if (this.value.indexOf("/") != -1) this.sep = "/";
                if (this.type == "date") {
                    var split = this.value.split(this.sep);
                    this.year = parseInt(split[0]);
                    this.month = parseInt(split[1]) - 1;
                    this.day = parseInt(split[2]);
                } else if (this.type == "datetime") {
                    var split = this.value.split(" ");
                    var splitDate = split[0].split(this.sep);
                    this.year = parseInt(splitDate[0]);
                    this.month = parseInt(splitDate[1]) - 1;
                    this.day = parseInt(splitDate[2]);
                    if (split.length > 1) {
                        var splitTime = split[1].split(":");
                        this.hour = splitTime[0];
                        this.minute = splitTime[1];
                        this.second = splitTime[2];
                    }
                }
                if (this.range) {
                    var split = this.value.split(" ~ ");
                    if (split.length > 1) {
                        var beginSplit = split[0].split(this.sep);
                        var endSplit = split[1].split(this.sep);
                        this.rangeBegin = [parseInt(beginSplit[0]), parseInt(beginSplit[1] - 1), parseInt(beginSplit[2])];
                        this.rangeEnd = [parseInt(endSplit[0]), parseInt(endSplit[1] - 1), parseInt(endSplit[2])];
                    }
                }
            } else {
                if (this.sep == "") this.sep = "/";
                this.year = now.getFullYear();
                this.month = now.getMonth();
                this.day = now.getDate();
                this.hour = this.zero(now.getHours());
                this.minute = this.zero(now.getMinutes());
                this.second = this.zero(now.getSeconds());
                if (this.range) {
                    this.rangeBegin = Array;
                    this.rangeEnd = Array;
                }
            }
            this.monthString = this.months[this.month];
            this.render(this.year, this.month);
        },

        // 渲染日期
        render: function render(y, m) {
            if (!this.range) {
                this.rangeBegin = [];
                this.rangeEnd = [];
            }
            var firstDayOfMonth = new Date(y, m, 1).getDay(); //当月第一天
            var lastDateOfMonth = new Date(y, m + 1, 0).getDate(); //当月最后一天
            var lastDayOfLastMonth = new Date(y, m, 0).getDate(); //最后一月的最后一天
            this.year = y;
            this.currentMonth = this.months[m];
            var seletSplit = this.value.split(" ")[0].split(this.sep);

            var i,
                line = 0,
                temp = [];
            for (i = 1; i <= lastDateOfMonth; i++) {
                var dow = new Date(y, m, i).getDay();
                // 第一行
                if (dow == 0) {
                    temp[line] = [];
                } else if (i == 1) {
                    temp[line] = [];
                    var k = lastDayOfLastMonth - firstDayOfMonth + 1;
                    for (var j = 0; j < firstDayOfMonth; j++) {
                        temp[line].push({
                            day: k,
                            disabled: true
                        });
                        k++;
                    }
                }

                // 如果是日期范围
                if (this.range) {
                    var options = {
                        day: i
                    };
                    if (this.rangeBegin.length > 0) {
                        var beginTime = Number(new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]));
                        var endTime = Number(new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]));
                        var thisTime = Number(new Date(this.year, this.month, i));
                        if (beginTime <= thisTime && endTime >= thisTime) {
                            options.selected = true;
                        }
                    }
                    temp[line].push(options);
                } else {
                    // 单选模式
                    var chk = new Date();
                    var chkY = chk.getFullYear();
                    var chkM = chk.getMonth();
                    // 匹配上次选中的日期
                    if (parseInt(seletSplit[0]) == this.year && parseInt(seletSplit[1]) - 1 == this.month && parseInt(seletSplit[2]) == i) {
                        temp[line].push({
                            day: i,
                            selected: true
                        });
                        this.today = [line, temp[line].length - 1];
                    }

                    // 没有默认值的时候显示选中今天日期
                    else if (chkY == this.year && chkM == this.month && i == this.day && this.value == "") {
                            temp[line].push({
                                day: i,
                                selected: true
                            });
                            this.today = [line, temp[line].length - 1];
                        } else {
                            // 设置可选范围
                            // console.log(this.begin,this.end);
                            var options = {
                                day: i,
                                selected: false
                            };
                            if (this.begin != "") {

                                var beginSplit = this.begin.split(this.sep);
                                var beginTime = Number(new Date(parseInt(beginSplit[0]), parseInt(beginSplit[1]) - 1, parseInt(beginSplit[2])));
                                if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true;
                            }
                            if (this.end != "") {
                                var endSplit = this.end.split(this.sep);
                                var endTime = Number(new Date(parseInt(endSplit[0]), parseInt(endSplit[1]) - 1, parseInt(endSplit[2])));
                                if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true;
                            }
                            temp[line].push(options);
                        }
                }

                // 最后一行
                if (dow == 6) {
                    line++;
                } else if (i == lastDateOfMonth) {
                    var k = 1;
                    for (dow; dow < 6; dow++) {
                        temp[line].push({
                            day: k,
                            disabled: true
                        });
                        k++;
                    }
                }
            } //end for

            this.days = temp;
        },

        // 上月
        prev: function prev(e) {
            e.stopPropagation();
            if (this.month == 0) {
                this.month = 11;
                this.year = parseInt(this.year) - 1;
            } else {
                this.month = parseInt(this.month) - 1;
            }
            this.monthString = this.months[this.month];
            this.render(this.year, this.month);
        },

        //  下月
        next: function next(e) {
            e.stopPropagation();
            if (this.month == 11) {
                this.month = 0;
                this.year = parseInt(this.year) + 1;
            } else {
                this.month = parseInt(this.month) + 1;
            }
            this.monthString = this.months[this.month];
            this.render(this.year, this.month);
        },

        // 选中日期
        select: function select(k1, k2, e) {
            if (e != undefined) e.stopPropagation();
            // 日期范围
            if (this.range) {
                if (this.rangeBegin.length == 0 || this.rangeEndTemp != 0) {
                    this.rangeBegin = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second];
                    this.rangeBeginTemp = this.rangeBegin;
                    this.rangeEnd = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second];
                    this.rangeEndTemp = 0;
                } else {
                    this.rangeEnd = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second];
                    this.rangeEndTemp = 1;
                    // 判断结束日期小于开始日期则自动颠倒过来
                    if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
                        this.rangeBegin = this.rangeEnd;
                        this.rangeEnd = this.rangeBeginTemp;
                    }
                }
                this.render(this.year, this.month);
            } else {
                // 取消上次选中
                if (this.today.length > 0) {
                    this.days.forEach(function (v) {
                        v.forEach(function (vv) {
                            vv.selected = false;
                        });
                    });
                    // this.days[this.today[0]][this.today[1]].selected = false
                }
                // 设置当前选中天
                this.days[k1][k2].selected = true;
                this.day = this.days[k1][k2].day;
                this.today = [k1, k2];
                if (this.type == 'date') {
                    this.value = this.year + this.sep + this.zero(this.month + 1) + this.sep + this.zero(this.days[k1][k2].day);
                    this.show = false;
                }
            }
        },

        // 多选的时候提交
        ok: function ok() {
            // 只有有日期的时候才执行
            if (this.type != "time") {
                var isSelected = false;
                this.days.forEach(function (v) {
                    v.forEach(function (vv) {
                        if (vv.selected) {
                            isSelected = true;
                        }
                    });
                });
                if (!isSelected) return false;
            }

            if (this.range) {
                this.value = this.output(this.rangeBegin) + " ~ " + this.output(this.rangeEnd);
            } else {
                this.value = this.output([this.year, this.month, this.day, parseInt(this.hour), parseInt(this.minute), parseInt(this.second)]);
            }
            this.show = false;
        },

        // 隐藏控件
        cancel: function cancel() {
            this.show = false;
        },

        // 格式化输出
        output: function output(args) {
            if (this.type == 'time') {
                return this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5]);
            }
            if (this.type == 'datetime') {
                return args[0] + this.sep + this.zero(args[1] + 1) + this.sep + this.zero(args[2]) + " " + this.zero(args[3]) + ":" + this.zero(args[4]) + ":" + this.zero(args[5]);
            }
            if (this.type == 'date') {
                return args[0] + this.sep + this.zero(args[1] + 1) + this.sep + this.zero(args[2]);
            }
        }
    }
};

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
                show: false,
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
        calender: calender
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

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.calendar[data-v-2ff3a29f] {\n    width: 300px;\n    padding: 10px;\n    background: #fff;\n    position: absolute;\n    border: 1px solid #DEDEDE;\n    border-radius: 2px;\n    opacity:.95;\n    transition: all .5s ease;\n}\n.calendar-enter[data-v-2ff3a29f], .calendar-leave[data-v-2ff3a29f] {\n    opacity: 0;\n    transform: translate3d(0,-10px, 0);\n}\n.calendar[data-v-2ff3a29f]:before {\n    position: absolute;\n    left:30px;\n    top: -10px;\n    content: \"\";\n    border:5px solid rgba(0, 0, 0, 0);\n    border-bottom-color: #DEDEDE;\n}\n.calendar[data-v-2ff3a29f]:after {\n    position: absolute;\n    left:30px;\n    top: -9px;\n    content: \"\";\n    border:5px solid rgba(0, 0, 0, 0);\n    border-bottom-color: #fff;\n}\n.calendar-tools[data-v-2ff3a29f]{\n    height:32px;\n    font-size: 20px;\n    line-height: 32px;\n    color:#5e7a88;\n}\n.calendar-tools .float.left[data-v-2ff3a29f]{\n    float:left;\n}\n.calendar-tools .float.right[data-v-2ff3a29f]{\n    float:right;\n}\n.calendar-tools input[data-v-2ff3a29f]{\n    font-size: 20px;\n    line-height: 32px;\n    color: #5e7a88;\n    width: 70px;\n    text-align: center;\n    border:none;\n    background-color: transparent;\n}\n.calendar-tools span[data-v-2ff3a29f]{\n    cursor: pointer;\n}\n.calendar-prev[data-v-2ff3a29f]{\n    float:left;\n}\n.calendar-next[data-v-2ff3a29f]{\n    float:right;\n}\n.calendar table[data-v-2ff3a29f] {\n    clear: both;\n    width: 100%;\n    margin-bottom:10px;\n    border-collapse: collapse;\n    color: #444444;\n}\n.calendar td[data-v-2ff3a29f] {\n    margin:2px !important;\n    padding:0px 0;\n    width: 14.28571429%;\n    height:34px;\n    text-align: center;\n    vertical-align: middle;\n    font-size:14px;\n    line-height: 125%;\n    cursor: pointer;\n}\n.calendar td.week[data-v-2ff3a29f]{\n    pointer-events:none !important;\n    cursor: default !important;\n}\n.calendar td.disabled[data-v-2ff3a29f] {\n    color: #c0c0c0;\n    pointer-events:none !important;\n    cursor: default !important;\n}\n.calendar td span[data-v-2ff3a29f]{\n    display:block;\n    height:30px;\n    line-height:30px;\n    margin:2px;\n    border-radius:2px;\n}\n.calendar td span[data-v-2ff3a29f]:hover{\n    background:#f3f8fa;\n}\n.calendar td.selected span[data-v-2ff3a29f]{\n    background-color: #5e7a88;\n    color: #fff;\n}\n.calendar td.selected span[data-v-2ff3a29f]:hover{\n    background-color: #5e7a88;\n    color: #fff;\n}\n.calendar thead td[data-v-2ff3a29f] {\n  text-transform: uppercase;\n}\n.calendar .timer[data-v-2ff3a29f]{\n    margin:10px 0;\n    text-align: center;\n}\n.calendar .timer input[data-v-2ff3a29f]{\n    border-radius: 2px;\n    padding:5px;\n    font-size: 14px;\n    line-height: 18px;\n    color: #5e7a88;\n    width: 50px;\n    text-align: center;\n    border:1px solid #efefef;\n}\n.calendar .timer input[data-v-2ff3a29f]:focus{\n    border:1px solid #5e7a88;\n}\n.calendar-button[data-v-2ff3a29f]{\n    text-align: center;\n}\n.calendar-button span[data-v-2ff3a29f]{\n    cursor: pointer;\n    display: inline-block;\n    min-height: 1em;\n    min-width: 5em;\n    vertical-align: baseline;\n    background:#5e7a88;\n    color:#fff;\n    margin: 0 .25em 0 0;\n    padding: .6em 2em;\n    font-size: 1em;\n    line-height: 1em;\n    text-align: center;\n    border-radius: .3em;\n}\n.calendar-button span.cancel[data-v-2ff3a29f]{\n    background:#efefef;\n    color:#666;\n}\n.calendar .lunar[data-v-2ff3a29f]{\n     font-size:11px;\n     line-height: 150%;\n     color:#aaa;\n}\n.calendar td.selected .lunar[data-v-2ff3a29f]{\n     color:#fff;\n}\n", ""]);

// exports


/***/ }

});