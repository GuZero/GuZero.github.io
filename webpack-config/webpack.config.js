const path = require('path');
const webpack = require('webpack');
const baseDir = '/ncshop/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    /* 输入文件 */
    entry: {
        main: __dirname + baseDir + 'src/main.js',
//        css: __dirname + baseDir + 'src/lib/static/css/global.css',
    },
    output: {
        /* 文件名 */
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
        /* 输出目录，没有则新建 */
        path: path.join(__dirname, baseDir + 'src/lib/dist/js/'),
        /* 静态目录，可以直接从这里取文件 */
        //        publicPath: '//',
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
                exclude: /node_modules/ /* 排除模块安装目录的文件 */
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['autoprefixer-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },
        ],
    },
    resolve: {
        alias: {
            jquery: 'jQuery',
            util: __dirname + baseDir + 'src/util.js',
        },
        extensions: ['.js', '.vue', '.json', '.scss', 'less']
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: true
        }),
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
            },
            template: __dirname + baseDir + 'index-template.html',
            filename: __dirname + baseDir + 'index.html'
        }),
        new CleanWebpackPlugin([__dirname + baseDir + 'src/lib/dist/js/'])
    ]
}
