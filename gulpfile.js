var gulp = require('gulp');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('webpack', function(){
  webpack(config, function(err, stats){
    //console.log(err, stats);
    console.log(stats.toString());
  })
});

gulp.task('styles', function(){
  gulp.src('src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'))
      .pipe(connect.reload())
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload())
});

gulp.task('default', ['webpack', 'styles', 'copy'], function(){
  gulp.watch('src/scss/**/*.scss', ['styles']);
  gulp.watch('src/index.html', ['copy']);
  gulp.watch('src/**/*.js', ['webpack']);
  gulp.src('dist/bundle.js')
      .pipe(watch('dist/bundle.js'))
      .pipe(connect.reload());
  connect.server({
    livereload: true,
    root: [ 'dist' ]
  });
});
