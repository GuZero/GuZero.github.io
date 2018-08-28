const path = require('path');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const ip = require('ip');

const miSend = require('./mi-send');
const miLog = require('./mi-log');
const miHttpError = require('./mi-http-error');

// 引入规则中件间
const miRule = require('./mi-rule')

module.exports = (app) => {

    app.use(miHttpError({
        errorPageFolder: path.resolve(__dirname, '../errorPage')
    }))

    // 将配置中间件的参数在注册中间件时作为参数传入
    app.use(miLog({
        env: app.env, // koa 提供的环境变量
        projectName: 'koa2-tutorial',
        appLogLevel: 'debug',
        dir: 'logs',
        serverIp: ip.address()
    }))

    app.use(staticFiles(path.resolve(__dirname, "../public")))

    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),
        nunjucksConfig: {
            trimBlocks: true
        }
    }));

    app.use(bodyParser())
    app.use(miSend())
    app.use(miSend());

    miRule({
        app,
        rules: [{
                path: path.join(__dirname, '../controller'),
                name: 'controller'
            },
            {
                path: path.join(__dirname, '../service'),
                name: 'service'
            }
        ]
    })
}