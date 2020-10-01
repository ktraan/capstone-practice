// const path = require('path');
const form = document.querySelector('form');
// const users = require('../users');
const SERVER_API_URL = 'http://localhost:3001/register';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');
  const user = {
    name: username,
    password: password,
  };

  // POST data to server
  fetch(SERVER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
