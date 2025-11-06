const alertMessage = document.querySelector('.js-alert-message');
const emailInput = document.querySelector('#email-input');
const submitButton = document.querySelector('.js-submit-btn');
const signupConfirmation = document.querySelector('.js-signup-confirmation');
// const emailInput = document.querySelector();
// const emailInput = document.querySelector();

function handleEvent () {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        signupConfirmation.textContent = `A confirmation email has been sent to ${emailInput}. 
            Please open it and click the button inside to confirm your subscription.`;
        emailInput.value = '';
        window.location.href = 'success.html';
    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleEvent();
});