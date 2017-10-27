const path = require('path')
const utils = require('./build/utils')
const config = require('./config')
const vueLoaderConfig = require('./build/vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    /* 输入文件 */
    entry: {
        main: './src/main.js'
    },
    output: {
        /* 文件名 */
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dev/static/js'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {}
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyJS: true
            },
            filename: path.resolve(__dirname, './dev/index.html'),
            template: path.resolve(__dirname, './src/index-template.html'),
        }),
        new CleanWebpackPlugin([__dirname + '/dev/static/js']),
    ]
}