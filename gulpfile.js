'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var mini = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', function() {
  gulp.src('./dist/crane.min.css')
    .pipe(mini())
    .pipe(gulp.dest('./dist/'));
})

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('minify:watch', function (){
  gulp.watch('./dist/crane.min.css', ['minify']);
});

gulp.task('default', ['sass:watch', 'minify:watch']);
