'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean-css'),
  rename = require('gulp-rename');

gulp.task("concatCss", function() {
  gulp.src([
  'css/normalize.css',
  'css/foundation.css',
  'css/basics.css',
  'css/menu.css',
  'css/footer.css',
  'css/hero.css',
  'css/photo-grid.css',
  'css/modals.css'
  ])
  .pipe(concat("app.css"))
  .pipe(gulp.dest("css"));
});

gulp.task("minifyCss", function() {
  gulp.src("css/app.css")
    .pipe(clean())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task("concatScripts", function() {
  gulp.src([
  'js/jquery.js',
  'js/lazyload.min.js',
  'js/fastclick.js',
  'js/foundation.js',
  'js/foundation.equalizer.js',
  'js/foundation.reveal.js'
  ])
  .pipe(concat("app.js"))
  .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function() {
  gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});
