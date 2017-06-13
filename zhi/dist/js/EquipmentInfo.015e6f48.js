webpackJsonp([2],{

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "equipmentinfo pb60"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "origin": "terminal"
    }
  }), _c('div', {
    staticClass: "boxlist mt44"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("箱柜列表")]), _c('ul', _vm._l((_vm.bins), function(a, index) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "item-info"
    }, [_c('label', {
      staticClass: "label"
    }, [_vm._v(_vm._s(a.position))]), (a.asset_num) ? _c('p', {
      staticClass: "info ellipsis",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToEidtEquipment('rack_id', a.rack_id, a.asset_num)
        }
      }
    }, [_vm._v(_vm._s(a.asset_num))]) : _c('p', {
      staticClass: "info unactive",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToEidtEquipment('rack_id', a.rack_id, a.asset_num)
        }
      }
    }, [_vm._v("未填写")]), _c('i', {
      staticClass: "scan",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToScan('rack_id', a.rack_id, index)
        }
      }
    })])])
  }))]), _c('div', {
    staticClass: "device"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("其他设备")]), _c('ul', _vm._l((_vm.other), function(a, index) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "item-info"
    }, [_c('label', {
      staticClass: "label"
    }, [_vm._v(_vm._s(a.name))]), (a.asset_num) ? _c('p', {
      staticClass: "info ellipsis",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToEidtEquipment('device_id', a.id, a.asset_num)
        }
      }
    }, [_vm._v(_vm._s(a.asset_num))]) : _c('p', {
      staticClass: "info unactive",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToEidtEquipment('device_id', a.id, a.asset_num)
        }
      }
    }, [_vm._v("未填写")]), _c('i', {
      staticClass: "scan",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToScan('device_id', a.id, index)
        }
      }
    })])])
  }))]), _c('TransmitFooter', {
    attrs: {
      "footerconfig": _vm.footerconfig,
      "terminal_id": _vm.terminal_id
    }
  }), _c('ModalDialog', {
    ref: "aboutModal"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e5d852a", module.exports)
  }
}

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("da737ac0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e5d852a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EquipmentInfo.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e5d852a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EquipmentInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(128)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(110),
  /* scopeId */
  "data-v-3e5d852a",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\EquipmentInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EquipmentInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e5d852a", Component.options)
  } else {
    hotAPI.reload("data-v-3e5d852a", Component.options)
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

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util) {//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    props: ["footerconfig", "terminal_id"],
    data: function data() {
        var terminal_id = this.$props.terminal_id;
        return {
            basic_url: '/terminal/' + this.$props.terminal_id,
            equipment_url: '/terminal/' + this.$props.terminal_id + '/equipmentinfo'
        };
    },

    watch: {
        '$route': 'fetchData'
    },
    methods: {
        showTip: function showTip() {
            _util.showErrorTip('敬请期待！');
        },
        fetchData: function fetchData() {
            this.basic_url = '/terminal/' + this.$props.terminal_id;
            this.equipment_url = '/terminal/' + this.$props.terminal_id + '/equipmentinfo';
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.footer[data-v-7195faac] {\n  color: #8c8c8c;\n}\n", ""]);

// exports


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(68)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  "data-v-7195faac",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\TransmitFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TransmitFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7195faac", Component.options)
  } else {
    hotAPI.reload("data-v-7195faac", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer flex fixed"
  }, [_c('router-link', {
    staticClass: "flexmodel basic",
    class: {
      active: _vm.footerconfig.isbasic
    },
    attrs: {
      "to": _vm.basic_url,
      "exact": "exact",
      "replace": "replace"
    }
  }, [_vm._v("基本信息")]), _c('router-link', {
    staticClass: "flexmodel equipment",
    class: {
      active: _vm.footerconfig.isequipment
    },
    attrs: {
      "to": _vm.equipment_url,
      "replace": "replace"
    }
  }, [_vm._v("设备信息")]), _c('div', {
    staticClass: "flexmodel ad",
    class: {
      active: _vm.footerconfig.isad
    },
    attrs: {
      "replace": "replace"
    },
    on: {
      "click": function($event) {
        _vm.showTip()
      }
    }
  }, [_vm._v("广告排期")]), _c('div', {
    staticClass: "flexmodel journal",
    class: {
      active: _vm.footerconfig.isjournal
    },
    attrs: {
      "replace": "replace"
    },
    on: {
      "click": function($event) {
        _vm.showTip()
      }
    }
  }, [_vm._v("状态日志")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7195faac", module.exports)
  }
}

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1557055f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7195faac\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TransmitFooter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7195faac\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TransmitFooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_ModalDialog__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_elements_ModalDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_elements_ModalDialog__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            bins: [],
            other: [],
            terminal_id: this.$route.params.code,
            pageTitle: '终端详情',
            version: '1',
            bodyBg: 'gray',
            current_id: '',
            current_type: '',
            current_index: '',
            footerconfig: {
                isequipment: true
            }
        };
    },
    created: function created() {
        this.fetchData();
        window.canGoBack = true;
        window.origin = "terminal";
    },
    activated: function activated() {
        window.canGoBack = true;
        window.origin = "terminal";
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        TransmitFooter: __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter___default.a,
        ModalDialog: __WEBPACK_IMPORTED_MODULE_2__components_elements_ModalDialog___default.a
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function fetchData() {
            var that = this;
            if (!(that.$route.path == '/terminal/' + that.$route.params.code + '/equipmentinfo')) {
                return false;
            }
            _util.showSysLoading();
            that.terminal_id = that.$route.params.code;
            setTimeout(function () {
                getAjaxRequest("terminal_cache", ajaxUrls.basic + that.$route.params.code + '?info=device', that.version, 20 * 1000, 6 * 60 * 60 * 1000, function (response) {
                    _util.hideSysLoading();
                    if (response.status == 0) {
                        that.bins = response.data.bins;
                        that.other = response.data.other;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function (error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            }, 0);
        },
        goToEidtEquipment: function goToEidtEquipment(type, _id, info) {
            if (type == "rack_id") {
                this.url('/terminal/' + this.terminal_id + '/equipmentinfo/edit', { rack_id: _id, asset_num: info });
            } else {
                this.url('/terminal/' + this.terminal_id + '/equipmentinfo/edit', { device_id: _id, asset_num: info });
            }
        },
        goToScan: function goToScan(type, _id, index) {
            this.current_type = type;
            this.current_id = _id;
            this.current_index = index;
            var that = this;
            //                if (_util.isIOS()) {
            //                    if (window.webkit && window.webkit.messageHandlers) {
            //                        window.webkit.messageHandlers.startQRScan.postMessage();
            //                    }
            //                }else{
            if (window.mogeItsupport) {
                window.mogeItsupport.startQRScan();
            }
            //                }
            window.QRScanSuccess = function (result) {
                window.QRScanSuccess = undefined;
                that.saveEquipment(result);
            };
            window.QRScanFailed = function (msg) {
                window.QRScanFailed = undefined;
                _util.showErrorTip(msg);
            };
        },
        saveEquipment: function saveEquipment(asset_num) {
            var that = this;
            var finishUrl = '';
            var postData = {};

            if (that.current_type == 'rack_id') {
                finishUrl = ajaxUrls.basic + that.$route.params.code + '/bins';
                postData = {
                    rack_id: that.current_id,
                    asset_number: asset_num
                };
            } else if (that.current_type == 'device_id') {
                finishUrl = ajaxUrls.basic + that.$route.params.code + '/other';
                postData = {
                    device_id: that.current_id,
                    asset_num: asset_num
                };
            }

            _util.showSysLoading();
            axios.post(finishUrl, postData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (rsp) {
                _util.hideSysLoading();
                if (rsp.data.status == 0) {
                    if (that.current_type == 'rack_id') {
                        var item = that.bins[that.current_index];
                        item.asset_num = asset_num;
                        that.bins.splice(that.current_index, 1, item);
                    } else if (that.current_type == 'device_id') {
                        var _item = that.other[that.current_index];
                        _item.asset_num = asset_num;
                        that.other.splice(that.current_index, 1, _item);
                    }
                } else {
                    if (rsp.data.msg) {
                        _util.showErrorTip(rsp.data.msg);
                    }
                }
            }).catch(function (error) {
                _util.hideSysLoading();
                _util.showErrorTip('当前无网络，请检查您的网络状态！');
            });
        }
    }

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.gray_2[data-v-3e5d852a] {\n  color: #e3e3e3;\n}\n.equipmentinfo[data-v-3e5d852a] {\n  padding-bottom: 60px;\n}\n.equipmentinfo .title[data-v-3e5d852a] {\n    height: 32px;\n    line-height: 32px;\n    color: #747474;\n    padding: 0 16px;\n}\n.equipmentinfo ul[data-v-3e5d852a] {\n    padding-left: 16px;\n    background-color: #fff;\n}\n.equipmentinfo ul li[data-v-3e5d852a] {\n      background-color: #fff;\n      color: #4d4d4d;\n      font-size: 13px;\n      overflow: hidden;\n      width: 100%;\n      left: 0;\n      position: relative;\n      box-sizing: border-box;\n}\n.equipmentinfo ul li[data-v-3e5d852a]:nth-child(1):before {\n        height: 0;\n}\n.equipmentinfo ul li[data-v-3e5d852a]:before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 1px;\n        background-color: #979797;\n        transform: scale(1, 0.5);\n}\n.equipmentinfo ul li:before p[data-v-3e5d852a] {\n          text-align: left;\n}\n.equipmentinfo ul li .item-info[data-v-3e5d852a] {\n        padding: 10px 50px 10px 80px;\n        box-sizing: border-box;\n}\n.equipmentinfo ul li .item-info .label[data-v-3e5d852a] {\n          width: 80px;\n          position: absolute;\n          top: 50%;\n          left: 0;\n          height: 22px;\n          line-height: 22px;\n          margin-top: -11px;\n}\n.equipmentinfo ul li .item-info .info.unactive[data-v-3e5d852a] {\n          color: #cfcfcf;\n}\n.equipmentinfo ul li .scan[data-v-3e5d852a] {\n        content: '';\n        background: url(\"//img.aimoge.com/Fl1S3WqI_mdGIBD2toXw4pqk62g-\") 0 0 no-repeat;\n        background-position: center center;\n        background-size: 14px auto;\n        display: block;\n        height: 44px;\n        width: 44px;\n        position: absolute;\n        right: 16px;\n        top: 50%;\n        margin-top: -22px;\n}\n.equipmentinfo .device[data-v-3e5d852a] {\n    width: 100%;\n}\n.equipmentinfo .device ul[data-v-3e5d852a] {\n      overflow: auto;\n}\n.equipmentinfo .device ul li p[data-v-3e5d852a]:nth-child(2) {\n        width: 75%;\n}\n", ""]);

// exports


/***/ }

});