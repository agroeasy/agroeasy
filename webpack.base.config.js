const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    chunks: 'all',
                    enforce: true,
                    name: 'styles',
                    test: /\.css$/,
                },
            },
        },
    },
    output: {
        chunkFilename: "[id].[hash].js",
        filename: "[name].[hash].js",
        path: `${__dirname}/dist`,
    },
    performance: {
        hints: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            filename: devMode ? '[name].css' : '[name].[hash].css',
        }),
        new CopyWebpackPlugin([{
            from: 'images/',
        }]),
        new ImageminPlugin({
            bail: false, // Ignore errors on corrupted images
            cache: true,
            imageminOptions: {
                plugins: [
                    imageminGifsicle({
                        interlaced: true,
                    }),
                    imageminJpegtran({
                        progressive: true,
                    }),
                    imageminOptipng({
                        optimizationLevel: 5,
                    }),
                    imageminSvgo({
                        removeViewBox: true,
                    }),
                ],
            },
            name: '[name].[ext]',
        }),
    ],
    target: 'web',
};
