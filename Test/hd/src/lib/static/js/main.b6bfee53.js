/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		script.src = __webpack_require__.p + "" + ({"0":"Submit","1":"choiceChest","2":"allCity","3":"Make","4":"Details","5":"Examine","6":"Agreement"}[chunkId]||chunkId) + "." + {"0":"45289550","1":"1473d555","2":"8196bfb4","3":"aae72727","4":"f354ecb7","5":"1eb2b8ab","6":"a9ceb353"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Test/hd/src/lib/static/js/";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = {
    initDomEvents: function initDomEvents() {
        String.prototype.trim = function () {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        };

        Element.prototype.hasClassName = function (a) {
            return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
        };

        Element.prototype.addClassName = function (a) {
            if (!this.hasClassName(a)) {
                this.className = [this.className, a].join(" ");
            }
            return this;
        };

        Element.prototype.removeClassName = function (b) {
            if (this.hasClassName(b)) {
                var a = this.className;
                this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
            }
            return this;
        };

        Element.prototype.toggleClassName = function (a) {
            this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
            return this;
        };

        Element.prototype.show = function () {
            this.style.display = 'block';
        };

        Element.prototype.hide = function () {
            this.style.display = 'none';
        };

        Element.prototype.toggle = function () {
            var display = this.style.display;
            this.style.display = display == 'block' ? 'none' : 'block';
        };
    },

    initScroll: function initScroll() {
        document.body.scrollTop = window.scrollTop || 0;
    },

    scrollToTop: function scrollToTop() {
        document.body.scrollTop = 0;
    },

    goback: function goback() {
        var state = window.history.state ? true : false,
            isInfo = window.location.href.indexOf('/topic/') > -1,
            indexUrl = location.href.split('forum')[0] + 'forum';
        if (!state) {
            isInfo ? (window.location.href = '/forum', window.history.replaceState(null, "", indexUrl)) : window.history.back();
        } else {
            // window.history.back();
            router.go(-1);
        }
    },

    getById: function getById(id) {
        if (!id) return null;
        return document.getElementById(id);
    },

    showErrorTip: function showErrorTip(txt) {
        if (!txt) return false;
        var mgAlert = this.getById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-error showAlert');
        mgAlert.innerHTML = txt;
        if (window.errorTimer) {
            clearTimeout(window.errorTimer);
            window.errorTimer = null;
        }
        window.errorTimer = setTimeout(function () {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function () {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2000);
    },

    showSuccessTip: function showSuccessTip(txt) {
        if (!txt) return false;
        var mgAlert = this.getById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-success showAlert');
        mgAlert.innerHTML = txt;
        setTimeout(function () {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function () {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2500);
    },

    getDeviceInfo: function getDeviceInfo() {
        var a = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1);
        a = a.substring(0, a.indexOf(")"));
        var b = {
            os: "",
            osver: "",
            phonemodel: "",
            udid: window.uid || "",
            app_name: "gegewap",
            network: navigator.connection ? navigator.connection.type : "",
            appver: ""
        };
        return 0 == a.indexOf("iPhone") ? (b.os = "ios", b.osver = a.substring(a.indexOf("_") - 1, a.indexOf("_") + 2).replace("_", "."), b.phonemodel = "iPhone") : a.indexOf("Android") > 0 && (b.os = "Android", a = a.substring(a.indexOf("Android")), a = a.split("; "), b.osver = a[0].split(" ")[1], b.phonemodel = a[a.length - 1]), this.isWeixin() && (window.wxid && (b.weixin_id = window.wxid), window.open_id && (b.open_id = window.open_id)), b;
    },

    isWeixin: function isWeixin() {
        return window.navigator.userAgent.indexOf("MicroMessenger") > 0;
    },
    isApp: function isApp() {
        return window.navigator.userAgent.indexOf("gegemis") >= 0;
    },
    isIOS: function isIOS() {
        var info = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1);
        info = info.substring(0, info.indexOf(")"));
        return info.indexOf("iPhone") >= 0;
    },
    isAndriod: function isAndriod() {
        var info = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(") + 1);
        info = info.substring(0, info.indexOf(")"));
        return info.indexOf("Android") >= 0;
    },
    addLinkTouchEvent: function addLinkTouchEvent() {
        setTimeout(function () {
            var a = document.getElementsByTagName('a');
            for (var i = 0; i < a.length; i++) {
                a[i].addEventListener('touchstart', function () {}, false);
            }
        }, 500);
    },

    getImageInfo: function getImageInfo(img_url) {
        if (!img_url) return null;
        var img_id = img_url.substr(0, 28);
        var img_info = img_url.substr(29).split("_");
        var wh = (img_info[0] || "0x0").split("x");
        var st = (img_info[0] || "0.").split(".");
        return {
            "img": img_url,
            "img_id": img_id,
            "src": window.config.IMG + img_id,
            "width": parseInt(wh[0] || 0),
            "height": parseInt(wh[1] || 0),
            "size": parseInt(st[0] || 0),
            "mime_type": st[1] || ""
        };
    },

    getImageStyle: function getImageStyle(width, height) {
        width = parseInt(width);
        if (width <= 60) {
            return "/style90x90.png";
        }
        if (width <= 100) {
            return "/style150.png";
        }
        if (width <= 160) {
            return "/style220.png";
        }
        if (width <= 230) {
            return "/style300.png";
        }
        if (width <= 320) {
            return "/style480.png";
        }
        return "/style620.png";
    },

    getImageRealSize: function getImageRealSize(width, height, baseWidth) {
        baseWidth = !!baseWidth ? baseWidth : window.innerWidth;
        return {
            height: baseWidth * height / width,
            width: baseWidth
        };
    },

    showMgLoadingWarp: function showMgLoadingWarp() {
        this.getById('mgLoadingWarp').show();
    },

    hideMgLoadingWarp: function hideMgLoadingWarp() {
        this.getById('mgLoadingWarp').hide();
    },

    showSysLoading: function showSysLoading() {
        this.getById('sysLoading').show();
    },

    hideSysLoading: function hideSysLoading() {
        this.getById('sysLoading').hide();
    },

    changePageTitle: function changePageTitle(title) {
        document.title = title;
    },

    createXMLHttpRequest: function createXMLHttpRequest() {
        var _XMLHttpReq = null;
        try {
            _XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (E) {
            try {
                _XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                _XMLHttpReq = new XMLHttpRequest();
            }
        }
        return _XMLHttpReq;
    },

    sendAjaxRequest: function sendAjaxRequest(url, method, data, callback) {
        var _XMLHttpReq = this.createXMLHttpRequest();

        function processResponse() {
            if (_XMLHttpReq.readyState == 4) {
                if (_XMLHttpReq.status == 200) {
                    var text = _XMLHttpReq.responseText,
                        data = null;
                    //实现回调
                    // text = window.decodeURI(text);
                    data = JSON.parse(text);
                    callback(data);
                }
            }
        }

        _XMLHttpReq.onreadystatechange = processResponse;
        _XMLHttpReq.open(method, url, true);
        _XMLHttpReq.withCredentials = true;
        _XMLHttpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        if (method.toUpperCase() == 'GET') _XMLHttpReq.send();else _XMLHttpReq.send(data);
    }
};

/***/ },
/* 1 */
/***/ function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_App_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_App_vue__);

var Agreement = function Agreement(r) {
    return __webpack_require__.e/* nsure */(6).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(15));
    }).bind(null, __webpack_require__));
};
var Make = function Make(r) {
    return __webpack_require__.e/* nsure */(3).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(17));
    }).bind(null, __webpack_require__));
};
var Examine = function Examine(r) {
    return __webpack_require__.e/* nsure */(5).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(16));
    }).bind(null, __webpack_require__));
};
var Submit = function Submit(r) {
    return __webpack_require__.e/* nsure */(0).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(21));
    }).bind(null, __webpack_require__));
};
var choiceChest = function choiceChest(r) {
    return __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(19));
    }).bind(null, __webpack_require__));
};
var allCity = function allCity(r) {
    return __webpack_require__.e/* nsure */(2).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(18));
    }).bind(null, __webpack_require__));
};
var Details = function Details(r) {
    return __webpack_require__.e/* nsure */(4).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(20));
    }).bind(null, __webpack_require__));
};
Vue.use(VueRouter);
/* harmony default export */ exports["a"] = new VueRouter({
    routes: [{
        path: '/',
        name: 'index',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_App_vue___default.a
    }, {
        path: '/agreement',
        name: 'Agreement',
        component: Agreement
    }, {
        path: '/examine',
        name: 'Examine',
        component: Examine
    }, {
        path: '/make',
        name: 'Make',
        component: Make
    }, {
        path: '/submit',
        name: 'Submit',
        component: Submit
    }, {
        path: '/choicechest',
        name: 'choiceChest',
        component: choiceChest
    }, {
        path: '/allcity',
        name: 'allCity',
        component: allCity
    }, {
        path: '/details',
        name: 'Details',
        component: Details
    }]
});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\moge-www\\templates\\adinteraction\\src\\components\\Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f9b31e5e", Component.options)
  } else {
    hotAPI.reload("data-v-f9b31e5e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },
/* 4 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(13)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ },
/* 6 */
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

/* harmony default export */ exports["default"] = {
  data: function data() {
    var configs = this.$props.btnconfig,
        hasConfig = configs && Object.keys(configs).length,
        hideGoback = hasConfig && (configs.isgoback === false || configs.isgoback <= 0);
    var ismsg = hasConfig && configs.ismsg ? configs.ismsg : null;
    return {
      hasConfig: hasConfig,
      version: '1',
      hideGoback: hideGoback,
      ismsg: ismsg
    };
  },

  props: ["title", "btnconfig"]
};

/***/ },
/* 7 */
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


/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            pageTitle: '大屏互动',
            btnconfig: {
                isgoback: 0,
                isshare: 1
            },
            _id: '',
            pay: '',
            cityName: '',
            start_date: '',
            end_date: '',
            items: [],
            isWeiXin: false,
            scroll_load_loading: false,
            scroll_load_end: false
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a
    },
    created: function created() {
        this.getInfo();
        this.btnconfig.isshare = _util.isWeixin();
    },

    methods: {
        isShare: function isShare() {
            var _this = this;

            this.isWeiXin = true;
            setTimeout(function () {
                return _this.isWeiXin = false;
            }, 1000);
        },
        getInfo: function getInfo() {
            var that = this;
            that.showLoading();
            axios.get('/media/adinteraction').then(function (response) {
                if (response.data.status == 0) {
                    that.hideLoading();
                    var data = response.data.data.adinteractions;
                    for (var i = 0; i < data.length; i++) {
                        switch (data[i].status) {
                            case 1:
                                data[i].status1 = '等待审核';
                                break;
                            case 11:
                                data[i].status1 = '通过审核';
                                break;
                            case 12:
                                data[i].status1 = '审核拒绝';
                                break;
                            case 31:
                                data[i].status1 = '等待支付';
                                break;
                            default:
                                data[i].status1 = '等待审核';
                                break;
                        }
                        data[i].length = data[i].city.name.length;
                    }
                    that.items = response.data.data.adinteractions;
                } else {
                    if (response.data.msg) _util.showErrorTip(response.data.msg);
                }
            }).catch(function (err) {
                that.hideLoading();
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
        },
        gotoInfo: function gotoInfo(item) {
            this.url('/details', { _id: item._id });
        },
        gotoMake: function gotoMake() {
            this.url('/make');
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.opacity[data-v-5f928141] {\r\n    opacity: 1;\n}\n.aw-r[data-v-5f928141] {\r\n    position: absolute;\r\n    right: 9px;\r\n    top: 50%;\r\n    margin-top: -6px\n}\n.aw-r[data-v-5f928141]::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    width: 12px;\r\n    height: 12px;\r\n    border-top: 2px #c7c7cc solid;\r\n    border-right: 2px #c7c7cc solid;\r\n    border-top-right-radius: 2px;\r\n    transform: rotate(45deg);\n}\r\n", ""]);

// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  "data-v-5f928141",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\moge-www\\templates\\adinteraction\\src\\pages\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f928141", Component.options)
  } else {
    hotAPI.reload("data-v-5f928141", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig
    },
    on: {
      "shareBtnCallback": _vm.isShare
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-content pd-t40"
  }, [_c('div', {
    staticClass: "mui-content-padded",
    staticStyle: {
      "padding-top": "16px"
    }
  }, [_vm._m(0), _vm._v(" "), (_vm.items) ? _c('div', {
    attrs: {
      "id": "info"
    }
  }, [_c('ul', {
    staticClass: "mui-table-view"
  }, _vm._l((_vm.items), function(item) {
    return (item.status == 31 || item.status == 1 || item.status == 11 || item.status == 12) ? _c('li', {
      key: item._id,
      staticClass: "mui-table-view-cell info",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.gotoInfo(item)
        }
      }
    }, [_c('div', {
      staticClass: "mui-table"
    }, [_c('div', {
      staticClass: "mui-table-cell mui-col-xs-10"
    }, [_c('div', {
      staticClass: "mui-row line_h30"
    }, [_c('div', {
      staticClass: "mui-col-sm-2 mui-ellipsis gray "
    }, [_vm._v("作品：")]), _vm._v(" "), _c('div', {
      staticClass: "mui-col-sm-10 mui-ellipsis "
    }, [_vm._v(_vm._s(item.category))])]), _vm._v(" "), _c('div', {
      staticClass: "mui-row line_h30"
    }, [_c('div', {
      staticClass: "mui-col-sm-2 mui-ellipsis gray"
    }, [_vm._v("日期：")]), _vm._v(" "), _c('div', {
      staticClass: "mui-col-sm-10 line_h30"
    }, [_vm._v(_vm._s(item.start_date.substring(0, 10)) + "~" + _vm._s(item.end_date.substring(0, 10)))])]), _vm._v(" "), _c('div', {
      staticClass: "mui-row line_h30"
    }, [_c('div', {
      staticClass: "mui-col-sm-2 mui-ellipsis gray "
    }, [_vm._v("状态 ：\n                                    ")]), _vm._v(" "), _c('div', {
      staticClass: "mui-col-sm-10 blue line_h30"
    }, [_vm._v(_vm._s(item.status1))])])]), _vm._v(" "), _vm._m(1, true)])]) : _vm._e()
  }))]) : _vm._e(), _vm._v(" "), (!_vm.items) ? _c('div', {
    attrs: {
      "id": "no_work"
    }
  }, [_vm._m(2)]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "mui-btn mui-btn-primary mui-btn-block",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.gotoMake
    }
  }, [_vm._v("开始制作")])]), _vm._v(" "), (_vm.isWeiXin) ? _c('div', {
    staticClass: "mui-popup-backdrop",
    class: {
      opacity: _vm.isWeiXin
    }
  }, [_vm._m(3)]) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bg_icon"
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/Fg98WaiXzbArcqC-YffzPkOebVlJ"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mui-table-cell mui-col-xs-2 "
  }, [_c('div', {
    staticClass: "aw-r"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "img_pic"
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/FhZ2HwIuo8ORmL5WmRl2evWh8yGT",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "blue  margin16"
  }, [_vm._v("暂无互动作品")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "share"
    }
  }, [_c('div', {
    staticClass: "lead_img"
  }, [_c('img', {
    attrs: {
      "src": "//img.aimoge.com/FrIulbQ1YAi88BvSSb-Ojzw-UhDU",
      "alt": "",
      "width": "100%",
      "height": "100%"
    }
  })]), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "mui-text-center"
  }, [_vm._v("请点击右上角")]), _vm._v(" "), _c('p', {
    staticClass: "mui-text-center"
  }, [_vm._v("将它发送给朋友")]), _vm._v(" "), _c('p', {
    staticClass: "mui-text-center"
  }, [_vm._v("或者朋友圈")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5f928141", module.exports)
  }
}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gege-header fixed"
  }, [_c('div', {
    staticClass: "title center ellipsis f16 abs"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.hideGoback ? false : true) ? _c('a', {
    staticClass: "icgoback",
    staticStyle: {
      "left": "0"
    },
    on: {
      "click": function($event) {
        _vm.goback(_vm.origin)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasConfig ? _vm.btnconfig.isback : false) ? _c('a', {
    staticClass: "icgoback",
    staticStyle: {
      "left": "0"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('callback')
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasConfig ? _vm.btnconfig.isshare : false) ? _c('a', {
    staticClass: "icshare",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('shareBtnCallback')
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasConfig ? _vm.btnconfig.ismsg : false) ? _c('a', {
    staticClass: "icclock",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('msgBtnCallback')
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hasConfig ? _vm.btnconfig.isconfirm : false) ? _c('a', {
    staticStyle: {
      "color": "#fff",
      "right": "0"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('confirmCallback')
      }
    }
  }, [_vm._v("确认")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f9b31e5e", module.exports)
  }
}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("1c340fe2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5f928141\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5f928141\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },
/* 13 */
/***/ function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(2);

Vue.prototype.goback = function () {
    this.$router.go(-1);
};
Vue.prototype.url = function (path, query, replace) {
    if (replace) {
        this.$router.replace({
            path: path,
            query: query ? query : {}
        });
    } else {
        this.$router.push({
            path: path,
            query: query ? query : {}
        });
    }
};
/* 实例化一个vue */
new Vue({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    template: '<div id="app">\n                    <keep-alive>\n                        <router-view class="view"></router-view>\n                    </keep-alive>\n                </div>',
    beforeCreate: function beforeCreate() {
        _util.initDomEvents();
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }
/******/ ]);