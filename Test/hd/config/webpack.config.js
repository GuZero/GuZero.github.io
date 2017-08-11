var path = require('path');
var webpack = require('webpack');
var baseDir = '/hd/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    /* 输入文件 */
    entry: __dirname + baseDir + 'src/main.js',
    output: {
        /* 文件名 */
        filename: 'bundle.[chunkhash:8].js',
        // chunkFilename: '[name].[chunkhash:8].js',
        /* 输出目录，没有则新建 */
        path: __dirname + baseDir + 'dist',
        /* 静态目录，可以直接从这里取文件 */
        publicPath: 'dist',
        
       
    },
    devServer: {
        hot: false,
        contentBase: __dirname + baseDir,
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            scss: 'vue-style-loader!css-loader!sass-loader'
                        }
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
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
            util: __dirname + baseDir + 'src/util.js',
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
            _util: 'util'
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
        new CleanWebpackPlugin([ __dirname + baseDir + 'dist']),
    ]
}