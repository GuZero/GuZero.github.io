webpackJsonp([1],{

/***/ 116:
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
    staticClass: "border",
    attrs: {
      "tag": "姓名：",
      "placeholder": "请选择转发人员姓名",
      "input": true,
      "readonly": "readonly",
      "autocomplete": "new-password"
    },
    on: {
      "changeCallback": _vm.gotoTerminal
    },
    model: {
      value: (_vm.userName),
      callback: function($$v) {
        _vm.userName = $$v
      },
      expression: "userName"
    }
  }), _c('Field', {
    staticClass: "border",
    attrs: {
      "tag": "备注：",
      "placeholder": "转发描述",
      "textarea": true
    },
    model: {
      value: (_vm.desc),
      callback: function($$v) {
        _vm.desc = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "desc"
    }
  }), _c('ModalDialog', {
    ref: "confirmModal",
    on: {
      "confirmCallback": _vm.deal
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
     require("vue-hot-reload-api").rerender("data-v-3d634ef9", module.exports)
  }
}

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3c0cfaad", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3d634ef9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderTerminal.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3d634ef9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderTerminal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(136)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(116),
  /* scopeId */
  "data-v-3d634ef9",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\OrderTerminal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrderTerminal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d634ef9", Component.options)
  } else {
    hotAPI.reload("data-v-3d634ef9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 46:
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

/* harmony default export */ exports["default"] = {
	data: function data() {
		return {
			title: '友情提示',
			text: '',
			cancelText: '取消',
			confirmText: '确定',
			hideTitle: false,
			hideText: false,
			buttons: 2,
			showCancelBtn: true,
			showConfirmBtn: true
		};
	},

	methods: {
		resetModalOptions: function resetModalOptions(options) {
			if (options.title) this.title = options.title;
			if (options.text) this.text = options.text;
			if (options.cancelText) this.cancelText = options.cancelText;
			if (options.confirmText) this.confirmText = options.confirmText;
			if (!options.cancelText || !options.confirmText) this.buttons = 1;
			if (!options.cancelText && !options.confirmText) this.buttons = 2;
			if (!options.cancelText && options.confirmText) this.showCancelBtn = false;
			if (options.cancelText && !options.confirmText) this.showConfirmBtn = false;
			if (options.hideTitle) this.hideTitle = options.hideTitle;
			if (options.hideText) this.hideText = options.hideText;
		},
		showModal: function showModal(options) {
			var $ele = this.$el,
			    $layer = $ele.children[0],
			    $modal = $ele.children[1];
			this.resetModalOptions(options);
			$layer.addClassName('modal-layer-visible');
			$modal.removeClassName('modal-out').removeClassName('hidden').addClassName('visible modal-in');
		},
		closeModal: function closeModal() {
			var $ele = this.$el,
			    $layer = $ele.children[0],
			    $modal = $ele.children[1];
			$layer.removeClassName('modal-layer-visible');
			$modal.removeClassName('modal-in').addClassName('modal-out');
			setTimeout(function () {
				$modal.addClassName('hidden');
			}, 430);
		},
		confirmHandle: function confirmHandle() {
			this.closeModal();
			this.$emit('confirmCallback');
		}
	}
};

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

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.modal[data-v-0b425e30] {\n  width: 270px;\n  position: fixed;\n  z-index: 12300;\n  left: 50%;\n  margin-left: -135px;\n  margin-top: -120px;\n  top: -50%;\n  text-align: center;\n  border-radius: 7px;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  -ms-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -moz-transition-property: -moz-transform, opacity;\n  -ms-transition-property: -ms-transform, opacity;\n  -o-transition-property: -o-transform, opacity;\n  transition-property: transform, opacity;\n  color: #000;\n}\n.modal-layer[data-v-0b425e30] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 9000;\n    visibility: hidden;\n    opacity: 0;\n    transition-duration: .4s;\n}\n.modal-layer-visible[data-v-0b425e30] {\n      visibility: visible;\n      opacity: 1;\n}\n.modal.modal-in[data-v-0b425e30] {\n    opacity: 1;\n    -webkit-transition-duration: .4s;\n    transition-duration: .4s;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    -ms-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n}\n.modal.modal-out[data-v-0b425e30] {\n    opacity: 0;\n    -webkit-transition-duration: .4s;\n    transition-duration: .4s;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    -ms-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815);\n}\n.modal.visible[data-v-0b425e30] {\n    top: 50%;\n}\n.modal.hidden[data-v-0b425e30] {\n    top: -50%;\n}\n.modal-inner[data-v-0b425e30] {\n    padding: 15px;\n    border-bottom: 1px solid #eee;\n    border-radius: 7px 7px 0 0;\n    background: #fff;\n}\n.modal-title[data-v-0b425e30] {\n    font-size: 18px;\n    text-align: center;\n}\n.modal-title p[data-v-0b425e30] {\n      margin: 0;\n}\n.modal-text[data-v-0b425e30] {\n    margin-top: 5px;\n}\n.modal-button[data-v-0b425e30] {\n    width: 100%;\n    padding: 0 5px;\n    height: 44px;\n    font-size: 16px;\n    line-height: 44px;\n    text-align: center;\n    color: #737272;\n    background: #fff;\n    display: block;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    border-right: 1px solid #eee;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n}\n.modal-button[data-v-0b425e30]:first-child {\n      border-radius: 0 0 0 7px;\n}\n.modal-button[data-v-0b425e30]:last-child {\n      border-right: none;\n      border-radius: 0 0 7px;\n}\n.modal-button-bold[data-v-0b425e30] {\n      font-weight: 500;\n      color: #007aff;\n}\n.modal-buttons[data-v-0b425e30] {\n      height: 44px;\n      overflow: hidden;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n}\n.modal-buttons.one .modal-button[data-v-0b425e30] {\n        border-radius: 0 0 7px 7px;\n        color: #007aff;\n}\n", ""]);

// exports


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.submits[data-v-530e9782] {\n  border-top: 1px #cfcfcf solid;\n  background-color: #f9f9f9;\n  color: #323232;\n  display: block;\n  width: 100%;\n  height: 51px;\n  line-height: 51px;\n  color: #333;\n  font-size: 16px;\n  left: 0;\n  bottom: 0;\n  z-index: 9000;\n}\n.submits.white[data-v-530e9782] {\n    background-color: #fff;\n    color: #07689f;\n}\n.submits[data-v-530e9782]:active {\n    background-color: #eee;\n}\n", ""]);

// exports


/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  "data-v-0b425e30",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\elements\\ModalDialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ModalDialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b425e30", Component.options)
  } else {
    hotAPI.reload("data-v-0b425e30", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "modal-layer fixed",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.closeModal($event)
      }
    }
  }), _c('div', {
    staticClass: "modal fixed visible modal-out hidden"
  }, [_c('div', {
    staticClass: "modal-inner"
  }, [(!_vm.hideTitle) ? _c('div', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (!_vm.hideText) ? _c('div', {
    staticClass: "modal-text",
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "modal-buttons rel",
    class: {
      one: _vm.buttons == 1
    }
  }, [(_vm.showCancelBtn) ? _c('span', {
    staticClass: "modal-button",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.closeModal($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), (_vm.showConfirmBtn) ? _c('span', {
    staticClass: "modal-button modal-button-bold",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.confirmHandle($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.confirmText))]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b425e30", module.exports)
  }
}

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

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("f4fd282a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b425e30\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalDialog.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0b425e30\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalDialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
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
        "value": o[_vm.id]
      }
    }, [_vm._v(_vm._s(o[_vm.value]))])
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

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_elements_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_elements_ModalDialog__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_elements_ModalDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_elements_ModalDialog__);
//
//
//
//
//
//
//
//
//
//
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
            bodyBg: 'gray',
            pageTitle: '转发',
            userName: '',
            name: '',
            userID: '',
            desc: '',
            _id: this.$route.query._id || ''
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        Field: __WEBPACK_IMPORTED_MODULE_1__components_elements_Field___default.a,
        SubmitBtn: __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default.a,
        ModalDialog: __WEBPACK_IMPORTED_MODULE_3__components_elements_ModalDialog___default.a
    },
    mixins: [__webpack_require__(6)],
    created: function created() {
        window.canGoBack = true;
        window.origin = null;
        //请求数据
        if (localStorage.user_Name || localStorage.user_ID) {
            this.userName = "";
            this.userID = "";
        } else {
            window.localStorage.setItem('user_Name', "");
            window.localStorage.setItem('user_ID', "");
        }
        this.getInfo();
    },
    activated: function activated() {
        window.canGoBack = true;
        window.origin = null;
    },

    watch: {
        '$route': function $route() {
            if (this.$route.path == '/order/forward') {
                this.desc = '';
                this.getInfo();
                localStorage.user_Name = '';
                localStorage.user_ID = '';
            }
        }
    },
    methods: {
        submitFun: function submitFun() {
            var that = this;
            if (!that.userName) {
                _util.showErrorTip('请选择要输入的转发的姓名');
                return false;
            };
            if (!that.desc) {
                _util.showErrorTip('请输入问题备注！');
                return false;
            };
            this.$refs.confirmModal.showModal({
                text: '确认是否转发给' + that.userName + '为处理？'
            });
        },
        gotoTerminal: function gotoTerminal() {
            this.url('/transmit');
        },
        getInfo: function getInfo() {
            var that = this;
            that.userName = localStorage.user_Name;
            that.userID = localStorage.user_ID;
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
        },
        deal: function deal() {
            var data = {
                owner_id: this.userID,
                priority: '1',
                content: this.desc
            },
                that = this;
            axios.post(ajaxUrls.orderinfo + that.$route.query._id + '/deal', {
                action: 'forward',
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
                    that.url('/');
                } else {
                    _util.showErrorTip(rsp.data.msg);
                }
            }).catch(function (error) {
                _util.hideSysLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.border[data-v-3d634ef9] {\n  border-bottom: 1px solid #ccc;\n  border-top: 1px solid #ccc;\n}\n", ""]);

// exports


/***/ }

});