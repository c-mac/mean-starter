var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    path = require('path'),
    templateCache = require('gulp-angular-templatecache'),
    watch = require('gulp-watch');

gulp.task('less', function () {
  return gulp.src('./app/styles.less')
      .pipe(less({
          paths: [ path.join('./') ]
      }))
      .pipe(gulp.dest('public/'));
});

gulp.task('scripts', function() {
  return gulp.src([
    'node_modules/angular/angular.js',
    'node_modules/angular-ui-router/build/angular-ui-router.js',
    'app/template.module.js',
    'app/app.module.js',
    './app/**/*.js'])
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('public/'));
});

gulp.task('templates', function () {
  return gulp.src('app/**/*.html')
      .pipe(templateCache())
      .pipe(gulp.dest('public/'));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.less', ['less']);
  gulp.watch('./app/**/*.js', ['scripts']);
  gulp.watch('./app/**/*.html', ['templates']);
});

gulp.task('default', ['watch']);