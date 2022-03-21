const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.css', 'ts', '.tsx']
    },
    module: {
        rules: [{
                test: /(\.tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    }
};