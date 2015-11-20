var gulp = require('gulp');

gulp.task('default', function () {
});

gulp.task("watch_dev", function () {
    gulp.watch(["./**/*.js", "./**/*.html"], ["test:local"]).on("change", function (file) {
        console.log("Files changed");
    });
});

gulp.task('ci', ['test:remote']);

require('web-component-tester').gulp.init(gulp);
