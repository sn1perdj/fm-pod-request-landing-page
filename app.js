const emailInput = document.querySelector('input');
const submitBTN = document.querySelector('#submit-btn');
const errorMSG = document.querySelector('.error__msg');

submitBTN.addEventListener('click', (e) => {
    e.preventDefault();

    if (!emailInput.value.includes('@')) {
        errorMSG.style.display = 'block';
    } else {
        errorMSG.style.display = 'none';
    }
})