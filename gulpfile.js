var gulp = require('gulp');

gulp.task('default', function () {
});


gulp.task('ci', ['default']);

require('web-component-tester').gulp.init(gulp);
