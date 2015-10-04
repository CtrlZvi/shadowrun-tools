"use strict";

let glob = require("glob");
let path = require("path");
let webpack = require("webpack");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    entry: "./app/5e/character-sheet/main.tsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            { test: /\.tsx$/, loader: "babel-loader!ts-loader" },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
        ],
        preLoaders: [
            { test: /\.tsx$/, loader: "tslint-loader" },,
        ]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx", ".png", ".woff"]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};