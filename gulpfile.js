var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Gulp run!');
});

gulp.task('html', function() {
    console.log('HTML here.');
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
});