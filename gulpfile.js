"use strict";

let gulp = require("gulp");
let gutil = require("gulp-util");
let webpack = require("webpack");
let WebpackDevServer = require("webpack-dev-server");
let webpackConfig = require("./webpack.config.js");

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
    gulp.watch(["app/**/*"], ["webpack:build-dev"]);
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
    let config = Object.create(webpackConfig);
    config.plugins = config.plugins.concat(
        new webpack.DefinePlugin({
            process: {
                env: {
                    // This has effect on the react lib size
                    "NODE_ENV": JSON.stringify("production")
                }
            }
        })
    );
    // Make lint check failures fail the build
    config.tslint = {
        emitErrors: true,
        failOnHint: true,
    };

    // run webpack
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "source-map";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
    // run webpack
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var config = Object.create(webpackConfig);
    config.devtool = "eval-source-map";
    config.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(config), {
        publicPath: "/" + config.output.path,
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});
