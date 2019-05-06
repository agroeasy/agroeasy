const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: '',
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                extractComments: true,
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
            }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },
    plugins: [
        new BrotliPlugin({
            asset: '[path].br[query]',
            minRatio: 0.8,
            test: /\.(js|css|html|svg)$/,
            threshold: 10240
        }),
        new CompressionPlugin({
            algorithm: 'gzip',
            filename: '[path].gz[query]',
            minRatio: 0.8,
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240
        })
    ]
};
