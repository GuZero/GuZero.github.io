webpackJsonp([9],{116:function(n,t,a){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"create-order"},[a("HeaderBar",{attrs:{title:n.pageTitle,btnconfig:n.btnconfig}}),a("Search",{ref:"searchBar",staticClass:"fixed top44",attrs:{placeholder:"搜索终端名称"},on:{searchInfo:function(t){n.searchTerminal(1)},changeCallback1:function(t){n.isFlag1()},changeCallback2:function(t){n.isFlag2()}},model:{value:n.terminalName,callback:function(t){n.terminalName=t},expression:"terminalName"}}),n.terminalName?n._e():a("div",{staticClass:"nav fixed"},[a("div",{staticClass:"tag none rel",class:{active:n.tabActive0},on:{click:function(t){n.loadAreas(n.tab0,t)}}},[n._v(n._s(n.tab0.ar_name))]),n.tabData1?a("div",{staticClass:"tag rel",class:{active:n.tabActive1},on:{click:function(t){n.loadCitys(n.tab1,t)}}},[n._v(n._s(n.tab1.ar_name))]):n._e(),n.tabData2?a("div",{staticClass:"tag rel",on:{click:function(t){n.loadTerminals(n.tab2,t)}}},[n._v(n._s(n.tab2.ar_name))]):n._e()]),n.terminalName?n._e():a("div",{staticClass:"mt44 pb60 main"},[n._l(n.areas,function(t){return 0==n.tabIndex?a("div",{staticClass:"areas rel arrow",on:{click:function(a){n.loadCitys(t)}}},[a("div",{staticClass:"div"},[n._v(n._s(t.ar_name)+"("+n._s(t.terminal_number)+")")])]):n._e()}),n._l(n.citys,function(t){return 1==n.tabIndex?a("div",{staticClass:"areas rel arrow",on:{click:function(a){n.loadTerminals(t)}}},[a("div",{staticClass:"div"},[n._v(n._s(t.city_name)+"("+n._s(t.terminal_number)+")")])]):n._e()}),2==n.tabIndex?a("div",n._l(n.terminals,function(t){return a("div",{staticClass:"areas rel",on:{click:function(a){a.stopPropagation(),a.preventDefault(),n.goToInfo(t)}}},[a("div",{staticClass:"div"},[a("div",{staticClass:"title rel"},[n._v(n._s(t.terminal_name))]),a("div",{staticClass:"line rel"},[n._v(n._s(t.region)+"，"+n._s(t.place)+"，"+n._s(t.terminal_code))])])])})):n._e(),n.terminalName?a("DataLoading",{ref:"loading"}):n._e()],2),n.terminalName?a("div",{staticClass:"nav fixed"},[a("div",{staticClass:"tag none rel"},[n._v("全国")])]):n._e(),n.terminalName?a("div",{staticClass:"mt44 pb60 main"},[n._l(n.tn_terminals,function(t){return a("div",{staticClass:"areas rel",on:{click:function(a){a.stopPropagation(),a.preventDefault(),n.goToInfo(t)}}},[a("div",{staticClass:"div"},[a("div",{staticClass:"title rel"},[n._v(n._s(t.terminal_name))]),a("div",{staticClass:"line rel"},[n._v(n._s(t.region)+"，"+n._s(t.place)+"，"+n._s(t.terminal_code))])])])}),n.isSearch?a("DataLoading",{ref:"loading"}):n._e()],2):n._e(),a("FooterBar",{staticClass:"fixed",class:{dis:!n.flag},attrs:{footerconfig:n.footerconfig}})],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},134:function(n,t,a){var e=a(97);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a(4)("270eacf1",e,!1)},42:function(n,t,a){a(134);var e=a(1)(a(85),a(116),"data-v-6351f186",null);e.options.__file="D:\\moge\\zhichengxitong\\src\\pages\\Terminal.vue",e.esModule&&Object.keys(e.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] Terminal.vue: functional components are not supported with templates, they should use render functions."),n.exports=e.exports},44:function(n,t,a){"use strict";t.default={props:["placeholder"],methods:{setParentVar:function(n){this.$emit("input",n)}}}},47:function(n,t,a){t=n.exports=a(3)(),t.push([n.i,"\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n}\n.btn[data-v-2b720269] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 0 9px;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 30px 0 30px;\n  width: 60%;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n",""])},48:function(n,t,a){a(53);var e=a(1)(a(44),a(51),"data-v-2b720269",null);e.options.__file="D:\\moge\\zhichengxitong\\src\\components\\common\\Search.vue",e.esModule&&Object.keys(e.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions."),n.exports=e.exports},51:function(n,t,a){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"search"},[a("div",{staticClass:"input rel"},[a("input",{staticClass:"rel",attrs:{type:"text",placeholder:n.placeholder},on:{input:function(t){n.setParentVar(t.target.value)},focus:function(t){n.$emit("changeCallback1")},blur:function(t){n.$emit("changeCallback2")}}})]),a("div",{staticClass:"btn",on:{click:function(t){n.$emit("searchInfo")}}},[n._v("搜索     ")])])},staticRenderFns:[]},n.exports.render._withStripped=!0},53:function(n,t,a){var e=a(47);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a(4)("7e3e8802",e,!1)},85:function(n,t,a){"use strict";(function(n,e){var i=a(7),o=a.n(i),s=a(9),r=a.n(s),l=a(48),d=a.n(l),c=a(8),f=a.n(c);t.default={mixins:[a(6)],data:function(){return{pageTitle:"终端列表",btnconfig:{isgoback:0},footerconfig:{isterminal:!0},version:"1",terminalName:"",tabIndex:0,tab0:{ar_id:"",ar_name:"全国"},tab1:{},tab2:{},areas:[],citys:[],ar_id:"",city_id:"",numPerPage:16,page:1,pageList:[],terminals:[],scrollTop:0,scroll_load_loading:!1,scroll_load_end:!1,tn_page:1,tn_pageList:[],tn_terminals:[],tn_scrollTop:0,tn_scroll_load_loading:!1,tn_scroll_load_end:!1,tn_delay:null,flag:!0,isSearch:!1}},created:function(){window.canGoBack=!1,window.origin=null},components:{HeaderBar:o.a,FooterBar:r.a,Search:d.a,DataLoading:f.a},computed:{tabActive0:function(){return 1==this.tabIndex||2==this.tabIndex},tabActive1:function(){return 2==this.tabIndex},tabData1:function(){return!this.emptyJson(this.tab1)},tabData2:function(){return!this.emptyJson(this.tab2)}},watch:{terminalName:function(n){n.trim()?this.scrollTop=this.scrollTop||document.body.scrollTop:(this.tn_scrollTop=0,this.isSearch=!1)}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.resetScrollTop(),this.loadAreaData(),this.hideLoading()},activated:function(){window.canGoBack=!1,window.origin=null,this.resetScrollTop(),window.addEventListener("scroll",this.handleScroll)},beforeRouteLeave:function(n,t,a){var e=document.body.scrollTop;this.scrollTop=this.scrollTop||e,this.tn_scrollTop=this.tn_scrollTop||e,window.removeEventListener("scroll",this.handleScroll),a()},methods:{goToInfo:function(n){this.url("/terminal/"+n.terminal_id)},resetScrollTop:function(n){n&&this.showLoadEnd(),this.terminalName&&this.terminalName.trim()?document.body.scrollTop=this.tn_scrollTop:2==this.tabIndex&&this.scrollTop?document.body.scrollTop=this.scrollTop:document.body.scrollTop=0},tabDisabled:function(n){var t=!1;return n&&n.target.className.indexOf("active")<0&&n.target.className.indexOf("div")<0&&(t=!0),t},setNavState:function(n,t){var a=!!t;a?(n.ar_name&&""==n.ar_id&&(this.tabIndex=0,this.tab1={},this.tab2={}),n.ar_name&&""!=n.ar_id&&(this.tabIndex=1,this.tab1={ar_id:n.ar_id,ar_name:n.ar_name},this.tab2={})):(n.ar_name&&(this.tabIndex=1,this.tab1={ar_id:n.ar_id,ar_name:n.ar_name}),n.city_name&&(this.tabIndex=2,this.tab2={city_id:n.city_id,ar_name:n.city_name}))},resetDefaultConfig:function(){this.page=1,this.pageList=[],this.terminals=[],this.scrollTop=0,this.scroll_load_end=!1,this.scroll_load_loading=!1},loadAreas:function(n,t){return!this.tabDisabled(t)&&(this.setNavState(n,t),this.resetDefaultConfig(),void this.loadAreaData())},loadCitys:function(t,a){var i=this;return!i.tabDisabled(a)&&(i.setNavState(t,a),i.ar_id!=t.ar_id&&(i.ar_id=t.ar_id,i.resetDefaultConfig(),i.citys=[],i.showLoading(),void getAjaxRequest("terminal_cache",n.citys+t.ar_id,i.version,12e4,216e5,function(n){i.hideLoading(),0==n.status?i.citys=n.data:n.msg&&e.showErrorTip(n.msg)},function(n){i.hideLoading(),e.showErrorTip("您的网络可能出了点问题:(")})))},loadTerminals:function(n,t){if(this.tabDisabled(t))return!1;this.setNavState(n,t);var a=this;a.city_id=n.city_id,a.resetDefaultConfig(),a.loadTerminalData(!0)},loadAreaData:function(){var t=this;t.areas&&!t.areas.length&&(t.showLoading(),getAjaxRequest("terminal_cache",n.areas,t.version,12e4,216e5,function(n){t.hideLoading(),0==n.status?t.areas=n.data:n.msg&&e.showErrorTip(n.msg)},function(n){t.hideLoading(),e.showErrorTip("您的网络可能出了点问题:(")}))},loadTerminalData:function(t){var a=this,i=a.page;return!a.scroll_load_loading&&!a.isLoading()&&(!a.scroll_load_end&&(!(a.pageList.indexOf(i)>-1)&&(a.showLoading(),a.scroll_load_loading=!0,void getAjaxRequest("terminal_cache",n.terminals+a.ar_id+"/citys/"+a.city_id+"?page="+i,a.version,12e4,216e5,function(n){a.hideLoading(),a.scroll_load_loading=!1,0==n.status&&n.data&&n.data.length?(a.terminals=a.terminals.concat(n.data),a.page+=1,a.pageList=a.pageList.concat([i]),n.data.length<a.numPerPage&&(a.scroll_load_end=!0)):(a.scroll_load_end=!0,t&&a.showLoadEnd(),0!=n.status&&n.msg&&e.showErrorTip(n.msg))},function(n){a.hideLoading(),e.showErrorTip("您的网络可能出了点问题:(")}))))},searchTerminal:function(t){this.isSearch=!0;var a=this,i=1,o=a.terminalName;return t&&(a.tn_page=1,a.tn_pageList=[],a.tn_terminals=[],a.tn_scrollTop=0,a.tn_scroll_load_loading=!1,a.tn_scroll_load_end=!1,document.body.scrollTop=0),i=a.tn_page,o&&o.trim()?!a.tn_delay&&(!a.tn_scroll_load_loading&&!a.isLoading()&&(!a.tn_scroll_load_end&&(!(a.tn_pageList.indexOf(i)>-1)&&void(a.tn_delay=setTimeout(function(){window.clearTimeout(a.tn_delay),a.tn_delay=null,a.showLoading(),a.tn_scroll_load_loading=!0,getAjaxRequest("terminal_cache",n.searchTerminal+o.trim()+"&page="+i,a.version,12e4,216e5,function(n){a.hideLoading(),a.tn_scroll_load_loading=!1,0==n.status&&n.data&&n.data.length?(a.tn_terminals=a.tn_terminals.concat(n.data),a.tn_page+=1,a.tn_pageList=a.tn_pageList.concat([i]),n.length<a.numPerPage&&(a.tn_scroll_load_end=!0)):(a.tn_scroll_load_end=!0,t&&a.showLoadEnd(),0!=n.status&&n.msg&&e.showErrorTip(n.msg))},function(n){a.hideLoading(),e.showErrorTip("您的网络可能出了点问题:(")})},350))))):(a.resetScrollTop(1),!1)},handleScroll:function(){if(document.body.scrollTop+window.innerHeight>=document.body.scrollHeight-1)if(this.terminalName&&this.terminalName.trim()){if(this.tn_scroll_load_end&&this.$refs.loading)return this.showLoadEnd();this.searchTerminal()}else{if(this.scroll_load_end&&this.$refs.loading)return this.showLoadEnd();2==this.tabIndex&&this.loadTerminalData()}this.terminalName&&this.terminalName.trim()?this.tn_scrollTop=document.body.scrollTop:2==this.tabIndex&&(this.scrollTop=document.body.scrollTop+2)},isFlag1:function(){e.isIOS()&&(this.flag=!1)},isFlag2:function(){e.isIOS()&&(this.flag=!0)},isLoading:function(){this.$refs.loading&&this.$refs.loading.isLoading()},showLoading:function(){this.scroll_load_loading=!0,this.$refs.loading&&this.$refs.loading.showLoading()},hideLoading:function(){this.scroll_load_loading=!1,this.$refs.loading&&this.$refs.loading.hideLoading()},showLoadEnd:function(){this.hideLoading(),this.$refs.loading&&this.$refs.loading.showEnd()}}}}).call(t,a(2),a(0))},97:function(n,t,a){t=n.exports=a(3)(),t.push([n.i,"\n.pt50[data-v-6351f186] {\n  padding-top: 100px;\n}\n.main[data-v-6351f186] {\n  width: 100%;\n  height: 62%;\n  position: absolute;\n  overflow-y: scroll;\n  top: 100px;\n  -webkit-overflow-scrolling: touch;\n}\n.arrow[data-v-6351f186]:after {\n  content: '';\n  background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n  background-size: 100% auto;\n  display: block;\n  height: 28px;\n  width: 28px;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  margin-top: -14px;\n}\n.areas[data-v-6351f186]:before,\n.nav[data-v-6351f186]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background-color: #979797;\n  transform: scale(1, 0.5);\n}\n.nav[data-v-6351f186] {\n  background-color: #fff;\n  color: #4d4d4d;\n  font-size: 16px;\n  overflow: hidden;\n  padding: 16px;\n  width: 100%;\n  left: 0;\n  top: 90px;\n  z-index: 300;\n  box-sizing: border-box;\n}\n.nav .tag[data-v-6351f186] {\n    float: left;\n    padding-left: 32px;\n    margin-left: 8px;\n}\n.nav .tag.active[data-v-6351f186] {\n      color: #07689f;\n}\n.nav .tag[data-v-6351f186]:before {\n      content: '';\n      display: block;\n      position: absolute;\n      background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n      background-size: 100% auto;\n      height: 26px;\n      width: 26px;\n      left: 0;\n      top: 50%;\n      margin-top: -13px;\n}\n.nav .tag.none[data-v-6351f186] {\n      margin: 0;\n      padding-left: 0;\n}\n.nav .tag.none[data-v-6351f186]:before {\n      display: none;\n}\n.areas[data-v-6351f186] {\n  font-size: 16px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.areas[data-v-6351f186]:before {\n    margin-left: 16px;\n}\n.areas[data-v-6351f186]:active {\n    background-color: #eee;\n}\n.areas .div[data-v-6351f186] {\n    padding: 16px 0;\n    margin-left: 16px;\n}\n.areas .div .title[data-v-6351f186] {\n      color: #323232;\n      margin-bottom: 3px;\n      padding-right: 16px;\n}\n.areas .div .line[data-v-6351f186] {\n      color: #6e6e6e;\n      font-size: 14px;\n      padding-right: 16px;\n}\n.dis[data-v-6351f186] {\n  display: none;\n}\n",""])}});