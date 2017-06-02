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
/******/ 		16: 0
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

/******/ 		script.src = __webpack_require__.p + "" + ({"0":"OrderClose","1":"OrderInfo","2":"Transmit","3":"OrderCreate","4":"Mine","5":"EditPassword","6":"Terminal","7":"SearchTerminal","8":"Search","9":"TerminalInfo","10":"Message","11":"Login","12":"Journal","13":"EquipmentInfo","14":"BasicInfo","15":"AdInfo"}[chunkId]||chunkId) + "." + {"0":"909f0f40","1":"65e40b8c","2":"e2282062","3":"015f9314","4":"d12109ed","5":"5891aa11","6":"c3c366cd","7":"21fe1147","8":"676429d0","9":"bf454f07","10":"6911b745","11":"0ecb8fde","12":"6fea61e6","13":"bd9896aa","14":"660d1a3e","15":"d3e6b26f"}[chunkId] + ".js";
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
/******/ 	__webpack_require__.p = "dist/js/";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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

var listToStyles = __webpack_require__(25)

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
/* 3 */
/***/ function(module, exports) {

module.exports = {
    login: window.config.API + '/user/login',
    logout: window.config.API + '/user/logout',
    isLogin: window.config.API + '/user/permissions',
    editPass: window.config.API + '/v1/users/password',
    areas: window.config.API + '/v1/terminals/ar',
    citys: window.config.API + '/v1/terminals/ar/',
    terminals: window.config.API + '/v1/terminals/ar/',
    basic: window.config.API + '/v1/terminals/',
    searchTerminal: window.config.API + '/v1/terminals?terminal_name=',
    //列出工单
    tasks: window.config.API + '/v1/tasks?',
    //提交工单
    task: window.config.API + '/v1/tasks',
    //列出我待办的工单数量
    num: window.config.API + '/v1/tasks/my',
    //查看工单详情
    orderinfo: window.config.API + '/v1/tasks/',
    //获取工单需要的选项信息
    option: window.config.API + '/v1/tasks/option',
    //获取故障分类
    fault: window.config.API + '/v1/tasks/troubles?appearance_id=',
    //搜索用户
    user: window.config.API + '/v1/users?name=',
    //搜索存件订单
    search1: window.config.API + '/v1/delivery/orders?search=',
    //搜索寄存订单
    search2: window.config.API + '/v1/deposite/orders?search=',
    //搜索丰巢寄件
    search3: window.config.API + '/v1/fengchao/orders?search=',
    //搜索菜鸟寄件
    search4: window.config.API + '/v1/cainiao/orders?search='

};

/***/ },
/* 4 */
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
            window.history.back();
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
        setTimeout(function () {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function () {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2500);
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Order__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_Order___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_Order__);

//按需加载
var Login = function Login(r) {
    return __webpack_require__.e/* nsure */(11).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(32));
    }).bind(null, __webpack_require__));
};
var Search = function Search(r) {
    return __webpack_require__.e/* nsure */(8).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(38));
    }).bind(null, __webpack_require__));
};
var Mine = function Mine(r) {
    return __webpack_require__.e/* nsure */(4).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(34));
    }).bind(null, __webpack_require__));
};
var OrderInfo = function OrderInfo(r) {
    return __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(37));
    }).bind(null, __webpack_require__));
};
var OrderCreate = function OrderCreate(r) {
    return __webpack_require__.e/* nsure */(3).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(36));
    }).bind(null, __webpack_require__));
};
var OrderClose = function OrderClose(r) {
    return __webpack_require__.e/* nsure */(0).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(35));
    }).bind(null, __webpack_require__));
};
var EditPassword = function EditPassword(r) {
    return __webpack_require__.e/* nsure */(5).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(29));
    }).bind(null, __webpack_require__));
};
var Transmit = function Transmit(r) {
    return __webpack_require__.e/* nsure */(2).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(42));
    }).bind(null, __webpack_require__));
};
var Terminal = function Terminal(r) {
    return __webpack_require__.e/* nsure */(6).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(40));
    }).bind(null, __webpack_require__));
};
var TerminalInfo = function TerminalInfo(r) {
    return __webpack_require__.e/* nsure */(9).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(41));
    }).bind(null, __webpack_require__));
};
var Message = function Message(r) {
    return __webpack_require__.e/* nsure */(10).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(33));
    }).bind(null, __webpack_require__));
};
var AdInfo = function AdInfo(r) {
    return __webpack_require__.e/* nsure */(15).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(27));
    }).bind(null, __webpack_require__));
};
var EquipmentInfo = function EquipmentInfo(r) {
    return __webpack_require__.e/* nsure */(13).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(30));
    }).bind(null, __webpack_require__));
};
var Journal = function Journal(r) {
    return __webpack_require__.e/* nsure */(12).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(31));
    }).bind(null, __webpack_require__));
};
var BasicInfo = function BasicInfo(r) {
    return __webpack_require__.e/* nsure */(14).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(28));
    }).bind(null, __webpack_require__));
};
var SearchTerminal = function SearchTerminal(r) {
    return __webpack_require__.e/* nsure */(7).catch(function(err) { __webpack_require__.oe(err); }).then((function () {
        return r(__webpack_require__(39));
    }).bind(null, __webpack_require__));
};

