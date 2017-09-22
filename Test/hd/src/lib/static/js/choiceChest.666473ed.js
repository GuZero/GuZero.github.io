webpackJsonp([2],{

/***/ 22:
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-60e4c5a0",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\moge-www\\templates\\adinteraction\\src\\pages\\choiceChest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] choiceChest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60e4c5a0", Component.options)
  } else {
    hotAPI.reload("data-v-60e4c5a0", Component.options)
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

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, _util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__(3);
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


/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(25)],
    data: function data() {
        return {
            pageTitle: '选择柜机',
            bodyBg: 'bg_white',
            btnconfig: {
                isgoback: 0,
                isconfirm: 1,
                isback: 1
            },
            word: '',
            latitude: 32.015198941158,
            longitude: 118.79287282351,
            locatinfo: "定位中...",
            isLocation: true,
            scrollHeight: 0,
            numPerPage: 8,
            items: [],
            pageList: [],
            page: '',
            scroll_load_loading: false,
            scroll_load_end: false,
            activeTab: '0',
            flag: false,
            t_c: [],
            t_n: [],
            city_id: ''
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        $('#sysLoading').hide();
        next();
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        $('#sysLoading').show();
        next();
    },
    mounted: function mounted() {
        this.AMapGetLoction();
    },

    watch: {
        '$route': function $route() {
            if (this.$route.path == '/choiceChest') {
                this.clearData();
                this.AMapGetLoction();
            }
        }
    },
    activated: function activated() {
        window.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        choiceItem: function choiceItem(item, ev) {
            var el = ev.currentTarget;
            var icon = $(el).children('.icon').children();
            if ($(icon).is(":hidden")) {
                $(icon).show();
                this.t_c.add(item.terminal_code);
                this.t_n.add(item.terminal_name);
                this.city_id = item.city_id;
            } else {
                $(icon).hide();
                this.t_c.remove(item.terminal_code);
                this.t_n.remove(item.terminal_name);
            }
        },
        gotoInfo: function gotoInfo() {
            this.url('./allcity');
        },
        wxGetLoction: function wxGetLoction() {
            var that = this;
            wx.ready(function () {
                wx.getLocation({
                    suceess: function suceess(res) {
                        that.longitude = res.longitude;
                        that.latitude = res.latitude;
                        that.load();
                    },
                    cancel: function cancel(err) {
                        _util.showErrorTip('用户拒绝授权获取地理位置');
                        that.locatinfo = '定位失败';
                    }
                });
            });
        },
        AMapGetLoction: function AMapGetLoction(isFirst) {
            // if(_util.isWeixin()&&isFirst){
            //     this.$router.go(0)
            // }
            var map, geolocation;
            var that = this;
            //加载地图，调用浏览器定位服务
            map = new AMap.Map('', {
                resizeEnable: true
            });
            map.plugin('AMap.Geolocation', function () {
                geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true, //是否使用高精度定位，默认:true
                    timeout: 10000, //超过10秒后停止定位，默认：无穷大
                    buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    buttonPosition: 'RB'
                });
                map.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', that.onComplete); //返回定位信息
                AMap.event.addListener(geolocation, 'error', that.onError); //返回定位出错信息
            });
        },
        load: function load() {
            var that = this,
                page = '';
            if (that.scroll_load_loading) {
                return false;
            }
            if (that.scroll_load_end) {
                return false;
            }
            that.showLoading();
            page = that.page;
            axios.get('/media/adinteraction/terminal/near?longitude=' + that.longitude + '&latitude=' + that.latitude + '&word=' + that.word).then(function (response) {
                if (response.data.status == 0) {
                    that.hideLoading();
                    var _d = response.data;
                    if (_d.data.terminals && _d.data.terminals.length > 0) {
                        if (that.pageList.indexOf(page) >= 0) return false;
                        that.pageList.push(page);
                        that.page = _d.data.next_cursor || '';
                        that.items = that.items.concat(_d.data.terminals);
                        that.setDataStatus();
                        if (_d.data.terminals && _d.data.terminals.length < that.numPerPage) {
                            that.scroll_load_end = true;
                        }
                    }
                } else {
                    if (response.data.msg) _util.showErrorTip(response.data.msg);
                }
            }).catch(function (err) {
                that.hideLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },
        handleScroll: function handleScroll() {
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                this.load();
            }
        },
        setDataStatus: function setDataStatus() {
            var that = this;
            var item = null,
                tempItems = [];
            for (var i = 0; i < that.items.length; i++) {
                item = that.items[i];
                item.distance = that.getFlatternDistance(that.latitude, that.longitude, item.geo[1], item.geo[0]);
                tempItems.push(item);
            }
            that.items = tempItems;
        },
        getFlatternDistance: function getFlatternDistance(lat1, lng1, lat2, lng2) {
            var that = this;
            var PI = Math.PI;
            var radLat1 = that.getRad(lat1);
            var radLat2 = that.getRad(lat2);
            var a = radLat1 - radLat2;
            var b = that.getRad(lng1) - that.getRad(lng2);
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * 6378.137; // EARTH_RADIUS;
            s = Math.round(s * 1000) / 1000;
            return s;
            return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
        },
        getRad: function getRad(d) {
            var PI = Math.PI;
            return d * PI / 180.0;
        },
        onComplete: function onComplete(data) {
            this.longitude = data.position.getLng();
            this.latitude = data.position.getLat();
            this.isLocation = false;
            this.load();
        },
        onError: function onError(data) {
            _util.showErrorTip('定位失败，请确认是否授权获取您的地理位置...');
            this.locatinfo = '定位失败';
            // this.isLocation=false;
            // this.load();
        },
        setData: function setData() {
            window.Data.t_c = this.t_c;
            window.Data.t_n = this.t_n;
            window.Data.city_id = this.city_id;
            this.url('./submit');
        },
        clearData: function clearData() {
            $(".choice_icon").hide();
            window.Data = {};
            this.isLocation = true;
            this.word = '';
            this.flag = false;
            this.t_c = [];
            this.t_n = [];
            this.items = [];
            this.pageList = [];
            this.page = '';
            this.scroll_load_loading = false;
            this.scroll_load_end = false;
        },
        search: function search() {
            if (!this.word) {
                _util.showErrorTip('请输入小区的名称');
                return false;
            }
            this.page = '';
            this.pageList = [];
            this.items = [];
            this.scroll_load_end = false;
            this.scroll_load_loading = false;
            this.load();
        },
        clearInput: function clearInput() {
            this.word = '';
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(0)))

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.gege-header[data-v-60e4c5a0] {\n    background: #4285f4;\n}\n.content[data-v-60e4c5a0] {\n    padding: 0 16px;\n    padding-top: 60px;\n}\n.btn_blue[data-v-60e4c5a0] {\n    border: 0.01px solid #4285f4;\n    background-color: #4285f4;\n    font-size: 15px;\n    padding: 7px 0;\n    width: 100%;\n    color: #fff;\n    border-radius: 4px;\n}\n.search[data-v-60e4c5a0] {\n    margin: 0;\n    z-index: 300;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    padding: 0 16px;\n    font-size: 14px;\n    color: #c3c3c3;\n    border-bottom: 1px #eee solid;\n    background-color: #4285f4;\n    align-items: center;\n    box-sizing: border-box;\n    justify-content: space-between;\n}\n.search .input[data-v-60e4c5a0] {\n    flex: 1;\n}\n.search input[data-v-60e4c5a0] {\n    color: #666;\n    font-size: 14px;\n    height: 34px;\n    line-height: 34px;\n    background-color: #fff;\n    border-radius: 4px;\n    padding: 0 32px 0 16px;\n}\n.search .input .tag[data-v-60e4c5a0] {\n    right: 5px;\n    top: 50%;\n    background-image: url('//img.aimoge.com/Fp5Fb_0YJWJASyYvqsDVGCrPXbvC');\n    background-repeat: no-repeat;\n    background-size: 24px 24px;\n    background-position: center center;\n    width: 24px;\n    height: 24px;\n    z-index: 300;\n    margin-top: -12px;\n}\n.search .search-btn[data-v-60e4c5a0] {\n    width: 50px;\n    height: 34px;\n    line-height: 34px;\n    border: 1px solid #fff;\n    border-radius: 3px;\n    color: #fff;\n    text-align: center;\n    margin-left: 16px;\n}\n[data-v-60e4c5a0]::-webkit-input-placeholder {\n    /* WebKit browsers */\n    color: #999;\n}\n[data-v-60e4c5a0]:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    color: #999;\n}\n[data-v-60e4c5a0]::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    color: #999;\n}\n[data-v-60e4c5a0]:-ms-input-placeholder {\n    /* Internet Explorer 10+ */\n    color: #999;\n}\n.height_24[data-v-60e4c5a0] {\n    height: 24px;\n    line-height: 24px;\n    position: absolute;\n    background: #ececec;\n    color: #606060;\n    width: 100%;\n    padding-left: 16px;\n    left: 0;\n    font-size: 16px;\n}\n.all[data-v-60e4c5a0] {\n    line-height: 56px;\n    height: 56px;\n    font-size: 16px;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 24px;\n    align-items: center;\n}\n.all .text[data-v-60e4c5a0] {\n    font-size: 16px;\n    color: #ef8b80;\n    font-weight: 700;\n    font-family: '\\9ED1\\4F53';\n    background: url('//img.aimoge.com/FswDzMCJr7d3IrV5x5y9Nu1MzMQy') no-repeat right center;\n    padding-right: 30px;\n    background-size: 24px 24px;\n}\n.aw-r[data-v-60e4c5a0]::after {\n    border-top: 2px #ef8b80 solid;\n    border-right: 2px #ef8b80 solid;\n    top: 50%;\n    margin-top: -6px;\n}\n.content .pos-loading[data-v-60e4c5a0] {\n    color: #000;\n    height: 50px;\n    line-height: 50px;\n    font-size: 16px;\n    margin-top: 24px;\n}\n.content .pos-loading .repos[data-v-60e4c5a0] {\n    right: 0px;\n    top: 50%;\n    height: 24px;\n    line-height: 24px;\n    padding-left: 30px;\n    background-image: url(//img.aimoge.com/FuCPy6uTtcXC0CVP5n740M-ZIRps);\n    background-repeat: no-repeat;\n    background-size: 24px 24px;\n    background-position: left center;\n    font-size: 16px;\n    color: #4285f4;\n    margin-top: -12px;\n}\n.item[data-v-60e4c5a0] {\n    margin: 15px auto;\n    display: flex;\n    font-size: 14px;\n}\n.item .icon[data-v-60e4c5a0] {\n    width: 18px;\n    height: 18px;\n    border: 1px solid #979797;\n    border-radius: 3px;\n}\n.choice_icon[data-v-60e4c5a0] {\n    width: 10px;\n    height: 5px;\n    border-bottom: 2px solid #4788f4;\n    border-left: 2px solid #4788f4;\n    transform: rotate(-45deg);\n    margin-top: 3px;\n    margin-left: 3px;\n}\n.item p[data-v-60e4c5a0] {\n    font-size: 14px;\n    color: #4d4d4d;\n    margin: 0px 12px;\n}\n.empty[data-v-60e4c5a0] {\n    font-size: 14px;\n    text-align: center;\n    color: #888;\n    padding-top: 30px;\n}\n.pd_20[data-v-60e4c5a0]{\n    padding-top:20px;\n}\n.mg_20[data-v-60e4c5a0]{\n    margin-top: -20px;\n}\n", ""]);

// exports


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "choiceChest"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    },
    on: {
      "confirmCallback": _vm.setData,
      "callback": _vm.setData
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "44px"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "search flex_1 fixed"
  }, [_c('div', {
    staticClass: "input rel"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.word),
      expression: "word"
    }],
    attrs: {
      "type": "text",
      "placeholder": "输入小区名"
    },
    domProps: {
      "value": (_vm.word)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.word = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.word) ? _c('div', {
    staticClass: "tag abs",
    on: {
      "click": _vm.clearInput
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "search-btn",
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")])]), _vm._v(" "), _c('div', {
    staticClass: "content mui-content rel"
  }, [_c('div', {
    staticClass: "height_24"
  }, [_vm._v("包成示爱选项")]), _vm._v(" "), _c('div', {
    staticClass: "all",
    on: {
      "click": _vm.gotoInfo
    }
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("包城示爱")]), _vm._v(" "), _c('div', {
    staticClass: "aw-r rel",
    staticStyle: {
      "width": "20px",
      "height": "100%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "height_24"
  }, [_vm._v("附近的格格货栈")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLocation),
      expression: "isLocation"
    }],
    staticClass: "pos-loading rel"
  }, [_vm._v(_vm._s(_vm.locatinfo) + "\n            "), _c('div', {
    staticClass: "abs repos",
    on: {
      "click": function($event) {
        _vm.AMapGetLoction('ture')
      }
    }
  }, [_vm._v("重新定位")])]), _vm._v(" "), _c('div', {
    class: {
      mg_20: _vm.isLocation, pd_20: !_vm.isLocation
    }
  }, [_vm._l((_vm.items), function(d, index) {
    return _c('div', {
      key: d.id,
      staticClass: "item",
      class: {
        disabled: d.id == '02'
      },
      on: {
        "click": function($event) {
          _vm.choiceItem(d, $event)
        }
      }
    }, [_c('div', {
      staticClass: "icon"
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.flag),
        expression: "flag"
      }],
      staticClass: "choice_icon"
    })]), _vm._v(" "), _c('p', {
      staticClass: "mui-ellipsis"
    }, [_vm._v(_vm._s(d.terminal_name))]), _vm._v(" "), _c('div', {
      staticClass: "abs",
      staticStyle: {
        "right": "16px"
      }
    }, [_vm._v(_vm._s(d.distance) + "KM")])])
  }), _vm._v(" "), (!_vm.items.length && !_vm.scroll_load_loading && !_vm.isLocation) ? _c('div', {
    staticClass: "empty"
  }, [_vm._v("┗|'O'|┛ 嗷~~抱歉暂时没有找到您想要的")]) : _vm._e()], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60e4c5a0", module.exports)
  }
}

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("3050cf8e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-60e4c5a0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./choiceChest.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-60e4c5a0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./choiceChest.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }

});