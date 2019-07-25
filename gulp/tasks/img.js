module.exports = function () {
	$.gulp.task('img:dev', function() {
		return $.gulp.src('src/static/img/*.{png, jpg, gif}')
			.pipe($.gp.tinypng('TbMBLOBZLVXGr3rv0wcfbMfRJcEq103E'))
			.pipe($.gulp.dest('build/static/img'));
	});

	$.gulp.task('img:build', function() {
		return $.gulp.src('src/static/img/*.{png, jpg, gif}')
			.pipe($.gp.tinypng('TbMBLOBZLVXGr3rv0wcfbMfRJcEq103E'))
			.pipe($.gulp.dest('build/static/img'));
	});
}