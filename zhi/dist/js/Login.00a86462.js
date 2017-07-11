webpackJsonp([13],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-login"
  }, [_c('div', {
    staticClass: "center logo"
  }, [_vm._v("运营支撑系统")]), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "formitem flex mobile"
  }, [_c('div', {
    staticClass: "sprites"
  }), _c('div', {
    staticClass: "input flexmodel"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "block f16",
    attrs: {
      "type": "text",
      "placeholder": "用户名",
      "maxlength": "11"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })])]), _c('div', {
    staticClass: "formitem flex code"
  }, [_c('div', {
    staticClass: "sprites"
  }), _c('div', {
    staticClass: "input flexmodel"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.code),
      expression: "code"
    }],
    staticClass: "block f16",
    attrs: {
      "type": "password",
      "placeholder": "密码"
    },
    domProps: {
      "value": (_vm.code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.code = $event.target.value
      }
    }
  })])])]), _c('div', {
    staticClass: "rel center",
    attrs: {
      "id": "control_btn"
    }
  }, [_c('a', {
    staticClass: "loginbtn f16 bold",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07e07a22", module.exports)
  }
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5c8380e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-07e07a22\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-07e07a22\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(124)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(77),
  /* template */
  __webpack_require__(106),
  /* scopeId */
  "data-v-07e07a22",
  /* cssModules */
  null
)
Component.options.__file = "C:\\workspace\\zhichengxitong\\src\\pages\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07e07a22", Component.options)
  } else {
    hotAPI.reload("data-v-07e07a22", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls, _util) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            pageTitle: '登录',
            code: '',
            username: ''
        };
    },
    beforeCreate: function beforeCreate() {
        var that = this,
            query = this.$route.query,
            next_url = query && query.next_url ? query.next_url : '/';
        axios.get(ajaxUrls.isLogin).then(function (rsp) {
            if (rsp.data.status == 0) {
                window.is_logged = true;
                that.url(decodeURIComponent(next_url));
            }
        });
    },
    created: function created() {
        window.canGoBack = false;
        window.origin = null;
    },
    activated: function activated() {
        window.canGoBack = false;
        window.origin = null;
        var that = this,
            query = this.$route.query,
            next_url = query && query.next_url ? query.next_url : '/';
        axios.get(ajaxUrls.isLogin).then(function (rsp) {
            if (rsp.data.status == 0) {
                window.is_logged = true;
                that.url(decodeURIComponent(next_url));
            }
        });
    },

    methods: {
        login: function login() {
            var query = this.$route.query,
                next_url = query && query.next_url ? query.next_url : '/',
                username = this.username,
                code = this.code,
                that = this;
            if (_util.getById('sysLoading').style.display == 'block') return false;
            if (!username) {
                _util.showErrorTip('请填写用户名!');
                return false;
            }
            if (!code) {
                _util.showErrorTip('请输入密码!');
                return false;
            }
            _util.showSysLoading();
            axios.post(ajaxUrls.login, {
                username: username,
                password: code
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (rsp) {
                _util.hideSysLoading();
                if (rsp.data.status == 0) {
                    var userJson = rsp.data.data || null;
                    window.localStorage.setItem('userJson', JSON.stringify(userJson));
                    window.is_logged = true;
                    that.url(decodeURIComponent(next_url));
                } else {
                    _util.showErrorTip(rsp.data.msg);
                }
            }).catch(function (error) {
                _util.hideSysLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(0)))

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n.md-login .logo[data-v-07e07a22] {\n  color: #3099ff;\n  line-height: 100px;\n  padding: 22px 0 10px 0;\n  font-size: 28px;\n  font-weight: bold;\n}\n.md-login .input[data-v-07e07a22] {\n  height: 49px;\n}\n.md-login .input input[data-v-07e07a22] {\n    height: 30px;\n    padding: 0;\n    width: 100%;\n    line-height: 30px;\n    position: relative;\n    top: 11px;\n    width: 95%;\n    border: none;\n}\n.md-login .mobile[data-v-07e07a22],\n.md-login .code[data-v-07e07a22] {\n  border-bottom: 1px #eee solid;\n}\n.md-login .loginbtn[data-v-07e07a22] {\n  display: block;\n  background-color: #3099ff;\n  color: #fff;\n  height: 44px;\n  line-height: 44px;\n  border-radius: 5px;\n  position: relative;\n  margin: 38px 20px 0 20px;\n}\n.md-login .loginbtn[data-v-07e07a22]:active {\n    background-color: #2876c2;\n}\n.md-login .loginbtn.disabled[data-v-07e07a22], .md-login .loginbtn.disabled[data-v-07e07a22]:active {\n    background-color: rgba(48, 153, 255, 0.53);\n}\n.md-login .form[data-v-07e07a22] {\n  background-color: #fff;\n  margin: 0 5%;\n}\n.md-login .form .sprites[data-v-07e07a22] {\n    display: block;\n    width: 32px;\n    height: 20px;\n    padding-right: 5px;\n    margin-right: 7px;\n    position: relative;\n    top: 12px;\n    left: 0;\n}\n.md-login .form .sprites[data-v-07e07a22]:before {\n      content: '';\n      background-image: url(\"https://img.aimoge.com/Fseye1socv7wcHZNiEca2JGzTrGz\");\n      background-repeat: no-repeat;\n      background-size: 22px;\n      display: block;\n      height: 32px;\n      width: 32px;\n      position: absolute;\n      left: 12px;\n      top: -1px;\n}\n.md-login .form .code .sprites[data-v-07e07a22]:before {\n    background-image: url(\"https://img.aimoge.com/Fj6ivplQiYNceEuZ5yE2vMPnVuaF\");\n}\n", ""]);

// exports


/***/ })

});