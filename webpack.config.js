"use strict";

let glob = require("glob");
let path = require("path");
let webpack = require("webpack");
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let cssExtractor = new ExtractTextPlugin("[name].css")

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
                loaders: cssExtractor.extract(
                    [
                        "style"
                    ],
                    [
                        "css",
                        "autoprefixer?{browsers:['> 1%', 'last 2 version']}",
                        "sass"
                    ]
                ).split("!")
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
        cssExtractor
    ]
};