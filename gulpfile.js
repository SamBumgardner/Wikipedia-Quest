var gulp = require('gulp');

gulp.task('copy-files-to-dist', function () {
  gulp.src('./src/**/*')
      .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['copy-files-to-dist']);
