'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();

let watching = false;

// Global tasks

let allSources = './src/**/*';

gulp.task('build', ['compile', 'lint'])
gulp.task('build:watch', ['set-watching'], function() {
  gulp.watch(allSources, ['build'])
});

gulp.task('compile', ['jsx:compile', 'sass:compile']);
gulp.task('compile:watch', ['set-watching'], function() {
  gulp.watch(allSources, ['compile'])
});

gulp.task('lint', ['sass:lint']);
gulp.task('lint:watch', ['set-watching'], function() {
  gulp.watch(allSources, ['lint'])
});

gulp.task('set-watching', function() {
  watching = true;
});

// JSX and ES6

gulp.task('jsx:compile', function() {
  gulp.src('./src/**/*.jsx')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel({whitelist: ['react', 'es6.blockScoping', 'es6.spread']}))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./src/'));
});
gulp.task('jsx:watch', ['set-watching'], function() {
  gulp.watch('./src/**/*.jsx', ['jsx:compile']);
});

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
gulp.task('sass:compile:watch', ['set-watching'], function() {
  gulp.watch(sassSources, ['sass:compile']);
});

gulp.task('sass:lint', function() {
  gulp.src(sassSources)
    .pipe(plugins.scssLint({
      endless: watching
    }))
    .pipe(plugins.scssLint.failReporter());
});
gulp.task('sass:lint:watch', ['set-watching'], function() {
  gulp.watch(sassSources, ['sass:lint']);
});

gulp.task('sass', ['sass:compile', 'sass:lint']);
gulp.task('sass:watch', ['set-watching'], function() {
  gulp.watch(sassSources, ['sass'])
});
