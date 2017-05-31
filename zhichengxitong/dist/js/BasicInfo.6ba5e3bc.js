webpackJsonp([13],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "div"
  }, [_c('div', {
    staticClass: "nav"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.terminal_name))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('p', [_vm._v(_vm._s(_vm.code))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.terminal_code))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('p', [_vm._v(_vm._s(_vm.code))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.terminal_code))])]), _vm._v(" "), _c('div', {
    staticClass: "item item_btn"
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.code))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_vm._v("采集")])]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("位置浏览")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "manage"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n          管理员\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "item item_btn"
  }, [_c('div', [_c('p', {
    staticClass: "gray_1"
  }, [_vm._v("运维管理员")]), _vm._v(" "), _c('p', {
    staticClass: "black"
  }, [_vm._v("高乔乔（15910239327）")])]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_vm._v("分配")])]), _vm._v(" "), _c('div', {
    staticClass: "item item_btn"
  }, [_c('div', [_c('p', {
    staticClass: "gray_1"
  }, [_vm._v("运维管理员")]), _vm._v(" "), _c('p', [_vm._v("高乔乔（15910239327）")])]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_vm._v("分配")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-080cdf8b", module.exports)
  }
}

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0dfce166", content, false);
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

/***/ 28:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(120)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(66),
  /* template */
  __webpack_require__(102),
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

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            terminal_name: '',
            code: '终端 code',
            terminal_code: "0010080074",
            footerconfig: {
                isflag: true
            }
        };
    },
    created: function created() {
        var that = this;
        // window.addEventListener('scroll', that.handleScroll);
        axios.get(ajaxUrls.basic + localStorage.terminal_id + '?info=basic&mack=' + Math.random()).then(function (rsp) {
            console.log(rsp.data.data);
            that.terminal_name = rsp.data.data.terminal_name;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.black[data-v-080cdf8b] {\n  color: #6a6a6a;\n}\n.gray_1[data-v-080cdf8b] {\n  color: #aaaaaa;\n}\n.nav[data-v-080cdf8b] {\n  background-color: #fff;\n  color: #4d4d4d;\n  font-size: 16px;\n  padding: 16px 0px;\n  width: 100%;\n}\n.nav .title[data-v-080cdf8b] {\n    font-size: 18px;\n    text-align: center;\n    color: #323232;\n    font-weight: 700;\n}\n.item[data-v-080cdf8b]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 90%;\n  height: 1px;\n  background-color: #979797;\n  transform: scale(1, 0.5);\n}\n.item[data-v-080cdf8b] {\n  background-color: #fff;\n  color: #4d4d4d;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 10px 16px;\n  width: 100%;\n  left: 0;\n  z-index: 300;\n  position: relative;\n  box-sizing: border-box;\n}\n.item p a[data-v-080cdf8b] {\n    color: #07689f;\n    font-size: 14px;\n}\n.item_btn[data-v-080cdf8b] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn[data-v-080cdf8b] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: #07689f;\n  border: 1px solid #07689f;\n  font-size: 14px;\n  width: 66px;\n  text-align: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  height: 30px;\n}\n.manage[data-v-080cdf8b] {\n  margin-top: 8px;\n  height: 30vh;\n  position: relative;\n  bottom: 0px;\n  background: #fff;\n  overflow: auto;\n  padding: 0 16px;\n}\n.manage .title[data-v-080cdf8b] {\n    padding: 8px 0;\n    color: #6e6e6e;\n    font-size: 12px;\n    position: relative;\n}\n.manage .title[data-v-080cdf8b]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #979797;\n    transform: scale(1, 0.5);\n}\n.manage .item[data-v-080cdf8b] {\n    padding: 8px 0px;\n}\n.manage .item p[data-v-080cdf8b] {\n      font-size: 12px;\n}\n.manage .item[data-v-080cdf8b]:before {\n    height: 0px;\n}\n.manage .item[data-v-080cdf8b]:after {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #979797;\n    transform: scale(1, 0.5);\n}\n", ""]);

// exports


/***/ }

});