webpackJsonp([11],{108:function(a,t,e){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"create-order"},[e("HeaderBar",{attrs:{title:a.pageTitle}}),e("Search",{directives:[{name:"focus",rawName:"v-focus",value:a.v-a.focus,expression:"v-focus"}],staticClass:"top44 fixed",attrs:{placeholder:"搜索手机号/终端名称"},on:{changeCallback:function(t){a.searchByKey(1)}},model:{value:a.terminalName,callback:function(t){a.terminalName=t},expression:"terminalName"}}),e("div",{staticClass:"mt44 pt50 pb60"},[e("div",{staticClass:"pd_16"},[e("div",{staticClass:"item"},[a._v("搜索结果：共"),e("span",{staticClass:"c_b"},[a._v("  "+a._s(a.num))]),e("span",[a._v("条")])]),a.flag?e("div",{staticClass:"img"},[e("img",{attrs:{src:"//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp",width:"100%",height:"100%"}}),e("p",{staticClass:"c_g",staticStyle:{"text-align":"center"}},[a._v("暂无搜索结果")])]):a._e()]),a.isFlag1?e("div",{staticClass:"pd_16"},a._l(a.result,function(t){return a.flag?a._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[a._v("订单状态：")]),e("lable",[a._v(a._s(t.state))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("存件时间：")]),e("lable",[a._v(a._s(t.fetch_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("取件时间：")]),e("lable",[a._v(a._s(t.delivery_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("用户手机号：")]),e("lable",[a._v(a._s(t.receiver_telephone))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("快递员手机号：")]),e("lable",[a._v(a._s(t.operator_telephone))])],1),e("div",{staticClass:"num"},[e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[a._v("箱门号编码：")]),e("lable",[a._v(a._s(t.box))])],1),e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[a._v("取件码：")]),e("lable",[a._v(a._s(t.password)+"                   ")])],1)])])})):a._e(),a.isFlag2?e("div",{staticClass:"pd_16"},a._l(a.result,function(t){return a.flag?a._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[a._v("订单状态：")]),e("lable",[a._v(a._s(t.status))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("下单时间：")]),e("lable",[a._v(a._s(t.order_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("存件时间：")]),e("lable",[a._v(a._s(t.deliver_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("取件时间：")]),e("lable",[a._v(a._s(t.fetch_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("过期时间：")]),e("lable",[a._v(a._s(t.expried_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("用户手机号：")]),e("lable",[a._v(a._s(t.user))])],1),e("div",{staticClass:"num"},[e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[a._v("箱门号编码：")]),e("lable",[a._v(a._s(t.box))])],1),e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[a._v("寄存码：")]),e("lable",[a._v(a._s(t.password))])],1)])])})):a._e(),a.isFlag3?e("div",{staticClass:"pd_16"},a._l(a.result,function(t){return a.flag?a._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[a._v("寄件状态：")]),e("lable",[a._v(a._s(t.state))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("寄件时间：")]),e("lable",[a._v(a._s(t.delivery_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("寄件人手机号：")]),e("lable",[a._v(a._s(t.fetch_at))])],1)])})):a._e(),a.isFlag4?e("div",{staticClass:"pd_16"},a._l(a.result,function(t){return a.flag?a._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[a._v("寄件状态：")]),e("lable",[a._v(a._s(t.state))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("寄件时间：")]),e("lable",[a._v(a._s(t.begin_time))])],1),e("div",[e("label",{staticClass:"c_g1"},[a._v("寄件人手机号：")]),e("lable",[a._v(a._s(t.mobile))])],1)])})):a._e(),e("div",{staticClass:"pd_20"},[e("DataLoading",{ref:"loading"})],1)])],1)},staticRenderFns:[]},a.exports.render._withStripped=!0},126:function(a,t,e){var s=e(89);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e(4)("220e4a68",s,!1)},40:function(a,t,e){e(126);var s=e(1)(e(83),e(108),"data-v-1ec05aa9",null);s.options.__file="D:\\moge\\zhichengxitong\\src\\pages\\Search.vue",s.esModule&&Object.keys(s.esModule).some(function(a){return"default"!==a&&"__esModule"!==a})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions."),a.exports=s.exports},44:function(a,t,e){"use strict";t.default={props:["placeholder"],methods:{setParentVar:function(a){this.$emit("input",a)}}}},47:function(a,t,e){t=a.exports=e(3)(),t.push([a.i,"\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 50px 0 50px;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n",""])},48:function(a,t,e){e(53);var s=e(1)(e(44),e(51),"data-v-2b720269",null);s.options.__file="D:\\moge\\zhichengxitong\\src\\components\\common\\Search.vue",s.esModule&&Object.keys(s.esModule).some(function(a){return"default"!==a&&"__esModule"!==a})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions."),a.exports=s.exports},51:function(a,t,e){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"search"},[e("div",{staticClass:"input rel"},[e("input",{staticClass:"rel",attrs:{type:"text",placeholder:a.placeholder},on:{input:[function(t){a.setParentVar(t.target.value)},function(t){a.$emit("changeCallback")}],focus:function(t){a.$emit("changeCallback1")},blur:function(t){a.$emit("changeCallback2")}}})])])},staticRenderFns:[]},a.exports.render._withStripped=!0},53:function(a,t,e){var s=e(47);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e(4)("7e3e8802",s,!1)},83:function(a,t,e){"use strict";(function(a,s){var n=e(7),l=e.n(n),i=e(48),o=e.n(i),r=e(8),c=e.n(r);t.default={mixins:[e(6)],data:function(){return{pageTitle:"运营支撑系统",footerconfig:{isterminal:!0},terminalName:"",flag:!0,isFlag1:!1,isFlag2:!1,isFlag3:!1,isFlag4:!1,num:0,result:[],url:"",page:1,scrollTop:0,scroll_load_loading:!1,scroll_load_end:!1,tn_page:1,tn_scrollTop:0,tn_scroll_load_loading:!1,tn_scroll_load_end:!1,tn_delay:null,error:!1}},directives:{focus:{inserted:function(a){a.focus()}}},components:{HeaderBar:l.a,Search:o.a,DataLoading:c.a},mounted:function(){window.canGoBack=!0,window.origin=null,this.getUrl(),window.addEventListener("scroll",this.handleScroll),this.terminalName="",this.hideLoading()},activated:function(){window.canGoBack=!0,window.origin=null,window.addEventListener("scroll",this.handleScroll)},watch:{$route:"getUrl"},beforeRouteLeave:function(a,t,e){var s=document.body.scrollTop;this.scrollTop=this.scrollTop||s,this.tn_scrollTop=this.tn_scrollTop||s,window.removeEventListener("scroll",this.handleScroll),this.terminalName=null,e()},methods:{handleScroll:function(){return!(this.result.lenght<16)&&void(document.body.scrollTop+window.innerHeight>=document.body.scrollHeight-1&&this.terminalName&&!this.error&&this.loadTerminalData())},resetScrollTop:function(a){a&&this.showLoadEnd(),this.terminalName&&this.terminalName.trim()?document.body.scrollTop=this.tn_scrollTop:2==this.tabIndex&&this.scrollTop?document.body.scrollTop=this.scrollTop:document.body.scrollTop=0},loadTerminalData:function(t){var e=this,s=e.page,n=e.terminalName;return!e.scroll_load_loading&&!e.isLoading()&&(!e.scroll_load_end&&(e.showLoading(),e.scroll_load_loading=!0,void getAjaxRequest("searchPage_cache",e.url+n.trim()+"&page="+s,e.version,3e4,18e5,function(s){e.hideLoading(),e.error=!1,0==s.status?(e.scroll_load_loading=!1,0==s.status&&s.data&&s.data.length?(e.result=e.result.concat(s.data),e.num=e.result.length,e.page+=1,s.data.length<e.numPerPage&&(e.scroll_load_end=!0)):(e.scroll_load_end=!0,t&&e.showLoadEnd()),e.showLoadEnd()):s.msg&&a.showErrorTip(s.data.msg)},function(t){e.hideLoading(),e.showLoadEnd(),e.error=!0,a.showErrorTip("您的网络可能出了点问题:(")})))},searchByKey:function(t){var e=this,s=1,n=e.terminalName;return n&&n.trim()?!e.tn_scroll_load_loading&&!e.isLoading()&&(!e.tn_scroll_load_end&&(this.showLoading(),e.result=[],e.flag=!1,void((e.isFlag1||e.isFlag2||e.isFlag3||e.isFlag4)&&getAjaxRequest("search_cache",e.url+n.trim()+"&page="+s,e.version,3e4,18e5,function(s){e.hideLoading(),0==s.status?(e.tn_scroll_load_loading=!1,s.data?(e.flag=!1,console.log(s.data),0==s.data.length?(e.num=0,e.flag=!0):s.data.length<16?(e.showLoadEnd(),e.num=s.data.length):e.num=s.data.length,e.result=e.result.concat(s.data),0==!e.result.lenght&&e.showLoadEnd(),s.data.length<e.numPerPage&&(e.tn_scroll_load_end=!0)):(e.flag=!0,e.tn_scroll_load_end=!0,t&&e.showLoadEnd())):s.msg&&a.showErrorTip(s.data.msg)},function(t){e.hideLoading(),a.showErrorTip("当前无网络，请检查您的网络状态！")})))):(e.flag=!0,e.num=0,e.resetScrollTop(1),e.hideLoading(),e.result=[],!1)},getUrl:function(){var a=localStorage.express_id;switch(a){case"01":this.url=s.search1,this.isFlag1=!0,this.isFlag2=!1,this.isFlag3=!1,this.isFlag4=!1;break;case"02":this.url=s.search2,this.isFlag2=!0,this.isFlag1=!1,this.isFlag3=!1,this.isFlag4=!1;break;case"03":this.url=s.search3,this.isFlag3=!0,this.isFlag1=!1,this.isFlag2=!1,this.isFlag4=!1;break;case"04":this.url=s.search4,this.isFlag4=!0,this.isFlag2=!1,this.isFlag3=!1,this.isFlag1=!1;break;default:this.url=s.search1}this.terminalName=null,this.hideLoading(),this.result=[],this.num=0,this.flag=!0},isLoading:function(){this.$refs.loading&&this.$refs.loading.isLoading()},showLoading:function(){this.scroll_load_loading=!0,this.$refs.loading&&this.$refs.loading.showLoading()},hideLoading:function(){this.scroll_load_loading=!1,this.$refs.loading&&this.$refs.loading.hideLoading()},showLoadEnd:function(){this.hideLoading(),this.$refs.loading&&this.$refs.loading.showEnd()}}}}).call(t,e(0),e(2))},89:function(a,t,e){t=a.exports=e(3)(),t.push([a.i,"\n.c_b[data-v-1ec05aa9] {\n  color: #07689f;\n}\n.c_g[data-v-1ec05aa9] {\n  color: #a3a3a3;\n}\n.c_g1[data-v-1ec05aa9] {\n  color: #908d8d;\n}\n.pd_16[data-v-1ec05aa9] {\n  padding: 0 16px;\n}\n.pd_16 div.img[data-v-1ec05aa9] {\n    width: 125px;\n    height: 125px;\n    padding-top: 70px;\n    margin: 0 auto;\n}\n.pd_20[data-v-1ec05aa9] {\n  padding-top: 20px;\n}\n.empty[data-v-1ec05aa9] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-1ec05aa9] {\n  position: relative;\n  line-height: 35px;\n  height: 35px;\n  color: #a3a3a3;\n}\n.item[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n.list[data-v-1ec05aa9] {\n  padding-top: 20px;\n  padding-bottom: 18px;\n  position: relative;\n}\n.list div[data-v-1ec05aa9] {\n    font-size: 12px;\n    height: 22px;\n    line-height: 22px;\n}\n.list .num[data-v-1ec05aa9] {\n    margin-top: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n.list[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n",""])}});