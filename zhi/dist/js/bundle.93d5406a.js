!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,o,a){for(var r,s,c=0,l=[];c<t.length;c++)s=t[c],i[s]&&l.push(i[s][0]),i[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(n&&n(t,o,a);l.length;)l.shift()()};var o={},i={17:0};return t.e=function(e){function n(){a.onerror=a.onload=null,clearTimeout(r);var t=i[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),i[e]=void 0)}if(0===i[e])return Promise.resolve();if(i[e])return i[e][2];var o=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,a.src=t.p+""+({0:"OrderInfo",1:"OrderCreate",2:"EquipmentInfo",3:"Transmit",4:"Allocation",5:"OrderClose",6:"Mine",7:"EditPassword",8:"BasicInfo",9:"Terminal",10:"SearchTerminal",11:"Search",12:"Message",13:"Login",14:"Journal",15:"EditEquipment",16:"AdInfo"}[e]||e)+"."+{0:"771758c5",1:"49659ec2",2:"3178c650",3:"fdae94d4",4:"691c10f3",5:"a326602e",6:"6fc43960",7:"ae65c396",8:"04a8dabe",9:"1ffbb598",10:"4296af66",11:"88cb6ac3",12:"bc19e64a",13:"00c8bea8",14:"fd226251",15:"011a3463",16:"2af21941"}[e]+".js";var r=setTimeout(n,12e4);a.onerror=a.onload=n,o.appendChild(a);var s=new Promise(function(t,n){i[e]=[t,n]});return i[e][2]=s},t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/js/",t.oe=function(e){throw console.error(e),e},t(t.s=26)}([function(e,t){e.exports={initDomEvents:function(){String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},Element.prototype.hasClassName=function(e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(this.className)},Element.prototype.addClassName=function(e){return this.hasClassName(e)||(this.className=[this.className,e].join(" ")),this},Element.prototype.removeClassName=function(e){if(this.hasClassName(e)){var t=this.className;this.className=t.replace(new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)","g")," ")}return this},Element.prototype.toggleClassName=function(e){return this[this.hasClassName(e)?"removeClassName":"addClassName"](e),this},Element.prototype.show=function(){this.style.display="block"},Element.prototype.hide=function(){this.style.display="none"},Element.prototype.toggle=function(){var e=this.style.display;this.style.display="block"==e?"none":"block"}},initScroll:function(){document.body.scrollTop=window.scrollTop||0},scrollToTop:function(){document.body.scrollTop=0},goback:function(){var e=!!window.history.state,t=window.location.href.indexOf("/topic/")>-1,n=location.href.split("forum")[0]+"forum";e?router.go(-1):t?(window.location.href="/forum",window.history.replaceState(null,"",n)):window.history.back()},getById:function(e){return e?document.getElementById(e):null},showErrorTip:function(e){if(!e)return!1;var t=this.getById("mgAlert");t.style.top="35%",t.setAttribute("class","mgAlert center fixed f14 mgAlert-error showAlert"),t.innerHTML=e,window.errorTimer&&(clearTimeout(window.errorTimer),window.errorTimer=null),window.errorTimer=setTimeout(function(){t.setAttribute("class","mgAlert center fixed f14"),setTimeout(function(){t.style.top="-35%"},300)},2e3)},showSuccessTip:function(e){if(!e)return!1;var t=this.getById("mgAlert");t.style.top="35%",t.setAttribute("class","mgAlert center fixed f14 mgAlert-success showAlert"),t.innerHTML=e,setTimeout(function(){t.setAttribute("class","mgAlert center fixed f14"),setTimeout(function(){t.style.top="-35%"},300)},2500)},getDeviceInfo:function(){var e=window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(")+1);e=e.substring(0,e.indexOf(")"));var t={os:"",osver:"",phonemodel:"",udid:window.uid||"",app_name:"gegewap",network:navigator.connection?navigator.connection.type:"",appver:""};return 0==e.indexOf("iPhone")?(t.os="ios",t.osver=e.substring(e.indexOf("_")-1,e.indexOf("_")+2).replace("_","."),t.phonemodel="iPhone"):e.indexOf("Android")>0&&(t.os="Android",e=e.substring(e.indexOf("Android")),e=e.split("; "),t.osver=e[0].split(" ")[1],t.phonemodel=e[e.length-1]),this.isWeixin()&&(window.wxid&&(t.weixin_id=window.wxid),window.open_id&&(t.open_id=window.open_id)),t},isWeixin:function(){return window.navigator.userAgent.indexOf("MicroMessenger")>0},isApp:function(){return window.navigator.userAgent.indexOf("gegemis")>=0},isIOS:function(){var e=window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(")+1);return e=e.substring(0,e.indexOf(")")),e.indexOf("iPhone")>=0},isAndriod:function(){var e=window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("(")+1);return e=e.substring(0,e.indexOf(")")),e.indexOf("Android")>=0},addLinkTouchEvent:function(){setTimeout(function(){for(var e=document.getElementsByTagName("a"),t=0;t<e.length;t++)e[t].addEventListener("touchstart",function(){},!1)},500)},getImageInfo:function(e){if(!e)return null;var t=e.substr(0,28),n=e.substr(29).split("_"),o=(n[0]||"0x0").split("x"),i=(n[0]||"0.").split(".");return{img:e,img_id:t,src:window.config.IMG+t,width:parseInt(o[0]||0),height:parseInt(o[1]||0),size:parseInt(i[0]||0),mime_type:i[1]||""}},getImageStyle:function(e,t){return e=parseInt(e),e<=60?"/style90x90.png":e<=100?"/style150.png":e<=160?"/style220.png":e<=230?"/style300.png":e<=320?"/style480.png":"/style620.png"},getImageRealSize:function(e,t,n){return n=n?n:window.innerWidth,{height:n*t/e,width:n}},showMgLoadingWarp:function(){this.getById("mgLoadingWarp").show()},hideMgLoadingWarp:function(){this.getById("mgLoadingWarp").hide()},showSysLoading:function(){this.getById("sysLoading").show()},hideSysLoading:function(){this.getById("sysLoading").hide()},changePageTitle:function(e){document.title=e},createXMLHttpRequest:function(){var e=null;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=new XMLHttpRequest}}return e},sendAjaxRequest:function(e,t,n,o){function i(){if(4==a.readyState&&200==a.status){var e=a.responseText,t=null;t=JSON.parse(e),o(t)}}var a=this.createXMLHttpRequest();a.onreadystatechange=i,a.open(t,e,!0),a.withCredentials=!0,a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),"GET"==t.toUpperCase()?a.send():a.send(n)}}},function(e,t){e.exports=function(e,t,n,o){var i,a=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,a=e.default);var s="function"==typeof a?a.options:a;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var c=Object.create(s.computed||null);Object.keys(o).forEach(function(e){var t=o[e];c[e]=function(){return t}}),s.computed=c}return{esModule:i,exports:a,options:s}}},function(e,t){e.exports={login:window.config.API+"/user/login",logout:window.config.API+"/user/logout",isLogin:window.config.API+"/user/permissions",editPass:window.config.API+"/v1/users/password",areas:window.config.API+"/v1/terminals/ar",citys:window.config.API+"/v1/terminals/ar/",terminals:window.config.API+"/v1/terminals/ar/",basic:window.config.API+"/v1/terminals/",searchTerminal:window.config.API+"/v1/terminals?terminal_name=",tasks:window.config.API+"/v1/tasks?",task:window.config.API+"/v1/tasks",num:window.config.API+"/v1/tasks/my",orderinfo:window.config.API+"/v1/tasks/",option:window.config.API+"/v1/tasks/option",fault:window.config.API+"/v1/tasks/troubles?appearance_id=",user:window.config.API+"/v1/users?name=",search1:window.config.API+"/v1/delivery/orders?search=",search2:window.config.API+"/v1/deposite/orders?search=",search3:window.config.API+"/v1/fengchao/orders?search=",search4:window.config.API+"/v1/cainiao/orders?search=",users:window.config.API+"/v1/users",messages:window.config.API+"/v1/messages/"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(a(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(a(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:r}}}}function i(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function a(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return g;o.parentNode.removeChild(o)}if(m){var a=p++;o=f||(f=i()),t=r.bind(null,o,a,!1),n=r.bind(null,o,a,!0)}else o=i(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function r(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function s(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(25),d={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=l(e,t);return o(i),function(t){for(var n=[],a=0;a<i.length;a++){var r=i[a],s=d[r.id];s.refs--,n.push(s)}t?(i=l(e,t),o(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";var o=n(17),i=n.n(o),a=function(e){return n.e(13).catch(function(e){n.oe(e)}).then(function(){return e(n(34))}.bind(null,n))},r=function(e){return n.e(11).catch(function(e){n.oe(e)}).then(function(){return e(n(40))}.bind(null,n))},s=function(e){return n.e(6).catch(function(e){n.oe(e)}).then(function(){return e(n(36))}.bind(null,n))},c=function(e){return n.e(0).catch(function(e){n.oe(e)}).then(function(){return e(n(39))}.bind(null,n))},l=function(e){return n.e(1).catch(function(e){n.oe(e)}).then(function(){return e(n(38))}.bind(null,n))},d=function(e){return n.e(5).catch(function(e){n.oe(e)}).then(function(){return e(n(37))}.bind(null,n))},u=function(e){return n.e(7).catch(function(e){n.oe(e)}).then(function(){return e(n(31))}.bind(null,n))},f=function(e){return n.e(3).catch(function(e){n.oe(e)}).then(function(){return e(n(43))}.bind(null,n))},p=function(e){return n.e(9).catch(function(e){n.oe(e)}).then(function(){return e(n(42))}.bind(null,n))},h=function(e){return n.e(12).catch(function(e){n.oe(e)}).then(function(){return e(n(35))}.bind(null,n))},g=function(e){return n.e(16).catch(function(e){n.oe(e)}).then(function(){return e(n(27))}.bind(null,n))},m=function(e){return n.e(2).catch(function(e){n.oe(e)}).then(function(){return e(n(32))}.bind(null,n))},v=function(e){return n.e(14).catch(function(e){n.oe(e)}).then(function(){return e(n(33))}.bind(null,n))},b=function(e){return n.e(8).catch(function(e){n.oe(e)}).then(function(){return e(n(29))}.bind(null,n))},w=function(e){return n.e(10).catch(function(e){n.oe(e)}).then(function(){return e(n(41))}.bind(null,n))},x=function(e){return n.e(4).catch(function(e){n.oe(e)}).then(function(){return e(n(28))}.bind(null,n))},_=function(e){return n.e(15).catch(function(e){n.oe(e)}).then(function(){return e(n(30))}.bind(null,n))};Vue.use(VueRouter),t.a=new VueRouter({routes:[{path:"/",name:"Order",component:i.a},{path:"/search",name:"Search",component:r},{path:"/message",name:"Message",component:h},{path:"/order/edit",name:"OrderCreate",component:l},{path:"/order/close",name:"OrderClose",component:d},{path:"/order/:id",name:"OrderInfo",component:c},{path:"/transmit",name:"Transmit",component:f},{path:"/terminal",name:"Terminal",component:p},{path:"/terminal/:code",name:"BasicInfo",component:b},{path:"/terminal/:code/equipmentinfo",name:"EquipmentInfo",component:m},{path:"/terminal/:code/journal",name:"Journal",component:v},{path:"/terminal/:code/adinfo",name:"AdInfo",component:g},{path:"/terminal/:code/allocation",name:"Allocation",component:x},{path:"/terminal/:code/equipmentinfo/edit",name:"EditEquipment",component:_},{path:"/mine",name:"Mine",component:s},{path:"/mine/password",name:"EditPassword",component:u},{path:"/login",name:"Login",component:a,meta:{requiresAuth:!1}},{path:"/searchterminal",name:"SearchTerminal",component:w}]})},function(e,t,n){(function(t){e.exports={activated:function(){t.changePageTitle(this.pageTitle||""),document.body.addClassName(this.bodyBg||"")},mounted:function(){document.body.addClassName(this.bodyBg||"")},beforeRouteLeave:function(e,t,n){document.body.removeClassName(this.bodyBg||""),n()}}}).call(t,n(0))},function(e,t,n){var o=n(1)(n(12),n(20),null,null);o.options.__file="D:\\moge\\zhichengxitong\\src\\components\\common\\Header.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){n(24);var o=n(1)(n(10),n(19),"data-v-5c45997e",null);o.options.__file="D:\\moge\\zhichengxitong\\src\\components\\common\\DataLoading.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] DataLoading.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){var o=n(1)(n(11),n(21),null,null);o.options.__file="D:\\moge\\zhichengxitong\\src\\components\\common\\Footer.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){"use strict";t.default={props:["text"],methods:{showLoading:function(){var e=this.$refs.loading,t=this.$refs.empty;e.removeClassName("none").addClassName("block"),t.removeClassName("block").addClassName("none")},hideLoading:function(){var e=this.$refs.loading,t=this.$refs.empty;e.removeClassName("block").addClassName("none"),t.removeClassName("block").addClassName("none")},showEnd:function(){var e=this.$refs.loading,t=this.$refs.empty;e.removeClassName("block").addClassName("none"),t.removeClassName("none").addClassName("block")},isLoading:function(){var e=!1,t=this.$refs.loading;return t&&"block"==t.style.display&&(e=!0),e}}}},function(e,t,n){"use strict";t.default={props:["footerconfig"]}},function(e,t,n){"use strict";(function(e,n){t.default={data:function(){var e=this.$props.btnconfig,t=e&&Object.keys(e).length,n=t&&(e.isgoback===!1||e.isgoback<=0),o=t&&e.ismsg?e.ismsg:null;return{hasConfig:t,version:"1",hideGoback:n,unreadNum:0,ismsg:o}},created:function(){this.ismsg&&this.fetchData()},methods:{fetchData:function(){var t=this;getAjaxRequest("message_cache",e.messages+"unread",t.version,2e4,216e5,function(e){n.hideSysLoading(),0==e.status?t.unreadNum=e.data.numbers:e.msg&&n.showErrorTip(e.msg)},function(e){})}},props:["title","btnconfig","noborder","origin"]}}).call(t,n(2),n(0))},function(e,t,n){"use strict";(function(e,o){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,r=n(7),s=n.n(r),c=n(9),l=n.n(c),d=n(8),u=n.n(d);t.default=a={mixins:[n(6)],data:function(){return{pageTitle:"运营支撑系统",bodyBg:"white",btnconfig:{isgoback:0,ismsg:1,issearch:1},footerconfig:{isorder:!0},numPerPage:16,activeTab:2,num:"",filter:"",page:1,isFirst:!0,scroll_load_loading:!1,scroll_load_end:!1,list:[],list0:[],list1:[],list2:[],list3:[],searchInfo:[],searchFlag:!1}},components:{HeaderBar:s.a,FooterBar:l.a,DataLoading:u.a},mounted:function(){this.switchTab(2),window.localStorage.setItem("task_id","01"),window.canGoBack=!1,window.origin=null,this.searchInfo=[{id:"01",value:"存件订单"},{id:"02",value:"寄存订单"},{id:"03",value:"丰巢寄件"},{id:"04",value:"菜鸟寄件"}],window.localStorage.setItem("express_id","01"),window.localStorage.setItem("tab_id",2),window.addEventListener("scroll",this.handleScroll)},activated:function(){window.canGoBack=!1,window.origin=null,window.addEventListener("scroll",this.handleScroll)},beforeRouteLeave:function(e,t,n){var o=document.body.scrollTop;this.scrollTop=this.scrollTop||o,this.tn_scrollTop=this.tn_scrollTop||o,window.removeEventListener("scroll",this.handleScroll),n()},watch:{$route:function(){if("/"==this.$route.path){var e=parseInt(localStorage.tab_id);this.switchTab(e)}}},beforeRouteEnter:function(e,t,n){n()},beforeRouteUpdate:function(e,t,n){}},i(a,"beforeRouteLeave",function(e,t,n){"/message"==e.path&&window.localStorage.setItem("homeToMessage","1"),n()}),i(a,"destroyed",function(){}),i(a,"methods",{fetchData:function(){var t=this;return!t.scroll_load_loading&&(!t.scroll_load_end&&(1==t.page&&(document.body.scrollTop=0),t.showLoading(),getAjaxRequest("order_cache",e.num,t.version,1e3,18e5,function(e){0==e.status?t.num=e.data.task_numbers:e.msg&&o.showErrorTip(e.data.msg)},function(e){o.showErrorTip("您的网络可能出了点问题:(")}),t.scroll_load_loading=!0,void getAjaxRequest("order_cache",e.tasks+"filter="+t.filter+"&page="+t.page,t.version,1e3,18e5,function(e){if(t.hideLoading(),0==e.status){for(var n=0;n<e.data.length;n++)e.data[n].head="//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8";switch(t.activeTab){case 0:t.list0=t.list0.concat(e.data),t.list=t.list0;break;case 1:t.list1=t.list1.concat(e.data),t.list=t.list1;break;case 2:t.list2=t.list2.concat(e.data),t.list=t.list2;break;case 3:t.list3=t.list3.concat(e.data),t.list=t.list3;break;default:t.list2=t.list2.concat(e.data),t.list=t.list2}t.isFirst=!1,t.showLoadEnd()}else e.msg&&o.showErrorTip(e.data.msg)},function(e){o.showErrorTip("当前无网络，请检查您的网络状态！")})))},resetData:function(){this.page=1,this.isFirst=!0,this.scroll_load_loading=!1,this.scroll_load_end=!1,this.list=[],this.list0=[],this.list1=[],this.list2=[],this.list3=[]},switchTab:function(e){if(this.searchFlag=!1,!this.scroll_load_loading){switch(e>-1?this.activeTab=e:void 0,e){case 0:this.filter="all";break;case 1:this.filter="create";break;case 2:this.filter="handle";break;case 3:this.filter="finish";break;default:this.filter="handle"}this.resetData(),this.fetchData()}localStorage.tab_id=e},isSearch:function(){this.searchFlag=!this.searchFlag},goToSearch:function(e){localStorage.express_id=e.id,this.searchFlag=!1,this.url("/search/")},goToMsg:function(){this.url("/message")},addOne:function(){this.url("/order/edit")},goInfo:function(e){this.searchFlag=!1,this.url("/order/"+e)},handleScroll:function(){if(document.body.scrollTop+window.innerHeight>=document.body.scrollHeight-1){if(this.list.length<16)return!1;this.loadTerminalData()}},loadTerminalData:function(){var t=this;t.page;switch(this.activeTab){case 0:t.filter="all";break;case 1:t.filter="create";break;case 2:t.filter="handle";break;case 3:t.filter="finish";break;default:t.filter="handle"}t.showLoading(),t.scroll_load_loading=!0,getAjaxRequest("order_cache",e.tasks+"filter="+t.filter+"&page="+t.page,t.version,1e3,18e5,function(e){if(0==e.status){t.hideLoading();for(var n=0;n<e.data.length;n++)e.data[n].head="//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8";t.scroll_load_loading=!1,t.list=t.list.concat(e.data),t.page+=1,t.showLoadEnd(),e.data.length<t.numPerPage&&(t.scroll_load_end=!0)}else e.msg&&o.showErrorTip(e.data.msg)},function(e){t.hideLoading(),window.removeEventListener("scroll",t.handleScroll),o.showErrorTip("您的网络可能出了点问题:(")})},showLoading:function(){this.scroll_load_loading=!0,this.$refs.loading&&this.$refs.loading.showLoading()},hideLoading:function(){this.scroll_load_loading=!1,this.$refs.loading&&this.$refs.loading.hideLoading()},showLoadEnd:function(){this.hideLoading(),this.$refs.loading&&this.$refs.loading.showEnd()}}),a}).call(t,n(2),n(0))},function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n.gege-header .icsearch {\n    right: 5px;\n    left: auto;\n}\n\n",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n.pt50[data-v-2d049b5d] {\n  padding-top: 43px;\n}\n.search[data-v-2d049b5d] {\n  background: #8c8c8c;\n  top: 6%;\n  right: 0px;\n  z-index: 9999;\n}\n.search .item[data-v-2d049b5d] {\n    height: 30px;\n    line-height: 30px;\n    margin: 0px 10px;\n    color: #fff;\n    box-sizing: border-box;\n    position: relative;\n}\n.search .item[data-v-2d049b5d]:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    background-color: #fff;\n    transform: scale(1, 0.5);\n}\n.nav[data-v-2d049b5d] {\n  background-color: #fafafa;\n  border-bottom: 1px #cfcfcf solid;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.nav .tab[data-v-2d049b5d] {\n    width: 25%;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n}\n.nav .tab[data-v-2d049b5d]:active {\n      background-color: #eee;\n}\n.nav .tab.active[data-v-2d049b5d] {\n      color: #07689f;\n}\n.nav .tab.active[data-v-2d049b5d]:after {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        border: 1px #07689f solid;\n        width: 40px;\n        margin-left: -20px;\n}\n.add[data-v-2d049b5d] {\n  background: url(//img.aimoge.com/Fq2jHaTMAD8ds8JCcZjYEXHBAERN) 0 0 no-repeat;\n  background-size: 100%;\n  bottom: 108px;\n  right: 22px;\n  width: 50px;\n  height: 50px;\n  line-height: 131px;\n  color: #cfcfcf;\n  z-index: 300;\n}\n.add[data-v-2d049b5d]:active {\n    opacity: .6;\n}\n.item[data-v-2d049b5d] {\n  padding: 0 0 0 0;\n}\n.item[data-v-2d049b5d]:active {\n    background-color: #eee;\n}\n.item .div[data-v-2d049b5d] {\n    margin: 0 16px;\n    border-bottom: 1px #cfcfcf solid;\n    padding: 12px 0 12px 66px;\n}\n.item img[data-v-2d049b5d] {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    left: 16px;\n    top: 12px;\n}\n.item .title[data-v-2d049b5d] {\n    margin-bottom: 8px;\n}\n.item .user[data-v-2d049b5d] {\n    /*margin: 0 75px 0 0;*/\n    display: block;\n}\n.item .time[data-v-2d049b5d] {\n    right: 0;\n    top: 1px;\n}\n.item .line[data-v-2d049b5d] {\n    line-height: 18px;\n}\n.item .gray[data-v-2d049b5d] {\n    color: #908d8d;\n    margin-right: 5px;\n}\n.item .status[data-v-2d049b5d] {\n    color: #e4b358;\n    background-image: url(//img.aimoge.com/FsSDETnGMxWOFzvF15BLkL9an2M-);\n    background-size: 15px;\n    background-repeat: no-repeat;\n    background-position: 0 3px;\n    text-indent: 20px;\n    margin-top: 5px;\n}\n.item .status.s2[data-v-2d049b5d] {\n      color: #d75a48;\n      background-image: url(\"//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15\");\n}\n.item .status.s3[data-v-2d049b5d] {\n      color: #a4d748;\n      background-image: url(\"//img.aimoge.com/FoSwqghIf_uF504pPDsAEWTbBTJ_\");\n}\n",""])},function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n.loadingArea[data-v-5c45997e] {\n  height: auto;\n  padding-top: 10px;\n}\n.loadingArea .top0[data-v-5c45997e] {\n    margin-top: 0;\n    padding-top: 0;\n}\n.loadingArea .mgLoadingWarp[data-v-5c45997e] {\n    margin-top: 0;\n}\n.mgLoadingWarp.block[data-v-5c45997e],\n.sysLoading.block[data-v-5c45997e] {\n  display: block;\n}\n.mgLoadingWarp.none[data-v-5c45997e],\n.sysLoading.none[data-v-5c45997e] {\n  display: none;\n}\n",""])},function(e,t,n){n(22),n(23);var o=n(1)(n(13),n(18),"data-v-2d049b5d",null);o.options.__file="D:\\moge\\zhichengxitong\\src\\pages\\Order.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Order.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HeaderBar",{attrs:{title:e.pageTitle,btnconfig:e.btnconfig,noborder:!0},on:{msgBtnCallback:e.goToMsg,searchBtnCallback:e.isSearch}}),e.searchFlag?n("div",{staticClass:"search fixed"},e._l(e.searchInfo,function(t){return n("div",{staticClass:"item",on:{click:function(n){n.stopPropagation(),n.preventDefault(),e.goToSearch(t)}}},[e._v(e._s(t.value))])})):e._e(),n("div",{staticClass:"nav top44 fixed"},[n("div",{staticClass:"left tab rel",class:{active:0==e.activeTab},on:{click:function(t){e.switchTab(0)}}},[e._m(0)]),n("div",{staticClass:"left tab rel",class:{active:1==e.activeTab},on:{click:function(t){e.switchTab(1)}}},[e._m(1)]),n("div",{staticClass:"left tab rel",class:{active:2==e.activeTab},on:{click:function(t){e.switchTab(2)}}},[n("div",[n("label",[e._v("我的待办")]),n("label",[e._v("("+e._s(e.num)+")")])])]),n("div",{staticClass:"left tab rel",class:{active:3==e.activeTab},on:{click:function(t){e.switchTab(3)}}},[e._m(2)])]),n("div",{staticClass:"mt44 pt50 pb60"},[e._l(e.list,function(t){return n("div",{staticClass:"item rel",on:{click:function(n){n.stopPropagation(),n.preventDefault(),e.goInfo(t.task_id)}}},[n("img",{staticClass:"abs",attrs:{src:t.head}}),n("div",{staticClass:"div"},[n("div",{staticClass:"title rel"},[n("label",{staticClass:"user ellipsis rel"},[e._v(e._s(t.creator)+" 发起的"+e._s(t.project)+"工单")]),n("label",{staticClass:"time f12 abs"},[e._v(e._s(t.time))])]),n("div",{staticClass:"line f12 rel"},[n("label",{staticClass:"gray rel"},[e._v("终端名称:")]),n("label",[e._v(e._s(t.terminal_name))])]),n("div",{staticClass:"line f12 rel"},[n("label",{staticClass:"gray rel"},[e._v("创建时间:")]),n("label",[e._v(e._s(t.created_at))])]),1==t.status_code?n("div",{staticClass:"status f12 s1 rel"},[e._v(e._s(t.status))]):e._e(),4==t.status_code?n("div",{staticClass:"status f12 s2 rel"},[e._v(e._s(t.status))]):e._e(),2==t.status_code?n("div",{staticClass:"status f12 s3 rel"},[e._v(e._s(t.status))]):e._e()])])}),n("DataLoading",{ref:"loading"})],2),n("div",{staticClass:"add f12 center fixed",on:{click:e.addOne}},[e._v("创建")]),n("FooterBar",{staticClass:"fixed",attrs:{footerconfig:e.footerconfig}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("所有任务")]),n("label")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("我创建的")]),n("label")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("我的已办")]),n("label")])}]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-loading"},[n("div",{staticClass:"loadingArea"},[n("div",{ref:"loading",staticClass:"mgLoadingWarp rel block"},[e._m(0)]),n("div",{ref:"empty",staticClass:"mgLoadingWarp rel none"},[n("span",[e._v("没有更多数据了...")])])]),n("div",{ref:"emptyBox",staticClass:"empty-content rel"},[n("div",{staticClass:"empty-img"}),n("p",[e._v(e._s(e.text||"暂无数据"))])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("i",{staticClass:"icon ion-loading-c rel"}),n("label",[e._v("加载中...")])])}]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gege-header fixed",class:{noborder:e.noborder}},[n("div",{staticClass:"title center ellipsis f16 abs"},[e._v(e._s(e.title))]),e.hideGoback?e._e():n("a",{staticClass:"icgoback",staticStyle:{left:"0"},on:{click:function(t){e.goback(e.origin)}}}),!!e.hasConfig&&e.btnconfig.ismsg?n("a",{staticClass:"icclock",class:{active:e.unreadNum>0},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.$emit("msgBtnCallback")}}}):e._e(),!!e.hasConfig&&e.btnconfig.issearch?n("a",{staticClass:"icsearch",on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.$emit("searchBtnCallback")}}}):e._e(),!!e.hasConfig&&e.btnconfig.isadd?n("a",{staticClass:"icadd",on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.$emit("addBtnCallback")}}}):e._e(),!!e.hasConfig&&e.btnconfig.isedit?n("a",{staticClass:"icedit",on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.$emit("editBtnCallback")}}}):e._e(),!!e.hasConfig&&e.btnconfig.isfinish?n("a",{staticClass:"icfinish",staticStyle:{right:"0"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.$emit("finishBtnCallback")}}}):e._e(),!!e.hasConfig&&e.btnconfig.islogout?n("a",{staticClass:"iclogout",on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.$emit("logoutBtnCallback")}}},[e._v("退出")]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer flex"},[n("router-link",{staticClass:"flexmodel order",class:{active:e.footerconfig.isorder},attrs:{to:"/",replace:"replace"}},[e._v("工单")]),n("router-link",{staticClass:"flexmodel terminal",class:{active:e.footerconfig.isterminal},attrs:{to:"/terminal",replace:"replace"}},[e._v("终端")]),n("router-link",{staticClass:"flexmodel mine",class:{active:e.footerconfig.ismine},attrs:{to:"/mine",replace:"replace"}},[e._v("我的")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){var o=n(14);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(4)("35bab270",o,!1)},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(4)("d9b245a8",o,!1)},function(e,t,n){var o=n(16);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(4)("34f9430e",o,!1)},function(e,t){e.exports=function(e,t){for(var n=[],o={},i=0;i<t.length;i++){var a=t[i],r=a[0],s=a[1],c=a[2],l=a[3],d={id:e+":"+i,css:s,media:c,sourceMap:l};o[r]?o[r].parts.push(d):n.push(o[r]={id:r,parts:[d]})}return n}},function(e,t,n){"use strict";(function(e,t){var o=n(5);o.a.beforeEach(function(n,o,i){n.matched.some(function(e){return void 0==e.meta.requiresAuth||e.meta.requiresAuth})?axios.get(e.isLogin).then(function(e){0!==e.data.status?(window.is_logged=!1,t.isApp()?window.location.href="gegemis:///Login":i({path:"/login",query:{next_url:decodeURIComponent(n.path)}})):i()}).catch(function(){i()}):i()}),Vue.config.devtools=!0,Vue.prototype.goback=function(e){"terminal"==e?this.$router.push({path:"/terminal",query:{}}):this.$router.go(-1)},Vue.prototype.url=function(e,t){this.$router.push({path:e,query:t?t:{}})},Vue.prototype.replaceUrl=function(e,t){this.$router.replace({path:e,query:t?t:{}})},Vue.prototype.emptyJson=function(e){var t=!0;return Object.keys(e).length&&(t=!1),
t},window.setStore=function(e,t,n,o,i){var a=(new Date).getTime(),r=window.localStorage[e]?JSON.parse(window.localStorage[e]||null):{};r[t]={v:i,headers:o,data:n,ts:a},window.localStorage.setItem(e,JSON.stringify(r))},window.checkStore=function(e,t,n,o,i){var a=window.localStorage[e]?JSON.parse(window.localStorage[e]):null,r=(new Date).getTime();if(a&&a[t]){if(r-a[t].ts>i||a[t].v!==n)return a[t]=null,window.localStorage.setItem(e,JSON.stringify(a)),{rsp:null,canUseCache:!1,isUseAjax:!0};if(r-a[t].ts<i&&r-a[t].ts>o)return{rsp:a[t],canUseCache:!0,isUseAjax:!0};if(r-a[t].ts<o)return{rsp:a[t],canUseCache:!0,isUseAjax:!1}}return{rsp:null,canUseCache:!1,isUseAjax:!0}},window.getAjaxRequest=function(e,t,n,o,i,a,r){var s={};return s=checkStore(e,t,n,o,i),s.isUseAjax?void axios.get(t).then(function(o){return setStore(e,t,o.data,o.headers,n),a?a(o.data):null}).catch(function(e){return s.canUseCache?a?a(s.rsp.data):null:r?r(e):null}):a?a(s.rsp.data):null},new Vue({el:"#app",router:o.a,template:'<div id="app">\n                    <keep-alive>\n                        <router-view class="view"></router-view>\n                    </keep-alive>\n                </div>',beforeCreate:function(){t.initDomEvents()},mounted:function(){var e=this;t.addLinkTouchEvent(),window.canGoBack=!1,window.origin=null,window.goBack=function(){window.canGoBack&&e.goback(window.origin)},window.canBack=function(){return window.canGoBack},window.tellWebNotiContent=function(t){var n=t.split("//"),o=n[n.length-1];e.url(o)}}})}).call(t,n(2),n(0))}]);