# webpack4-react-mobx
## 此项目搭建参考文章链接
https://www.css88.com/archives/9427
## 项目上传参考文章链接
- 删除已经存在的无用项目，请自行百度；
- 新项目上传参考文章：
https://blog.csdn.net/chenzhijie101/article/details/79512336

## 从零开始
创建项目文件夹
```
mkdir  react-webpack-demo
```
进入项目的跟目录
~~~
cd react-webpack-demo
~~~
创建package.json文件
```
npm init -y（-y省去一路的yes）
```
安装webpack webpack-cli
~~~
npm install webpack webpack-cli --save-dev
~~~
es6转es5
~~~
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
~~~
项目文件夹中创建一个名为 .babelrc 的新文件
~~~
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
~~~
 webpack-dev-server热更新
 ~~~
 npm i webpack-dev-server --save-dev
~~~
package.json文件
~~~
{
  "name": "react-webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.3.1",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.0",
    "file-loader": "^3.0.1",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "prop-types": "^15.6.2",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "style-loader": "^0.23.1",
    "url-loader": "^1.1.2",
    "webpack": "^4.29.0",
    "webpack-cli": "^3.2.1",
    "webpack-dev-server": "^3.1.14",
    "uglifyjs-webpack-plugin": "^2.1.1"
  },
  "dependencies": {
  }
}
~~~
webpack.config.js文件
~~~
const HtmlWebPackPlugin = require("html-webpack-plugin");// 参照模板生成HTML
const uglifyjs = require('uglifyjs-webpack-plugin'); //压缩js插件
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"// es6转es5
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
          'url-loader',//图片  CSS中引用和组件中import引用
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
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new uglifyjs(),//压缩js文件
  ]
};
~~~