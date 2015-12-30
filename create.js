// CREATE
// grab the user model
var User = require('./app/models/user');

// create a new user
var newUser = User({
  name: 'Dark Lord',
  username: 'starlord55',
  password: 'password',
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});


