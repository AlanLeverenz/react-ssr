const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack that we're building a bundle for nodeJS, instead for the browser
    target: 'node',

    // tell webpack the root file of our server application
    entry: './src/index.js',

    // tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // does not insert libraries into server bundle file if library already exist in node modules folder
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);