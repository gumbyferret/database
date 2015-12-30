// Use mongoose in the project

var mongoose = require('mongoose');

// Connect to a MongoDB database locally

mongoose.connect('mongodb://localhost/myappdatabase');

// First define the schema

var Schema = mongoose.Schema;

// Create a schema called userSchema.  ALlowed schemaTypes are String, Number, Data, Buffer
// Boolean, Mixed, ObjectId, Array

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// Run a function before saving
// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// // Run a function after updating
// userSchema.pre('update', function() {
//   this.update_at({},{ $set: { updated_at: new Date() } });
// });

// the schema is useless so far
// we need to create a model using it

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications

module.exports = User;

