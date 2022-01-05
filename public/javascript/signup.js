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
			alert(response.statusText);
		}	
	}
	
}

document.querySelector('.signup-form').addEventListener('submit',  signupFormHandler);
