module.exports = function(gulp, plugins, growl) {

	gulp.task('babel:dev', function() {
		return gulp.src(require('../pipeline').jsFilesToInject)
				.pipe(plugins.babel())
				.pipe(gulp.dest('./.tmp/public/'))
				.pipe(plugins.if(growl, plugins.notify({ message: 'Concatenate Scripts task complete' })));
	});

};

