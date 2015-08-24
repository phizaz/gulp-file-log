# gulp-file-log
gulp logging files by console.log its contents

## Usage
```
var gulp = require('gulp');
var fileLog = require('gulp-file-log');
var concat = require('gulp-concat');
var buffer = require('vinyl-buffer');

gulp.task('concat', function() {
  return gulp.src('src/*.js')
    .pipe(fileLog())
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('dest'));
});
```
will result the contents of files in the ```src``` directory before the files are concatenated.
