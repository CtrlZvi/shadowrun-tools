'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();

let allSources = './src/**/*';

gulp.task('build', ['compile'])
gulp.task('build:watch', function() {
  gulp.watch(allSources, ['build'])
});

gulp.task('compile', ['babel:compile', 'sass:compile']);
gulp.task('compile:watch', function() {
  gulp.watch(allSources, ['compile'])
});

// JSX and ES6

gulp.task('babel:compile', function() {
  gulp.src('./src/**/*.jsx')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel({whitelist: ['react', 'es6.blockScoping', 'es6.spread']}))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./src/'));
})

gulp.task('babel:watch', function() {
  gulp.watch('./src/**/*.jsx', ['babel:compile']);
})

// SASS

let sassSources = './src/**/*.scss';

gulp.task('sass:compile', function() {
  gulp.src(sassSources)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({'outputStyle': 'expanded'}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer(['> 1%', 'last 2 version']))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./src/'));
});

gulp.task('sass:compile:watch', function() {
  gulp.watch(sassSources, ['sass:compile']);
});

gulp.task('sass', ['sass:compile'])

gulp.task('sass:watch', function() {
  gulp.watch(sassSources, ['sass'])
})
