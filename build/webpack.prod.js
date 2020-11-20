const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const prodConfig = {
	mode: 'production',
	// 打包的入口	
}
module.exports=merge(baseConfig,prodConfig)