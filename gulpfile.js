var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync');

gulp.task('default',['style','browsersync'], function() {
	gulp.watch('sass/**/*.scss',['style']);
	gulp.watch('public/**/*.html',browsersync.reload);
	gulp.watch('public/js/**/*.js',browsersync.reload);
});

gulp.task('style', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('./public/css'))
		.pipe(browsersync.reload({
			stream:true
		}));
});

gulp.task('browsersync', function() {
	return browsersync.init({
		server: "./public",
		index: "index.html"
	});
});
