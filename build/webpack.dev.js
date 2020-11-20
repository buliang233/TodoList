
const webpack = require('webpack');

const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const devConfig = {
	mode: 'development',
	// devServer配置
	devServer: {
	  // 指定服务器根目录
	  contentBase: './dist',
	  // 自动打开浏览器
	  open: true,
	  hot: true
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
}

module.exports = merge(baseConfig,devConfig)
