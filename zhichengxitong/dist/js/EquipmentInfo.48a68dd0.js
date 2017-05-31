webpackJsonp([12],{

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("箱柜列表")]), _vm._v(" "), _c('ul', _vm._l((_vm.bins), function(a) {
    return _c('li', [_c('p', [_vm._v(_vm._s(a.position))]), _vm._v(" "), _c('p', {
      staticClass: "gray_2"
    }, [_vm._v(_vm._s(a.asset_num))]), _vm._v(" "), _c('div', {
      staticClass: "li"
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "device"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("其他设备")]), _vm._v(" "), _c('ul', _vm._l((_vm.other), function(a) {
    return _c('li', [_c('p', [_vm._v(_vm._s(a.name))]), _vm._v(" "), _c('p', {
      staticClass: "gray_2"
    }, [_vm._v("未填写")]), _vm._v(" "), _c('div', {
      staticClass: "li"
    })])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e5d852a", module.exports)
  }
}

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("da737ac0", content, false);
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

/***/ 30:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(105),
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

/***/ 68:
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

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            bins: [{
                'asset_num': 'S011403181-0007',
                'position': '右一'
            }, {
                'asset_num': 'S011403181-0008',
                'position': '左一'
            }],
            other: [],
            footerconfig: {
                isequipment: true
            }
        };
    },
    mounted: function mounted() {
        var that = this;
        axios.get(ajaxUrls.basic + localStorage.terminal_id + '?info=device').then(function (rsp) {
            console.log(rsp.data.data);
            //                    that.bins = rsp.data.data.bins;
            that.other = rsp.data.data.other;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.gray_2[data-v-3e5d852a] {\n  color: #e3e3e3;\n}\n.main .title[data-v-3e5d852a] {\n  height: 32px;\n  line-height: 32px;\n  color: #747474;\n  padding: 0 16px;\n}\n.main ul li[data-v-3e5d852a] {\n  background-color: #fff;\n  color: #4d4d4d;\n  font-size: 13px;\n  overflow: hidden;\n  padding: 10px 16px;\n  width: 100%;\n  left: 0;\n  z-index: 300;\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n}\n.main ul li[data-v-3e5d852a]:nth-child(1):before {\n  height: 0;\n}\n.main ul li[data-v-3e5d852a]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #979797;\n  transform: scale(1, 0.5);\n}\n.main ul li:before p[data-v-3e5d852a] {\n    text-align: left;\n}\n.main .li[data-v-3e5d852a]:after {\n  content: '';\n  background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n  background-size: 100% auto;\n  display: block;\n  height: 28px;\n  width: 28px;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  margin-top: -14px;\n}\n.main .device[data-v-3e5d852a] {\n  position: absolute;\n  width: 100%;\n  bottom: 51px;\n}\n.main .device ul[data-v-3e5d852a] {\n    height: 30vh;\n    overflow: auto;\n}\n.main .device ul li p[data-v-3e5d852a]:nth-child(2) {\n      width: 75%;\n}\n", ""]);

// exports


/***/ }

});