const webpack=require('webpack');
var extractTextPlugin=require('extract-text-webpack-plugin');
var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');
var bootstrap=require('./webpack.bootstrap.config');
var SplitByPathPlugin=require('webpack-split-by-path');
var isProd=process.env.NODE_ENV === 'production';
var CopyWebpackPlugin = require('copy-webpack-plugin');


var devCssLoader=['style-loader','css-loader','sass-loader'];

var prodCssLoader=extractTextPlugin.extract
({
    fallback:'style-loader',
    use:["css-loader","sass-loader"],
    publicPath:'/dist/style'    
});

var cssConfig=isProd? prodCssLoader : devCssLoader;

var bootstrapConfg=isProd? bootstrap.prod : bootstrap.dev;

//const extractCSS = new extractTextPlugin('./style/[name].css');
module.exports={
    entry:{
        app:"./src/scripts/Init.js",
        bootstrap:bootstrapConfg
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'scripts/[name].bundle.js'
    },
    module:{
        rules:[            
            {test:/\.scss$/,exclude:/style/,use:cssConfig},
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['es2015','react']
                    }    
                }
            },
            {test:/\.png$/i,use:'file-loader?name=[name].[ext]&outputPath=images/'},
            {test:/\.jpg$/i,use:'file-loader?name=[name].[ext]&outputPath=images/'},
            {test:/\.(ttf|eot|otf)$/i,use:'file-loader?name=[name].[ext]&outputPath=fonts/'},
            {test:/\.(woff|woff2|svg)$/i,use:'url-loader?limit=10000&name=[name].[ext]&outputPath=fonts/'},
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader' }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open:true
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'mypage',
            hash:true,
            filename:'index.html',
            template:'./src/index.html'
        }),
        new extractTextPlugin('app.css'),
        new CopyWebpackPlugin([
            { from: path.join(__dirname,'src/script'),to: path.join(__dirname,'dist/scripts') },
            { from: path.join(__dirname,'src/style'),to: path.join(__dirname,'dist/styles') }
        ])
    ]
}