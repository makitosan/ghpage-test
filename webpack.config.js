module.exports = {
    entry: {
        'app': './src/app.js',
        'docs/js/app': './src/app.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map'
};
