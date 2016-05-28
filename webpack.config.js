module.exports = {
    entry: "./main.jsx",
    output: {
        path: __dirname + '/src/bundle',
        filename: "script.bundle.js"
    },
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
