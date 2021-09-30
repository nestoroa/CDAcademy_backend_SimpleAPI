const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('./routers/userRouter'));

app.listen(3000, () => {
  console.log('Node server running on http://localhost:3000');
});
