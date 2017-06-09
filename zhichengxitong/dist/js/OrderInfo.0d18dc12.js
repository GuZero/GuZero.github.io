webpackJsonp([0],{

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.text .tag[data-v-ca4fe23c] {\n  color: #6e6e6e;\n  left: 0;\n  top: 0;\n}\n", ""]);

// exports


/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(138)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(69),
  /* template */
  __webpack_require__(121),
  /* scopeId */
  "data-v-ca4fe23c",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\elements\\Text.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Text.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca4fe23c", Component.options)
  } else {
    hotAPI.reload("data-v-ca4fe23c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-order"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle
    }
  }), _c('div', {
    staticClass: "mt44 pb60"
  }, [_c('div', {
    staticClass: "user center rel"
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8"
    }
  }), _c('p', {
    staticClass: "bold"
  }, [_vm._v(_vm._s(_vm.username) + "的运维工单")]), (!_vm.completed) ? _c('div', {
    staticClass: "f12 status in"
  }, [_c('label', {
    staticClass: "rel"
  }, [_vm._v("等待" + _vm._s(_vm.username) + "处理")])]) : _vm._e(), (_vm.completed) ? _c('div', {
    staticClass: "f12 status"
  }, [_c('label', {
    staticClass: "rel"
  }, [_vm._v("已完成")])]) : _vm._e()]), _c('div', {
    staticClass: "graybt8 rel"
  }, [_c('div', {
    staticClass: "keys rel"
  }, [_c('TextFiled', {
    staticClass: "h22",
    attrs: {
      "tag": "终端名称：",
      "text": _vm.data.terminalName
    }
  }), _c('TextFiled', {
    staticClass: "h22",
    attrs: {
      "tag": "故障等级：",
      "text": _vm.data.grade
    }
  }), (!_vm.completed) ? _c('TextFiled', {
    staticClass: "h22",
    attrs: {
      "tag": "现场现象：",
      "text": _vm.data.scene
    }
  }) : _vm._e(), (_vm.completed) ? _c('TextFiled', {
    staticClass: "h22",
    attrs: {
      "tag": "现场现象（客服）：",
      "text": _vm.data.scene,
      "marginleft": "130"
    }
  }) : _vm._e(), _c('TextFiled', {
    attrs: {
      "tag": "问题描述：",
      "text": _vm.data.desc
    }
  })], 1), (_vm.completed) ? _c('div', {
    staticClass: "keys rel"
  }, [_c('TextFiled', {
    attrs: {
      "tag": "现场现象（运维）：",
      "text": _vm.data.terminalName,
      "marginleft": "130"
    }
  }), _c('TextFiled', {
    attrs: {
      "tag": "故障分类（运维）：",
      "text": _vm.data.terminalName,
      "marginleft": "130"
    }
  }), _c('TextFiled', {
    attrs: {
      "tag": "问题原因：",
      "text": _vm.data.scene,
      "marginleft": "130"
    }
  }), _c('TextFiled', {
    attrs: {
      "tag": "处理方式：",
      "text": _vm.data.scene,
      "marginleft": "130"
    }
  }), _c('TextFiled', {
    attrs: {
      "tag": "处理结果：",
      "text": _vm.data.scene,
      "marginleft": "130"
    }
  }), _c('TextFiled', {
    attrs: {
      "tag": "是否抓取日志：",
      "text": _vm.data.scene,
      "marginleft": "130"
    }
  })], 1) : _vm._e()]), _c('div', {
    staticClass: "info rel"
  }, _vm._l((_vm.history), function(item, index) {
    return _c('div', {
      staticClass: "meta rel",
      class: {
        done: _vm.history.length - 1 == index
      }
    }, [_c('div', {
      staticClass: "h5 rel"
    }, [_vm._v(" " + _vm._s(item.opeator) + " " + _vm._s(item.action))]), _c('div', {
      staticClass: "tms f12 rel"
    }, [_vm._v(_vm._s(item.created_at))])])
  })), (_vm.isAuthor && !_vm.completed) ? _c('SubmitBtn', {
    attrs: {
      "text": "删除"
    },
    on: {
      "submitCallback": function($event) {
        _vm.showAlert('delete')
      }
    }
  }, [_vm._v("删除")]) : _vm._e(), (_vm.isAdmin && !_vm.completed) ? _c('div', {
    staticClass: "btnGroup fixed flex"
  }, [_c('div', {
    staticClass: "flexmodel rel",
    on: {
      "click": function($event) {
        _vm.showAlert('agree')
      }
    }
  }, [_vm._v("同意")]), _c('div', {
    staticClass: "flexmodel rel",
    on: {
      "click": function($event) {
        _vm.showAlert('refuse')
      }
    }
  }, [_vm._v("拒绝")]), _c('div', {
    staticClass: "flexmodel rel",
    on: {
      "click": function($event) {
        _vm.showAlert('close')
      }
    }
  }, [_vm._v("关闭")]), _c('div', {
    staticClass: "flexmodel rel none",
    on: {
      "click": function($event) {
        _vm.showAlert('share')
      }
    }
  }, [_vm._v("转发")])]) : _vm._e()], 1), _c('ModalDialog', {
    ref: "showalert",
    on: {
      "confirmCallback": _vm.doAlertEvent
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66131aaa", module.exports)
  }
}

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text rel"
  }, [_c('div', {
    staticClass: "tag abs"
  }, [_vm._v(_vm._s(_vm.tag))]), _c('div', {
    staticClass: "box rel",
    style: (_vm.marginleftstyle)
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ca4fe23c", module.exports)
  }
}

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5199ddfb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-66131aaa\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderInfo.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-66131aaa\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OrderInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7c4c54d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ca4fe23c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Text.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-ca4fe23c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Text.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(135)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(117),
  /* scopeId */
  "data-v-66131aaa",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\OrderInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] OrderInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66131aaa", Component.options)
  } else {
    hotAPI.reload("data-v-66131aaa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 45:
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

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.modal[data-v-0b425e30] {\n  width: 270px;\n  position: fixed;\n  z-index: 12300;\n  left: 50%;\n  margin-left: -135px;\n  margin-top: -120px;\n  top: -50%;\n  text-align: center;\n  border-radius: 7px;\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0) scale(1.185);\n  -ms-transform: translate3d(0, 0, 0) scale(1.185);\n  transform: translate3d(0, 0, 0) scale(1.185);\n  -webkit-transition-property: -webkit-transform, opacity;\n  -moz-transition-property: -moz-transform, opacity;\n  -ms-transition-property: -ms-transform, opacity;\n  -o-transition-property: -o-transform, opacity;\n  transition-property: transform, opacity;\n  color: #000;\n}\n.modal-layer[data-v-0b425e30] {\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 9000;\n    visibility: hidden;\n    opacity: 0;\n    transition-duration: .4s;\n}\n.modal-layer-visible[data-v-0b425e30] {\n      visibility: visible;\n      opacity: 1;\n}\n.modal.modal-in[data-v-0b425e30] {\n    opacity: 1;\n    -webkit-transition-duration: .4s;\n    transition-duration: .4s;\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    -ms-transform: translate3d(0, 0, 0) scale(1);\n    transform: translate3d(0, 0, 0) scale(1);\n}\n.modal.modal-out[data-v-0b425e30] {\n    opacity: 0;\n    -webkit-transition-duration: .4s;\n    transition-duration: .4s;\n    -webkit-transform: translate3d(0, 0, 0) scale(0.815);\n    -ms-transform: translate3d(0, 0, 0) scale(0.815);\n    transform: translate3d(0, 0, 0) scale(0.815);\n}\n.modal.visible[data-v-0b425e30] {\n    top: 50%;\n}\n.modal.hidden[data-v-0b425e30] {\n    top: -50%;\n}\n.modal-inner[data-v-0b425e30] {\n    padding: 15px;\n    border-bottom: 1px solid #eee;\n    border-radius: 7px 7px 0 0;\n    background: #fff;\n}\n.modal-title[data-v-0b425e30] {\n    font-size: 18px;\n    text-align: center;\n}\n.modal-title p[data-v-0b425e30] {\n      margin: 0;\n}\n.modal-text[data-v-0b425e30] {\n    margin-top: 5px;\n}\n.modal-button[data-v-0b425e30] {\n    width: 100%;\n    padding: 0 5px;\n    height: 44px;\n    font-size: 16px;\n    line-height: 44px;\n    text-align: center;\n    color: #737272;\n    background: #fff;\n    display: block;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    border-right: 1px solid #eee;\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n}\n.modal-button[data-v-0b425e30]:first-child {\n      border-radius: 0 0 0 7px;\n}\n.modal-button[data-v-0b425e30]:last-child {\n      border-right: none;\n      border-radius: 0 0 7px;\n}\n.modal-button-bold[data-v-0b425e30] {\n      font-weight: 500;\n      color: #007aff;\n}\n.modal-buttons[data-v-0b425e30] {\n      height: 44px;\n      overflow: hidden;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n}\n.modal-buttons.one .modal-button[data-v-0b425e30] {\n        border-radius: 0 0 7px 7px;\n        color: #007aff;\n}\n", ""]);

// exports


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(52)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(50),
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

/***/ 50:
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

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("f4fd282a", content, false);
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

/***/ 54:
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

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.submits[data-v-530e9782] {\n  border-top: 1px #cfcfcf solid;\n  background-color: #f9f9f9;\n  color: #323232;\n  display: block;\n  width: 100%;\n  height: 51px;\n  line-height: 51px;\n  color: #333;\n  font-size: 16px;\n  left: 0;\n  bottom: 0;\n  z-index: 9000;\n}\n.submits.white[data-v-530e9782] {\n    background-color: #fff;\n    color: #07689f;\n}\n.submits[data-v-530e9782]:active {\n    background-color: #eee;\n}\n", ""]);

// exports


/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(57),
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

/***/ 57:
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

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4f4b56a4", content, false);
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

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    data: function data() {
        var mrl = this.$props.marginleft;

        return {
            marginleftstyle: !mrl ? {
                marginLeft: '75px'
            } : {
                marginLeft: mrl + 'px'
            }
        };
    },

    props: ["tag", "text", "marginleft"]
};

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Text__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_elements_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_elements_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_elements_ModalDialog__ = __webpack_require__(49);
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
//
//
//
//
//
//
//
//
//
//
//
//
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
        return {
            pageTitle: '工单详情',
            username: 'jerry',
            completed: 0, //工单完成
            isAuthor: 0, //发布者身份
            isAdmin: 1, //审核者身份
            status: '',
            data: {
                terminalName: '东亚逸品加装格格货栈',
                grade: '一级故障',
                scene: '系统错误，请稍后再试！',
                desc: '运单号：24352346326，M0406/06号门，业主一键开柜丢件，调监控时间是2017-02-26 19:20:12，联系业主'
            },
            history: []
        };
    },

    computed: {
        completed: function completed() {
            return this.doneStatus1 && this.doneStatus2;
        }
    },
    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        TextFiled: __WEBPACK_IMPORTED_MODULE_1__components_elements_Text___default.a,
        ModalDialog: __WEBPACK_IMPORTED_MODULE_3__components_elements_ModalDialog___default.a,
        SubmitBtn: __WEBPACK_IMPORTED_MODULE_2__components_elements_SubmitBtn___default.a
    },
    watch: {
        '$route': 'getData'
    },
    mounted: function mounted() {
        window.canGoBack = true;
        window.origin = null;
        this.getData();
    },
    activated: function activated() {
        window.canGoBack = true;
        window.origin = null;
    },

    methods: {
        doAlertEvent: function doAlertEvent() {
            var type = this.alertId;
            if (type == 'delete') this.delete();
            if (type == 'agree') this.agree();
            if (type == 'refuse') this.refuse();
            if (type == 'close') this.close();
            if (type == 'share') this.share();
        },
        showAlert: function showAlert(id) {
            var title = '';
            this.alertId = id;

            if (id == 'delete') {
                title = '\u786E\u8BA4\u5220\u9664\uFF1F';
            }
            if (id == 'agree') {
                title = '\u786E\u8BA4\u540C\u610F\uFF1F';
            }
            if (id == 'refuse') {
                title = '\u786E\u8BA4\u62D2\u7EDD\uFF1F';
            }
            if (id == 'close') {
                title = '\u786E\u8BA4\u5173\u95ED\u5DE5\u5355\uFF1F';
            }
            if (id == 'share') {
                title = '\u786E\u8BA4\u8F6C\u53D1\uFF1F';
            }
            this.$refs.showalert.showModal({
                title: title,
                hideText: true
            });
        },
        delete: function _delete() {
            _util.showErrorTip('delete');
        },
        agree: function agree() {
            if (this.status == "已完成") {
                _util.showErrorTip('该工单已完成');
                return false;
            }
            _util.showErrorTip('agree');
        },
        refuse: function refuse() {
            if (this.status == "已完成") {
                _util.showErrorTip('该工单已完成');
                return false;
            }
            _util.showErrorTip('refuse');
        },
        close: function close() {
            console.log(this.status);
            if (this.status == "已完成") {
                _util.showErrorTip('该工单已完成');
                return false;
            }
            this.url('/order/close', {
                _id: this.$route.params.id
            });
        },
        share: function share() {
            if (this.status == "已完成") {
                _util.showErrorTip('该工单已完成');
                return false;
            }
            this.url('/transmit', {
                _id: this.$route.params.id
            });
        },
        getData: function getData() {
            var that = this;
            getAjaxRequest("orderinfo_cache", ajaxUrls.orderinfo + localStorage.task_id, that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function (response) {
                if (response.status == 0) {
                    that.username = response.data.creator;
                    that.data.terminalName = response.data.terminal_name;
                    that.data.grade = response.data.level;
                    that.data.scene = response.data.appearance;
                    that.data.desc = response.data.content;
                    that.data.status = response.data.status;
                    that.history = response.data.history;
                }
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.pb60[data-v-66131aaa] {\n  padding: 16px 0 60px 0;\n}\n.h22[data-v-66131aaa] {\n  height: 22px;\n}\n.user[data-v-66131aaa] {\n  margin: 0 16px 0 16px;\n  padding-bottom: 12px;\n}\n.user img[data-v-66131aaa] {\n    border-radius: 100%;\n    height: 48px;\n    width: 48px;\n}\n.user p[data-v-66131aaa] {\n    margin: 0;\n    padding: 5px 0 5px 0;\n}\n.user .status label[data-v-66131aaa] {\n    display: inline-block;\n    text-indent: 20px;\n    color: #acda57;\n}\n.user .status label[data-v-66131aaa]:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 3px;\n      background-repeat: no-repeat;\n      background-size: 100%;\n      background-position: 0 center;\n      background-image: url(//img.aimoge.com/FoSwqghIf_uF504pPDsAEWTbBTJ_);\n      width: 15px;\n      height: 15px;\n}\n.user .status.in label[data-v-66131aaa] {\n    color: #df796b;\n}\n.user .status.in label[data-v-66131aaa]:after {\n      background-image: url(\"//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15\");\n}\n.keys[data-v-66131aaa] {\n  padding: 16px 0 12px 0;\n  margin: 0 16px 8px 16px;\n  border-top: 1px #ececec solid;\n}\n.keys .text[data-v-66131aaa] {\n    margin-bottom: 4px;\n}\n.info[data-v-66131aaa] {\n  padding: 5px 0 0 0;\n  border-left: 2px #f3f3f3 solid;\n  margin: 0 45px 0 37px;\n}\n.info .meta[data-v-66131aaa] {\n    border: 1px #d1d1d1 solid;\n    border-radius: 0 15px 15px 15px;\n    margin: 16px 0 0 18px;\n    padding: 3px 8px;\n}\n.info .meta[data-v-66131aaa]:before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: -8px;\n      left: -28px;\n      background-image: url(//img.aimoge.com/FumRbbPFMoPuFlQ0FfEhFKYCrYHn);\n      background-position: 0 0;\n      background-repeat: no-repeat;\n      background-size: 16px;\n      background-color: #fff;\n      width: 16px;\n      height: 16px;\n      z-index: 30;\n}\n.info .meta.done[data-v-66131aaa]:before {\n      background-image: url(//img.aimoge.com/FsuuD8aOo52Dliz1y8UktMYYGmMw);\n}\n.info .meta.done[data-v-66131aaa]:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: -21px;\n      height: 100%;\n      width: 2px;\n      background-color: #fff;\n      z-index: 29;\n}\n.btnGroup[data-v-66131aaa] {\n  border-top: 1px #cfcfcf solid;\n  background-color: #f9f9f9;\n  color: #323232;\n  display: block;\n  width: 100%;\n  height: 51px;\n  line-height: 51px;\n  color: #333;\n  font-size: 16px;\n  left: 0;\n  bottom: 0;\n  z-index: 9000;\n}\n.btnGroup .flexmodel[data-v-66131aaa] {\n    width: 25%;\n    display: inline-block;\n    text-align: center;\n}\n.btnGroup .flexmodel[data-v-66131aaa]:after {\n      content: '';\n      display: block;\n      position: absolute;\n      right: 0;\n      top: 6px;\n      width: 1px;\n      height: 40px;\n      border-left: 1px #cfcfcf solid;\n      -webkit-transform: scale(0.5);\n      transform: scale(0.5);\n}\n.btnGroup .flexmodel.none[data-v-66131aaa]:after {\n      display: none;\n}\n", ""]);

// exports


/***/ }

});