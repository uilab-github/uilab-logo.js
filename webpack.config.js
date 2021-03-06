const path = require('path');
const webpack = require('webpack');

module.exports = mode => ({
    cache: true,
    mode,
    entry: {
        'uilab-logo.bundle': ['babel-polyfill', './src/browser.js'],
    },
    output: {
        path: path.join(__dirname, 'lib'),
        publicPath: '/lib/',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                use: ['babel-loader'],
            }
        ],
    },
    plugins: mode === 'development' ? [
        new webpack.HotModuleReplacementPlugin(),
    ] : [],
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: '.',
        publicPath: '/assets/',
    },
});