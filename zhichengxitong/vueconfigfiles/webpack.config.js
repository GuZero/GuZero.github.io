//const { resolve } = require('path');
const webpack = require('webpack');
const baseDir = '/zhichengxitong/';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
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
//								css: ExtractTextPlugin.extract({
//									use: 'css-loader',
//									fallback: 'vue-style-loader'
//								})
//								,scss: 'vue-style-loader!css-loader!sass-loader',
//                        		sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
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
        
//		new ExtractTextPlugin("style.css"),

        /*new webpack.optimize.UglifyJsPlugin({
            comments: false,        //去掉注释
            minimize: true,
            compress: {
                warnings: false     //忽略警告,要不然会有一大堆的黄色字体出现……
            }
        })*/
    ]
};