Vue.use(VueRouter);

/* harmony default export */ exports["a"] = new VueRouter({
    //    mode: 'history',
    routes: [{
        path: '/',
        name: 'Order',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_Order___default.a
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    }, {
        path: '/message',
        name: 'Message',
        component: Message
    }, {
        path: '/order/edit',
        name: 'OrderCreate',
        component: OrderCreate
    }, {
        path: '/order/close',
        name: 'OrderClose',
        component: OrderClose
    }, {
        path: '/order/:id',
        name: 'OrderInfo',
        component: OrderInfo
    }, {
        path: '/transmit',
        name: 'Transmit',
        component: Transmit
    }, {
        path: '/terminal',
        name: 'Terminal',
        component: Terminal
    }, {
        path: '/terminal/:code',
        name: 'TerminalInfo',
        component: TerminalInfo,
        children: [{
            path: '',
            component: BasicInfo
        }, {
            path: 'equipmentinfo',
            component: EquipmentInfo
        }, {
            path: 'journal',
            component: Journal
        }, {
            path: 'adinfo',
            component: AdInfo
        }]
    }, {
        path: '/mine',
        name: 'Mine',
        component: Mine
    }, {
        path: '/mine/password',
        name: 'EditPassword',
        component: EditPassword
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    }, {
        path: '/searchterminal',
        name: 'SearchTerminal',
        component: SearchTerminal
    }]
});

/***/ },
/* 6 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68acf664", Component.options)
  } else {
    hotAPI.reload("data-v-68acf664", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-5c45997e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\DataLoading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] DataLoading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c45997e", Component.options)
  } else {
    hotAPI.reload("data-v-5c45997e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\components\\common\\Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab11be48", Component.options)
  } else {
    hotAPI.reload("data-v-ab11be48", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },
/* 10 */
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
//
//
//

