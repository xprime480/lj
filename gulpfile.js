const gulp = require('gulp');
const babel = require('gulp-babel');

function jsTask(cb) {
    gulp.src("es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));

    cb();
}

function cssTask(cb) {
    gulp.src("es6/**/*.css")
	.pipe(gulp.dest("dist"));

    cb();
}

function htmlTask(cb) {
    gulp.src("es6/**/*.html")
	.pipe(gulp.dest("dist"));

    cb();
}

exports.default = gulp.parallel(jsTask, cssTask, htmlTask);
