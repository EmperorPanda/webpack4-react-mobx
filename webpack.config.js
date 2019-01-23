const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");// 参照模板生成HTML
const uglifyjs = require('uglifyjs-webpack-plugin'); //压缩js插件
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader" ,"css-loader" // 原有方式
        ]
      }
    ]
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new uglifyjs(),//压缩js文件
  ]
};