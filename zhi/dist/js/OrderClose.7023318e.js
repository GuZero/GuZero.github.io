webpackJsonp([5],{118:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"create-order"},[n("HeaderBar",{attrs:{title:e.pageTitle}}),n("div",{staticStyle:{"margin-top":"50px","padding-left":"16px",color:"#828282"}},[e._v(e._s(e.name))]),n("div",{staticClass:"pb60"},[n("Field",{attrs:{tag:"现场现象",placeholder:"请选择（必选）",optionJsonConfig:{valuename:"id",textname:"name",idname:"id"},options:e.scenes,selectText:e.scene,select:!0,arrow:!0},on:{input:e.getValue,changeCallback:e.change},model:{value:e.scene,callback:function(t){e.scene=t},expression:"scene"}}),n("Field",{attrs:{tag:"问题原因",placeholder:"请选择（必选",optionJsonConfig:{valuename:"name",textname:"name",idname:"id"},options:e.problems,selectText:e.problem,select:!0,arrow:!0},on:{input:e.getValue1,changeCallback:e.change1},model:{value:e.problem,callback:function(t){e.problem=t},expression:"problem"}}),n("Field",{attrs:{tag:"故障分类",placeholder:"请选择（必选）",optionJsonConfig:{valuename:"id",textname:"name",idname:"id"},options:e.categroys,selectText:e.categroy,select:!0,arrow:!0},on:{input:e.getValue2},model:{value:e.categroy,callback:function(t){e.categroy=t},expression:"categroy"}}),n("Field",{attrs:{tag:"处理结果",placeholder:"请输入处理结果（必填）",input:!0},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}}),n("Field",{attrs:{tag:"抓取日志",placeholder:"请选择（必选）",optionJsonConfig:{valuename:"id",textname:"name",idname:"id"},options:e.logs,selectText:e.log,select:!0,arrow:!0},on:{input:e.getValue3},model:{value:e.log,callback:function(t){e.log=t},expression:"log"}}),n("Field",{attrs:{tag:"处理方式",placeholder:"请输入处理方式",textarea:!0},model:{value:e.desc,callback:function(t){e.desc="string"==typeof t?t.trim():t},expression:"desc"}})],1),n("SubmitBtn",{attrs:{text:"提交",theme:"white"},on:{submitCallback:e.submitFun}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},37:function(e,t,n){var o=n(1)(n(80),n(118),null,null);o.options.__file="D:\\moge\\zhichengxitong\\src\\pages\\OrderClose.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] OrderClose.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},54:function(e,t,n){"use strict";t.default={props:["theme","text"]}},55:function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n.submits[data-v-530e9782] {\n  border-top: 1px #cfcfcf solid;\n  background-color: #f9f9f9;\n  color: #323232;\n  display: block;\n  width: 100%;\n  height: 51px;\n  line-height: 51px;\n  color: #333;\n  font-size: 16px;\n  left: 0;\n  bottom: 0;\n  z-index: 9000;\n}\n.submits.white[data-v-530e9782] {\n    background-color: #fff;\n    color: #07689f;\n}\n.submits[data-v-530e9782]:active {\n    background-color: #eee;\n}\n",""])},56:function(e,t,n){n(58);var o=n(1)(n(54),n(57),"data-v-530e9782",null);o.options.__file="D:\\moge\\zhichengxitong\\src\\components\\elements\\SubmitBtn.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] SubmitBtn.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},57:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"submits center fixed",class:e.theme,on:{click:function(t){e.$emit("submitCallback")}}},[e._v(e._s(e.text))])},staticRenderFns:[]},e.exports.render._withStripped=!0},58:function(e,t,n){var o=n(55);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(4)("4f4b56a4",o,!1)},60:function(e,t,n){"use strict";t.default={props:["tag","value","type","placeholder","maxlength","readonly","input","textarea","p","pvalue","arrow","select","selectText","options","optionJsonConfig"],methods:{setParentVar:function(e){this.$emit("input",e.toString().trim())},getOptionKey:function(e,t,n){for(var o=null,a=0,i=n.length;a<i;a++)if(n[a][t.idname]==e){o=n[a][t.textname];break}return o||e.toString().trim()?o||e:this.placeholder||"请选择（必选）"}}}},61:function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n.filed[data-v-4c0b8495] {\n  background-color: #fff;\n  min-height: 54px;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  margin-top: 8px;\n}\n.filed.textarea[data-v-4c0b8495] {\n    height: 116px;\n}\n.filed.textarea .box[data-v-4c0b8495] {\n      height: 116px;\n}\n.filed .text[data-v-4c0b8495] {\n    left: 0;\n    top: 0;\n    width: 88px;\n    padding: 16px 0;\n}\n.filed .box[data-v-4c0b8495] {\n    margin-left: 88px;\n    min-height: 54px;\n}\n.filed .box input[data-v-4c0b8495] {\n      height: 30px;\n      line-height: 30px;\n      width: 99%;\n      border: none;\n      position: relative;\n      top: 13px;\n      left: 0;\n      font-size: 13px;\n}\n.filed .box textarea[data-v-4c0b8495] {\n      height: 87px;\n      width: 99%;\n      position: relative;\n      top: 20px;\n      border: none;\n      resize: none;\n      color: #323232;\n      font-size: 13px;\n}\n.filed .box p[data-v-4c0b8495] {\n      margin: 0;\n      min-height: 30px;\n      line-height: 22px;\n      font-size: 13px;\n      text-align: right;\n      padding: 0 16px 22px 0;\n      top: 17px;\n      left: 0;\n}\n.filed .select[data-v-4c0b8495] {\n    height: 54px;\n}\n.filed .select label[data-v-4c0b8495] {\n      display: inline-block;\n      height: 54px;\n      line-height: 54px;\n      top: 0;\n      right: 0;\n      color: #323232;\n      font-size: 13px;\n      width: 100%;\n      text-align: right;\n      padding-right: 38px;\n      z-index: 300;\n}\n.filed .select select[data-v-4c0b8495] {\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 54px;\n      background: none;\n      color: transparent;\n      border: none;\n      outline: none;\n      appearance: none;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      z-index: 301;\n}\n.filed .select select option[data-v-4c0b8495] {\n        color: #333;\n}\n.filed .select.arrow[data-v-4c0b8495]:after {\n      content: '';\n      background: url(//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD) 0 0 no-repeat;\n      background-size: 100% auto;\n      display: block;\n      height: 28px;\n      width: 28px;\n      position: absolute;\n      right: 15px;\n      top: 50%;\n      margin-top: -14px;\n}\n",""])},64:function(e,t,n){n(67);var o=n(1)(n(60),n(65),"data-v-4c0b8495",null);o.options.__file="D:\\moge\\zhichengxitong\\src\\components\\elements\\Field.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] Field.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},65:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filed rel",class:{textarea:e.textarea},on:{input:function(t){e.setParentVar(t.target.value)}}},[n("div",{staticClass:"text abs center"},[e._v(e._s(e.tag))]),n("div",{staticClass:"box rel"},[e.p?n("p",{staticClass:"rel"},[e._v(e._s(e.pvalue))]):e._e(),e.input?n("input",{attrs:{type:e.type||"text",placeholder:e.placeholder,maxlength:e.maxlength,readonly:e.readonly},domProps:{value:e.value},on:{focus:function(t){e.$emit("changeCallback")}}}):e._e(),e.textarea?n("textarea",{attrs:{placeholder:e.placeholder,maxlength:e.maxlength},on:{focus:function(t){e.$emit("changeCallback")}}}):e._e(),e.select?n("div",{staticClass:"select rel",class:{arrow:e.arrow}},[n("label",{staticClass:"abs ellipsis"},[e._v(e._s(e.getOptionKey(e.selectText,e.optionJsonConfig,e.options)))]),n("select",{staticClass:"abs",on:{change:function(t){e.$emit("changeCallback")}}},[n("option",[e._v("请选择（必选）")]),e._l(e.options,function(t){return n("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]):e._e()])])},staticRenderFns:[]},e.exports.render._withStripped=!0},67:function(e,t,n){var o=n(61);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(4)("6004a80a",o,!1)},80:function(e,t,n){"use strict";(function(e,o){var a=n(7),i=n.n(a),r=n(64),s=n.n(r),l=n(56),c=n.n(l);t.default={mixins:[n(6)],data:function(){return{bodyBg:"dark",pageTitle:"处理结果",name:"",scene:"",scenes:[],problem:"",problems:[],categroy:"",categroys:[],result:"",results:[],log:"",logs:[],desc:"",val:"",reason:"",yunwei_type:"",hasCatchLogZh:"",_id:this.$route.query._id||"",cause_id:""}},components:{HeaderBar:i.a,Field:s.a,SubmitBtn:c.a},created:function(){window.canGoBack=!0,window.origin=null,this.logs=[{id:"1",name:"是"},{id:"0",name:"否"}],this.getInfo()},activated:function(){window.canGoBack=!0,window.origin=null},watch:{$route:function(){this.$route.path=="/order/close?_id"+this.$route.query._id&&this.getInfo()}},methods:{submitFun:function(){if(this.scene.indexOf("选择")>-1)return e.showErrorTip("请选择现场现象！"),!1;if(this.problem.indexOf("选择")>-1)return e.showErrorTip("请选择问题原因！"),!1;if(this.categroy.indexOf("选择")>-1)return e.showErrorTip("请选择故障分类！"),!1;if(!this.result)return e.showErrorTip("请输入处理结果！"),!1;if(this.log.indexOf("选择")>-1)return e.showErrorTip("请选择抓取日志！"),!1;if(!this.desc)return e.showErrorTip("请输入处理方式！"),!1;var t=this.val,n=this.cause_id,a=this.yunwei_type,i=this.result,r=this.hasCatchLogZh,s=this.desc,l=this;axios.post(o.orderinfo+l.$route.query._id+"/close",{appearance:t,reason:n,yunwei_type:a,remark:i,hasCatchLogZh:r,deal:s},{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(t){e.hideSysLoading(),0==t.data.status?(e.showErrorTip(t.data.msg),l.url("/")):e.showErrorTip(t.data.msg)}).catch(function(t){e.hideSysLoading(),e.showErrorTip("当前无网络，请检查您的网络状态！")})},getValue:function(e){this.val=e},getValue1:function(e){this.cause_id=e},getValue2:function(e){this.yunwei_type=e},getValue3:function(e){this.hasCatchLogZh=e},change:function(){var t=this;t.categroy="",getAjaxRequest("order_cache",o.fault+t.val,t.version,2e4,18e5,function(e){t.problems=e.data,1==t.problems.length?(t.getValue1(e.data[0].id),t.change1(),t.problem=e.data[0].name):t.problem=""},function(t){e.showErrorTip("当前无网络，请检查您的网络状态！")})},change1:function(){var t=this;getAjaxRequest("order_cache",o.fault+t.cause_id,t.version,2e4,18e5,function(e){t.categroys=e.data,1==t.categroys.length?(t.getValue2(e.data[0].id),t.categroy=e.data[0].name):t.categroy=""},function(t){e.showErrorTip("当前无网络，请检查您的网络状态！")})},getInfo:function(){var t=this;getAjaxRequest("order_cache",o.orderinfo+t.$route.query._id,t.version,2e4,18e5,function(n){0==n.status?t.name=n.data.terminal_name:n.msg&&e.showErrorTip(n.msg)},function(t){e.showErrorTip("当前无网络，请检查您的网络状态！")}),getAjaxRequest("order_cache",o.option,t.version,2e4,18e5,function(n){0==n.status?t.scenes=n.data.appearance:n.msg&&e.showErrorTip(n.msg)},function(t){e.showErrorTip("当前无网络，请检查您的网络状态！")})}}}}).call(t,n(0),n(2))}});