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
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}},
                    {loader: "sass-loader", options: {sourceMap: true}}
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ],
    },
    devServer: {
        inline: true,
        contentBase:"./",
        port: 3001
    }
};