const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/academy', (err) => {
  if (err) {
    console.log(`Error connecting to Database: ${err}`);
  } else {
    console.log('Everything alright with the DB connection');
  }
});

module.exports = mongoose;
