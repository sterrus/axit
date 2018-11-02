var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass');

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('serve', ['sass'], function() {
    browserSync({
        server: './'
    })
    
    gulp.watch('./*.html', ['reload']);
    gulp.watch('./sass/**/*.{scss,sass}', ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('./sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
})

gulp.task('default', ['serve']);