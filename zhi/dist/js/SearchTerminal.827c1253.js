webpackJsonp([10],{114:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"create-order"},[t("HeaderBar",{attrs:{title:n.pageTitle}}),t("Search",{staticClass:"top44 fixed",attrs:{placeholder:"搜索终端名称"},on:{changeCallback:function(e){n.searchTerminal(1)}},model:{value:n.terminalName,callback:function(e){n.terminalName=e},expression:"terminalName"}}),t("div",{staticClass:"mt44 pt50 pb60"},[n._l(n.terminals,function(e){return t("div",{staticClass:"areas rel",on:{click:function(t){t.stopPropagation(),t.preventDefault(),n.goToInfo(e)}}},[t("div",{staticClass:"div"},[t("div",{staticClass:"title rel"},[n._v(n._s(e.terminal_name))]),t("div",{staticClass:"line rel"},[n._v(n._s(e.terminal_code))])])])}),t("DataLoading",{ref:"loading"})],2)],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},132:function(n,e,t){var o=t(95);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(4)("03619eae",o,!1)},41:function(n,e,t){t(132);var o=t(1)(t(84),t(114),"data-v-57410245",null);o.options.__file="D:\\moge\\zhichengxitong\\src\\pages\\SearchTerminal.vue",o.esModule&&Object.keys(o.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] SearchTerminal.vue: functional components are not supported with templates, they should use render functions."),n.exports=o.exports},44:function(n,e,t){"use strict";e.default={props:["placeholder"],methods:{setParentVar:function(n){this.$emit("input",n)}}}},47:function(n,e,t){e=n.exports=t(3)(),e.push([n.i,"\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 50px 0 50px;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n",""])},48:function(n,e,t){t(53);var o=t(1)(t(44),t(51),"data-v-2b720269",null);o.options.__file="D:\\moge\\zhichengxitong\\src\\components\\common\\Search.vue",o.esModule&&Object.keys(o.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions."),n.exports=o.exports},51:function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"search"},[t("div",{staticClass:"input rel"},[t("input",{staticClass:"rel",attrs:{type:"text",placeholder:n.placeholder},on:{input:[function(e){n.setParentVar(e.target.value)},function(e){n.$emit("changeCallback")}],focus:function(e){n.$emit("changeCallback1")},blur:function(e){n.$emit("changeCallback2")}}})])])},staticRenderFns:[]},n.exports.render._withStripped=!0},53:function(n,e,t){var o=t(47);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(4)("7e3e8802",o,!1)},84:function(n,e,t){"use strict";(function(n,o){var a=t(7),i=t.n(a),l=t(48),r=t.n(l),s=t(8),d=t.n(s);e.default={mixins:[t(6)],data:function(){return{pageTitle:"搜索终端名称",terminalName:"",page:1,pageList:[],terminals:[],scrollTop:0,scroll_load_loading:!1,scroll_load_end:!1,tn_page:1,tn_pageList:[],tn_terminals:[],tn_scrollTop:0,tn_scroll_load_loading:!1,tn_scroll_load_end:!1,tn_delay:null,userID:""}},components:{HeaderBar:i.a,Search:r.a,DataLoading:d.a},mounted:function(){window.canGoBack=!0,window.origin=null,this.loadTerminalData(),window.addEventListener("scroll",this.handleScroll)},activated:function(){window.canGoBack=!0,window.origin=null,window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){document.body.scrollTop+window.innerHeight>=document.body.scrollHeight-1&&this.loadTerminalData()},loadTerminalData:function(){var e=this,t=e.page,a=e.terminalName;return!e.scroll_load_loading&&!e.isLoading()&&(!e.scroll_load_end&&(!(e.pageList.indexOf(t)>-1)&&(e.showLoading(),e.scroll_load_loading=!0,void getAjaxRequest("order_cache",n.searchTerminal+a.trim()+"&page="+t,e.version,12e4,216e5,function(n){e.hideLoading(),0==n.status?(e.scroll_load_loading=!1,n.data&&n.data.length?(e.terminals=e.terminals.concat(n.data),e.page+=1,e.pageList=e.pageList.concat([t]),n.data.length<e.numPerPage&&(e.scroll_load_end=!0)):(e.scroll_load_end=!0,e.showLoadEnd())):n.msg&&o.showErrorTip(n.data.msg)},function(n){e.hideLoading(),o.showErrorTip("您的网络可能出了点问题:(")}))))},searchTerminal:function(e){var t=this,o=1,a=t.terminalName;return e&&(t.tn_page=1,t.tn_pageList=[],t.terminals=[],t.tn_scrollTop=0,t.tn_scroll_load_loading=!1,t.tn_scroll_load_end=!1,document.body.scrollTop=0),o=t.tn_page,a&&a.trim()?!t.tn_delay&&(!t.tn_scroll_load_loading&&!t.isLoading()&&(!t.tn_scroll_load_end&&(!(t.tn_pageList.indexOf(o)>-1)&&void(t.tn_delay=setTimeout(function(){window.clearTimeout(t.tn_delay),t.tn_delay=null,t.showLoading(),t.tn_scroll_load_loading=!0,axios.get(n.searchTerminal+a.trim()+"&page="+o).then(function(n){var a=n.data;t.hideLoading(),t.tn_scroll_load_loading=!1,0==a.status&&a.data&&a.data.length?(t.terminals=t.terminals.concat(a.data),t.tn_page+=1,t.tn_pageList=t.tn_pageList.concat([o]),a.data.length<t.numPerPage&&(t.tn_scroll_load_end=!0)):(t.tn_scroll_load_end=!0,e&&t.showLoadEnd())})},350))))):(t.resetScrollTop(1),!1)},resetScrollTop:function(n){n&&this.showLoadEnd(),this.terminalName&&this.terminalName.trim()?document.body.scrollTop=this.tn_scrollTop:2==this.tabIndex&&this.scrollTop?document.body.scrollTop=this.scrollTop:document.body.scrollTop=0},goToInfo:function(n){return localStorage.terminal_code=n.terminal_code,localStorage.terminal_name=n.terminal_name,this.$router.replace("/order/edit"),{}},isLoading:function(){this.$refs.loading&&this.$refs.loading.isLoading()},showLoading:function(){this.scroll_load_loading=!0,this.$refs.loading&&this.$refs.loading.showLoading()},hideLoading:function(){this.scroll_load_loading=!1,this.$refs.loading&&this.$refs.loading.hideLoading()},showLoadEnd:function(){this.hideLoading(),this.$refs.loading&&this.$refs.loading.showEnd()}}}}).call(e,t(2),t(0))},95:function(n,e,t){e=n.exports=t(3)(),e.push([n.i,"\n.empty[data-v-57410245] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-57410245] {\n  padding: 0 0 0 16px;\n  color: #4d4d4d;\n}\n.item[data-v-57410245]:active {\n    background-color: #eee;\n}\n.item .box[data-v-57410245] {\n    padding: 16px 0;\n    border-bottom: 1px #cfcfcf solid;\n}\n.areas[data-v-57410245] {\n  font-size: 16px;\n}\n.areas[data-v-57410245]:before {\n    margin-left: 16px;\n}\n.areas[data-v-57410245]:active {\n    background-color: #eee;\n}\n.areas .div[data-v-57410245] {\n    padding: 16px 0;\n    margin-left: 16px;\n}\n.areas .div .title[data-v-57410245] {\n      color: #323232;\n      margin-bottom: 3px;\n      padding-right: 16px;\n}\n.areas .div .line[data-v-57410245] {\n      color: #6e6e6e;\n      font-size: 14px;\n      padding-right: 16px;\n}\n.areas[data-v-57410245]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #979797;\n  transform: scale(1, 0.5);\n}\n",""])}});