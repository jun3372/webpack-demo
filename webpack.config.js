const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 清理历史打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 打包css文件

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: 'style/[name].css'}),
        new HtmlWebpackPlugin({template: './src/html/index.html', title: "Webpack App"}),
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
                use: [{loader: 'file-loader', options: {outputPath: 'images', publicPath: './images'}}]
                // 显示原文件名称: options{ name: '[name].[ext]' }
            }
        ]
    }
};