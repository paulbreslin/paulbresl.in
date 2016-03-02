var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

gulp.task('sass:watch', function() {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
        }));
});

gulp.task('default', ['serve', 'sass:watch']);