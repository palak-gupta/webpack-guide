const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new htmlWebpackPlugin(
            {title: 'Output Management'}
        )
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    {
                        loader:'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|ttf)$/i,
                type: 'asset/resource'
            },
        ]
    },
}

module.exports = config
