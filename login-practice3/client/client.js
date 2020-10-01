const form = document.querySelector('form');
const SERVER_API_URL = 'http://localhost:3000/register';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');
  const user = {
    name: username,
    password: password,
  };
  console.log(user);

  // POST data to server
  fetch(SERVER_API_URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
