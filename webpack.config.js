"use strict";

let glob = require("glob");
let path = require("path");
let webpack = require("webpack");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    entry: ["./app/5e/character-sheet/main.tsx"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.tsx$/,
                loader: "babel!ts"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!autoprefixer?{browsers:['> 1%', 'last 2 version']}!sass"
                )
            },
            {
                test: /\.png$/,
                loader: "file"
            },
            {
                test: /\.woff$/,
                loader: "file"
            },
        ],
        preLoaders: [
            {
                test: /\.tsx$/,
                loader: "tslint"
            },,
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx", ".png", ".woff"]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};