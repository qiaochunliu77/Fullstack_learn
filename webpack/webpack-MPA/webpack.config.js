const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');// html 
// loader 内容的转换 
// plugin 监听webpack生命周期 在对应的 做什么事 拿到打包的资源 插入到html 
module.exports = {
    entry: {
		"order": "./src/pages/order/index.js",
		"promation":'./src/pages/promation/index.js'
    },
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							"presets":[
								"@babel/preset-env", 
								"@babel/preset-react"
							],
						}
					}
				],
			}
		],
	},
	plugins: [
    new HtmlWebpackPlugin({
        template:'./src/pages/order/index.html',
		filename:'order.html',
		chunks: ["order"]
    }), 
    new HtmlWebpackPlugin({
        template:'./src/pages/promation/index.html',
		filename:'promation.html',
		chunks: ["promation"]
    })
  ]
};
