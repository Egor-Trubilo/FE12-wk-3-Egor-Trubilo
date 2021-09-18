const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: { index: '/' }
  },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
    })], 
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    },
    ],
  },
}