const alertMessage = document.querySelector('.js-alert-message');
const emailInput = document.querySelector('#email-input');
const submitButton = document.querySelector('.js-submit-btn');

const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleEvent () {
    const email = encodeURIComponent(emailInput.value);
    if (emailInput.value === '') {
        alertMessage.textContent = 'Email field cannot be empty';
        emailInput.style.color = 'hsl(4, 100%, 63%)';
        emailInput.style.borderColor = 'hsl(4, 100%, 63%)';
        emailInput.style.border = '2px hsl(4, 100%, 63%) solid';
        emailInput.style.backgroundColor = 'hsla(4, 100%, 63%, 0.25)';
    } 
    else if (!validEmail.test(emailInput.value.trim())) {
        alertMessage.textContent = 'Valid email required';
        emailInput.style.border = '2px hsl(4, 100%, 63%) solid';
    }
    else {
        emailInput.value = '';

        window.location.href = `success.html?email=${email}`;
    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleEvent();
});