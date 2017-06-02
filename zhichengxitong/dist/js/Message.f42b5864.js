webpackJsonp([13],{

/***/ 106:
/***/ function(module, exports) {

throw new Error("Module build failed: \r\n<template lang=\"jade\">\r\n^\r\n      Invalid CSS after \"\": expected 1 selector or at-rule, was \"<<<<<<< HEAD\"\r\n      in D:\\moge\\zhichengxitong\\src\\pages\\Message.vue (line 1, column 1)");

/***/ },

/***/ 129:
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:\\moge\\zhichengxitong\\src\\pages\\Message.vue:24\n    22|         label 我的已办\r\n    23|         label\r\n  > 24| =======\r\n    25|     div.message\r\n    26|         HeaderBar(\r\n    27|             :title=\"pageTitle\",\r\n\nUnexpected token ===\n    at assertExpression (D:\\moge\\node_modules\\jade\\lib\\lexer.js:30:3)\n    at Object.code (D:\\moge\\node_modules\\jade\\lib\\lexer.js:584:23)\n    at Object.next (D:\\moge\\node_modules\\jade\\lib\\lexer.js:936:15)\n    at Object.lookahead (D:\\moge\\node_modules\\jade\\lib\\lexer.js:113:46)\n    at Parser.lookahead (D:\\moge\\node_modules\\jade\\lib\\parser.js:102:23)\n    at Parser.peek (D:\\moge\\node_modules\\jade\\lib\\parser.js:79:17)\n    at Parser.parse (D:\\moge\\node_modules\\jade\\lib\\parser.js:117:26)\n    at parse (D:\\moge\\node_modules\\jade\\lib\\index.js:104:21)\n    at Object.exports.compile (D:\\moge\\node_modules\\jade\\lib\\index.js:205:16)\n    at D:\\moge\\node_modules\\consolidate\\lib\\consolidate.js:336:58\n    at D:\\moge\\node_modules\\consolidate\\lib\\consolidate.js:144:5\n    at Promise._execute (D:\\moge\\node_modules\\bluebird\\js\\release\\debuggability.js:300:9)\n    at Promise._resolveFromExecutor (D:\\moge\\node_modules\\bluebird\\js\\release\\promise.js:483:18)\n    at new Promise (D:\\moge\\node_modules\\bluebird\\js\\release\\promise.js:79:10)\n    at promisify (D:\\moge\\node_modules\\consolidate\\lib\\consolidate.js:137:10)\n    at Function.exports.jade.render (D:\\moge\\node_modules\\consolidate\\lib\\consolidate.js:321:10)\n    at Object.module.exports (D:\\moge\\node_modules\\vue-loader\\lib\\template-compiler\\preprocessor.js:44:20)");

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2e9794b0", content, false);
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
__webpack_require__(148)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(129),
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

/***/ 80:
/***/ function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:/moge/zhichengxitong/src/pages/Message.vue: Unexpected token (132:0)\n\u001b[0m \u001b[90m 130 | \u001b[39m                pageTitle\u001b[33m:\u001b[39m \u001b[32m'消息中心'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 131 | \u001b[39m                bodyBg\u001b[33m:\u001b[39m \u001b[32m'gray'\u001b[39m\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 132 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m     | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 133 | \u001b[39m                pageTitle\u001b[33m:\u001b[39m \u001b[32m'消息中心'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 134 | \u001b[39m                activeTab\u001b[33m:\u001b[39m \u001b[35m2\u001b[39m\n \u001b[90m 135 | \u001b[39m            }\u001b[0m\n    at Parser.pp$5.raise (D:\\moge\\node_modules\\babylon\\lib\\index.js:4333:13)\n    at Parser.pp.unexpected (D:\\moge\\node_modules\\babylon\\lib\\index.js:1705:8)\n    at Parser.pp$3.parseIdentifier (D:\\moge\\node_modules\\babylon\\lib\\index.js:4211:10)\n    at Parser.pp$3.parsePropertyName (D:\\moge\\node_modules\\babylon\\lib\\index.js:4031:96)\n    at Parser.parsePropertyName (D:\\moge\\node_modules\\babylon\\lib\\index.js:5580:23)\n    at Parser.pp$3.parseObj (D:\\moge\\node_modules\\babylon\\lib\\index.js:3947:12)\n    at Parser.pp$3.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:3639:19)\n    at Parser.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:6591:22)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3414:19)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)\n    at Parser.pp$3.parseExprOps (D:\\moge\\node_modules\\babylon\\lib\\index.js:3324:19)\n    at Parser.pp$3.parseMaybeConditional (D:\\moge\\node_modules\\babylon\\lib\\index.js:3301:19)\n    at Parser.pp$3.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:3264:19)\n    at Parser.parseMaybeAssign (D:\\moge\\node_modules\\babylon\\lib\\index.js:5813:20)\n    at Parser.pp$3.parseExpression (D:\\moge\\node_modules\\babylon\\lib\\index.js:3226:19)\n    at Parser.pp$1.parseReturnStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:2024:26)\n    at Parser.pp$1.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:1794:19)\n    at Parser.parseStatement (D:\\moge\\node_modules\\babylon\\lib\\index.js:5302:22)\n    at Parser.pp$1.parseBlockBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:2212:21)\n    at Parser.pp$1.parseBlock (D:\\moge\\node_modules\\babylon\\lib\\index.js:2193:8)\n    at Parser.pp$3.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:4086:22)\n    at Parser.parseFunctionBody (D:\\moge\\node_modules\\babylon\\lib\\index.js:5289:20)\n    at Parser.pp$3.parseMethod (D:\\moge\\node_modules\\babylon\\lib\\index.js:4055:8)\n    at Parser.pp$3.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:3976:10)\n    at Parser.parseObjPropValue (D:\\moge\\node_modules\\babylon\\lib\\index.js:5604:13)\n    at Parser.pp$3.parseObj (D:\\moge\\node_modules\\babylon\\lib\\index.js:3950:10)\n    at Parser.pp$3.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:3639:19)\n    at Parser.parseExprAtom (D:\\moge\\node_modules\\babylon\\lib\\index.js:6591:22)\n    at Parser.pp$3.parseExprSubscripts (D:\\moge\\node_modules\\babylon\\lib\\index.js:3414:19)\n    at Parser.pp$3.parseMaybeUnary (D:\\moge\\node_modules\\babylon\\lib\\index.js:3394:19)");

/***/ }

});