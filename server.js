const mongoose = require('mongoose');
const logger = require('./logger');

const dbUri = 'mongodb://localhost/academy';

mongoose.connect(dbUri, (err) => {
  if (err) {
    logger.error(`Error connecting to Database: ${err}`);
  } else {
    logger.info('Successfuly connected to Mongodb database');
  }
});

module.exports = mongoose;
