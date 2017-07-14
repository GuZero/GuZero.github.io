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

/***/ 83:
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/moge/zhichengxitong/src/pages/OrderCreate.vue: Unexpected token, expected , (303:62)\n\u001b[0m \u001b[90m 301 | \u001b[39m                  name\u001b[33m:\u001b[39m\u001b[32m'调取监控（裹裹）'\u001b[39m\u001b[33m,\u001b[39m                    \n \u001b[90m 302 | \u001b[39m                }\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 303 | \u001b[39m                \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mterminalName \u001b[33m=\u001b[39m localStorage\u001b[33m.\u001b[39mterminal_name\u001b[33m;\u001b[39m\n \u001b[90m     | \u001b[39m                                                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 304 | \u001b[39m                let that \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 305 | \u001b[39m                \u001b[90m//获取现场现象\u001b[39m\n \u001b[90m 306 | \u001b[39m                _util\u001b[33m.\u001b[39mshowSysLoading()\u001b[33m;\u001b[39m\u001b[0m\n    at Parser.pp$5.raise (D:\\moge\\node_modules\\babylon\\lib\\index.js:4333:13)\n    at Parser.pp.unexpected (D:\\moge\\node_modules\\babylon\\lib\\index.js:1705:8)\n    at Parser.pp.expect (D:\\moge\\node_modules\\babylon\\lib\\index.js:1693:33)\n    at Parser.pp$3.parseExprList (D:\\moge\\node_modules\\babylon\\lib\\index.js:4174:12)\n    at Parser.pp$3.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:3634:28)\n    at Parser.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:6591:22)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3414:19)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)\n    at Parser.pp$3.parseExprOps (D:\\moge\\node_modules\\babylon\\lib\\index.js:3324:19)\n    at Parser.pp$3.parseMaybeConditional (D:\\moge\\node_modules\\babylon\\lib\\index.js:3301:19)\n    at Parser.pp$3.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:3264:19)\n    at Parser.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:5813:20)\n    at Parser.pp$3.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:3287:23)\n    at Parser.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:5813:20)\n    at Parser.pp$3.parseExpression (D:\\moge\\node_modules\\babylon\\lib\\index.js:3226:19)\n    at Parser.pp$1.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:1852:19)\n    at Parser.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:5302:22)\n    at Parser.pp$1.parseBlockBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:2212:21)\n    at Parser.pp$1.parseBlock (D:\\moge\\node_modules\\babylon\\lib\\index.js:2193:8)\n    at Parser.pp$3.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:4086:22)\n    at Parser.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:5289:20)\n    at Parser.pp$3.parseMethod (D:\\moge\\node_modules\\babylon\\lib\\index.js:4055:8)\n    at Parser.pp$3.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:3976:10)\n    at Parser.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:5604:13)\n    at Parser.pp$3.parseObj (D:\\moge\\node_modules\\babylon\\lib\\index.js:3950:10)\n    at Parser.pp$3.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:3639:19)\n    at Parser.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:6591:22)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3414:19)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)\n    at Parser.pp$3.parseExprOps (D:\\moge\\node_modules\\babylon\\lib\\index.js:3324:19)");

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