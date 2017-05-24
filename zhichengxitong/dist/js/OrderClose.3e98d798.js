webpackJsonp([0],{

/***/ 113:
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
      "input": _vm.getValue
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
      "placeholder": "请选择（必选",
      "optionJsonConfig": {
        valuename: 'id',
        textname: 'name',
        idname: 'id'
      },
      "options": _vm.problems,
      "selectText": _vm.problem,
      "select": true,
      "arrow": true
    },
    on: {
      "input": _vm.getValue
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
  }), _c('Upload', {
    ref: "up1",
    attrs: {
      "id": "up1"
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

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(113),
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

/***/ 74:
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/moge/zhichengxitong/src/pages/OrderClose.vue: arguments is a reserved word in strict mode (127:27)\n\u001b[0m \u001b[90m 125 | \u001b[39m        })\u001b[33m;\u001b[39m\n \u001b[90m 126 | \u001b[39m        \u001b[90m//获取故障分类\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 127 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$on(\u001b[32m'event'\u001b[39m\u001b[33m,\u001b[39m (arguments) \u001b[33m=>\u001b[39m {\n \u001b[90m     | \u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 128 | \u001b[39m\n \u001b[90m 129 | \u001b[39m        })\u001b[33m;\u001b[39m\n \u001b[90m 130 | \u001b[39m        \u001b[36mif\u001b[39m(\u001b[33m!\u001b[39mthat\u001b[33m.\u001b[39mval\u001b[33m==\u001b[39m\u001b[32m\"\"\u001b[39m){\u001b[0m\n    at Parser.pp$5.raise (D:\\moge\\node_modules\\babylon\\lib\\index.js:4333:13)\n    at Parser.pp$3.checkReservedWord (D:\\moge\\node_modules\\babylon\\lib\\index.js:4230:10)\n    at Parser.pp$2.checkLVal (D:\\moge\\node_modules\\babylon\\lib\\index.js:3067:12)\n    at Parser.checkLVal (D:\\moge\\node_modules\\babylon\\lib\\index.js:5513:22)\n    at Parser.pp$3.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:4154:12)\n    at Parser.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:5289:20)\n    at Parser.pp$3.parseArrowExpression (D:\\moge\\node_modules\\babylon\\lib\\index.js:4065:8)\n    at Parser.pp$3.parseParenAndDistinguishExpression (D:\\moge\\node_modules\\babylon\\lib\\index.js:3772:17)\n    at Parser.pp$3.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:3629:19)\n    at Parser.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:6591:22)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3414:19)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)\n    at Parser.pp$3.parseExprOps (D:\\moge\\node_modules\\babylon\\lib\\index.js:3324:19)\n    at Parser.pp$3.parseMaybeConditional (D:\\moge\\node_modules\\babylon\\lib\\index.js:3301:19)\n    at Parser.pp$3.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:3264:19)\n    at Parser.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:5813:20)\n    at Parser.pp$3.parseExprListItem (D:\\moge\\node_modules\\babylon\\lib\\index.js:4190:16)\n    at Parser.parseExprListItem (D:\\moge\\node_modules\\babylon\\lib\\index.js:5498:24)\n    at Parser.pp$3.parseCallExpressionArguments (D:\\moge\\node_modules\\babylon\\lib\\index.js:3493:20)\n    at Parser.pp$3.parseSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3453:31)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3424:15)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)\n    at Parser.pp$3.parseExprOps (D:\\moge\\node_modules\\babylon\\lib\\index.js:3324:19)\n    at Parser.pp$3.parseMaybeConditional (D:\\moge\\node_modules\\babylon\\lib\\index.js:3301:19)\n    at Parser.pp$3.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:3264:19)\n    at Parser.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:5813:20)\n    at Parser.pp$3.parseExpression (D:\\moge\\node_modules\\babylon\\lib\\index.js:3226:19)\n    at Parser.pp$1.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:1852:19)\n    at Parser.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:5302:22)\n    at Parser.pp$1.parseBlockBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:2212:21)");

/***/ }

});