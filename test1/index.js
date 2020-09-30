// Imports
const express = require('express');
const products = require('./products.js');

const app = express();
const port = 3000;

// The app will expect JSON1
app.use(express.json());

// GET
// path, (optionally middleware), callback function
app.get('/', (req, res) => {
  res.send(console.log('GET request'));
});

app.get('/products/:id', (req, res) => {
  res.json(
    products.find((product) => {
      return Number(req.params.id) === product.id;
    })
  );
});

app.post('/add', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
