const params = new URLSearchParams(window.location.search);
const email = params.get('email');
const signupConfirmation = document.querySelector('.js-signup-confirmation');
const dismissBtn = document.querySelector('.js-dismiss-btn');

signupConfirmation.textContent = `${email}`;

dismissBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
})
