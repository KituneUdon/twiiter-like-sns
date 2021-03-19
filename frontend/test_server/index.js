const express = require('express');

const microposts = require('./jsons/microposts.json');

const app = express();

app.get('/v1/microposts', (req, res) => {
  if (req.query.id === '123456') {
    res.json(microposts);
  } else {
    res.send(400);
  }
});

app.listen(3000, () => console.log(`テストサーバ起動`));
