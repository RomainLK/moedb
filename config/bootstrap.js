/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var Promise = require("bluebird");
module.exports.bootstrap = function(cb) {
  sails.services.passport.loadStrategies();
  var administratorRole = {
    name: 'Administrator',
    edit: ['*'],
    create: ['*'],
    delete: ['*'],
    read: ['*']
  };
  var memberRole = {
    name: 'Member',
    edit: [],
    create: [],
    delete: [],
    read: ['*']
  };
  
  Role.count().exec(function (err, count) {
    if (err) return cb(err);
    if (count > 0) return cb();
  Promise.all([Role.create(administratorRole),Role.create(memberRole)]).then(cb.bind(null,null));
  });
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
};
