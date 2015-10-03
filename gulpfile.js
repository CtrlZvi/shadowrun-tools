'use strict';

let gulp = require('gulp');
let plugins = require('gulp-load-plugins')();

let watching = false;

// Global tasks

let allSources = 'src/**/*';

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

// webpack

gulp.task('webpack', function() {
  gulp.src('src/5e/character-sheet.js')
    .pipe(plugins.webpack({
      output: {
        filename: '[name].pack.js'
      }
    }))
    .pipe(gulp.dest('src/5e/'));
});

// TypeScript

let typescriptSources = ['src/**/*.ts', 'src/**/*.tsx'];

gulp.task('typescript:compile', function() {
  for (let glob of typescriptSources) {
    let typescriptOptions = {
      module: 'commonjs',
      moduleResolution: 'node'
    };
    if (glob.split('.')[1] === 'tsx') {
      typescriptOptions.jsx = 'react';
    }

    gulp.src(glob)
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.typescript(typescriptOptions))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest('src/'));
  }
});
gulp.task('typescript:compile:watch', ['set-watching'], function() {
  gulp.watch(typescriptSources, ['typescript:compile']);
});

gulp.task('typescript', ['typescript:compile']);
gulp.task('typescript:watch', ['set-watching'], function() {
  gulp.watch(typescriptSources, ['typescript'])
});

// JSX and ES6

let jsxSources = 'src/**/*.jsx';

gulp.task('jsx:compile', function() {
  gulp.src(jsxSources)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel({whitelist: ['react', 'es6.blockScoping', 'es6.spread']}))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('src/'));
});
gulp.task('jsx:watch', ['set-watching'], function() {
  gulp.watch(jsxSources, ['jsx:compile']);
});

gulp.task('jsx', ['jsx:compile']);
gulp.task('jsx:watch', ['set-watching'], function() {
  gulp.watch(jsxSources, ['jsx'])
});

// SASS

let sassSources = 'src/**/*.scss';

gulp.task('sass:compile', function() {
  gulp.src(sassSources)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({'outputStyle': 'expanded'}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer(['> 1%', 'last 2 version']))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('src/'));
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
