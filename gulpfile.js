'use strict';
/*
var gulp = require('gulp'),
		gp	 = require('gulp-load-plugins')(),
		browserSync = require('browser-sync').create();
		//pug = require('gulp-pug');
*/




global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

 
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'stylus', 'scripts:lib', 'scripts', 'img:dev'),
	$.gulp.parallel('watch', 'serve')
));

 
$.gulp.task('build', $.gulp.series(
	$.gulp.parallel('pug', 'stylus', 'scripts:lib', 'scripts', 'img:build'),
	$.gulp.parallel('watch', 'serve')
));






