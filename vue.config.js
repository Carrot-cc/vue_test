const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
    .set('@',resolve('src')) // 设置@取代src
    .set('_c',resolve('src/components'))
  },
  // 打包时不生成.map文件, 减少打包体积, 加快打包速度
  productionSourceMap: false,
  devServer: { // 跨域,代理
    proxy: 'http://localhost:4000' // 没有匹配到静态文件的请求,代理到这个url, 
  }
}