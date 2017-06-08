webpackJsonp([12],{

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.message .pt50[data-v-aff66454] {\n  padding-top: 43px;\n}\n.message .nav[data-v-aff66454] {\n  background-color: #fafafa;\n  border-bottom: 1px #cfcfcf solid;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.message .nav .num[data-v-aff66454] {\n    color: #d75a48;\n}\n.message .nav .tab[data-v-aff66454] {\n    width: 25%;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n}\n.message .nav .tab[data-v-aff66454]:active {\n      background-color: #eee;\n}\n.message .nav .tab.active[data-v-aff66454] {\n      color: #07689f;\n}\n.message .nav .tab.active .num[data-v-aff66454] {\n        color: #07689f;\n}\n.message .nav .tab.active[data-v-aff66454]:after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        border: 1px #07689f solid;\n        width: 40px;\n        margin-left: -20px;\n}\n.message .empty[data-v-aff66454] {\n  padding-top: 64px;\n}\n.message .empty .empty-img[data-v-aff66454] {\n    display: block;\n    width: 144px;\n    height: 144px;\n    margin: 0 auto 16px;\n}\n.message .empty .empty-info[data-v-aff66454] {\n    font-size: 14px;\n    color: #6e6e6e;\n    text-align: center;\n}\n.message .item[data-v-aff66454] {\n  padding: 24px 16px 0 16px;\n}\n.message .item .time[data-v-aff66454] {\n    display: block;\n    width: 135px;\n    height: 18px;\n    line-height: 18px;\n    margin: 0 auto 8px;\n    text-align: center;\n    background-color: #cfcfcf;\n    border-radius: 10px;\n    color: #fff;\n    font-size: 12px;\n}\n.message .item .gray[data-v-aff66454] {\n    color: #6e6e6e;\n}\n.message .item .flag[data-v-aff66454] {\n    font-size: 14px;\n    color: #07689f;\n}\n.message .item .info[data-v-aff66454] {\n    padding-left: 16px;\n}\n.message .item .info .unreadStatus[data-v-aff66454] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 8px;\n      width: 8px;\n      border-radius: 100%;\n      background-color: #d75a48;\n}\n.message .item .info .detail[data-v-aff66454] {\n      background-color: #fff;\n      border-radius: 10px;\n      padding: 8px 16px;\n      color: #323232;\n}\n.message .item .info .detail .title[data-v-aff66454] {\n        font-size: 14px;\n        margin-bottom: 8px;\n        font-weight: 700;\n}\n.message .item .info .detail .line[data-v-aff66454] {\n        padding-left: 60px;\n        min-height: 22px;\n}\n.message .item .info .detail .desc[data-v-aff66454] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        display: block;\n        width: 60px;\n        height: 14px;\n}\n", ""]);

// exports


/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "noborder": true
    }
  }), _c('div', {
    staticClass: "nav top44 fixed"
  }, [_c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 0
    },
    on: {
      "click": function($event) {
        _vm.switchTab(0)
      }
    }
  }, [_vm._m(0)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 1
    },
    on: {
      "click": function($event) {
        _vm.switchTab(1)
      }
    }
  }, [_c('div', [_c('label', [_vm._v("工单")]), _c('label', [_c('span', [_vm._v("(")]), _c('span', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.task_num))]), _c('span', [_vm._v(")")])])])]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 2
    },
    on: {
      "click": function($event) {
        _vm.switchTab(2)
      }
    }
  }, [_vm._m(1)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 3
    },
    on: {
      "click": function($event) {
        _vm.switchTab(3)
      }
    }
  }, [_vm._m(2)])]), _c('div', {
    staticClass: "mt44 pt50"
  }, [(_vm.list.length <= 0 && !_vm.isFirst) ? [_vm._m(3)] : _vm._e(), (_vm.list.length > 0) ? [(_vm.activeTab == 1) ? _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      staticClass: "list"
    }, [_c('div', {
      staticClass: "item rel",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goDetail(item.id, item.href, index)
        }
      }
    }, [_c('p', {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm._f("converTime")(item.created_at)))]), _c('div', {
      staticClass: "rel info"
    }, [_c('i', {
      class: {
        unreadStatus: _vm.converReadTime(item.readed_at)
      }
    }), _c('div', {
      staticClass: "detail"
    }, [_c('div', {
      staticClass: "flag"
    }, [_vm._v(_vm._s(item.type))]), _c('div', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.content))]), _c('div', {
      staticClass: "line f12 rel"
    }, [_c('label', {
      staticClass: "gray rel desc"
    }, [_vm._v("终端名称:")]), _c('label', [_vm._v(_vm._s(item.terminal_name))])]), _c('div', {
      staticClass: "line f12 rel"
    }, [_c('label', {
      staticClass: "gray rel desc"
    }, [_vm._v("创建时间:")]), _c('label', [_vm._v(_vm._s(item.created_at))])])])])])])
  }) : _vm._e(), (_vm.activeTab == 2) ? _vm._l((_vm.list2), function(item) {
    return _c('div', {
      staticClass: "list"
    }, [_c('div', {
      staticClass: "item rel"
    }, [_c('p', {
      staticClass: "time"
    }, [_vm._v("8月10日 10:30 ")]), _c('div', {
      staticClass: "rel info"
    }, [_c('i', {
      class: {
        unreadStatus: !_vm.read
      }
    }), _vm._m(4, true)])])])
  }) : _vm._e()] : _vm._e()], 2), _c('DataLoading', {
    ref: "loading"
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("预警")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("告警")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("合同")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "empty"
  }, [_c('img', {
    staticClass: "empty-img",
    attrs: {
      "src": "http://img.aimoge.com/FgP3EthHIeL0e8AaMRJSqj5mZKas"
    }
  }), _c('div', {
    staticClass: "empty-info"
  }, [_vm._v("暂无消息通知")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("青山湾花园格格货栈")]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("告警时间:")]), _c('label', [_vm._v("2016-09-21 19:40:30")])]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("告警内容:")]), _c('label', [_vm._v("开门失败")])]), _c('div', {
    staticClass: "line f12 rel"
  }, [_c('label', {
    staticClass: "gray rel desc"
  }, [_vm._v("格口编码:")]), _c('label', [_vm._v("M0420")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aff66454", module.exports)
  }
}

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2e9794b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-aff66454\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-aff66454\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(145)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  "data-v-aff66454",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aff66454", Component.options)
  } else {
    hotAPI.reload("data-v-aff66454", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util, ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Footer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_common_Footer__);
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





/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            pageTitle: '消息中心',
            bodyBg: 'gray',
            btnconfig: {
                isgoback: 0,
                ismsg: 1,
                issearch: 1
            },
            version: '1',
            isGoHome: false,
            activeTab: 1,
            warn_num: '0',
            task_num: '0',
            alarm_num: '0',
            contract_num: '0',
            filter: '',
            page: 1,
            total_page: 1,
            scroll_load_loading: false,
            scroll_load_end: false,
            isFirst: true,
            list: [],
            list0: [],
            list1: [],
            list2: [],
            list3: []
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        FooterBar: __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a
    },
    mounted: function mounted() {
        window.canGoBack = true;
        window.origin = null;
        this.switchTab(1);
        window.addEventListener('scroll', this.handleScroll);
    },
    activated: function activated() {
        window.canGoBack = true;
        window.origin = null;
        if (this.isGoHome) {
            if (window.localStorage.messageToHome === '1') {
                this.activeTab = 1;
                this.warn_num = '0';
                this.task_num = '0';
                this.alarm_num = '0';
                this.contract_num = '0';
                this.filter = '';
                this.resetData();
                this.switchTab(1);
            }
        } else {
            document.body.scrollTop = window.localStorage.messageScrollTop;
        }
        window.localStorage.removeItem('messageScrollTop');
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        this;
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        if (to.path === '/') {
            this.isGoHome = true;
            window.localStorage.setItem('messageToHome', '1');
        } else {
            window.localStorage.removeItem('messageToHome');
            window.localStorage.setItem('messageScrollTop', document.body.scrollTop);
            document.body.scrollTop = 0;
        }

        next();
    },
    destroyed: function destroyed() {
        this;
    },

    filters: {
        converTime: function converTime(value) {
            if (!value) return '';
            value = value.toString();
            return parseInt(value.substring(5, 7)) + '月' + parseInt(value.substring(8, 10)) + '日 ' + value.substring(11, 16);
        }
    },
    methods: {
        handleScroll: function handleScroll() {
            //滚动加载监听事件
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                this.fetchData();
            }
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
        },
        showLoadEnd: function showLoadEnd() {
            //显示没有更多数据状态
            this.hideLoading();
            this.scroll_load_end = true;
            this.$refs.loading && this.$refs.loading.showEnd();
        },
        formatDate: function formatDate(value) {
            var date = new Date(value),
                Y = date.getFullYear(),
                m = date.getMonth() + 1,
                d = date.getDate(),
                H = date.getHours(),
                i = date.getMinutes(),
                s = date.getSeconds();
            if (m < 10) {
                m = '0' + m;
            }
            if (d < 10) {
                d = '0' + d;
            }
            if (H < 10) {
                H = '0' + H;
            }
            if (i < 10) {
                i = '0' + i;
            }
            if (s < 10) {
                s = '0' + s;
            }
            // 获取时间格式 2017-01-03 10:13:48 
            var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
            // 获取时间格式 2017-01-03
            // var t = Y +'-'+ m +'-'+ d;
            return t;
        },
        converReadTime: function converReadTime(value) {
            if (!value) return '';
            value = value.toString();
            if (value.substring(0, 1) == '-' || value.substring(0, 4) == '0000') {
                return true;
            } else {
                return false;
            }
        },
        resetData: function resetData() {
            this.page = 1;
            this.isFirst = true;
            this.scroll_load_loading = false;
            this.scroll_load_end = false;
            this.list = [];
            this.list0 = [];
            this.list1 = [];
            this.list2 = [];
            this.list3 = [];
        },
        switchTab: function switchTab(index) {
            if (index == 0 || index == 2 || index == 3) {
                _util.showErrorTip('敬请期待！');
                return false;
            }
            index > -1 ? this.activeTab = index : void 0;
            switch (index) {
                case 0:
                    this.filter = 'warn';
                    break;
                case 1:
                    this.filter = 'tasks';
                    break;
                case 2:
                    this.filter = 'alarm';
                    break;
                case 3:
                    this.filter = 'contract';
                    break;
                default:
                    this.filter = 'tasks';
                    break;
            }
            this.resetData();
            this.fetchData();
        },
        fetchData: function fetchData() {
            if (!(this.$route.path == '/message')) {
                return false;
            }
            var that = this;
            if (that.total_page < that.page) {
                that.showLoadEnd();
                return false;
            }
            if (that.scroll_load_loading) {
                return false;
            }
            if (that.scroll_load_end) {
                return false;
            }
            if (that.page == 1) {
                document.body.scrollTop = 0;
            }
            if (that.isFirst) {
                that.getAjaxRequest("message_cache", ajaxUrls.messages + 'numbers', that.version, 2 * 60 * 1000, 6 * 60 * 60 * 1000, function (response) {
                    if (response.status == 0) {
                        that.warn_num = response.data.warn;
                        that.task_num = response.data.task;
                        that.alarm_num = response.data.alarm;
                        that.contract_num = response.data.contract;
                    } else {
                        if (response.msg) _util.showErrorTip(response.msg);
                    }
                }, function (error) {
                    _util.showErrorTip(error);
                });
            }
            that.showLoading();
            that.getAjaxRequest("message_cache", ajaxUrls.messages + that.filter + "?page=" + that.page, that.version, 30 * 1000, 6 * 60 * 60 * 1000, function (response) {
                if (response.status == 0) {
                    switch (that.activeTab) {
                        case 0:
                            that.list0 = that.list0.concat(response.data.news);
                            that.list = that.list0;
                            break;
                        case 1:
                            that.list1 = that.list1.concat(response.data.news);
                            that.list = that.list1;

                            break;
                        case 2:
                            that.list2 = that.list2.concat(response.data.news);
                            that.list = that.list2;
                            break;
                        case 3:
                            that.list3 = that.list3.concat(response.data.news);
                            that.list = that.list3;
                            break;
                        default:
                            that.list1 = that.list1.concat(response.data.news);
                            that.list = that.list1;
                            break;
                    }
                    that.total_page = response.total_page;
                    that.isFirst = false;
                    that.page += 1;
                    if (response.data.news.length < 5 || that.page > response.total_page) {
                        that.showLoadEnd();
                    } else {
                        that.hideLoading();
                    }
                } else {
                    that.hideLoading();
                    if (response.msg) _util.showErrorTip(response.msg);
                }
            }, function (error) {
                _util.showErrorTip(error);
            });
        },
        goDetail: function goDetail(_id, href, index) {
            var that = this;
            var item = that.list[index];
            if (!href) {
                _util.showErrorTip('您的工单已被删除');
                return false;
            }
            if (!that.converReadTime(item.readed_at)) {
                that.url(href);
                return false;
            }
            axios.post(ajaxUrls.messages + that.filter, {
                message_id: _id
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (rsp) {
                if (rsp.data.status == 0) {
                    var date = new Date();
                    var _item = that.list[index];
                    _item.readed_at = that.formatDate();
                    that.list.splice(index, 1, _item);
                    that.url(href);
                } else {
                    if (rsp.data.msg) _util.showErrorTip(rsp.data.msg);
                }
            });
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(4)))

/***/ }

});