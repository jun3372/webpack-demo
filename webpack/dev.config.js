const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 清理历史打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 打包css文件
const webpack = require("webpack");

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].[hash].main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: '../dist',
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({ // 默认常量
            APP_NAME: `"${require('../package.json').name}"`,
            APP_VERSION: `"${require('../package.json').version}"`
        }),

        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: './src/html/index.html'}),
        new MiniCssExtractPlugin({filename: 'style/[name].css'}),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {outputPath: 'images', name: '[name].[hash].[ext]', publicPath: '../images'}
                }]
                // 显示原文件名称: options{ name: '[name].[ext]' }
            },
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader', 'awesome-typescript-loader'],
                exclude: /node_modules/
            }
        ]
    }
};