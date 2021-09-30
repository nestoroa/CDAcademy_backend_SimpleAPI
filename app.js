const express = require('express');
const logger = require('./logger');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger.logRequest);
app.use(require('./routers/userRouter'));

app.listen(3000, () => {
  logger.info('Node server running on http://localhost:3000');
});
