const path = require('path')

const config = {
    mode: 'development',
    entry: '/src/index.js', // Entry file which will have the codebase that needs to be bundled
    output: {
        path: path.resolve(__dirname, 'dist'), // directory where bundle will be generated in 
        filename: 'main.js' // filename of the generated bundle
    }
}

module.exports = config
