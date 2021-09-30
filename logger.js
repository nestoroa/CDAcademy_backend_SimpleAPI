/* eslint-disable new-cap */
const winston = require('winston');

const consoleTransport = new winston.transports.Console();
const fileTransport = new winston.transports.File({ filename: './log/api.log' });
const fileErrorTransport = new winston.transports.File({ filename: './log/error.log', level: 'error' });
const WinstonOptions = {
  transports: [consoleTransport, fileTransport, fileErrorTransport],
};

const logger = new winston.createLogger(WinstonOptions);

function logRequest(req, res, next) {
  logger.info(req.originalUrl);
  logger.debug(req.originalUrl, req.body);
  next();
}

function logInfo(message) {
  logger.info(message);
}

function logError(err, req, res, next) {
  logger.error(err);
  next();
}

logger.info('Logger successfully started');

module.exports = {
  logInfo,
  logError,
  logRequest,
};
