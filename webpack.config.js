const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname,'dist'),
        filename : '[name].js'
    },
    resolve: {
        extensions: ['.js','.jsx','json','.css'],  //指定extension之后可以不用在require或是import的时候加文件扩展名,会依次尝试添加扩展名进行匹配
        alias: {      //配置别名，加快查找模块速度
            'wuCom': path.resolve(__dirname,'./src/common/wuCom')
        }
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    // query: {
                    //     presets: ['env', 'stage-0', 'react'] // env转换es6 stage-0转es7 react转react
                    // }
                }
            },{
                test: /\.(css|less)$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'},
                    // {loader:'postcss-loader'},
                ],
                // include: path.join(__dirname, 'src'), //限制范围，提高打包速度
                // exclude: /node_modules/
            }
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname,"dist"),
        port: 9090,
        // host: 'localhost',
        inline: true
    }
};