webpackJsonp([8],{

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-order"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle
    }
  }), _c('Search', {
    staticClass: "top44 fixed",
    attrs: {
      "placeholder": "搜索手机号"
    },
    on: {
      "changeCallback": _vm.searchByKey
    },
    model: {
      value: (_vm.terminalName),
      callback: function($$v) {
        _vm.terminalName = $$v
      },
      expression: "terminalName"
    }
  }), _c('div', {
    staticClass: "mt44 pt50 pb60"
  }, [_c('div', {
    staticClass: "pd_16"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._v("搜索结果：共"), _c('span', {
    staticClass: "c_b"
  }, [_vm._v(" " + _vm._s(_vm.num) + " ")]), _vm._v("条 ")]), (_vm.flag) ? _c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp",
      "width": "100%",
      "height": "100%"
    }
  }), _c('p', {
    staticClass: "c_g",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("暂无搜索结果")])]) : _vm._e(), _vm._l((_vm.result), function(d) {
    return (!_vm.flag) ? _c('div', {
      staticClass: "list",
      on: {
        "click": function($event) {
          _vm.gotoDetails(d.order_id)
        }
      }
    }, [_c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("订单状态：")]), _c('lable', [_vm._v(_vm._s(d.state))])], 1), _c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("存件时间：")]), _c('lable', [_vm._v(_vm._s(d.delivery_at))])], 1), _c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("取件时间：")]), _c('lable', [_vm._v(_vm._s(d.fetch_at))])], 1), _c('div', [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("快递员手机：")]), _c('lable', [_vm._v(_vm._s(d.operator_telephone) + "          ")])], 1), _c('div', {
      staticClass: "num"
    }, [_c('span', {
      staticStyle: {
        "font-size": "10px"
      }
    }, [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("箱门号编码： ")]), _c('lable', [_vm._v("11111")])], 1), _c('span', {
      staticStyle: {
        "font-size": "10px"
      }
    }, [_c('label', {
      staticClass: "c_g1"
    }, [_vm._v("取件编码：")]), _c('lable', [_vm._v("1111    ")])], 1)])]) : _vm._e()
  })], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1ec05aa9", module.exports)
  }
}

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("220e4a68", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1ec05aa9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1ec05aa9\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue");
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
__webpack_require__(125)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  "data-v-1ec05aa9",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ec05aa9", Component.options)
  } else {
    hotAPI.reload("data-v-1ec05aa9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 43:
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

/* harmony default export */ exports["default"] = {
    props: ["placeholder"],
    methods: {
        setParentVar: function setParentVar(value) {
            this.$emit('input', value);
        }
    }
};

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 50px 0 50px;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n", ""]);

// exports


/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  "data-v-2b720269",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\Search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b720269", Component.options)
  } else {
    hotAPI.reload("data-v-2b720269", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('div', {
    staticClass: "input rel"
  }, [_c('input', {
    staticClass: "rel",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    on: {
      "input": function($event) {
        _vm.setParentVar($event.target.value)
      },
      "keyup": function($event) {
        _vm.$emit('changeCallback')
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b720269", module.exports)
  }
}

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7e3e8802", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b720269\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b720269\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_Search__);
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


//    import FooterBar from '../components/common/Footer'



/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            //                bodyBg: 'gray',
            pageTitle: '运营支撑系统',
            footerconfig: {
                isterminal: true
            },
            terminalName: '',
            flag: true,
            num: '0',
            result: [],
            url: ''

        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        //            FooterBar,
        Search: __WEBPACK_IMPORTED_MODULE_1__components_common_Search___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a
    },
    created: function created() {
        var id = localStorage.express_id;
        switch (id) {
            case '01':
                this.url = ajaxUrls.search1;
                break;
            case '02':
                this.url = ajaxUrls.search2;
                break;
            case '03':
                this.url = ajaxUrls.search3;
                break;
            case '04':
                this.url = ajaxUrls.search4;
                break;
            default:
                this.url = ajaxUrls.search1;
                break;
        }
        //            this.result = [{
        //                order_id: "201704251805210250200013", // 单号
        //                state: "用户取出", // 收件状态
        //                delivery_at: "2017-04-25 18:05:21", // 派件时间
        //                fetch_at: "2017-04-26 16:05:37", // 取件时间
        //                operator_telephone: "18001587683", // 快递员手机号码
        //                box: "国家广告产业园格格货栈-4组05号门" // 终端格口
        //            }]
    },

    methods: {
        searchByKey: function searchByKey() {
            console.log(this.url);
            var that = this;
            var _key = this.terminalName;
            if (this.terminalName == "") {
                that.flag = true;
                that.num = 0;
            } else {
                axios.get(that.url + _key.trim()).then(function (rsp) {
                    var d = rsp.data;
                    console.log(d.data);
                    if (d.status == "0") {
                        that.flag = false;
                        if (d.data.length == 0) {
                            that.num = 0;
                        } else {
                            that.num = d.data.length;
                        }
                        that.result = d.data;
                    } else {
                        that.flag = !that.flag;
                    }
                });
            };
            console.log(this.terminalName);
        },
        gotoDetails: function gotoDetails(id) {
            location.href = "http://m.dev.aimoge.com/kuaidi/delivery/info/" + id;
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.c_b[data-v-1ec05aa9] {\n  color: #07689f;\n}\n.c_g[data-v-1ec05aa9] {\n  color: #a3a3a3;\n}\n.c_g1[data-v-1ec05aa9] {\n  color: #908d8d;\n}\n.pd_16[data-v-1ec05aa9] {\n  padding: 0 16px;\n}\n.pd_16 div.img[data-v-1ec05aa9] {\n    width: 125px;\n    height: 125px;\n    padding-top: 70px;\n    margin: 0 auto;\n}\n.empty[data-v-1ec05aa9] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-1ec05aa9] {\n  position: relative;\n  line-height: 35px;\n  height: 35px;\n  color: #a3a3a3;\n}\n.item[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n.list[data-v-1ec05aa9] {\n  padding-top: 20px;\n  padding-bottom: 18px;\n  position: relative;\n}\n.list div[data-v-1ec05aa9] {\n    font-size: 12px;\n    height: 22px;\n    line-height: 22px;\n}\n.list .num[data-v-1ec05aa9] {\n    margin-top: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n.list[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n", ""]);

// exports


/***/ }

});