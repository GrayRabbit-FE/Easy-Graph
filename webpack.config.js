const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.css', '.ts']
    },
    module: {
        rules: [{
                test: /(\.jsx|\.tsx|\.ts)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    }
};