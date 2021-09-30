/* eslint-disable no-console */
const mongoose = require('../server');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String },
  fullName: { type: String },
});

module.exports = mongoose.model('User', userSchema);
