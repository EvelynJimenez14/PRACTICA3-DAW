const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/Aplicacion.jsx",
    output: {
        path: path.resolve(__dirname, '../backendbase/public'),
        filename: "main.js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './plantilla/index.html',
            filename: 'index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../backendbase/public'),
        },
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
    }
};
