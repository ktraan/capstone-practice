const express = require('express');

const app = express();

const port = 3001;

app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('login');

  // let registerRedirect = document.getElementById
});

app.get('/register', function (req, res) {
  res.render('register');
});

app.listen(port, () => {});
