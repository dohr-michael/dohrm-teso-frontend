var connect = require('gulp-connect'),
    del = require('del'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jsxhint = require('jsxhint'),
    runSequence = require('run-sequence');

var jshintConfig = {
    esnext: true,
    laxbreak: true
}

require('./gulp/config');
require('./gulp/task/sass');
require('./gulp/task/browserify');

gulp.task('clean', function (cb) {
    del(['./build/*'], cb);
});

gulp.task('clean-test', function (cb) {
    del(['./test/app/js/*'], cb);
});

gulp.task('serve', function() {
    connect.server({
        port:8000,
        root: './build',
        livereload: true
    });
});

gulp.task('lint', function(cb) {
    gulp.src(['./src/js/**/*.js', '!./src/js/app.js'])
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter('jshint-stylish'));

    // gulp.src('./src/js/**/*.jsx')
        // .pipe(jsxhint());
        // .pipe(jsxhint.reporter('jshint-stylish'));

    cb();
});

gulp.task('img', function(cb){
    gulp.src('./src/images/**/*.{gif,png,jpg}')
        .pipe(gulp.dest('./build/images'));
    cb();
});

gulp.task('fonts', ['config'], function(cb){
    gulp.src(global.bootstrapPath+'fonts/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(gulp.dest('./build/fonts/vendor'));
    gulp.src(global.fontawesomePath+'fonts/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(gulp.dest('./build/fonts/vendor/fontawesome'));
    gulp.src('./src/fonts/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(gulp.dest('./build/fonts'));
    cb();
});

gulp.task('html', function(){
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./build/'))
        .pipe(connect.reload());
});

gulp.task('watch', ['watchify'], function(cb) {
    gulp.watch(['./src/js/**/*.js'], ['lint']);
    gulp.watch(['./src/css/**/_*.scss', './src/css/**/*.scss'], ['sass']);
    gulp.watch(['./src/images/**/*.{gif,png,jpg}'], ['img']);
    gulp.watch('./src/*.html', ['html']);
    cb();
});

// Defined end tasks.

gulp.task('default', function(cb){
    runSequence(
        'clean',
        ['sass', 'html', 'fonts', 'img'],
        'watch',
        'serve',
        cb
    );
});

gulp.task('build-prod', function(cb){
    runSequence(
        'clean',
        ['sass', 'html', 'fonts', 'img'],
        'browserify-prod',
        cb
    );
});

gulp.task('build-test', function(cb){
    runSequence(
        'clean',
        ['sass', 'html', 'fonts', 'img'],
        'browserify-test',
        cb
    );
});

gulp.task('build-staging', function(cb){
    runSequence(
        'clean',
        ['sass', 'html', 'fonts', 'img'],
        'browserify-staging',
        cb
    );
});
