const path = require('path');
const webpack = require('webpack');
const baseDir = '/zhichengxitong/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const AppCachePlugin = require('appcache-webpack-plugin');
const Manifest= require('webpack-manifest');
const pkg =require('./package');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        bundle: __dirname + baseDir + 'src/main.js'
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
        path: __dirname + baseDir + 'dist/js',
        publicPath: 'dist/js/'
    },

    /*externals: {
        'vue$': 'Vue',
        'vue-router$': 'VueRouter'
    },*/

    devServer: {
        hot: false,
        contentBase: __dirname + baseDir,
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                scss: 'vue-style-loader!css-loader!sass-loader'
//                              css: ExtractTextPlugin.extract({
//                                  use: 'css-loader',
//                                  fallback: 'vue-style-loader'
//                              })
//                              ,scss: 'vue-style-loader!css-loader!sass-loader',
//                              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'sass-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'less-loader',
                ],
            },
        ],
    },

    resolve: {
        alias: {
            jquery: __dirname + baseDir + 'src/lib/jquery.min.js',
            lab: __dirname + baseDir + 'src/lib/lab.min.js',
            store: __dirname + baseDir + 'src/lib/store.min.js',
            util: __dirname + baseDir + 'src/util.js',
            urls: __dirname + baseDir + 'src/urls.js',
//            vue$: 'vue/dist/vue.js'
        },
        extensions: ['.js', '.vue', '.json', '.scss', 'less']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            $LAB: 'lab',
            store: 'store',
            _util: 'util',
            ajaxUrls: 'urls'
        }),
        
        new HtmlWebpackPlugin({
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            template: __dirname + baseDir + 'index-template.html',
            filename: __dirname + baseDir + 'index.html'
        }),
        new CleanWebpackPlugin([ __dirname + baseDir + 'dist/js']),
        
        new AppCachePlugin({
            cache: [
                    'src/lib/css/app.css',
                    '//cdn.bootcss.com/vue/2.2.6/vue.min.js',
                    '//cdn.bootcss.com/vue-router/2.3.0/vue-router.min.js',
                    '//cdn.bootcss.com/axios/0.15.3/axios.min.js',
                    '//img.aimoge.com/Fklf55k94DKYun6WI2_BqGlBh1r0',//成功模态框icon
                    '//img.aimoge.com/FhxFw9bG_wGDCcF1Mllyedsb8cmz',//返回顶部icon
                    '//img.aimoge.com/FqA7Kv6H770AcP8_gNy1rf_nqJMH',//loading icon
                    '//img.aimoge.com/FjmANRvf07CVvfV-21eJlqTNHC3u',//空柜子数据显示
                    '//img.aimoge.com/Fni7BRPW0l9DbRzYiDzOvHDl3bbJ',//返回按钮黑
                    '//img.aimoge.com/Fo4ghwdR7Qmg7UcAYZMkYQ3y6AzC',//主页 消息中心铃铛按钮黑
                    '//img.aimoge.com/Fvl8P6rvilSrSn_U0h3Jpja70JGw',//主页 搜索按钮黑
                    '//img.aimoge.com/FhUXzqoIW9-TUp0AKyWGOxmwoB2j',//添加的加号按钮黑
                    '//img.aimoge.com/FplSaRX6mmWSi_i6_gF-KCnZ1tzg',//输入按钮黑
                    '//img.aimoge.com/FnL-WpHNd6pm7vn75TnNq97gkNGN',//填写确认打勾按钮黑
                    '//img.aimoge.com/Fq5v2u_aZEI_XWcIWyxJj77LNP9F',//底部导航的工单选项按钮
                    '//img.aimoge.com/FsdI2LL12AlAHe9jZ_rg-bmHdsv2',//底部导航的工单选项按钮高亮状态
                    '//img.aimoge.com/FsUUHOWcJjWybrO69hY8Z3v8Ff2m',//底部导航的终端选项按钮
                    '//img.aimoge.com/FgQI3lncGEyoDPBg-p4oqUru6Ux8',//底部导航的终端选项按钮高亮
                    '//img.aimoge.com/Fto4ZCTWgI2-zMccCmNH6HSSTbsj',//底部导航的个人中心选项按钮
                    '//img.aimoge.com/Fu6ilW1o5KmKb7tNdsQD-GCJbTYL',//底部导航的个人中心选项按钮高亮
                    '//img.aimoge.com/Ft9NvBA28rPsjMzwoBjBAuLsXenk',//终端详情底部基本信息选项按钮
                    '//img.aimoge.com/Fu9ui9C6CT4tBPFfhlNW5Yx1-h1S',//终端详情底部基本信息选项按钮高亮
                    '//img.aimoge.com/Fhc0R4XcMoW3gizVnDoGdgMhmk6j',//终端详情底部设备信息选项按钮
                    '//img.aimoge.com/Fq35orxmH4AOqqBL5HmkUDOvYdZC',//终端详情底部设备信息选项按钮高亮
                    '//img.aimoge.com/FozNTCDg9xuGUHwELdxGs5zbjZ6F',//终端详情底部广告排期选项按钮
                    '//img.aimoge.com/FkwsWQ9SRSpwDli406FywWcnbsHL',//终端详情底部广告排期选项按钮高亮
                    '//img.aimoge.com/Fj807yViKPo-gR_ZbDSoRfCnj_g6',//终端详情底部状态日志选项按钮
                    '//img.aimoge.com/Fh2dDpoOg-OlYiyh9GhU61hIwakC',//终端详情底部状态日志选项按钮高亮
                    '//img.aimoge.com/FmTfK3j8yrTQpKq_jaSbDkQWS29U',// 分享到朋友圈的文字
                    '//img.aimoge.com/FuBwJB9xafDv2zrrJWQDq3sKYXyp',//搜索页内容无结果图标
                    '//img.aimoge.com/FgEMgxglGfI7DWuyL0-DQAQ1mhE8',//头像
                    '//img.aimoge.com/Fq2jHaTMAD8ds8JCcZjYEXHBAERN',//主页 创建+号按钮
                    '//img.aimoge.com/FsSDETnGMxWOFzvF15BLkL9an2M-',//主页 工单状态 处理中icon
                    '//img.aimoge.com/Fs3sPZGoiBl2zPIi_FS7yOrCw_15',//主页 工单状态 已完成icon红色警告
                    '//img.aimoge.com/FoSwqghIf_uF504pPDsAEWTbBTJ_',//主页 工单状态 已完成icon绿色
                    '//img.aimoge.com/Fl1S3WqI_mdGIBD2toXw4pqk62g-',//终端详情 设备信息 扫描按钮
                    '//img.aimoge.com/Fseye1socv7wcHZNiEca2JGzTrGz',//登录页 输入手机号 手机icon
                    '//img.aimoge.com/Fj6ivplQiYNceEuZ5yE2vMPnVuaF',//登录页 输入密码 密码icon
                    '//img.aimoge.com/Fn0wLikUitDAUkJTBe8EQYMgKxnD',//主页我的 右侧箭头进入按钮
                    '//img.aimoge.com/Fuf9HuRe7Rxr0x7JDi43ZUyfLV-q',//主页我的 修改密码按钮
                    '//img.aimoge.com/Fm6RoQ1_c9OTyG_u4XX9RJWNQDlA',//主页我的 清除缓存按钮
                    '//img.aimoge.com/FqrWepR4_PZVxGu26BQzajnEF8p_',//主页我的 查看版本按钮
                    '//img.aimoge.com/FumRbbPFMoPuFlQ0FfEhFKYCrYHn',//主页 工单状态 已完成icon灰色按钮
                    '//img.aimoge.com/FsuuD8aOo52Dliz1y8UktMYYGmMw',//主页 工单状态 处理中icon
                    '//img.aimoge.com/Fk9aSSC8wW8vizLqHadfwRIYPWSl',//搜索页 搜索按钮
                    '//img.aimoge.com/Fmk8zWI05wAqS7_ry24rCqCzEsC2'//上传图片 loading页
                ],
            network: null,  // No network access allowed! 
            fallback: [],
            settings: ['prefer-online'],
            headcomment: pkg.name + " v" + pkg.version, 
            exclude: ['file.txt', /.*\.html$/],  // Exclude file.txt and all .js files 
            output: 'manifest.appcache'
           }),


        // new webpack.optimize.UglifyJsPlugin({
        //     comments: false,        //去掉注释
        //     minimize: true,
        //     compress: {
        //         warnings: false     //忽略警告,要不然会有一大堆的黄色字体出现……
        //     }
        // })
    ]
};