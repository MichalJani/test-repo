const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.set('X-bro', 'BRO');
  res.status(418);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
