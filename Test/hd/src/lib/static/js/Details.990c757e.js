webpackJsonp([4],{

/***/ 20:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-f650d5fc",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\moge-www\\templates\\adinteraction\\src\\pages\\details.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f650d5fc", Component.options)
  } else {
    hotAPI.reload("data-v-f650d5fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 22:
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

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__(3);
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
    mixins: [__webpack_require__(22)],
    data: function data() {
        return {
            pageTitle: '作品详情',
            bodyBg: 'bg_gray',
            btnconfig: {
                isgoback: 1
            },
            start_date: '2017-07-11',
            end_date: '2017-09-13',
            items: [],
            title: '审核中',
            content: '24小时内将完成审核，若不通过则自动退款',
            fee: 0,
            status: 0,
            crts: '',
            topic_id: '',
            terminal_codes: [],
            city_name: '',
            //支付信息
            order: {
                service: 'media_adinteraction_service',
                total_fee: 1,
                pay_id: '',
                pay_Type: 4,
                order_id: '',
                status: 0,
                total_num: 1
            }
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a
    },
    mounted: function mounted() {
        this.getData();
    },

    watch: {
        '$route': function $route() {
            if (this.$route.path == '/details') {
                this.resetData();
                this.getData();
            }
        }

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
        getData: function getData() {
            var that = this;
            that.showLoading();
            Date.prototype.toLocaleString = function () {
                function getzf(num) {
                    if (parseInt(num) < 10) {
                        num = '0' + num;
                    }
                    return num;
                }
                return getzf(this.getMonth() + 1) + "-" + getzf(this.getDate()) + " " + getzf(this.getHours()) + ":" + getzf(this.getMinutes());
            };
            axios.get('/media/adinteraction/' + that.$route.query._id).then(function (res) {
                if (res.data.status == 0) {
                    that.hideLoading();
                    that.terminal_codes = res.data.data.terminal_codes;
                    if (that.terminal_codes.length != 0) {
                        that.items = res.data.data.terminals;
                    } else {
                        that.city_name = res.data.data.city.name;
                    }
                    that.start_date = res.data.data.start_date;
                    that.end_date = res.data.data.end_date;
                    that.fee = res.data.data.fee;
                    that.status = res.data.data.status;
                    that.crts = new Date(res.data.data.crts * 1000).toLocaleString();
                    that.topic_id = res.data.data.topic_id;
                    switch (res.data.data.status) {
                        case 1:
                            that.title = '审核中';
                            that.content = '24小时内将完成审核，若不通过则自动退款';
                            break;
                        case 11:
                            that.title = '未通过';
                            that.content = '内容不符，已安排微信退款，请注意查收';
                            break;
                        case 12:
                            that.title = '上屏中';
                            that.content = '作品已发布上柜，点击查看互动评论';
                            break;
                        case 31:
                            that.title = '金额:' + that.fee / 100 + '元';
                            that.content = ' ';
                            var data = res.data.data;
                            that.order.order_id = data._id;
                            that.order.total_fee = data.fee;
                            that.order.pay_id = data.pay_id;
                            that.order.status = data.status;
                            break;
                        default:
                            that.title = '审核中';
                            that.content = '24小时内将完成审核，若不通过则自动退款';
                            break;
                    }
                } else {
                    if (res.data.msg) _util.showErrorTip(res.data.msg);
                }
            }).catch(function (err) {
                console.log(err);
                that.hideLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },
        goPay: function goPay() {
            var that = this;
            var search = {
                "order_id": that.order.order_id,
                "service": that.order.service,
                "pay_Type": that.order.pay_Type,
                "total_fee": that.order.total_fee,
                "total_num": that.order.total_num,
                "callbackurl": encodeURIComponent("/adinteraction?#/examine")
            };

            function goPay() {
                window.location.href = '/pay?order_ids=' + search.order_id + '&service=' + search.service + '&total_fee=' + search.total_fee + '&total_num=' + search.total_num + '&callbackurl=' + search.callbackurl;
            }
            if (that.order.status == 211) {
                this.confirmPayCancel(goPay);
            } else {
                window.location.href = '/pay?order_ids=' + search.order_id + '&service=' + search.service + '&total_fee=' + search.total_fee + '&total_num=' + search.total_num + '&callbackurl=' + search.callbackurl;
            }
        },
        confirmPayCancel: function confirmPayCancel(callback) {
            var that = this;
            var data = {
                "service": that.order.service,
                "pay_id": that.order.pay_id,
                "pay_type": that.order.pay_Type,
                "result": 300,
                "error_msg": '用户主动取消',
                "pay_info": {}
            };
            axios.post(window.config.PAY + '/pay/' + that.order.pay_id, data).then(function (rsp) {
                if (rsp.status == 0 && rsp.data) {
                    if (callback) callback();
                } else {
                    _util.showErrorTip('支付失败');
                    that.$route.go(0);
                }
            });
        },
        gotoWWdetails: function gotoWWdetails() {
            if (this.topic_id != '000000000000000000000000') {
                window.location.href = window.config.BASE_URL + '/forum/000000000000000000000000/topic/' + this.topic_id;
            }
        },
        resetData: function resetData() {
            this.terminal_codes = [];
            this.city_name = '';
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.gege-header[data-v-f650d5fc] {\r\n    background: #4285f4;\n}\n.header[data-v-f650d5fc] {\r\n    background: #4285f4;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    align-items: center;\n}\n.header .title[data-v-f650d5fc] {\r\n    font-size: 30px;\r\n    margin-bottom: 28px;\n}\n.items[data-v-f650d5fc] {\r\n    display: flex;\r\n    font-size: 14px;\r\n    justify-content: space-between;\r\n    color: #8a8a8a;\n}\n.items p[data-v-f650d5fc] {\r\n    margin-top: 8px;\r\n    text-align: right;\n}\n.items .mg_t0[data-v-f650d5fc] {\r\n    margin-top: 0px;\n}\n.aw_r[data-v-f650d5fc]::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    width: 11px;\r\n    height: 11px;\r\n    border-top: 2px #fff solid;\r\n    border-right: 2px #fff solid;\r\n    border-top-right-radius: 2px;\r\n    transform: rotate(45deg);\r\n    top: 4px;\n}\r\n", ""]);

// exports


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "details"
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
    staticClass: "content mui-content"
  }, [_c('div', {
    staticClass: "header rel"
  }, [_c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), (_vm.status == 11) ? _c('a', {
    staticClass: "abs",
    staticStyle: {
      "top": "14px",
      "right": "30px",
      "color": "#fff",
      "display": "flex"
    },
    on: {
      "click": _vm.gotoWWdetails
    }
  }, [_vm._v("\n                上屏中\n                "), _c('div', {
    staticClass: "aw_r"
  })]) : _vm._e(), _vm._v(" "), (_vm.status == 31) ? _c('a', {
    staticClass: "abs",
    staticStyle: {
      "top": "14px",
      "right": "30px",
      "color": "#fff",
      "display": "flex"
    },
    on: {
      "click": _vm.goPay
    }
  }, [_vm._v("\n                去支付\n                "), _c('div', {
    staticClass: "aw_r"
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "info",
    staticStyle: {
      "background": "#fff",
      "border-bottom": "1px solid #dfdfdf",
      "margin-bottom": "16px"
    }
  }, [_c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("上屏柜机")]), _vm._v(" "), (!_vm.city_name) ? _c('div', {
    staticClass: "mui-ellipsis-2",
    staticStyle: {
      "min-width": "65%",
      "overflow-y": "scroll"
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('p', {
      key: item.terminal_code,
      class: {
        mg_t0: index == 0
      }
    }, [_vm._v(_vm._s(item.terminal_name))])
  })) : _vm._e(), _vm._v(" "), (_vm.city_name) ? _c('div', {
    staticClass: "mui-ellipsis-2",
    staticStyle: {
      "min-width": "65%",
      "overflow-y": "scroll"
    }
  }, [_c('p', {
    staticClass: "mg_t0"
  }, [_vm._v(_vm._s(_vm.city_name))])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("上屏时间")]), _vm._v(" "), _c('div', [_vm._v("\n                        " + _vm._s(_vm.start_date) + " ---- " + _vm._s(_vm.end_date) + "\n                    ")])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.status != 31),
      expression: "status!=31"
    }],
    staticClass: "info",
    staticStyle: {
      "background": "#fff",
      "border-bottom": "1px solid #dfdfdf",
      "border-top": "1px solid #dfdfdf"
    }
  }, [_c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("支付金额")]), _vm._v(" "), _c('div', {
    staticClass: "mui-ellipsis-2"
  }, [_vm._v("\n                        " + _vm._s(_vm.fee / 100) + "元\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "mui-table-view-cell"
  }, [_c('div', {
    staticClass: "items"
  }, [_c('div', [_vm._v("下单时间")]), _vm._v(" "), _c('div', [_vm._v("\n                        " + _vm._s(_vm.crts) + "\n                    ")])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f650d5fc", module.exports)
  }
}

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("580bbf08", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f650d5fc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./details.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f650d5fc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./details.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }

});