/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  //'js/dependencies/sails.io.js',
    
  'vendor/jquery/dist/jquery.js',
  'vendor/lodash/lodash.js',

  // Dependencies like jQuery, or Angular are brought in here
  'vendor/angular/angular.js',
  'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
  'vendor/angular*/angular-*.js',
  //'vendor/angular-sails/dist/angular-sails.min.js',

  //'vendor/moment/moment-locales.min.js',
  //'vendor/angular-moment/angular-moment.min.js',
  //'vendor/angular-translate/angular-translate.min.js',
  //'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
  //'vendor/ng-table/ng-table.js',

  //'vendor/bootstrap/dist/js/bootstrap.min.js',
  //'vendor/**/*.js',
  'components/**/*.js',
  'views/**/*.js',
  'templates.js',
  'app.js',
  // All of the rest of your client-side js files
  // will be injected here in no particular order.
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];

var ngTemplateFilesToInject = [
  'templates/**/*.html',
  'views/**/*.html',
];

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});

module.exports.ngTemplateFilesToInject = ngTemplateFilesToInject.map(function(path){
  return 'assets/' +path;
})