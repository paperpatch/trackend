const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const passwordOne = document.querySelector('#password-signup');
const passwordTwo = document.querySelector('#confirm-password');

const checkpassword = () => {

	let password1 = document.querySelector('#password-signup').value.trim();
	let password2 = document.querySelector('#confirm-password').value.trim();

	if (password1 == ''){
		alert('Please enter a password');
	} else if (password2 == '') {
		alert('Please enter password again');
	} else if (password1 != password2) {
		alert('Password did not match! Please try again')
		return false;
	} else {
		alert('Passwords matched: Welcome to Trackend!');
		return true;
	}
};

async function signupFormHandler(event) {
  event.preventDefault();
  checkpassword();

	const username = document.querySelector('#username-signup').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

  	if (username && email && password) {
		const response = await fetch('/api/users', {
			method: 'post',
			body: JSON.stringify({
				username,
				email,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		if (response.ok) {
			document.location.replace('/');
		} else {
			alert(`Username either taken or password 4 characters or greater. ${response.statusText}`);
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
	const type = passwordOne.getAttribute('type') === 'password' ? 'text' : 'password';
	passwordOne.setAttribute('type', type);
  
	this.classList.toggle('bi-eye');
});

togglePassword2.addEventListener('click', function(e) {
	const type = passwordTwo.getAttribute('type') === 'password' ? 'text' : 'password';
	passwordTwo.setAttribute('type', type);
  
	this.classList.toggle('bi-eye');
});

document.querySelector('.signup-form').addEventListener('submit',  signupFormHandler);
document.querySelector('.login-guest').addEventListener('submit', loginGuestHandler);
document.querySelector('.login-admin').addEventListener('submit', loginAdminHandler);
