import { resolve } from 'dns';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const DEV_PATH = path.resolve(ROOT_PATH, 'dev');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

const getEntrys = require('./getEntrys')();

const env = process.env.NODE_ENV;

const HtmlWebpack = [];
Object.keys(getEntrys).forEach((item, index) => {
    let chunks = [item];
    switch (item) {
        case 'app':
            item = 'index';
            break;
        case 'user':
            item = 'user';
            break;
    }
    HtmlWebpack[index] = new HtmlWebpackPlugin({
        filename: `./${item}.html`,
        template: `./src/page/${item}.html`,
        chunks: chunks,
        inject: true, //允许插件修改哪些内容，包括head与body
        hash: true, //为静态资源生成hash值
        minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        }
    })
});

const CommonChunk = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        filename: "commons.js",
        minChunks: 2,
    })
]

const commonPlugin = [
    new webpack.HotModuleReplacementPlugin(),

    new CopyWebpackPlugin([{
        from: path.resolve(APP_PATH, 'assets'),
        to: env === 'development' ? path.resolve(DEV_PATH, 'assets') : path.resolve(BUILD_PATH, 'assets')
    }])
]
module.exports = {
    entity: getEntrys,
    output: {
        path: env === 'development' ? DEV_PATH : BUILD_PATH,
        filename: '[name].js'
    },
    devtool: env === 'development' ? 'cheap-module-eval-source-map' : 'hidden-source-map',
    devServer: {
        contentBase: ROOT_PATH,
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
        port: 8888
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            enforce: 'pre'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, , {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
            //loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader
            include: APP_PATH
        }, {
            test: /\.(png|jpg|gif|jpeg)$/, //处理css文件中的背景图片
            loader: 'url-loader?limit=1&name=./static/assets/[name].[hash:4].[ext]'
                //当图片大小小于这个限制的时候，会自动启用base64编码图片。减少http请求,提高性能
        }, {
            test: /\.html$/, //获取html里面的图片
            loader: 'html-loader'
        }, {
            //当我们需要读取json格式文件时，我们不再需要安装任何loader，webpack2中将会内置 json-loader，自动支持json格式的读取（喜大普奔啊）。
            test: /\.json$/, //获取json数据的loader
            loader: 'json-loader'
        }, {
            test: /\.js$/, //用babel编译jsx和es6
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
                plugins: [
                    ["transform-object-rest-spread"],
                    ["transform-runtime"]
                ]
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx', '.vue'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components'),
            'common': path.resolve(__dirname, './src/common')
        }
    },
    plugins: HtmlWebpack.concat(commonPlugin),
    watch: env === 'development' ? true : false
}
switch (env) {
    case 'production':
        module.exports.plugins = (module.exports.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new CleanPlugin([BUILD_PATH]),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true
                },
                minimize: true,
                comments: false,
                beautify: false,
                sourceMap: false
            })
        ]);
        break;
}