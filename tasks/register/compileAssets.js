module.exports = function (gulp, plugins) {
  gulp.task('compileAssets', function(cb) {
    plugins.sequence(
      'clean:dev',
      'bower:install',
      'bower:copy',
      'jst:dev',
      'less:dev',
      'copy:dev',
      'coffee:dev',
      'html2js:dev',
      cb
    );
  });
};
