// Define requirements
var gulp         = require('gulp'),
    handlebars   = require('gulp-compile-handlebars'),
    rename       = require('gulp-rename'),
    sassGlob     = require('gulp-sass-glob');

var options = {};

options = {
    handlebars: {
        batch : [__dirname + '/build/src/partials']
    }
}

gulp.task('default', ['html']);

gulp.task('html', function () {
	return gulp.src(__dirname + '/build/src/*.hbs')
    .pipe(handlebars({}, options.handlebars))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(__dirname + '/build/dist'));
});

