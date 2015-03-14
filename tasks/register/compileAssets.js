module.exports = function (gulp, plugins) {
  gulp.task('compileAssets', function(cb) {
    plugins.sequence(
      'clean:dev',
      'bower:install',
      'bower:copy',
      'less:dev',
      'copy:dev',
      'html2js:dev',
      cb
    );
  });
};
