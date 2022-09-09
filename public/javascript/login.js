const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('the button is working');

  const username = document.querySelector('#typeUsername').value.trim();
  const password = document.querySelector('#typePassword').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
  event.preventDefault();
};

document
  .querySelector('#login-form')
  .addEventListener('click', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);
