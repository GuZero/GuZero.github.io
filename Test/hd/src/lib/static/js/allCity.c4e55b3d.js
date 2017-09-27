webpackJsonp([3],{

/***/ 21:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  "data-v-98bfa728",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\moge-www\\templates\\adinteraction\\src\\pages\\allCity.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] allCity.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98bfa728", Component.options)
  } else {
    hotAPI.reload("data-v-98bfa728", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_util) {module.exports = {
    activated: function activated() {
        _util.changePageTitle(this.pageTitle || '');
        document.body.addClassName(this.bodyBg || '');
    },
    mounted: function mounted() {
        document.body.addClassName(this.bodyBg || '');
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        document.body.removeClassName(this.bodyBg || '');
        next();
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mixins: [__webpack_require__(25)],
    data: function data() {
        return {
            pageTitle: '制作中',
            btnconfig: {
                isgoback: 1
            },
            items: [],
            activeTab: null,
            flag: false,
            city: {
                city_id: '',
                city_name: '',
                price: ''
            }
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        $('#sysLoading').hide();
        next();
    },
    mounted: function mounted() {
        this.setInfo();
    },

    watch: {
        '$route': function $route() {
            if (this.$route.path == '/allcity') {
                window.Data = {};
                this.city = [];
                this.activeTab = null;
            }
        }
    },
    methods: {
        setInfo: function setInfo() {
            //设置信息
            this.items = [{
                city_id: '3201',
                city_name: '南京市', price: 399
            }, {
                city_id: '1101',
                city_name: '北京市',
                price: 599
            }, {
                city_id: '3101',
                city_name: '上海市',
                price: 499
            }, {
                city_id: '4301',
                city_name: '深圳市',
                price: 499
            }];
        },
        nextStep: function nextStep() {
            window.Data.city = this.city;
            this.url('./submit');
        },
        choiceCity: function choiceCity(item, index) {
            this.activeTab = index;
            this.city.city_id = item.city_id;
            this.city.city_name = item.city_name;
            this.city.price = item.price;
        },
        showLoading: function showLoading() {
            //显示正在加载数据状态
            this.scroll_load_loading = true;
            this.$refs.loading && this.$refs.loading.showLoading();
        },
        hideLoading: function hideLoading() {
            //隐藏正在加载数据状态
            this.scroll_load_loading = false;
            this.$refs.loading && this.$refs.loading.hideLoading();
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.content[data-v-98bfa728] {\r\n    padding: 0 32px;\n}\n.items[data-v-98bfa728] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 36px;\r\n    align-items: center;\r\n    width: 100%;\r\n    position: relative;\r\n    font-size: 16px;\n}\n.items i[data-v-98bfa728] {\r\n    margin-left: 5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0px;\r\n    margin-top: -3px;\n}\n.choice_icon[data-v-98bfa728] {\r\n    width: 16px;\r\n    height: 7px;\r\n    border-bottom: 2px solid #4788f4;\r\n    border-left: 2px solid #4788f4;\r\n    transform: translateX(5px) translateY(-5px) rotate(-45deg);\n}\n.btn_blue[data-v-98bfa728] {\r\n    margin-top: 36px;\r\n    border: 0.01px solid #4285f4;\r\n    background-color: #4285f4;\r\n    font-size: 15px;\r\n    padding: 7px 0;\r\n    width: 100%;\r\n    color: #fff;\r\n    border-radius: 4px;\n}\r\n", ""]);

// exports


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "allCity"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "44px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "show margin8"
  }, [_c('ul', {
    attrs: {
      "id": "cityList"
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      key: item.id,
      staticClass: "mui-table-view-cell",
      on: {
        "click": function($event) {
          _vm.choiceCity(item, index)
        }
      }
    }, [_c('div', {
      staticClass: "items"
    }, [_c('div', [_vm._v(_vm._s(item.city_name))]), _vm._v(" "), _c('div', {
      staticStyle: {
        "padding-right": "18px"
      }
    }, [_vm._v(_vm._s(item.price) + "元/天\n                            "), _c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.activeTab == index),
        expression: "activeTab==index"
      }],
      staticClass: "choice_icon"
    })])])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "btn_box"
  }, [_c('button', {
    staticClass: "mui-btn btn_blue",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.nextStep
    }
  }, [_vm._v("下一步")])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mui-row mui-text-center color_w"
  }, [_c('div', [_vm._v("爱要全城都听见")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-98bfa728", module.exports)
  }
}

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("06c515b8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-98bfa728\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./allCity.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-98bfa728\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./allCity.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }

});