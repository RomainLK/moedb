/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 *
 */
module.exports = function(gulp, plugins, growl) {
	var livereload = plugins.livereload;
	livereload({ start: true });
	gulp.task('watch:api', function() {
		// Watch Style files
		return gulp.watch('api/**/*', ['syncAssets'])
				.on('change', function(file) {
					
					livereload.changed(file.path);
				});
	});
	
	gulp.task('watch:assets', function() {
		// Watch assets
		return gulp.watch(['assets/**/*'], ['syncAssets'])
				.on('change', function(file) {
					livereload.changed(file.path);
				})
				.on('error', function(error){
					console.log(error.toString());
				});
	});

};
