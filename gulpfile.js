var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
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
            // host: '0.0.0.0',
        }));
});

gulp.task('default', ['sass', 'sass:watch', 'serve']);