var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('build:css', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

gulp.task('watch:css', function() {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['build:css']);
});

gulp.task('serve', function() {
    gulp.src('.')
        .pipe(webserver({
            // livereload: true,
            host: "0.0.0.0"
        }));
});

gulp.task('watch', ['watch:css'], function() {
});

gulp.task('build', ['build:css'], function() {
});

gulp.task('default', ['build', 'serve', 'watch']);