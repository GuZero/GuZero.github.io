function NumAscSort(a, b) {
    return parseInt(a) - parseInt(b);
}

function NumDescSort(a, b) {
    return (+a) - (+b);
}
var str = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
var arr = str.split(' ');
console.log(`${Math.max(...arr)}`);
//柜子开发运营 type=1000
var extend={
	operator_mobile:'',//快递员手机号
	operator_city:'',//快递员城市
}
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
}
//欠费（电费）type=1002
var extend={
	start_date:'',
	end_date:'',
	power_fee:''//电费
	dianfeli:'',//度数
}
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
//欠费（场地费）type=1003
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
//合同到期 type=1004
var extend={
	contract_end_date:''//合同到日期
}
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
// 电路问题（物业） type=1005
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
// 电路问题（我方） type=1006
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
// 小区业主阻挠 type=1016
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
// 柜子安装点位不合理 type=1017
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
// 快递员充值发票 type=1023
var extend={
	operator_mobile:'',
	operator_city:'',
	money:''
}
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
}
// 快递员余额提现 type=1025
var extend={
	operator_mobile:'',
	operator_city:'',
}
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
}
// 柜子扩容 type=1017
var extend={
	tenement:''//物业
}
var data={
	project_id:'',//项目
    pid: 0,
	type: '',//分类
    title: '',//标题
    content: '',//内容
    priority: '',//优先级
    deadline: '',//超时时间
    //
    terminal_code:'',//终端
}
// 柜子开发运营 工单详情
var data={//common
  '创建者':'',
  '处理人':'',
  '项目':''
  '类型':''
}
var extend={//快递员积分
	'快递员手机号':''
	'快递员城市':''
}
var extend={//欠费（电费）
	'结算开始时间':'',
	'结算结束时间':'',
	'电费':'',
	'度数':''
}
var extend={//合同到期
	'合同到日期':''
}
var extend={//快递员充值发票
	'快递员手机号':''
	'快递员城市':''
}
var extend={//快递员余额体现
	'快递员手机号':''
	'快递员城市':''
}
var extend={//柜子扩容
	'物业':''
}