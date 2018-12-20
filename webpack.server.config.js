const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './server.js',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    target: 'node',
};
