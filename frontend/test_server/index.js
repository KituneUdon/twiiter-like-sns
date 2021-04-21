const express = require('express');
const cors = require('cors')

const microposts = require('./jsons/microposts.json');

const app = express();
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/v1/microposts', (req, res) => {
  if (req.query.id === '123456') {
    res.json(microposts);
  } else {
    res.send(400);
  }
});

app.post('/v1/microposts', (req, res) => {
  const data = req.body;
  if (data.id === '123456') {
    console.log(data.micropost);
    res.send(200);
  } else {
    res.send(400);
  }
});

app.listen(3000, () => console.log(`テストサーバ起動`));
