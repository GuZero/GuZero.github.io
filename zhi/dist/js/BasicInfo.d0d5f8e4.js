webpackJsonp([8],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "basicinfo pb60"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "origin": "terminal"
    }
  }), _c('div', {
    staticClass: "content mt44"
  }, [_c('div', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.terminal_name))])]), _c('div', {
    staticClass: "item pd5"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v("终端标识")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.terminal_code))])]), _c('div', {
    staticClass: "item pd5"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v("广告标识")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.terminal_code))])]), _c('div', {
    staticClass: "item pd5"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v("终端上线时间")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.launched_at) + " ")])]), _c('div', {
    staticClass: "item pd5"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v("上次启动时间")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.boot_time) + " ")])]), _c('div', {
    staticClass: "item pd5"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v("心跳频率")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.heartbeat))])]), _c('div', {
    staticClass: "item pd5"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v("网点")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.terminal_code))])]), _c('div', {
    staticClass: "item pd5"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v("状态")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.terminal_code) + "                          ")])]), _c('div', {
    staticClass: "item item_btn"
  }, [_c('div', [_c('div', {
    class: {
      active: _vm.isActive
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.getLocation('check')
      }
    }
  }, [_vm._v("位置预览")])]), _c('div', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.getLocation($event)
      }
    }
  }, [_vm._v("采集")])])]), _c('div', {
    staticClass: "pd5"
  }, [_c('p', [_vm._v("版本信息 ")]), _c('div', {
    staticClass: "item"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v(" 主程序")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.launched_at))])]), _c('div', {
    staticClass: "item"
  }, [_c('p', {
    staticClass: "gray"
  }, [_vm._v(" 主程序")]), _c('p', {
    staticClass: "black"
  }, [_vm._v(_vm._s(_vm.launched_at) + "       ")])])]), _c('div', {
    staticClass: "manage"
  }, [_c('div', {
    staticClass: "item info"
  }, [_vm._v("管理员")]), (_vm.maintain_manager.length > 0) ? _vm._l((_vm.maintain_manager), function(t) {
    return _c('div', {
      staticClass: "rel"
    }, [_c('div', {
      staticClass: "item item_btn"
    }, [_c('div', [_c('p', {
      staticClass: "gray"
    }, [_vm._v("运维管理员")]), (t.name) ? _c('a', {
      staticClass: "black",
      attrs: {
        "href": "#"
      }
    }, [_vm._v(_vm._s(t.name)), (t.telephone) ? _c('label', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v("（" + _vm._s(t.telephone) + "）")]) : _vm._e()]) : _vm._e()]), (_vm.is_yunwei_manager == '0') ? _c('div', {
      staticClass: "btn",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToAllocation('1', t.user_id)
        }
      }
    }, [_vm._v("分配")]) : _vm._e()])])
  }) : [_c('div', {
    staticClass: "rel"
  }, [_c('div', {
    staticClass: "item item_btn"
  }, [_c('div', [_c('p', {
    staticClass: "gray"
  }, [_vm._v("运维管理员")])]), (_vm.is_yunwei_manager == '0') ? _c('div', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.goToAllocation('1')
      }
    }
  }, [_vm._v("分配")]) : _vm._e()])])], (_vm.operate_manager.length > 0) ? _vm._l((_vm.operate_manager), function(t) {
    return _c('div', {
      staticClass: "rel"
    }, [_c('div', {
      staticClass: "item item_btn"
    }, [_c('div', [_c('p', {
      staticClass: "gray"
    }, [_vm._v("运营管理员")]), (t.name) ? _c('a', {
      staticClass: "black",
      attrs: {
        "href": "#"
      }
    }, [_vm._v(_vm._s(t.name) + " "), (t.telephone) ? _c('label', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v("（" + _vm._s(t.telephone) + "）")]) : _vm._e()]) : _vm._e()]), (_vm.is_yunying_manager == '0') ? _c('div', {
      staticClass: "btn",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToAllocation('2', t.user_id)
        }
      }
    }, [_vm._v("分配")]) : _vm._e()])])
  }) : [_c('div', {
    staticClass: "rel"
  }, [_c('div', {
    staticClass: "item item_btn"
  }, [_c('div', [_c('p', {
    staticClass: "gray"
  }, [_vm._v("运营管理员")])]), (_vm.is_yunying_manager == '0') ? _c('div', {
    staticClass: "btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.goToAllocation('2')
      }
    }
  }, [_vm._v("分配")]) : _vm._e()])])]], 2), _c('TransmitFooter', {
    attrs: {
      "footerconfig": _vm.footerconfig,
      "terminal_id": _vm.terminal_id
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-080cdf8b", module.exports)
  }
}

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0dfce166", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-080cdf8b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BasicInfo.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-080cdf8b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BasicInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(125)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(107),
  /* scopeId */
  "data-v-080cdf8b",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\BasicInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BasicInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-080cdf8b", Component.options)
  } else {
    hotAPI.reload("data-v-080cdf8b", Component.options)
  }
})()}

