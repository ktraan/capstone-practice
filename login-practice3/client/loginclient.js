const loginForm = document.querySelector('.loginForm');
const LOGIN_SERVER_API_URL = 'http://localhost:3000/login';

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    const user = {
      name: username,
      password: password,
    };
    console.log(user);
  
    // POST data to server
    fetch(LOGIN_SERVER_API_URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });