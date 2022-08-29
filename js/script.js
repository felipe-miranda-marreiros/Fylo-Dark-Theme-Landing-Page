const emailInput = document.getElementById('email');
const ctaButton = document.querySelector('.section-cta__btn');
const emailError = document.querySelector('.email-error');

ctaButton.addEventListener('click', () => {
  if (!emailInput.value || !emailInput.value.includes('@')) {
    emailError.classList.remove('hidden');
  } else {
    emailError.classList.add('hidden');
    emailInput.value = '';
  }
});
