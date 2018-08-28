require.config({
    baseUrl: '../js',
    urlArgs: "t=20180423",
    paths: {
        //TODO 配置框架与库
        "jquery": ['//cdn.bootcss.com/jquery/3.3.1/jquery.min'],
        //TODO 配置工具类库
        "axios": ['//cdn.bootcss.com/axios/0.18.0/axios'],
        "template":['../js/util/art-template'],
        "_util": ['../js/util/common'],
        //TODO 配置插件
        "layer": ['//cdn.bootcss.com/layer/3.1.0/mobile/layer'],
        "require-css": ['//cdn.bootcss.com/require-css/0.1.10/css.min'],
        //TODO 配置业务逻辑
        "index":['../js/controller/index']
    },
    shim: {
        layer: {
            deps: ['css!//cdn.bootcss.com/layer/3.1.0/mobile/need/layer.css']
        },
        template:{
            exports:"template"
        }
    },
    map: {
        '*': {
            'css': 'require-css'
        }
    }
})

function load(model, callBack) {
    require(['jquery'], function () {
        if (model) {
            require(model, callBack && callBack());
        }
    })
}