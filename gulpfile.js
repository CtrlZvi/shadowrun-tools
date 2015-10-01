'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('./src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});