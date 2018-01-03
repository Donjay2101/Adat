const webpack=require('webpack');
var extractTextPlugin=require('extract-text-webpack-plugin');
var htmlWebpackPlugin=require('html-webpack-plugin');
var path=require('path');
var bootstrap=require('./webpack.bootstrap.config');
var SplitByPathPlugin=require('webpack-split-by-path');
var isProd=process.env.NODE_ENV === 'production';


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
            {test:/\.scss$/,use:cssConfig},
            {test:/\.css$/,use:cssConfig},
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['env','react']
                    }    
                }
            },
            {test:/\.png$/i,use:'file-loader?name=[name].[ext]&outputPath=images/'},
            {test:/\.jpg$/i,use:'file-loader?name=[name].[ext]&outputPath=images/'},
            {test:/\.(ttf|eot|otf)$/i,use:'file-loader?name=[name].[ext]&outputPath=./fonts/'},
            {test:/\.(woff|woff2|svg)$/i,use:'url-loader?limit=10000&name=[name].[ext]&outputPath=./fonts/'},
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open:true
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jQuery",
            jQuery:"jQuery"
        }),
        new htmlWebpackPlugin({
            title:'mypage',
            hash:true,
            filename:'index.html',
            template:'./src/index.html'
        }),
        new extractTextPlugin('[name].css'),
        new SplitByPathPlugin(
            [{ name: 'vendor', path: path.join(__dirname, 'script/')}],
            { ignore: [__dirname + '/node_modules/css-loader'] }
          )
    ]
}