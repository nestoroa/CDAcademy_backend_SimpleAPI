/* eslint-disable no-console */
const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/academy', (err) => {
  if (err) {
    console.log(`Error connecting to Database: ${err}`);
  } else {
    console.log('Everything alright with the DB connection');
  }
});

const userSchema = new Schema({
  username: { type: String },
  fullName: { type: String },
});

module.exports = mongoose.model('User', userSchema);
