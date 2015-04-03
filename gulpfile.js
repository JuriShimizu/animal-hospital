
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
 
gulp.task('scss', function(){
  gulp.src('./assets/*.scss')
  	.pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
 
// 追記する
gulp.task('watch', function () {
    gulp.watch('./assets/*.scss', ['scss']);
});