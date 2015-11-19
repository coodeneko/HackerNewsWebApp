var gulp = require('gulp');

gulp.task('default', function () {
});


gulp.task('ci', ['test:remote']);

require('web-component-tester').gulp.init(gulp);
