// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
let pathsToClean = [
    'jsdist'
  ]
  
  // the clean options to use
  let cleanOptions = {
    root:__dirname,
    exclude:  [],
    verbose:  true,
    dry:      false
  }
module.exports = {
    mode: "development",
    entry: __dirname + '/jssrc/main.js',
    output: {
        path: __dirname + "/jsdist",
        filename: 'bundle.js?v=[hash]'
    },
    devtool: 'none',
    devServer: {
        contentBase: "./html", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                      'postcss-loader',
                    'sass-loader',

                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin('jsdist/bundle-[hash].js', {
          root: __dirname,
          verbose: true,
          dry: false
      })
      ]

};