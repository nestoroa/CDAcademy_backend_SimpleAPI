/* eslint-disable new-cap */
const winston = require('winston');

const consoleTransport = new winston.transports.Console();
const fileTransport = new winston.transports.File({ filename: './log/api.log' });
const fileErrorTransport = new winston.transports.File({ filename: './log/error.log', level: 'error' });
const fileDebugTransport = new winston.transports.File({ filename: './log/debug.log', level: 'debug' });

const {
  combine, timestamp, label, printf,
} = winston.format;

const myFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} [${label}] ${level}: ${message}`);

const WinstonOptions = {
  format: combine(
    label({ label: 'SimpleAPI by NESTOR' }),
    timestamp(),
    myFormat,
  ),
  transports: [consoleTransport, fileTransport, fileErrorTransport, fileDebugTransport],
};

const logger = new winston.createLogger(WinstonOptions);

function logRequest(req, res, next) {
  logger.info(`${req.method} ${req.originalUrl}`);
  logger.debug(`${req.method} ${req.originalUrl}\: ${req}`);
  next();
}

function info(message) {
  logger.info(message);
}

function error(err, req, res, next) {
  logger.error(err);
  next();
}

module.exports = {
  info,
  error,
  logRequest,
};
