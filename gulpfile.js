'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', function () {
  gulp.src('./src/**/*.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer(['> 1%', 'last 2 version']))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./src/'));
});

gulp.task('babel', function() {
  gulp.src('./src/**/*.jsx')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel({whitelist: ['react', 'es6.blockScoping', 'es6.spread']}))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./src/'));
})

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('babel:watch', function() {
  gulp.watch('./src/**/*.jsx', ['babel']);
})