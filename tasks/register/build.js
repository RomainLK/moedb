module.exports = function (gulp, plugins) {
	gulp.task('build', function (cb) {
		plugins.sequence(
			'compileAssets',
			'linkAssets',
			'clean:build',
			'copy:build',
			cb
		);
	});
};
