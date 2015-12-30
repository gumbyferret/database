//DELETE
var User = require('./app/models/user');
// //Get a User then remove
// // get the user starlord55
// User.find({ username: 'starlord66' }, function(err, user) {
//   if (err) throw err;

//   // delete him
//   User.remove(function(err) {
//     if (err) throw err;

//     console.log('User successfully deleted!');
//   });
// });

//Find and remove
// find the user with  username 'darklord11'
User.findOneAndRemove({ username: 'darklord11' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});