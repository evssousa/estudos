// const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\,js$/,
            use: ['babel.loader']
        }]
    },
    output: {
        // path: path.resolve(__dirname, 'public'),
        filename: '[name].min.js'
    }
}