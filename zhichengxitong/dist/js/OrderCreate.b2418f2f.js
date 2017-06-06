webpackJsonp([0],{

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes vueDatePicker {\n0% {\n        opacity: 0;\n        -webkit-transform: translate(-50%, -50%) scale(0);\n        transform: translate(-50%, -50%) scale(0);\n}\n100% {\n        opacity: 1;\n        -webkit-transform: translate(0) scale(1);\n        transform: translate(0) scale(1);\n}\n}\n@keyframes vueDatePicker {\n0% {\n        opacity: 0;\n        -webkit-transform: translate(-50%, -50%) scale(0);\n        transform: translate(-50%, -50%) scale(0);\n}\n100% {\n        opacity: 1;\n        -webkit-transform: translate(0) scale(1);\n        transform: translate(0) scale(1);\n}\n}\n.vue-datepicker[data-v-9556547c] {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    font-family: verdana;\n    font-size: 12px;\n    color: #666;\n}\n.vue-datepicker *[data-v-9556547c] {\n    margin: 0;\n    padding: 0;\n}\n.vue-datepicker input[data-v-9556547c] {\n    height: 30px;\n    line-height: 30px;\n    width: 99%;\n    border: none;\n    position: relative;\n    top: 13px;\n    left: 0;\n    font-size: 13px;\n}\n.vue-datepicker .vue-datepicker-panels[data-v-9556547c] {\n    position: absolute;\n    z-index: 99999;\n    left: 0;\n    background-color: #FFF;\n    width: 94%;\n    border: 1px solid #DDD;\n    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);\n    padding: 10px 6px;\n    -webkit-animation: vueDatePicker 0.1s ease-out;\n    animation: vueDatePicker 0.1s ease-out;\n    top: 50px;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-month[data-v-9556547c] {\n    height: 35px;\n    line-height: 35px;\n    overflow: hidden;\n    text-align: center;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-month a[data-v-9556547c] {\n    float: left;\n    display: block;\n    cursor: pointer;\n    color: #999;\n    font-size: 13px;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-month a[data-v-9556547c]:hover {\n    background-color: #F5F6F7;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-month span[data-v-9556547c] {\n    float: left;\n    display: block;\n    width: 89%;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-month span.vue-datepicker-btn[data-v-9556547c]:hover {\n    background-color: #F5F6F7;\n    cursor: pointer;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2[data-v-9556547c] {\n    width: 100%;\n    border-collapse: collapse;\n    text-align: center;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead[data-v-9556547c] {\n    background-color: #F5F6F7;\n    height: 35px;\n    line-height: 35px;\n    border-top: 1px solid #DDD;\n    border-bottom: 1px solid #DDD;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead tr[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead tr[data-v-9556547c] {\n    border: none;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb thead tr th[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 thead tr th[data-v-9556547c] {\n    width: 35px;\n    font-size: 12px;\n    border: none;\n    font-weight: normal;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr[data-v-9556547c] {\n    border-top: 1px solid #EEE;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td[data-v-9556547c] {\n    height: 31.5px;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed[data-v-9556547c] {\n    cursor: pointer;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed span[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed span[data-v-9556547c] {\n    display: block;\n    height: 21.7px;\n    line-height: 21.7px;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed[data-v-9556547c]:hover,\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed[data-v-9556547c]:hover {\n    background-color: #F5F6F7;\n    color: #d0000e;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-on span[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-on span[data-v-9556547c] {\n    color: #FFF;\n    background-color: #d0000e;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid[data-v-9556547c] {\n    cursor: default;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid span[data-v-9556547c],\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid span[data-v-9556547c] {\n    color: #ccc;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb tbody tr td.z-existed.z-invalid[data-v-9556547c]:hover,\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed.z-invalid[data-v-9556547c]:hover {\n    background-color: transparent;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr[data-v-9556547c] {\n    border-top: 1px solid #EEE;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td[data-v-9556547c] {\n    height: 31.5px;\n    padding: 4px 10px;\n    font-size: 13px;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed[data-v-9556547c] {\n    cursor: pointer;\n}\n.vue-datepicker .vue-datepicker-panel .vue-datepicker-tb2 tbody tr td.z-existed span[data-v-9556547c] {\n    display: block;\n    height: 22.75px;\n    line-height: 22.75px;\n}\n.tr-abs[data-v-9556547c] {\n    position: absolute;\n    bottom: 5px;\n    left: 10px;\n}\n.tr-abs label[data-v-9556547c] {\n    width: 30px;\n    text-align: center;\n}\n\n", ""]);

// exports


/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.time-picker {\n  display: inline-block;\n  position: relative;\n  font-size: 1em;\n  width: 10em;\n  font-family: sans-serif;\n  vertical-align: middle;\n}\n.time-picker * {\n  box-sizing: border-box;\n}\n.time-picker input.display-time {\n  border: 1px solid #d2d2d2;\n  width: 10em;\n  height: 2.2em;\n  padding: 0.3em 0.5em;\n  font-size: 1em;\n}\n.time-picker .clear-btn {\n  position: absolute;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: -0.15em;\n  z-index: 3;\n  font-size: 1.1em;\n  line-height: 1em;\n  vertical-align: middle;\n  width: 1.3em;\n  color: #d2d2d2;\n  background: rgba(255,255,255,0);\n  text-align: center;\n  font-style: normal;\n\n  -webkit-transition: color .2s;\n  transition: color .2s;\n}\n.time-picker .clear-btn:hover {\n  color: #797979;\n  cursor: pointer;\n}\n.time-picker .time-picker-overlay {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.time-picker .dropdown {\n  position: absolute;\n  z-index: 5;\n  top: calc(2.2em + 2px);\n  left: 0;\n  background: #fff;\n  box-shadow: 0 1px 6px rgba(0,0,0,0.15);\n  width: 10em;\n  height: 10em;\n  font-weight: normal;\n}\n.time-picker .dropdown .select-list {\n  width: 10em;\n  height: 10em;\n  overflow: hidden;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  justify-content: space-between;\n}\n.time-picker .dropdown ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.time-picker .dropdown ul.minutes,\n.time-picker .dropdown ul.seconds,\n.time-picker .dropdown ul.apms{\n  border-left: 1px solid #fff;\n}\n.time-picker .dropdown ul li {\n  text-align: center;\n  padding: 0.3em 0;\n  color: #161616;\n}\n.time-picker .dropdown ul li:not(.hint):hover {\n  background: rgba(0,0,0,.08);\n  color: #161616;\n  cursor: pointer;\n}\n.time-picker .dropdown ul li.active,\n.time-picker .dropdown ul li.active:hover {\n  background: #41B883;\n  color: #fff;\n}\n.time-picker .dropdown .hint {\n  color: #a5a5a5;\n  cursor: default;\n  font-size: 0.8em;\n}\n\n", ""]);

// exports


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(158)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(71),
  /* template */
  __webpack_require__(136),
  /* scopeId */
  "data-v-9556547c",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\datepicker-2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] datepicker-2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9556547c", Component.options)
  } else {
    hotAPI.reload("data-v-9556547c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(160)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\vue-timepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue-timepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bcfaaa3a", Component.options)
  } else {
    hotAPI.reload("data-v-bcfaaa3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 124:
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
  }), _c('Field', {
    attrs: {
      "tag": "故障等级",
      "pvalue": _vm.fault,
      "p": true
    }
  }), _c('div', {
    staticClass: "filed rel"
  }, [_c('div', {
    staticClass: "text abs center"
  }, [_vm._v("超时设置               ")]), _c('DatePicker', {
    staticClass: "box rel",
    attrs: {
      "field": "myDate",
      "placeholder": "选择日期",
      "no-today": true,
      "format": "yyyy-mm-dd",
      "forward": true
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  })], 1), _c('Field', {
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

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vue-datepicker",
    on: {
      "mouseout": _vm.endChoice,
      "mouseover": _vm.startMouseOver
    }
  }, [_c('input', {
    ref: "input",
    attrs: {
      "type": "text",
      "autocomplete": "off",
      "disableautocomplete": "",
      "name": _vm.field,
      "id": _vm.field,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.startChoice,
      "keypress": _vm.startChoice,
      "blur": _vm.endChoice
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dayPanelIsShow || _vm.monthPanelIsShow),
      expression: "dayPanelIsShow || monthPanelIsShow"
    }],
    staticClass: "vue-datepicker-panels"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dayPanelIsShow),
      expression: "dayPanelIsShow"
    }],
    staticClass: "vue-datepicker-panel"
  }, [_c('div', {
    staticClass: "vue-datepicker-month"
  }, [_c('a', {
    staticClass: "vue-datepicker-prev",
    on: {
      "click": _vm.prevMonth
    }
  }, [_vm._v(" < ")]), _vm._v(" "), _c('span', {
    staticClass: "vue-datepicker-btn",
    on: {
      "click": _vm.startChoiceMonth
    }
  }, [_vm._v(_vm._s(_vm.year) + "年 " + _vm._s(_vm.month + 1) + "月")]), _vm._v(" "), _c('a', {
    staticClass: "vue-datepicker-next",
    on: {
      "click": _vm.nextMonth
    }
  }, [_vm._v(" > ")])]), _vm._v(" "), _c('table', {
    staticClass: "vue-datepicker-tb"
  }, [_c('thead', [_c('tr', _vm._l((_vm.langConf.week), function(d) {
    return _c('th', [_vm._v(_vm._s(d))])
  }))]), _vm._v(" "), _c('tbody', [_vm._l((_vm.monthDays), function(m, mIndex) {
    return _c('tr', {
      attrs: {
        "track-by": "$index"
      }
    }, _vm._l((m), function(d, dIndex) {
      return _c('td', {
        class: _vm.classDay(d),
        attrs: {
          "track-by": "$index"
        },
        on: {
          "click": function($event) {
            _vm.choiceDay(d, $event)
          }
        }
      }, [_c('span', [_vm._v(_vm._s(d))])])
    }))
  }), _vm._v(" "), _c('tr', {
    staticClass: "tr-abs",
    staticStyle: {
      "border-top": "0px solid #EEE"
    }
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("时间：")]), _c('VueTimepicker', {
    attrs: {
      "format": "HH:mm"
    },
    on: {
      "change": function($event) {
        _vm.setTime($event)
      }
    },
    model: {
      value: (_vm.yourTimeValue),
      callback: function($$v) {
        _vm.yourTimeValue = $$v
      },
      expression: "yourTimeValue"
    }
  })], 1)], 2)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.monthPanelIsShow),
      expression: "monthPanelIsShow"
    }],
    staticClass: "vue-datepicker-panel"
  }, [_c('div', {
    staticClass: "vue-datepicker-month"
  }, [_c('a', {
    staticClass: "vue-datepicker-prev",
    on: {
      "click": _vm.prevYear
    }
  }, [_vm._v(" < ")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.year) + "年")]), _vm._v(" "), _c('a', {
    staticClass: "vue-datepicker-next",
    on: {
      "click": _vm.nextYear
    }
  }, [_vm._v(" > ")])]), _vm._v(" "), _c('table', {
    staticClass: "vue-datepicker-tb2"
  }, [_c('col', {
    attrs: {
      "width": "33%"
    }
  }), _vm._v(" "), _c('col', {
    attrs: {
      "width": "33%"
    }
  }), _vm._v(" "), _c('col', {
    attrs: {
      "width": "33%"
    }
  }), _vm._v(" "), _c('tbody', _vm._l((_vm.monthArr), function(season) {
    return _c('tr', {
      attrs: {
        "track-by": "$index"
      }
    }, _vm._l((season), function(m) {
      return _c('td', {
        class: _vm.classMonth(m.id),
        attrs: {
          "track-by": "$index"
        },
        on: {
          "click": function($event) {
            _vm.choiceMonth(m.id)
          }
        }
      }, [_c('span', [_vm._v(_vm._s(m.name))])])
    }))
  }))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9556547c", module.exports)
  }
}

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "time-picker"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.displayTime),
      expression: "displayTime"
    }],
    staticClass: "display-time",
    attrs: {
      "id": _vm.id,
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": (_vm.displayTime)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleDropdown($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.displayTime = $event.target.value
      }
    }
  }), _vm._v(" "), (!_vm.hideClearButton) ? _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showDropdown && _vm.showClearBtn),
      expression: "!showDropdown && showClearBtn"
    }],
    staticClass: "clear-btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clearTime($event)
      }
    }
  }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), (_vm.showDropdown) ? _c('div', {
    staticClass: "time-picker-overlay",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleDropdown($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdown),
      expression: "showDropdown"
    }],
    staticClass: "dropdown"
  }, [_c('div', {
    staticClass: "select-list"
  }, [_c('ul', {
    staticClass: "hours"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.hourType)
    }
  }), _vm._v(" "), _vm._l((_vm.hours), function(hr) {
    return _c('li', {
      class: {
        active: _vm.hour === hr
      },
      domProps: {
        "textContent": _vm._s(hr)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('hour', hr)
        }
      }
    })
  })], 2), _vm._v(" "), _c('ul', {
    staticClass: "minutes"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.minuteType)
    }
  }), _vm._v(" "), _vm._l((_vm.minutes), function(m) {
    return _c('li', {
      class: {
        active: _vm.minute === m
      },
      domProps: {
        "textContent": _vm._s(m)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('minute', m)
        }
      }
    })
  })], 2), _vm._v(" "), (_vm.secondType) ? _c('ul', {
    staticClass: "seconds"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.secondType)
    }
  }), _vm._v(" "), _vm._l((_vm.seconds), function(s) {
    return _c('li', {
      class: {
        active: _vm.second === s
      },
      domProps: {
        "textContent": _vm._s(s)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('second', s)
        }
      }
    })
  })], 2) : _vm._e(), _vm._v(" "), (_vm.apmType) ? _c('ul', {
    staticClass: "apms"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.apmType)
    }
  }), _vm._v(" "), _vm._l((_vm.apms), function(a) {
    return _c('li', {
      class: {
        active: _vm.apm === a
      },
      domProps: {
        "textContent": _vm._s(a)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('apm', a)
        }
      }
    })
  })], 2) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bcfaaa3a", module.exports)
  }
}

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("31bdc1a9", content, false);
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

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("241cb54d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9556547c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker-2.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-9556547c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./datepicker-2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("344cbb6b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bcfaaa3a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue-timepicker.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bcfaaa3a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vue-timepicker.vue");
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
__webpack_require__(146)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(124),
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

/***/ 55:
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

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.submits[data-v-530e9782] {\n  border-top: 1px #cfcfcf solid;\n  background-color: #f9f9f9;\n  color: #323232;\n  display: block;\n  width: 100%;\n  height: 51px;\n  line-height: 51px;\n  color: #333;\n  font-size: 16px;\n  left: 0;\n  bottom: 0;\n  z-index: 9000;\n}\n.submits.white[data-v-530e9782] {\n    background-color: #fff;\n    color: #07689f;\n}\n.submits[data-v-530e9782]:active {\n    background-color: #eee;\n}\n", ""]);

// exports


/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(58),
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

/***/ 58:
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

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
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

/* harmony default export */ exports["default"] = {
    props: ["tag", "value", "type", "placeholder", "maxlength", "input", "textarea", "p", "pvalue", "arrow", "select", "selectText", "options", "optionJsonConfig"],
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

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.filed[data-v-4c0b8495] {\n  background-color: #fff;\n  min-height: 54px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  margin-top: 8px;\n}\n.filed.textarea[data-v-4c0b8495] {\n    height: 116px;\n}\n.filed.textarea .box[data-v-4c0b8495] {\n      height: 116px;\n}\n.filed .text[data-v-4c0b8495] {\n    left: 0;\n    top: 0;\n    width: 88px;\n    padding: 16px 0;\n}\n.filed .box[data-v-4c0b8495] {\n    margin-left: 88px;\n    min-height: 54px;\n}\n.filed .box input[data-v-4c0b8495] {\n      height: 30px;\n      line-height: 30px;\n      width: 99%;\n      border: none;\n      position: relative;\n      top: 13px;\n      left: 0;\n      font-size: 13px;\n}\n.filed .box textarea[data-v-4c0b8495] {\n      height: 87px;\n      width: 99%;\n      position: relative;\n      top: 20px;\n      border: none;\n      resize: none;\n      color: #323232;\n      font-size: 13px;\n}\n.filed .box p[data-v-4c0b8495] {\n      margin: 0;\n      min-height: 30px;\n      line-height: 22px;\n      font-size: 13px;\n      text-align: right;\n      padding: 0 16px 22px 0;\n      top: 17px;\n      left: 0;\n}\n.filed .select[data-v-4c0b8495] {\n    height: 54px;\n}\n.filed .select label[data-v-4c0b8495] {\n      display: inline-block;\n      height: 54px;\n      line-height: 54px;\n      top: 0;\n      right: 0;\n      color: #323232;\n      font-size: 13px;\n      width: 100%;\n      text-align: right;\n      padding-right: 38px;\n      z-index: 300;\n}\n.filed .select select[data-v-4c0b8495] {\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 54px;\n      background: none;\n      color: transparent;\n      border: none;\n      outline: none;\n      appearance: none;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      z-index: 301;\n}\n.filed .select select option[data-v-4c0b8495] {\n        color: #333;\n}\n.filed .select.arrow[data-v-4c0b8495]:after {\n      content: '';\n      background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n      background-size: 100% auto;\n      display: block;\n      height: 28px;\n      width: 28px;\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      margin-top: -14px;\n}\n", ""]);

// exports


/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(69)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(68),
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

/***/ 68:
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
    },
    on: {
      "focus": function($event) {
        _vm.$emit('changeCallback')
      }
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

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
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

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_timepicker__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_timepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_timepicker__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


'use strict';

//	日期格式化输出
function dateFormat(y, m, d, fm) {
    if (!fm) {
        fm = 'yyyy-mm-dd';
    }
    m = ('0' + (parseInt(m) + 1)).slice(-2);
    d = ('0' + d).slice(-2);
    return fm.replace('yyyy', y).replace('YYYY', y).replace('mm', m).replace('MM', m).replace('DD', d).replace('dd', d);
}
// 比较两个日期大小，返回 -1 0 1
function dateCompare(date1, date2) {
    if (date1.year == date2.year) {
        if (date1.day && date2.day) {
            if (date1.month == date2.month) {
                return date1.day > date2.day ? 1 : date1.day == date2.day ? 0 : -1;
            } else {
                return date1.month > date2.month ? 1 : -1;
            }
        } else {
            return date1.month > date2.month ? 1 : date1.month == date2.month ? 0 : -1;
        }
    } else {
        return date1.year > date2.year ? 1 : -1;
    }
}

/* harmony default export */ exports["default"] = {
    props: {
        field: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: '',
            twoWay: true
        },
        format: {
            type: String,
            default: 'yyyy-mm-dd'
        },
        // 不能选今天
        noToday: {
            default: false
        },
        // 向前看，只能选今天及以后
        forward: {
            default: false
        },
        // 向后看
        backward: {
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        conf: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        var value = this.value,
            conf = this.conf,
            dateObj = void 0,
            year = void 0,
            month = void 0,
            day = void 0,
            langConf = {
            week: ['日', '一', '二', '三', '四', '五', '六'],
            month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        };

        if (value) {
            dateObj = new Date(value);
        } else {
            dateObj = new Date();
        }
        if (conf) {
            langConf = Object.assign(langConf, conf);
        }
        year = dateObj.getFullYear();
        month = dateObj.getMonth();
        day = dateObj.getDate();
        return {
            langConf: langConf,
            dayPanelIsShow: false,
            monthPanelIsShow: false,
            isMouseOver: false,
            year: year,
            month: month,
            day: day,
            yourTimeValue: {
                HH: "10",
                mm: "00"
            }
        };
    },

    components: {
        VueTimepicker: __WEBPACK_IMPORTED_MODULE_0__vue_timepicker___default.a
    },
    computed: {
        //	日期二维数组（3*4），渲染用
        monthArr: function monthArr() {
            var month = this.langConf.month,
                res = [];

            for (var i = 0; i <= 3; i++) {
                var temp = [];
                for (var j = 1; j <= 3; j++) {
                    var id = i * 3 + j - 1;
                    temp.push({
                        id: id,
                        name: month[id]
                    });
                }
                res.push(temp);
            }
            return res;
        },

        // 当前日期
        curr: function curr() {
            var value = this.value,
                noToday = this.noToday,
                dateObj = void 0,
                year = "0000",
                month = "00",
                day = "00";

            if (value) {
                dateObj = new Date(value);
            } else if (!noToday) {
                dateObj = new Date();
            } else {
                return {
                    year: year,
                    month: month,
                    day: day
                };
            }
            year = dateObj.getFullYear();
            month = dateObj.getMonth();
            day = dateObj.getDate();
            return {
                year: year,
                month: month,
                day: day
            };
        },

        // 返回当前月的天数数组
        monthDays: function monthDays() {
            var year = this.year,
                month = this.month,
                dayNum = void 0;

            month++;
            // 判断一个月有几天
            if (month == 2) {
                if (year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0)) {
                    dayNum = 29;
                } else {
                    dayNum = 28;
                }
            } else {
                if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
                    dayNum = 31;
                } else {
                    dayNum = 30;
                }
            }
            // 生成对应星期的日期数组
            var firstDay = new Date(year, month - 1, 1).getDay(),
                dayArr = new Array(6).fill(0).map(function () {
                return new Array(7).fill('');
            }),
                row = 0,
                col = firstDay;
            for (var d = 1; d <= dayNum; d++) {
                dayArr[row][col] = d;
                if (col < 6) {
                    col++;
                } else {
                    col = 0;
                    row++;
                }
            }
            return dayArr;
        },
        today: function today() {
            var dateObj = new Date(),
                year = dateObj.getFullYear(),
                month = dateObj.getMonth(),
                day = dateObj.getDate();
            return {
                year: year,
                month: month,
                day: day
            };
        }
    },
    methods: {
        // 判断日期是否合法 dateObj格式{year,month,day}
        dateIsValid: function dateIsValid(dateObj) {
            var today = this.today,
                forward = this.forward,
                backward = this.backward,
                noToday = this.noToday;

            if (forward && dateCompare(today, dateObj) > 0) {
                return false;
            }
            if (backward && dateCompare(today, dateObj) < 0) {
                return false;
            }
            if (noToday && dateObj.day && dateCompare(today, dateObj) == 0) {
                return false;
            }
            return true;
        },

        // 年份+月份选择
        startChoiceMonth: function startChoiceMonth() {
            this.dayPanelIsShow = false;
            this.monthPanelIsShow = true;
        },
        prevYear: function prevYear() {
            var year = this.year,
                forward = this.forward,
                today = this.today;

            if (forward && today.year >= year) {
                return false;
            }
            this.year--;
        },
        nextYear: function nextYear() {
            var year = this.year,
                backward = this.backward,
                today = this.today;

            if (backward && today.year <= year) {
                return false;
            }
            this.year++;
        },
        choiceMonth: function choiceMonth(m) {
            var year = this.year;

            if (this.dateIsValid({
                year: year,
                month: m
            })) {
                this.month = m;
                this.dayPanelIsShow = true;
                this.monthPanelIsShow = false;
            }
        },

        // 样式
        classMonth: function classMonth(m) {
            var that = this,
                month = that.month,
                year = that.year,
                curr = that.curr;

            return {
                'z-on': m == month && curr.year == year,
                'z-existed': true,
                'z-invalid': !that.dateIsValid({
                    year: year,
                    month: m
                })
            };
        },
        classDay: function classDay(d) {
            var that = this,
                month = that.month,
                year = that.year,
                curr = that.curr;

            return {
                'z-on': curr.day == d && curr.month == month && curr.year == year,
                'z-existed': d != '',
                'z-invalid': !that.dateIsValid({
                    year: year,
                    month: month,
                    day: d
                })
            };
        },


        // 月份+日期选择
        startChoice: function startChoice(e) {
            if (e && e.type == 'keypress') {
                e.returnValue = false;
            }
            if (!this.dayPanelIsShow && !this.monthPanelIsShow) {
                this.dayPanelIsShow = true;
            }
        },
        prevMonth: function prevMonth() {
            var year = this.year,
                month = this.month;

            if (this.dateIsValid({
                year: year,
                month: month - 1
            })) {
                if (month > 1) {
                    this.month--;
                } else {
                    this.year--;
                    this.month = 11;
                }
            }
        },
        nextMonth: function nextMonth() {
            var year = this.year,
                month = this.month;

            if (this.dateIsValid({
                year: year,
                month: month + 1
            })) {
                if (month < 11) {
                    this.month++;
                } else {
                    this.year++;
                    this.month = 0;
                }
            }
        },
        choiceDay: function choiceDay(d) {
            var year = this.year,
                month = this.month,
                format = this.format;

            if (d && this.dateIsValid({
                year: year,
                month: month,
                day: d
            })) {
                this.day = d;
                this.$emit('input', dateFormat(year, month, d, format));
                this.immEndChoice();
            }
        },

        // 鼠标离开日期选择区域时超过一定时间，关闭日期面板
        endChoice: function endChoice(e) {
            var that = this,
                inputEle = that.$refs.input;
            if (e.type == 'mouseout') {
                that.isMouseOver = false;
            }
            setTimeout(function () {
                if (!that.isMouseOver && inputEle != document.activeElement) {
                    that.immEndChoice();
                }
            }, 300);
        },
        startMouseOver: function startMouseOver() {
            this.isMouseOver = true;
        },

        // 立即关闭日期面板
        immEndChoice: function immEndChoice() {
            this.isMouseOver = true;
            this.dayPanelIsShow = false;
            this.monthPanelIsShow = false;
        },

        //设置时间
        setTime: function setTime(eventData) {
            var d = eventData.data,
                date = this.value.substring(0, 10),
                time = '';
            time = date + ' ' + this.yourTimeValue.HH + ':' + this.yourTimeValue.mm;
            this.value = time;
        }
    }
};

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var CONFIG = {
  HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
  MINUTE_TOKENS: ['mm', 'm'],
  SECOND_TOKENS: ['ss', 's'],
  APM_TOKENS: ['A', 'a']
};

/* harmony default export */ exports["default"] = {
  name: 'VueTimepicker',

  props: {
    value: { type: Object },
    hideClearButton: { type: Boolean },
    format: { type: String },
    minuteInterval: { type: Number },
    secondInterval: { type: Number },
    id: { type: String }
  },

  data: function data() {
    return {
      hours: [],
      minutes: [],
      seconds: [],
      apms: [],
      showDropdown: false,
      muteWatch: false,
      hourType: 'HH',
      minuteType: 'mm',
      secondType: '',
      apmType: '',
      hour: '',
      minute: '',
      second: '',
      apm: '',
      fullValues: undefined
    };
  },


  computed: {
    displayTime: function displayTime() {
      var formatString = String(this.format || 'HH:mm');
      if (this.hour) {
        formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour);
      }
      if (this.minute) {
        formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute);
      }
      if (this.second && this.secondType) {
        formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second);
      }
      if (this.apm && this.apmType) {
        formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm);
      }
      return formatString;
    },
    showClearBtn: function showClearBtn() {
      if (this.hour && this.hour !== '' || this.minute && this.minute !== '') {
        return true;
      }
      return false;
    }
  },

  watch: {
    'format': 'renderFormat',
    minuteInterval: function minuteInterval(newInteval) {
      this.renderList('minute', newInteval);
    },
    secondInterval: function secondInterval(newInteval) {
      this.renderList('second', newInteval);
    },

    'value': 'readValues',
    'displayTime': 'fillValues'
  },

  methods: {
    formatValue: function formatValue(type, i) {
      switch (type) {
        case 'H':
        case 'm':
        case 's':
          return String(i);
        case 'HH':
        case 'mm':
        case 'ss':
          return i < 10 ? '0' + i : String(i);
        case 'h':
        case 'k':
          return String(i + 1);
        case 'hh':
        case 'kk':
          return i + 1 < 10 ? '0' + (i + 1) : String(i + 1);
        default:
          return '';
      }
    },
    checkAcceptingType: function checkAcceptingType(validValues, formatString, fallbackValue) {
      if (!validValues || !formatString || !formatString.length) {
        return '';
      }
      for (var i = 0; i < validValues.length; i++) {
        if (formatString.indexOf(validValues[i]) > -1) {
          return validValues[i];
        }
      }
      return fallbackValue || '';
    },
    renderFormat: function renderFormat(newFormat) {
      newFormat = newFormat || this.format;
      if (!newFormat || !newFormat.length) {
        newFormat = 'HH:mm';
      }

      this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH');
      this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm');
      this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat);
      this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat);

      this.renderHoursList();
      this.renderList('minute');

      if (this.secondType) {
        this.renderList('second');
      }

      if (this.apmType) {
        this.renderApmList();
      }

      var self = this;
      this.$nextTick(function () {
        self.readValues();
      });
    },
    renderHoursList: function renderHoursList() {
      var hoursCount = this.hourType === 'h' || this.hourType === 'hh' ? 12 : 24;
      this.hours = [];
      for (var i = 0; i < hoursCount; i++) {
        this.hours.push(this.formatValue(this.hourType, i));
      }
    },
    renderList: function renderList(listType, interval) {
      if (listType === 'second') {
        interval = interval || this.secondInterval;
      } else if (listType === 'minute') {
        interval = interval || this.minuteInterval;
      } else {
        return;
      }

      if (interval === 0) {
        interval = 60;
      } else if (interval > 60) {
        window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval);
        interval = 1;
      } else if (interval < 1) {
        window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval);
        interval = 1;
      } else if (!interval) {
        interval = 1;
      }

      if (listType === 'minute') {
        this.minutes = [];
      } else {
        this.seconds = [];
      }

      for (var i = 0; i < 60; i += interval) {
        if (listType === 'minute') {
          this.minutes.push(this.formatValue(this.minuteType, i));
        } else {
          this.seconds.push(this.formatValue(this.secondType, i));
        }
      }
    },
    renderApmList: function renderApmList() {
      this.apms = [];
      if (!this.apmType) {
        return;
      }
      this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm'];
    },
    readValues: function readValues() {
      if (!this.value || this.muteWatch) {
        return;
      }

      var timeValue = JSON.parse(JSON.stringify(this.value || {}));

      var values = Object.keys(timeValue);
      if (values.length === 0) {
        return;
      }

      if (values.indexOf(this.hourType) > -1) {
        this.hour = timeValue[this.hourType];
      }

      if (values.indexOf(this.minuteType) > -1) {
        this.minute = timeValue[this.minuteType];
      }

      if (values.indexOf(this.secondType) > -1) {
        this.second = timeValue[this.secondType];
      } else {
        this.second = 0;
      }

      if (values.indexOf(this.apmType) > -1) {
        this.apm = timeValue[this.apmType];
      }

      this.fillValues();
    },
    fillValues: function fillValues() {
      var fullValues = {};

      var baseHour = this.hour;
      var baseHourType = this.hourType;

      var hourValue = baseHour || baseHour === 0 ? Number(baseHour) : '';
      var baseOnTwelveHours = this.isTwelveHours(baseHourType);
      var apmValue = baseOnTwelveHours && this.apm ? String(this.apm).toLowerCase() : false;

      CONFIG.HOUR_TOKENS.forEach(function (token) {
        if (token === baseHourType) {
          fullValues[token] = baseHour;
          return;
        }

        var value = void 0;
        var apm = void 0;
        switch (token) {
          case 'H':
          case 'HH':
            if (!String(hourValue).length) {
              fullValues[token] = '';
              return;
            } else if (baseOnTwelveHours) {
              if (apmValue === 'pm') {
                value = hourValue < 12 ? hourValue + 12 : hourValue;
              } else {
                value = hourValue % 12;
              }
            } else {
              value = hourValue % 24;
            }
            fullValues[token] = token === 'HH' && value < 10 ? '0' + value : String(value);
            break;
          case 'k':
          case 'kk':
            if (!String(hourValue).length) {
              fullValues[token] = '';
              return;
            } else if (baseOnTwelveHours) {
              if (apmValue === 'pm') {
                value = hourValue < 12 ? hourValue + 12 : hourValue;
              } else {
                value = hourValue === 12 ? 24 : hourValue;
              }
            } else {
              value = hourValue === 0 ? 24 : hourValue;
            }
            fullValues[token] = token === 'kk' && value < 10 ? '0' + value : String(value);
            break;
          case 'h':
          case 'hh':
            if (apmValue) {
              value = hourValue;
              apm = apmValue || 'am';
            } else {
              if (!String(hourValue).length) {
                fullValues[token] = '';
                fullValues.a = '';
                fullValues.A = '';
                return;
              } else if (hourValue > 11) {
                apm = 'pm';
                value = hourValue === 12 ? 12 : hourValue % 12;
              } else {
                if (baseOnTwelveHours) {
                  apm = '';
                } else {
                  apm = 'am';
                }
                value = hourValue % 12 === 0 ? 12 : hourValue;
              }
            }
            fullValues[token] = token === 'hh' && value < 10 ? '0' + value : String(value);
            fullValues.a = apm;
            fullValues.A = apm.toUpperCase();
            break;
        }
      });

      if (this.minute || this.minute === 0) {
        var minuteValue = Number(this.minute);
        fullValues.m = String(minuteValue);
        fullValues.mm = minuteValue < 10 ? '0' + minuteValue : String(minuteValue);
      } else {
        fullValues.m = '';
        fullValues.mm = '';
      }

      if (this.second || this.second === 0) {
        var secondValue = Number(this.second);
        fullValues.s = String(secondValue);
        fullValues.ss = secondValue < 10 ? '0' + secondValue : String(secondValue);
      } else {
        fullValues.s = '';
        fullValues.ss = '';
      }

      this.fullValues = fullValues;
      this.updateTimeValue(fullValues);
      this.$emit('change', { data: fullValues });
    },
    updateTimeValue: function updateTimeValue(fullValues) {
      this.muteWatch = true;

      var self = this;

      var baseTimeValue = JSON.parse(JSON.stringify(this.value || {}));
      var timeValue = {};

      Object.keys(baseTimeValue).forEach(function (key) {
        timeValue[key] = fullValues[key];
      });

      this.$emit('input', timeValue);

      this.$nextTick(function () {
        self.muteWatch = false;
      });
    },
    isTwelveHours: function isTwelveHours(token) {
      return token === 'h' || token === 'hh';
    },
    toggleDropdown: function toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    select: function select(type, value) {
      if (type === 'hour') {
        this.hour = value;
      } else if (type === 'minute') {
        this.minute = value;
      } else if (type === 'second') {
        this.second = value;
      } else if (type === 'apm') {
        this.apm = value;
      }
    },
    clearTime: function clearTime() {
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.apm = '';
    }
  },

  mounted: function mounted() {
    this.renderFormat();
  }
};

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls, _util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_elements_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_datepicker_2__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_datepicker_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_common_datepicker_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/*Field(tag="超时设置", placeholder="请选择超时间", :input="true" v-model="overtime")*/
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
            fault: '（系统根据现场现象自动选择）',
            desc: '',
            val: '',
            project_id: '',
            state: '',
            flag: false,
            date: '2017-06-06 10:00'
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        Field: __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default.a,
        SubmitBtn: __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default.a,
        DatePicker: __WEBPACK_IMPORTED_MODULE_3__components_common_datepicker_2___default.a
    },
    created: function created() {
        //请求数据
        this.ordertypes = [{
            id: '1',
            name: '普通工单'
        }, {
            id: '2',
            name: '运维工单'
        }];
        if (localStorage.terminal_name) {
            this.terminalName = "";
        } else {
            window.localStorage.setItem('terminal_name', "");
            window.localStorage.setItem('terminal_code', "");
        }
        var that = this;
        //获取现场现象
        axios.get(ajaxUrls.option).then(function (rsp) {
            var d = rsp.data;
            that.scenes = d.data.appearance;
            //                console.log(that.scenes);
        });
    },

    watch: {
        '$route': 'setName'
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
                _util.showErrorTip('请选择现场现象！');
                return false;
            };
            if (!this.desc) {
                _util.showErrorTip('请输入问题描述！');
                return false;
            };
            console.log(this.date);
            var project_id = this.project_id,
                terminal_code = localStorage.terminal_code,
                appearance = this.val,
                timeout = this.date,
                state = this.state,
                content = this.desc;

            axios.post(ajaxUrls.task, {
                project_id: project_id,
                terminal_code: terminal_code,
                appearance: appearance,
                timeout: timeout,
                state: state,
                content: content
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (rsp) {
                _util.hideSysLoading();
                console.log(rsp.data);
                if (rsp.data.status == 0) {
                    _util.showErrorTip(rsp.data.msg);
                } else {
                    _util.showErrorTip(rsp.data.msg);
                }
            });
        },
        testChange: function testChange() {
            for (var i = 0; i < this.scenes.length; i++) {
                for (var item in this.scenes[i]) {
                    if (item == 'id') {
                        if (this.scenes[i].id == this.val) {
                            this.state = this.scenes[i].level;
                            switch (this.state) {
                                case 1:
                                    this.fault = '一级故障';
                                    break;
                                case 1:
                                    this.fault = '二级故障';
                                    break;
                                case 1:
                                    this.fault = '三级故障';
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
            }
        },

        //获取工单类型ID
        getID: function getID(val) {
            this.project_id = val;
        },
        getValue: function getValue(val) {
            this.val = val;
            //                console.log(this.val)
        },
        goInfo: function goInfo() {
            this.url('/searchterminal');
        },
        setName: function setName() {
            this.terminalName = localStorage.terminal_name;
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(3)))

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.filed[data-v-2a68d2b9] {\n  background-color: #fff;\n  min-height: 54px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  margin-top: 8px;\n}\n.filed .text[data-v-2a68d2b9] {\n    left: 0;\n    top: 0;\n    width: 88px;\n    padding: 16px 0;\n}\n.filed .box[data-v-2a68d2b9] {\n    margin-left: 88px;\n    min-height: 54px;\n}\n.rel[data-v-2a68d2b9] {\n  position: relative;\n}\n.abs[data-v-2a68d2b9] {\n  position: absolute;\n}\n.center[data-v-2a68d2b9] {\n  text-align: center;\n}\n", ""]);

// exports


/***/ }

});