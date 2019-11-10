const path = require('path')
const nodeExternals = require('webpack-node-externals')


// 关于target: 'node'
// 若在一个模块引入了path模块
// require('path')
// 在node环境中，并不会把path模块的代码打包到生成的文件中，而若是普通环境(浏览器端)，会把path模块打包出来
// 但是node_modules中的文件依然会被打包，这时还要配合webpack-node-externals设置external
// webpack的externals文档： https://webpack.docschina.org/configuration/externals/


module.exports = {
  target: 'node',  // 若要使用webpack打包node端的代码，需要加上此项
  externals: [nodeExternals()],
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      }
    ]
  }
}