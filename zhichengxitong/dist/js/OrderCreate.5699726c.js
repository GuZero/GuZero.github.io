webpackJsonp([2],{

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

/***/ 76:
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/moge/zhichengxitong/src/pages/OrderCreate.vue: Unexpected token, expected ; (90:1)\n\u001b[0m \u001b[90m 88 | \u001b[39m    }\u001b[33m,\u001b[39m\n \u001b[90m 89 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 90 | \u001b[39m}\u001b[33m,\u001b[39m\n \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 91 | \u001b[39m    methods\u001b[33m:\u001b[39m {\n \u001b[90m 92 | \u001b[39m        submitFun() {\n \u001b[90m 93 | \u001b[39m            \u001b[36mif\u001b[39m (\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mordertype\u001b[33m.\u001b[39mindexOf(\u001b[32m'选择'\u001b[39m) \u001b[33m>\u001b[39m \u001b[33m-\u001b[39m\u001b[35m1\u001b[39m) {\u001b[0m\n    at Parser.pp$5.raise (D:\\moge\\node_modules\\babylon\\lib\\index.js:4333:13)\n    at Parser.pp.unexpected (D:\\moge\\node_modules\\babylon\\lib\\index.js:1705:8)\n    at Parser.pp.semicolon (D:\\moge\\node_modules\\babylon\\lib\\index.js:1686:38)\n    at Parser.pp$1.parseExport (D:\\moge\\node_modules\\babylon\\lib\\index.js:2574:25)\n    at Parser.parseExport (D:\\moge\\node_modules\\babylon\\lib\\index.js:5380:20)\n    at Parser.pp$1.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:1830:74)\n    at Parser.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:5302:22)\n    at Parser.pp$1.parseBlockBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:2212:21)\n    at Parser.pp$1.parseTopLevel (D:\\moge\\node_modules\\babylon\\lib\\index.js:1723:8)\n    at Parser.parse (D:\\moge\\node_modules\\babylon\\lib\\index.js:1617:17)\n    at parse (D:\\moge\\node_modules\\babylon\\lib\\index.js:6657:37)\n    at File.parse (D:\\moge\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:517:34)\n    at File.parseCode (D:\\moge\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:603:20)\n    at D:\\moge\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:49:12\n    at File.wrap (D:\\moge\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:563:16)\n    at Pipeline.transform (D:\\moge\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:47:17)\n    at transpile (D:\\moge\\node_modules\\babel-loader\\index.js:14:22)\n    at Object.module.exports (D:\\moge\\node_modules\\babel-loader\\index.js:88:12)");

/***/ }

});