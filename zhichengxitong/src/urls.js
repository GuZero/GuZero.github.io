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
    tasks: window.config.API+'/v1/tasks?',
    //提交工单
    task: window.config.API+'/v1/tasks',
    //列出我待办的工单数量
    num:window.config.API+'/v1/tasks/my',
    //查看工单详情
    orderinfo:window.config.API+'/v1/tasks/',
    //获取工单需要的选项信息
    option:window.config.API+'/v1/tasks/option',
    //获取故障分类
    fault:window.config.API+'/v1/tasks/troubles?appearance_id=',
    //搜索用户
    user:window.config.API+'/v1/users?name=',
    //搜索手机号或终端名称
    search:window.config.API+'/v1/delivery/orders?'



};
