
const config = {
    entry: './src/index.js',
    devServer:{
        hot:true,//热更新
        contentBase:'./dist'//静态资源dist目录
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    module: {
        rules:[
            {
                test:/(.js|.jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    }
}
module.exports = config
