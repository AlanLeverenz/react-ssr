module.exports = {
// tell webpack to run babel on every file it runs through (to convert JSX and ES2015 code to ES5)
module: {
    rules: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-0',
                    ['env', { targets: { browsers: ['last 2 versions'] }}]
                ]
            }
        }
    ]
}
};