webpackJsonp([6],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

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
      "tag": "终端名称",
      "placeholder": "请输入终端名称（必填）",
      "input": true
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
  }), _c('el-date-picker', {
    attrs: {
      "type": "datetime",
      "placeholder": "选择日期时间"
    },
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
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
      "placeholder": "请选择超时间",
      "input": true
    },
    model: {
      value: (_vm.overtime),
      callback: function($$v) {
        _vm.overtime = $$v
      },
      expression: "overtime"
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

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'F:\\moge\\zhichengxitong\\src\\lib\\element.js'\n    at Error (native)");

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(117),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\moge\\zhichengxitong\\src\\pages\\OrderCreate.vue"
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


/***/ })

});