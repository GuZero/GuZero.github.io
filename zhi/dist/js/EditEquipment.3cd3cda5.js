webpackJsonp([15],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "edit-equipment"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    },
    on: {
      "finishBtnCallback": _vm.goToFinish
    }
  }), _c('div', {
    staticClass: "mt44"
  }, [_c('div', {
    staticClass: "input rel"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.asset_num),
      expression: "asset_num"
    }, {
      name: "focus",
      rawName: "v-focus",
      value: (_vm.v - _vm.focus),
      expression: "v-focus"
    }],
    attrs: {
      "placeholder": "请输入终端设备信息",
      "type": "text"
    },
    domProps: {
      "value": (_vm.asset_num)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.asset_num = $event.target.value
      }
    }
  }), _c('label', {
    staticClass: "clear-btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.clearInput($event)
      }
    }
  }, [_vm._v("清空")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0294569a", module.exports)
  }
}

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2706aa02", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0294569a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditEquipment.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0294569a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditEquipment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  "data-v-0294569a",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\EditEquipment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EditEquipment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0294569a", Component.options)
  } else {
    hotAPI.reload("data-v-0294569a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
//
//
//
//
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
            pageTitle: '终端设备信息',
            bodyBg: 'gray',
            btnconfig: {
                isgoback: 1,
                isfinish: 1
            },
            rack_id: this.$route.query.rack_id,
            device_id: this.$route.query.device_id,
            asset_num: this.$route.query.asset_num
        };
    },

    directives: {
        focus: {
            inserted: function inserted(el) {
                // 聚焦元素
                el.focus();
            }
        }
    },
    created: function created() {
        window.canGoBack = true;
        window.origin = null;
    },
    activated: function activated() {
        window.canGoBack = true;
        window.origin = null;
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a
    },
    watch: {
        '$route': function $route(route) {
            this.rack_id = this.$route.query.rack_id;
            this.device_id = this.$route.query.device_id;
            this.asset_num = this.$route.query.asset_num;
        }
    },
    methods: {
        goToFinish: function goToFinish() {
            var that = this,
                finishUrl = '',
                postData = {};
            if (_util.getById('sysLoading').style.display == 'block') return false;
            if (!that.asset_num.replace(/(^\s*)|(\s*$)/g, "")) {
                _util.showErrorTip('请输入终端设备信息！');
                return false;
            }
            if (that.rack_id) {
                finishUrl = ajaxUrls.basic + that.$route.params.code + '/bins';
                postData = {
                    rack_id: that.rack_id,
                    asset_number: that.asset_num
                };
            } else if (that.device_id) {
                finishUrl = ajaxUrls.basic + that.$route.params.code + '/other';
                postData = {
                    device_id: that.device_id,
                    asset_num: that.asset_num
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
                    that.url('/terminal/' + that.$route.params.code + '/equipmentinfo');
                } else {
                    if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                }
            }).catch(function (error) {
                _util.hideSysLoading();
                _util.showErrorTip('当前无网络，请检查您的网络状态！');
            });
        },
        clearInput: function clearInput() {
            this.asset_num = '';
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.input[data-v-0294569a] {\n  font-size: 14px;\n  padding: 16px;\n  background: #fff;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input input[data-v-0294569a] {\n    border: none;\n    font-size: 14px;\n    width: 100%;\n    height: 20px;\n    line-height: 20px;\n}\n.input .clear-btn[data-v-0294569a] {\n    position: absolute;\n    top: 0;\n    right: 16px;\n    height: 52px;\n    line-height: 52px;\n}\n", ""]);

// exports


/***/ }

});