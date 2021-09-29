const express = require('express');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(router);

app.listen(3000, () => {
  console.log('Node server running on http://localhost:3000');
});
