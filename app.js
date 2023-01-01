const express = require('express');
const app = express();
const port = 3000;


app.get('/bro', (req, res) => {
  res.set('X-bro', 'BRO');
  res.status(418);
  res.send('MATE!');
});
app.get('/', (req, res) => {

  res.send('Hello Universe!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
