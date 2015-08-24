var gulp = require('gulp');
var fileLog = require('../index.js');
var concat = require('gulp-concat');
var buffer = require('vinyl-buffer');

gulp.task('concat', function() {
  return gulp.src('src/*.js')
    .pipe(fileLog())
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('dest'));
});