/* harmony default export */ exports["default"] = {
    props: ["text"],
    methods: {
        showLoading: function showLoading() {
            var $loading = this.$refs.loading,
                $empty = this.$refs.empty;
            $loading.removeClassName('none').addClassName('block');
            $empty.removeClassName('block').addClassName('none');
        },
        hideLoading: function hideLoading() {
            var $loading = this.$refs.loading,
                $empty = this.$refs.empty;
            $loading.removeClassName('block').addClassName('none');
            $empty.removeClassName('block').addClassName('none');
        },
        showEnd: function showEnd() {
            var $loading = this.$refs.loading,
                $empty = this.$refs.empty;
            $loading.removeClassName('block').addClassName('none');
            $empty.removeClassName('none').addClassName('block');
        },
        isLoading: function isLoading() {
            var flag = false,
                $loading = this.$refs.loading;
            if ($loading && $loading.style.display == 'block') flag = true;
            return flag;
        }
    }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
/* 12 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return {
            hasConfig: hasConfig,
            hideGoback: hideGoback
        };
    },

    props: ["title", "btnconfig", "noborder"]
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Header__ = __webpack_require__(7);
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





/* harmony default export */ exports["default"] = {
    mixins: [__webpack_require__(6)],
    data: function data() {
        return {
            pageTitle: '运营支撑系统',
            btnconfig: {
                isgoback: 0,
                ismsg: 1,
                issearch: 1
            },
            footerconfig: {
                isorder: true
            },
            activeTab: 2,
            num: '',
            filter: '',
            page: 1,
            flag: true,
            scroll_load_loading: false,
            scroll_load_end: false,
            list: [],
            list1: [],
            list2: [],
            list3: [],
            searchInfo: [],
            searchFlag: false
        };
    },

    components: {
        HeaderBar: __WEBPACK_IMPORTED_MODULE_0__components_common_Header___default.a,
        FooterBar: __WEBPACK_IMPORTED_MODULE_1__components_common_Footer___default.a,
        DataLoading: __WEBPACK_IMPORTED_MODULE_2__components_common_DataLoading___default.a
    },
    created: function created() {
        this.fetchData();
        this.searchInfo = [{
            id: '01',
            value: '存件订单'
        }, {
            id: '02',
            value: '寄件订单'
        }, {
            id: '03',
            value: '丰巢寄件'
        }, {
            id: '04',
            value: '菜鸟寄件'
        }];
    },
    mounted: function mounted() {
        window.localStorage.setItem('task_id', '1');
        //设置搜索订单的ID
        window.localStorage.setItem('express_id', '01');
        window.addEventListener('scroll', this.handleScroll);
    },
    activated: function activated() {
        //开启<keep-alive>，会触发activated事件
        // this.resetScrollTop();
        window.addEventListener('scroll', this.handleScroll);
    },

    watch: {
        '$route': 'fetchData'
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        next();
    },
    beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
        this;
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        next();
    },
    destroyed: function destroyed() {
        this;
    },

    methods: {
        fetchData: function fetchData(index) {
            this.searchFlag = false;
            index > -1 ? this.activeTab = index : void 0;
            //getDataByTabIndex post ajax
            var that = this;
            that.page = 1;
            that.list = [];
            that.$refs.loading && that.$refs.loading.showLoading();
            setTimeout(function () {
                switch (index) {
                    case 0:
                        that.filter = 'all';
                        break;
                    case 1:
                        that.filter = 'create';
                        break;
                    case 2:
                        that.filter = 'handle';
                        break;
                    case 3:
                        that.filter = 'finish';
                        break;
                    default:
                        that.filter = 'handle';
                        break;
                }

                //获取待办工单数量
                axios.get(ajaxUrls.num).then(function (rsp) {
                    that.num = rsp.data.data.task_numbers;
                });
                that.$refs.loading && that.$refs.loading.showLoading();
                axios.get(ajaxUrls.tasks + 'filter=' + that.filter).then(function (rsp) {

                    for (var i = 0; i < rsp.data.data.length; i++) {
                        rsp.data.data[i].head = '//img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS';
                    }
                    that.list2 = rsp.data.data;
                    that.list = that.list2;

                    that.showLoadEnd();
                });
            }, 500);
        },
        isSearch: function isSearch() {
            this.searchFlag = !this.searchFlag;
        },
        goToSearch: function goToSearch(item) {
            localStorage.express_id = item.id;
            this.url('/search/');
        },
        goToMsg: function goToMsg() {
            this.url('/message');
        },
        addOne: function addOne() {
            this.url('/order/edit');
        },
        goInfo: function goInfo(_id) {

            localStorage.task_id = _id;
            this.flag = false;
            this.url('/order/' + _id);
        },
        handleScroll: function handleScroll() {
            //滚动加载监听事件
            if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 1) {
                this.loadTerminalData();
            }
        },
        loadTerminalData: function loadTerminalData() {
            var that = this,
                page = that.page;
            if (that.activeTab == '0') {
                if (this.flag) {
                    that.showLoading();
                    that.scroll_load_loading = true;
                    axios.get(ajaxUrls.tasks + 'page=' + page).then(function (rsp) {
                        var d = rsp.data;
                        that.hideLoading();
                        for (var i = 0; i < d.data.length; i++) {
                            d.data[i].head = '//img.aimoge.com/FlJ81rMZKlvsiYP-EXr3P492r4ZS';
                        }
                        that.scroll_load_loading = false;
                        that.list = that.list.concat(d.data);
                        that.page += 1;
                    });
                }
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
            this.$refs.loading && this.$refs.loading.showEnd();
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.gege-header .icsearch {\n    right: 5px;\n    left: auto;\n}\n\n", ""]);

// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.pt50[data-v-2d049b5d] {\n  padding-top: 43px;\n}\n.search[data-v-2d049b5d] {\n  background: #8c8c8c;\n  position: absolute;\n  right: 0px;\n  z-index: 9999;\n}\n.search .item[data-v-2d049b5d] {\n    height: 30px;\n    line-height: 30px;\n    margin: 0px 10px;\n    color: #fff;\n    box-sizing: border-box;\n    position: relative;\n}\n.search .item[data-v-2d049b5d]:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 1px;\n    background-color: #fff;\n    transform: scale(1, 0.5);\n}\n.nav[data-v-2d049b5d] {\n  background-color: #fff;\n  border-bottom: 1px #cfcfcf solid;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.nav .tab[data-v-2d049b5d] {\n    width: 25%;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n}\n.nav .tab[data-v-2d049b5d]:active {\n      background-color: #eee;\n}\n.nav .tab.active[data-v-2d049b5d] {\n      color: #07689f;\n}\n.nav .tab.active[data-v-2d049b5d]:after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        border: 1px #07689f solid;\n        width: 40px;\n        margin-left: -20px;\n}\n.add[data-v-2d049b5d] {\n  background: url(//img.aimoge.com/Fq2jHaTMAD8ds8JCcZjYEXHBAERN) 0 0 no-repeat;\n  background-size: 100%;\n  bottom: 108px;\n  right: 22px;\n  width: 50px;\n  height: 50px;\n  line-height: 131px;\n  color: #cfcfcf;\n  z-index: 300;\n}\n.add[data-v-2d049b5d]:active {\n    opacity: .6;\n}\n.item[data-v-2d049b5d] {\n  padding: 0 0 0 0;\n}\n.item[data-v-2d049b5d]:active {\n    background-color: #eee;\n}\n.item .div[data-v-2d049b5d] {\n    margin: 0 16px;\n    border-bottom: 1px #cfcfcf solid;\n    padding: 12px 0 12px 66px;\n}\n.item img[data-v-2d049b5d] {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    left: 16px;\n    top: 12px;\n}\n.item .title[data-v-2d049b5d] {\n    margin-bottom: 8px;\n}\n.item .user[data-v-2d049b5d] {\n    margin: 0 75px 0 0;\n    display: block;\n}\n.item .time[data-v-2d049b5d] {\n    right: 0;\n    top: 1px;\n}\n.item .line[data-v-2d049b5d] {\n    line-height: 18px;\n}\n.item .gray[data-v-2d049b5d] {\n    color: #908d8d;\n    margin-right: 5px;\n}\n.item .status[data-v-2d049b5d] {\n    color: #e4b358;\n    background-image: url(//img.aimoge.com/FsSDETnGMxWOFzvF15BLkL9an2M-);\n    background-size: 15px;\n    background-repeat: no-repeat;\n    background-position: 0 3px;\n    text-indent: 20px;\n    margin-top: 5px;\n}\n.item .status.s2[data-v-2d049b5d] {\n      color: #d75a48;\n      background-image: url(\"//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15\");\n}\n.item .status.s3[data-v-2d049b5d] {\n      color: #a4d748;\n      background-image: url(\"//img.aimoge.com/FoSwqghIf_uF504pPDsAEWTbBTJ_\");\n}\n", ""]);

// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.loadingArea[data-v-5c45997e] {\n  height: auto;\n  padding-top: 10px;\n}\n.loadingArea .top0[data-v-5c45997e] {\n    margin-top: 0;\n    padding-top: 0;\n}\n.loadingArea .mgLoadingWarp[data-v-5c45997e] {\n    margin-top: 0;\n}\n.mgLoadingWarp.block[data-v-5c45997e],\n.sysLoading.block[data-v-5c45997e] {\n  display: block;\n}\n.mgLoadingWarp.none[data-v-5c45997e],\n.sysLoading.none[data-v-5c45997e] {\n  display: none;\n}\n", ""]);

// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  "data-v-2d049b5d",
  /* cssModules */
  null
)
Component.options.__file = "D:\\moge\\zhichengxitong\\src\\pages\\Order.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Order.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d049b5d", Component.options)
  } else {
    hotAPI.reload("data-v-2d049b5d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('HeaderBar', {
    attrs: {
      "title": _vm.pageTitle,
      "btnconfig": _vm.btnconfig,
      "noborder": true
    },
    on: {
      "msgBtnCallback": _vm.goToMsg,
      "searchBtnCallback": _vm.isSearch
    }
  }), (_vm.searchFlag) ? _c('div', {
    staticClass: "search"
  }, _vm._l((_vm.searchInfo), function(d) {
    return _c('div', {
      staticClass: "item",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goToSearch(d)
        }
      }
    }, [_vm._v(_vm._s(d.value))])
  })) : _vm._e(), _c('div', {
    staticClass: "nav top44 fixed"
  }, [_c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 0
    },
    on: {
      "click": function($event) {
        _vm.fetchData(0)
      }
    }
  }, [_vm._m(0)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 1
    },
    on: {
      "click": function($event) {
        _vm.fetchData(1)
      }
    }
  }, [_vm._m(1)]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 2
    },
    on: {
      "click": function($event) {
        _vm.fetchData(2)
      }
    }
  }, [_c('div', [_c('label', [_vm._v("我的待办")]), _c('label', [_vm._v("(" + _vm._s(_vm.num) + ")")])])]), _c('div', {
    staticClass: "left tab rel",
    class: {
      active: _vm.activeTab == 3
    },
    on: {
      "click": function($event) {
        _vm.fetchData(3)
      }
    }
  }, [_vm._m(2)])]), _c('div', {
    staticClass: "mt44 pt50 pb60"
  }, [_vm._l((_vm.list), function(item) {
    return _c('div', {
      staticClass: "item rel",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          $event.preventDefault();
          _vm.goInfo(item.task_id)
        }
      }
    }, [_c('img', {
      staticClass: "abs",
      attrs: {
        "src": item.head
      }
    }), _c('div', {
      staticClass: "div"
    }, [_c('div', {
      staticClass: "title rel"
    }, [_c('label', {
      staticClass: "user ellipsis rel"
    }, [_vm._v(_vm._s(item.creator) + "发起的柜子运维工单")]), _c('label', {
      staticClass: "time f12 abs"
    }, [_vm._v(_vm._s(item.time))])]), _c('div', {
      staticClass: "line f12 rel"
    }, [_c('label', {
      staticClass: "gray rel"
    }, [_vm._v("终端名称:")]), _c('label', [_vm._v(_vm._s(item.terminal_name))])]), _c('div', {
      staticClass: "line f12 rel"
    }, [_c('label', {
      staticClass: "gray rel"
    }, [_vm._v("创建时间:")]), _c('label', [_vm._v(_vm._s(item.created_at))])]), (item.status_code == 1) ? _c('div', {
      staticClass: "status f12 s1 rel"
    }, [_vm._v(_vm._s(item.status))]) : _vm._e(), (item.status_code == 4) ? _c('div', {
      staticClass: "status f12 s2 rel"
    }, [_vm._v(_vm._s(item.status))]) : _vm._e(), (item.status_code == 2) ? _c('div', {
      staticClass: "status f12 s3 rel"
    }, [_vm._v(_vm._s(item.status))]) : _vm._e()])])
  }), _c('DataLoading', {
    ref: "loading"
  })], 2), _c('div', {
    staticClass: "add f12 center fixed",
    on: {
      "click": _vm.addOne
    }
  }, [_vm._v("创建")]), _c('FooterBar', {
    attrs: {
      "footerconfig": _vm.footerconfig
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("所有任务")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("我创建的")]), _c('label')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('label', [_vm._v("我的已办")]), _c('label')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d049b5d", module.exports)
  }
}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-loading"
  }, [_c('div', {
    staticClass: "loadingArea"
  }, [_c('div', {
    ref: "loading",
    staticClass: "mgLoadingWarp rel block"
  }, [_vm._m(0)]), _c('div', {
    ref: "empty",
    staticClass: "mgLoadingWarp rel none"
  }, [_c('span', [_vm._v("没有更多数据了...")])])]), _c('div', {
    ref: "emptyBox",
    staticClass: "empty-content rel"
  }, [_c('div', {
    staticClass: "empty-img"
  }), _c('p', [_vm._v(_vm._s(_vm.text || "暂无数据"))])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('i', {
    staticClass: "icon ion-loading-c rel"
  }), _c('label', [_vm._v("加载中...")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c45997e", module.exports)
  }
}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gege-header fixed",
    class: {
      noborder: _vm.noborder
    }
  }, [_c('div', {
    staticClass: "title center ellipsis f16 abs"
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.hideGoback ? false : true) ? _c('a', {
    staticClass: "icgoback",
    staticStyle: {
      "left": "0"
    },
    on: {
      "click": _vm.goback
    }
  }) : _vm._e(), (_vm.hasConfig ? _vm.btnconfig.ismsg : false) ? _c('a', {
    staticClass: "icclock",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('msgBtnCallback')
      }
    }
  }) : _vm._e(), (_vm.hasConfig ? _vm.btnconfig.issearch : false) ? _c('a', {
    staticClass: "icsearch",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('searchBtnCallback')
      }
    }
  }) : _vm._e(), (_vm.hasConfig ? _vm.btnconfig.isadd : false) ? _c('a', {
    staticClass: "icadd",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('addBtnCallback')
      }
    }
  }) : _vm._e(), (_vm.hasConfig ? _vm.btnconfig.isedit : false) ? _c('a', {
    staticClass: "icedit",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('editBtnCallback')
      }
    }
  }) : _vm._e(), (_vm.hasConfig ? _vm.btnconfig.isfinish : false) ? _c('a', {
    staticClass: "icfinish",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('finishBtnCallback')
      }
    }
  }) : _vm._e(), (_vm.hasConfig ? _vm.btnconfig.islogout : false) ? _c('a', {
    staticClass: "iclogout",
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.$emit('logoutBtnCallback')
      }
    }
  }, [_vm._v("退出")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68acf664", module.exports)
  }
}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer flex fixed"
  }, [_c('router-link', {
    staticClass: "flexmodel order",
    class: {
      active: _vm.footerconfig.isorder
    },
    attrs: {
      "to": "/",
      "replace": "replace"
    }
  }, [_vm._v("工单")]), _c('router-link', {
    staticClass: "flexmodel terminal",
    class: {
      active: _vm.footerconfig.isterminal
    },
    attrs: {
      "to": "/terminal",
      "replace": "replace"
    }
  }, [_vm._v("终端")]), _c('router-link', {
    staticClass: "flexmodel mine",
    class: {
      active: _vm.footerconfig.ismine
    },
    attrs: {
      "to": "/mine",
      "replace": "replace"
    }
  }, [_vm._v("我的")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ab11be48", module.exports)
  }
}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("35bab270", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d049b5d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Order.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d049b5d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Order.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d9b245a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d049b5d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Order.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2d049b5d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Order.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("34f9430e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5c45997e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataLoading.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5c45997e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataLoading.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ajaxUrls, _util) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(5);

__WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].beforeEach(function (to, from, next) {
    if (to.matched.some(function (to) {
        return to.meta.requiresAuth == undefined ? true : to.meta.requiresAuth;
    })) {
        axios.get(ajaxUrls.isLogin).then(function (rsp) {
            if (rsp.data.status != 0) {
                window.is_logged = false;
                next({
                    path: '/login',
                    query: {
                        next_url: decodeURIComponent(to.path)
                    }
                });
            } else {
                next();
            }
        });
    } else {
        next();
    }
});

//Vue.config.productionTip = true
//Vue.config.debug = true;
Vue.config.devtools = true;

//url handle
Vue.prototype.goback = function () {
    window.history.back();
};

Vue.prototype.url = function (path, query) {
    this.$router.push({
        path: path,
        query: query ? query : {}
    });
};

Vue.prototype.replaceUrl = function (path, query) {
    this.$router.replace({
        path: path,
        query: query ? query : {}
    });
};

Vue.prototype.emptyJson = function (json) {
    var flag = true;
    if (Object.keys(json).length) flag = false;
    return flag;
};

new Vue({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    template: '<div id="app">\n                    <keep-alive>\n                        <router-view class="view"></router-view>\n                    </keep-alive>\n                </div>',
    beforeCreate: function beforeCreate() {
        _util.initDomEvents();
    },
    mounted: function mounted() {
        _util.addLinkTouchEvent();
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(4)))

/***/ }
/******/ ]);