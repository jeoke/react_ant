const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const { setup } = require('webpack-dev-server/lib/Server');


module.exports =  {
  entry:['babel-polyfill','react-hot-loader/patch','./src/app.js'],
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:"[name].js",
    publicPath:'/'
  },
  module:{
    rules:[
          {
             test:/\.(css|less)$/,
             use: ['style-loader','css-loader', 'postcss-loader',
             { loader:'less-loader', options: {
                javascriptEnabled: true,
                modifyVars:{
                                "primary-color":"#09283B",
                                "layout-header-background":"#09283B",
                                "layout-body-background":"#09283B"
                            }
             }}
            ]
          },
          {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:['babel-loader']
          },
          {
            test:/\.(jpe?g|png|gif|svg)$/,
            use:['url-loader']
          },
          {
            test:/\.(woff|woff2|eot|ttf|otf)$/,
            use:['url-loader']
          },
          {
            test:/\.txt$/,
            use:['raw-loader']
          }
    ]
  },
    optimization:{
      minimize:false,
      runtimeChunk:{
        name:'vendor'
      },
      splitChunks:{
        cacheGroups: {
            default: false,
            commons: {
              test: /node_modules/,
              name: "vendor",
              chunks: "initial",
              minSize: 1
            }
        }
      }
    },
  plugins:[
       new CleanWebpackPlugin(['dist']),
       new webpack.HotModuleReplacementPlugin(),
       new HtmlWebpackPlugin({
            title:'react-project',
            favicon:path.resolve(__dirname,'public/favicon.ico'),
            template:path.resolve(__dirname,'src/index.html'),
            filename:'index.html',
            inject:'body',
            minify:{
              collapseWhitespace:true,
              removeComments:true,
              removeAttributeQuotes:true
            }
       }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
          filename: 'css/[name].css?[hash]-[chunkhash]-[name]',
          allChunks: true,
          disable: false,
        }),
  ],
  resolve:{
      modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
      descriptionFiles: ['package.json'],
      extensions:['.js','jsx','.json','.ts']
  },
   node: {
    fs: 'empty',
    net: 'empty'
  }
};