webpackJsonp([8],{

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-order"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle
    }
  }), _c('div', {
    staticClass: "mt44"
  }, [_c('router-view')], 1), _c('TransmitFooter', {
    attrs: {
      "footerconfig": _vm.footerconfig
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-656fee8b", module.exports)
  }
}

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer flex fixed"
  }, [_c('router-link', {
    staticClass: "flexmodel basic",
    attrs: {
      "to": "/terminal/foo",
      "active-class": "active",
      "replace": "replace",
      "exact": "exact"
    }
  }, [_vm._v("基本信息")]), _c('router-link', {
    staticClass: "flexmodel equipment",
    attrs: {
      "to": "/terminal/foo/equipmentinfo",
      "active-class": "active",
      "replace": "replace"
    }
  }, [_vm._v("设备信息")]), _c('router-link', {
    staticClass: "flexmodel ad",
    attrs: {
      "to": "/terminal/foo/adinfo",
      "active-class": "active",
      "replace": "replace"
    }
  }, [_vm._v("广告排期")]), _c('router-link', {
    staticClass: "flexmodel journal",
    attrs: {
      "to": "/terminal/foo/journal",
      "active-class": "active",
      "replace": "replace"
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

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1653fdfa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-656fee8b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TerminalInfo.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-656fee8b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TerminalInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(130)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  "data-v-656fee8b",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\TerminalInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TerminalInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-656fee8b", Component.options)
  } else {
    hotAPI.reload("data-v-656fee8b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 62:
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

/* harmony default export */ exports["default"] = {
    props: ["footerconfig"]

};

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter__);
//
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
            bodyBg: 'gray',
            pageTitle: '终端详情',
            footerconfig: {
                isorder: true
            }

        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        TransmitFooter: __WEBPACK_IMPORTED_MODULE_1__components_common_TransmitFooter___default.a
    },
    // created() {
    //        this.url('/terminal/foo');
    //  }
    methods: {}
};
//$route.params.code

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(115),
  /* scopeId */
  null,
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


/***/ }

});