module.exports = Component.exports


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

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading__);
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
            //终端详情信息
            terminal_name: '格格货栈',
            terminal_code: '',
            terminal_id: this.$route.params.code,
            pageTitle: '终端详情',
            launched_at: '',
            boot_time: '',
            heartbeat: '',
            bodyBg: 'gray',
            version: '1',
            location: {
                "latitude": 0,
                "longitude": 0
            },
            maintain_manager: [],
            operate_manager: [],
            is_yunwei_manager: '0',
            is_yunying_manager: '0',
            footerconfig: {
                isbasic: true
            },
            isActive: false,
            scroll_load_loading: false,
            scroll_load_end: false
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
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a

    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        showLoading: function showLoading() {
            //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading: function hideLoading() {
            //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        },
        fetchData: function fetchData() {
            var that = this;
            if (!(that.$route.path == '/terminal/' + that.$route.params.code)) {
                return false;
            }
            _util.showSysLoading();
            that.terminal_id = that.$route.params.code;
            setTimeout(function () {
                getAjaxRequest("terminal_cache", ajaxUrls.basic + that.$route.params.code + '?info=basic', that.version, 20 * 1000, 6 * 60 * 60 * 1000, function (response) {
                    _util.hideSysLoading();
                    if (response.status == 0) {
                        var tempData = response.data;
                        console.log(tempData);
                        that.terminal_name = tempData.terminal_name;
                        that.terminal_code = tempData.terminal_code;
                        that.launched_at = tempData.launched_at;
                        that.boot_time = tempData.boot_time;
                        that.heartbeat = tempData.heartbeat;
                        that.location = tempData.location;
                        if (tempData.location && tempData.location.latitude && tempData.location.longitude) {
                            that.isActive = true;
                        }
                        that.maintain_manager = tempData.operator1;
                        that.operate_manager = tempData.operator2;
                        that.is_yunwei_manager = tempData.is_yunwei_manager;
                        that.is_yunying_manager = tempData.is_yunying_manager;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function (error) {
                    _util.hideSysLoading();
                    _util.showErrorTip('当前无网络，请检查您的网络状态！');
                });
            }, 0);
        },
        getLocation: function getLocation(action_type) {
            var type = 1;
            if (action_type == 'check') {
                if (!this.isActive) {
                    return false;
                }
                type = 0;
            }
            window.location.href = "gegemis:///TerminalGeo?terminal_id=" + this.$route.params.code + "&type=" + type;
        },
        goToAllocation: function goToAllocation(operator, old_userid) {
            this.url('/terminal/' + this.$route.params.code + '/allocation', {
                old_userid: old_userid,
                operator: operator
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.black[data-v-080cdf8b] {\n  color: #323232;\n}\n.active[data-v-080cdf8b] {\n  color: #07689f;\n}\n.gray[data-v-080cdf8b] {\n  color: #6e6e6e;\n}\n.content[data-v-080cdf8b] {\n  border: 1px #cfcfcf solid;\n}\n.content .nav[data-v-080cdf8b] {\n    background-color: #fff;\n    color: #4d4d4d;\n    font-size: 16px;\n    padding: 16px 0px;\n    width: 100%;\n}\n.content .nav .title[data-v-080cdf8b] {\n      font-size: 18px;\n      text-align: center;\n      color: #323232;\n}\n.item[data-v-080cdf8b]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 90%;\n  height: 1px;\n  background-color: #eee;\n  transform: scale(1, 0.5);\n}\n.item[data-v-080cdf8b] {\n  background-color: #fff;\n  color: #4d4d4d;\n  font-size: 14px;\n  overflow: hidden;\n  padding: 10px 16px;\n  width: 100%;\n  left: 0;\n  z-index: 300;\n  position: relative;\n  box-sizing: border-box;\n}\n.item p a[data-v-080cdf8b] {\n    color: #07689f;\n    font-size: 14px;\n}\n.item_btn[data-v-080cdf8b] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn[data-v-080cdf8b] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #07689f;\n  border: 1px solid #07689f;\n  font-size: 14px;\n  width: 66px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  height: 30px;\n}\n.manage[data-v-080cdf8b] {\n  margin-top: 8px;\n  position: relative;\n  bottom: 0px;\n  background: #fff;\n  overflow: auto;\n}\n.manage .item.info[data-v-080cdf8b] {\n    padding: 10px 16px;\n    color: #6e6e6e;\n    font-size: 12px;\n}\n.pd5[data-v-080cdf8b] {\n  padding: 5px 16px;\n}\n.pd5 p[data-v-080cdf8b] {\n    margin: 3px 0px;\n}\n", ""]);

// exports


/***/ }

});