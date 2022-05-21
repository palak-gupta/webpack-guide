const path = require('path')

const config = {
    mode: 'development',
    entry: '/src/index.js', // Entry file which will have the codebase that needs to be bundled
    output: {
        path: path.resolve(__dirname, 'dist'), // directory where bundle will be generated in 
        filename: 'bundle.js' // filename of the generated bundle
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
            }
        ]
    }
}

module.exports = config
