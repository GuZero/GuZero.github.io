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
      "placeholder": "请输入问题原因（必填）",
      "optionJsonConfig": {
        valuename: 'id',
        textname: 'name',
        idname: 'id'
      },
      "options": _vm.scenes,
      "selectText": _vm.problem,
      "select": true,
      "arrow": true
    },
    model: {
      value: (_vm.problem),
      callback: function($$v) {
        _vm.problem = (typeof $$v === 'string' ? $$v.trim() : $$v)
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
      "placeholder": "请输入处理结果（必选）",
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

throw new Error("Module build failed: SyntaxError: D:/moge/zhichengxitong/src/pages/OrderClose.vue: Unexpected token, expected ; (163:17)\n\u001b[0m \u001b[90m 161 | \u001b[39m                reason\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mreason\u001b[33m,\u001b[39m\n \u001b[90m 162 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 163 | \u001b[39m            axios\u001b[33m.\u001b[39mpost(ajaxUrls\u001b[33m.\u001b[39mlogin\u001b[33m,\u001b[39m {\n \u001b[90m     | \u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 164 | \u001b[39m                username\u001b[33m:\u001b[39m username\u001b[33m,\u001b[39m\n \u001b[90m 165 | \u001b[39m                password\u001b[33m:\u001b[39m code\n \u001b[90m 166 | \u001b[39m            }\u001b[33m,\u001b[39m {\u001b[0m\n    at Parser.pp$5.raise (D:\\moge\\node_modules\\babylon\\lib\\index.js:4333:13)\n    at Parser.pp.unexpected (D:\\moge\\node_modules\\babylon\\lib\\index.js:1705:8)\n    at Parser.pp.semicolon (D:\\moge\\node_modules\\babylon\\lib\\index.js:1686:38)\n    at Parser.pp$1.parseVarStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:2116:8)\n    at Parser.pp$1.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:1807:19)\n    at Parser.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:5302:22)\n    at Parser.pp$1.parseBlockBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:2212:21)\n    at Parser.pp$1.parseBlock (D:\\moge\\node_modules\\babylon\\lib\\index.js:2193:8)\n    at Parser.pp$3.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:4086:22)\n    at Parser.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:5289:20)\n    at Parser.pp$3.parseMethod (D:\\moge\\node_modules\\babylon\\lib\\index.js:4055:8)\n    at Parser.pp$3.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:3976:10)\n    at Parser.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:5604:13)\n    at Parser.pp$3.parseObj (D:\\moge\\node_modules\\babylon\\lib\\index.js:3950:10)\n    at Parser.pp$3.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:3639:19)\n    at Parser.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:6591:22)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3414:19)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)\n    at Parser.pp$3.parseExprOps (D:\\moge\\node_modules\\babylon\\lib\\index.js:3324:19)\n    at Parser.pp$3.parseMaybeConditional (D:\\moge\\node_modules\\babylon\\lib\\index.js:3301:19)\n    at Parser.pp$3.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:3264:19)\n    at Parser.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:5813:20)\n    at Parser.pp$3.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:3981:99)\n    at Parser.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:5604:13)\n    at Parser.pp$3.parseObj (D:\\moge\\node_modules\\babylon\\lib\\index.js:3950:10)\n    at Parser.pp$3.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:3639:19)\n    at Parser.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:6591:22)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3414:19)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)\n    at Parser.pp$3.parseExprOps (D:\\moge\\node_modules\\babylon\\lib\\index.js:3324:19)");

/***/ }

});