webpackJsonp([11],{108:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"create-order"},[e("HeaderBar",{attrs:{title:t.pageTitle}}),e("Search",{directives:[{name:"focus",rawName:"v-focus",value:t.v-t.focus,expression:"v-focus"}],staticClass:"top44 fixed",attrs:{placeholder:"搜索手机号/终端名称"},on:{searchInfo:function(a){t.searchByKey(1)}},model:{value:t.terminalName,callback:function(a){t.terminalName=a},expression:"terminalName"}}),e("div",{staticClass:"pt50 pb60 main"},[e("div",{staticClass:"pd_16"},[e("div",{staticClass:"item"},[t._v("搜索结果：共"),e("span",{staticClass:"c_b"},[t._v("  "+t._s(t.num))]),e("span",[t._v("条")])]),t.flag?e("div",{staticClass:"img"},[e("img",{attrs:{src:"//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp",width:"100%",height:"100%"}}),e("p",{staticClass:"c_g",staticStyle:{"text-align":"center"}},[t._v("暂无搜索结果")])]):t._e()]),t.isFlag1?e("div",{staticClass:"pd_16"},t._l(t.result,function(a){return t.flag?t._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[t._v("订单状态：")]),e("lable",[t._v(t._s(a.state))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("派件时间：")]),e("lable",[t._v(t._s(a.delivery_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("取件时间：")]),e("lable",[t._v(t._s(a.fetch_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("用户手机号：")]),e("lable",[t._v(t._s(a.receiver_telephone))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("快递员手机号：")]),e("lable",[t._v(t._s(a.operator_telephone))])],1),e("div",{staticClass:"num"},[e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[t._v("箱门号编码：")]),e("lable",[t._v(t._s(a.box))])],1),e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[t._v("取件码：")]),e("lable",[t._v(t._s(a.password)+"                   ")])],1)])])})):t._e(),t.isFlag2?e("div",{staticClass:"pd_16"},t._l(t.result,function(a){return t.flag?t._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[t._v("订单状态：")]),e("lable",[t._v(t._s(a.status))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("下单时间：")]),e("lable",[t._v(t._s(a.order_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("存件时间：")]),e("lable",[t._v(t._s(a.deliver_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("取件时间：")]),e("lable",[t._v(t._s(a.fetch_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("过期时间：")]),e("lable",[t._v(t._s(a.expried_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("用户手机号：")]),e("lable",[t._v(t._s(a.user))])],1),e("div",{staticClass:"num"},[e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[t._v("箱门号编码：")]),e("lable",[t._v(t._s(a.box))])],1),e("span",{staticStyle:{"font-size":"10px"}},[e("label",{staticClass:"c_g1"},[t._v("寄存码：")]),e("lable",[t._v(t._s(a.password))])],1)])])})):t._e(),t.isFlag3?e("div",{staticClass:"pd_16"},t._l(t.result,function(a){return t.flag?t._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[t._v("寄件状态：")]),e("lable",[t._v(t._s(a.state))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("寄件时间：")]),e("lable",[t._v(t._s(a.delivery_at))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("寄件人手机号：")]),e("lable",[t._v(t._s(a.fetch_at))])],1)])})):t._e(),t.isFlag4?e("div",{staticClass:"pd_16"},t._l(t.result,function(a){return t.flag?t._e():e("div",{staticClass:"list"},[e("div",[e("label",{staticClass:"c_g1"},[t._v("寄件状态：")]),e("lable",[t._v(t._s(a.state))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("寄件时间：")]),e("lable",[t._v(t._s(a.begin_time))])],1),e("div",[e("label",{staticClass:"c_g1"},[t._v("寄件人手机号：")]),e("lable",[t._v(t._s(a.mobile))])],1)])})):t._e(),e("div",{staticClass:"pd_20"},[e("DataLoading",{ref:"loading"})],1)])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},126:function(t,a,e){var s=e(89);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(4)("220e4a68",s,!1)},40:function(t,a,e){e(126);var s=e(1)(e(83),e(108),"data-v-1ec05aa9",null);s.options.__file="D:\\moge\\zhichengxitong\\src\\pages\\Search.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},44:function(t,a,e){"use strict";a.default={props:["placeholder"],methods:{setParentVar:function(t){this.$emit("input",t)}}}},47:function(t,a,e){a=t.exports=e(3)(),a.push([t.i,"\n.search[data-v-2b720269] {\n  background-color: #cfcfcf;\n  height: 46px;\n  width: 100%;\n  padding: 10px 16px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n}\n.btn[data-v-2b720269] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 0 9px;\n}\n.input[data-v-2b720269] {\n  background-color: #fff;\n  border-radius: 22px;\n  top: 0;\n  padding: 0 30px 0 30px;\n  width: 60%;\n}\n.input[data-v-2b720269]:before {\n    content: '';\n    display: block;\n    position: absolute;\n    background: url(//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl) 0 0 no-repeat;\n    background-size: 100% auto;\n    width: 14px;\n    height: 14px;\n    top: 6px;\n    left: 22px;\n}\n.input input[data-v-2b720269] {\n    font-family: 'Microsoft Yahei';\n    background-color: transparent;\n    height: 26px;\n    line-height: 26px;\n    top: 0;\n    font-size: 14px;\n    color: #323232;\n    border: none;\n    width: 100%;\n    text-align: center;\n}\n",""])},48:function(t,a,e){e(53);var s=e(1)(e(44),e(51),"data-v-2b720269",null);s.options.__file="D:\\moge\\zhichengxitong\\src\\components\\common\\Search.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] Search.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},51:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search"},[e("div",{staticClass:"input rel"},[e("input",{staticClass:"rel",attrs:{type:"text",placeholder:t.placeholder},on:{input:function(a){t.setParentVar(a.target.value)},focus:function(a){t.$emit("changeCallback1")},blur:function(a){t.$emit("changeCallback2")}}})]),e("div",{staticClass:"btn",on:{click:function(a){t.$emit("searchInfo")}}},[t._v("搜索     ")])])},staticRenderFns:[]},t.exports.render._withStripped=!0},53:function(t,a,e){var s=e(47);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(4)("7e3e8802",s,!1)},83:function(t,a,e){"use strict";(function(t,s){var n=e(7),i=e.n(n),l=e(48),o=e.n(l),r=e(8),c=e.n(r);a.default={mixins:[e(6)],data:function(){return{pageTitle:"运营支撑系统",footerconfig:{isterminal:!0},terminalName:"",flag:!0,isFlag1:!1,isFlag2:!1,isFlag3:!1,isFlag4:!1,num:0,result:[],url:"",pageList:[],numPerPage:16,page:1,scrollTop:0,scroll_load_loading:!1,scroll_load_end:!1,tn_page:1,tn_scrollTop:0,tn_scroll_load_loading:!1,tn_scroll_load_end:!1,tn_delay:null,error:!1}},directives:{focus:{inserted:function(t){t.focus()}}},components:{HeaderBar:i.a,Search:o.a,DataLoading:c.a},mounted:function(){window.canGoBack=!0,window.origin=null,this.getUrl(),window.addEventListener("scroll",this.handleScroll),this.hideLoading()},activated:function(){window.canGoBack=!0,window.origin=null,window.addEventListener("scroll",this.handleScroll)},watch:{$route:"getUrl"},beforeRouteLeave:function(t,a,e){var s=document.body.scrollTop;this.scrollTop=this.scrollTop||s,this.tn_scrollTop=this.tn_scrollTop||s,window.removeEventListener("scroll",this.handleScroll),e()},methods:{handleScroll:function(){if(document.body.scrollTop+window.innerHeight>=document.body.scrollHeight-1){if(this.result.length<16)return!1;if(this.scroll_load_end&&this.$refs.loading)return this.showLoadEnd();this.terminalName&&!this.error&&this.loadTerminalData()}},resetScrollTop:function(t){t&&this.showLoadEnd(),this.terminalName&&this.terminalName.trim()?document.body.scrollTop=this.tn_scrollTop:this.scrollTop?document.body.scrollTop=this.scrollTop:document.body.scrollTop=0},loadTerminalData:function(a){var e=this,s=e.page,n=e.terminalName;return!e.scroll_load_loading&&!e.isLoading()&&(!e.scroll_load_end&&(!(e.pageList.indexOf(s)>-1)&&(e.showLoading(),e.scroll_load_loading=!0,void getAjaxRequest("searchPage_cache",e.url+n.trim()+"&page="+s,e.version,3e4,18e5,function(n){e.hideLoading(),e.error=!1,0==n.status?(e.scroll_load_loading=!1,0==n.status&&n.data&&n.data.length?(e.result=e.result.concat(n.data),e.num=e.result.length,e.page+=1,e.pageList=e.pageList.concat([s]),n.data.length<e.numPerPage&&(e.scroll_load_end=!0)):(e.scroll_load_end=!0,a&&e.showLoadEnd()),e.showLoadEnd()):n.msg&&t.showErrorTip(n.data.msg)},function(a){e.hideLoading(),e.showLoadEnd(),e.error=!0,t.showErrorTip("您的网络可能出了点问题:(")}))))},searchByKey:function(a){var e=this,s=1,n=e.terminalName,i=new RegExp("[\\u4E00-\\u9FFF]+","g");if(!i.test(n)){var l=/^1[3|4|5|7|8][0-9]{9}$/;if(!l.test(n.trim()))return t.showErrorTip("请输入完成的手机号!"),!1}return n&&n.trim()?!e.tn_scroll_load_loading&&!e.isLoading()&&(this.showLoading(),e.result=[],e.flag=!1,void((e.isFlag1||e.isFlag2||e.isFlag3||e.isFlag4)&&getAjaxRequest("search_cache",e.url+n.trim()+"&page="+s,e.version,3e4,18e5,function(s){e.hideLoading(),0==s.status?(e.tn_scroll_load_loading=!1,s.data?(e.flag=!1,0==s.data.length?(e.num=0,e.flag=!0):s.data.length<16?(e.showLoadEnd(),e.num=s.data.length):e.num=s.data.length,e.result=e.result.concat(s.data),0==!e.result.lenght&&e.showLoadEnd()):(e.flag=!0,e.tn_scroll_load_end=!0,a&&e.showLoadEnd())):s.msg&&t.showErrorTip(s.data.msg)},function(a){e.hideLoading(),t.showErrorTip("当前无网络，请检查您的网络状态！")}))):(e.flag=!0,e.num=0,e.resetScrollTop(1),e.hideLoading(),e.result=[],t.showErrorTip("请输入完成的手机号或终端名称"),!1)},getUrl:function(){var t=localStorage.express_id;switch(t){case"01":this.url=s.search1,this.isFlag1=!0,this.isFlag2=!1,this.isFlag3=!1,this.isFlag4=!1,this.pageTitle="存件订单";break;case"02":this.url=s.search2,this.isFlag2=!0,this.isFlag1=!1,this.isFlag3=!1,this.isFlag4=!1,this.pageTitle="寄存订单";break;case"03":this.url=s.search3,this.isFlag3=!0,this.isFlag1=!1,this.isFlag2=!1,this.isFlag4=!1,this.pageTitle="丰巢寄件";break;case"04":this.url=s.search4,this.isFlag4=!0,this.isFlag2=!1,this.isFlag3=!1,this.isFlag1=!1,this.pageTitle="菜鸟寄件";break;default:this.url=s.search1}this.hideLoading(),this.result=[],this.num=0,this.flag=!0},isLoading:function(){this.$refs.loading&&this.$refs.loading.isLoading()},showLoading:function(){this.scroll_load_loading=!0,this.$refs.loading&&this.$refs.loading.showLoading()},hideLoading:function(){this.scroll_load_loading=!1,this.$refs.loading&&this.$refs.loading.hideLoading()},showLoadEnd:function(){this.hideLoading(),this.$refs.loading&&this.$refs.loading.showEnd()}}}}).call(a,e(0),e(2))},89:function(t,a,e){a=t.exports=e(3)(),a.push([t.i,"\n.c_b[data-v-1ec05aa9] {\n  color: #07689f;\n}\n.c_g[data-v-1ec05aa9] {\n  color: #a3a3a3;\n}\n.c_g1[data-v-1ec05aa9] {\n  color: #908d8d;\n}\n.main[data-v-1ec05aa9] {\n  width: 100%;\n  height: 70%;\n  position: absolute;\n  overflow-y: scroll;\n  top: 44px;\n  -webkit-overflow-scrolling: touch;\n}\n.pd_16[data-v-1ec05aa9] {\n  padding: 0 16px;\n}\n.pd_16 div.img[data-v-1ec05aa9] {\n    width: 125px;\n    height: 125px;\n    padding-top: 70px;\n    margin: 0 auto;\n}\n.pd_20[data-v-1ec05aa9] {\n  padding-top: 20px;\n}\n.empty[data-v-1ec05aa9] {\n  padding: 16px;\n  color: #4d4d4d;\n}\n.item[data-v-1ec05aa9] {\n  position: relative;\n  line-height: 35px;\n  height: 35px;\n  color: #a3a3a3;\n}\n.item[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n.list[data-v-1ec05aa9] {\n  padding-top: 20px;\n  padding-bottom: 18px;\n  position: relative;\n}\n.list div[data-v-1ec05aa9] {\n    font-size: 12px;\n    height: 22px;\n    line-height: 22px;\n}\n.list .num[data-v-1ec05aa9] {\n    margin-top: 5px;\n    display: flex;\n    justify-content: space-between;\n}\n.list[data-v-1ec05aa9]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #f4f4f4;\n  transform: scale(1, 0.5);\n}\n",""])}});