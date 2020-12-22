const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: "./app/main.ts",
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'app/dist'),
        compress: true,
        port: 8080,
        watchContentBase: true
    },
    watch: true,
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new JsonMinimizerPlugin(),
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'app', 'assets/phones'), to: path.resolve(__dirname, 'app/dist/phones')},
                {from: path.resolve(__dirname, 'app', 'assets/img'), to: path.resolve(__dirname, 'app/dist/img')}
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app', 'index.html'),
            inject: 'body',
            filename: 'index.html'
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                // Lossless optimization with custom option
                // Feel free to experiment with options for better result for you
                plugins: [
                    ['mozjpeg', { progressive: true }]
                ],
            },
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                use: ['raw-loader']
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.json/i,
                type: "javascript/auto",
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ]
            }
        ]
    }
};
