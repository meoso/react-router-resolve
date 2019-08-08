module.exports = {
    mode: 'production',
    entry: ['./index.js'],
    output: {
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    externals: ['react-router-dom', 'prop-types', 'react'],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        cacheWithContext: false
    },
    node: {
        fs: "empty"
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [{
            test: /\.js(x)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};
