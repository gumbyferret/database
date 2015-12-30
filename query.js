//READ
//Find All
var User = require('./app/models/user');
//get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});

// //Find One
// // get the user starlord55
// User.find({ username: 'starlord55' }, function(err, user) {
//   if (err) throw err;

//   // object of the user
//   console.log(user);
// });

// //Find by ID
// // get a user with ID of 1
// User.findById(1, function(err, user) {
//   if (err) throw err;

//   // show the one user
//   console.log(user);
// });

//Querying

// get any admin that was created in the past month

// get the date 1 month ago
// var monthAgo = new Date();
// monthAgo.setMonth(monthAgo.getMonth() - 1);

// User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
//   if (err) throw err;

//   // show the admins in the past month
//   console.log(users);
// });
