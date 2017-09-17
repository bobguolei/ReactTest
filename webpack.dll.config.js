const webpack = require('webpack');
const path = require("path");
const fs = require('fs');
const vendors = [

    'react', //这里添加第三方库文件
    "react-dom",
    "react-router-dom",
    "redux",
    "react-redux",
    "react-router-redux",
    "redux-thunk"  
];

module.exports = {

    entry: {
        vendor: vendors,
    },
    output: {
        path: path.join(__dirname + '/build'),
        filename: '[name].dll.js',
        library:'[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname + "/build" + '/manifest.json'),
            name: '[name]_library',
            context: __dirname,
        }),
    ],
};
//console.log(path.join(__dirname+"/build"));