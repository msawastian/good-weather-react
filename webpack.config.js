var path = require("path");

module.exports = {
    entry: "./jsx/app.js",
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, "js")
    },
    mode: "development",
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}},
                    {loader: "sass-loader", options: {sourceMap: true}}
                ]
            }
        ],
    },
    devServer: {
        inline: true,
        contentBase:"./",
        port: 3001
    }
};