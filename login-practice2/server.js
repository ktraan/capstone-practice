const express = require('express');

const app = express();
const fs = require('fs');

const port = 3001;
const path = require('path');

const userArray = [];

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('login');
});

app.get('/register', function (req, res) {
  res.render('register');
});

app.post('/register', function (req, res) {
  const user = {
    name: req.body.name.toString(),
    password: req.body.password.toString(),
  };

  userArray.push(user);
  console.log(user);
  console.log(userArray);

  fs.writeFile('users.js', JSON.stringify(userArray), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(port, () => {});
