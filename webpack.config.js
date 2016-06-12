module.exports = {
    entry: "./app/index.jsx",
    output: {
        path: __dirname + '/dist/scripts',
        filename: "cube.bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.styl$/,
            loader: 'style-loader!css-loader!stylus-loader'
        }]
    },
    watch: true
};
