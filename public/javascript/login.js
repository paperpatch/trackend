const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password-login');

async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginGuestHandler(event) {
  event.preventDefault();

  const username = 'guest';
  const password = 'guest';

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

async function loginAdminHandler(event) {
  event.preventDefault();

  const username = 'admin';
  const password = 'admin';

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

togglePassword.addEventListener('click', function(e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  this.classList.toggle('bi-eye');
})

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.login-guest').addEventListener('submit', loginGuestHandler);
document.querySelector('.login-admin').addEventListener('submit', loginAdminHandler);
