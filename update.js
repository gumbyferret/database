//UPDATE
var User = require('./app/models/user');

// //Get a user then Update
// // get a user with ID of 1
// User.findById(1, function(err, user) {
//   if (err) throw err;

//   // change the users location
//   user.location = 'uk';

//   // save the user
//   user.save(function(err) {
//     if (err) throw err;

//     console.log('User successfully updated!');
//   });

// });

//Find and Update
// find the user starlord55
// update him to darklord11 and update the timestamp on the record

User.findOneAndUpdate({ username: 'starlord55' }, { username: 'darklord11' , updated_at: new Date()}, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});