module.exports = function(req, res, next) {
  var action;

  switch (req.method) {
    case 'GET':
    action = 'read';
    break;
    case 'POST':
    action = 'write'
    break
    case 'DELETE':
    action = 'delete'
    break;
    default: return res.badRequest();
  }
  var model = req.path.split('/')[1];
  console.log(req.user);
  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  //if (req.user.authenticated) {
  return next();
  //}

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  //return res.forbidden('You are not permitted to perform this action.');
};
