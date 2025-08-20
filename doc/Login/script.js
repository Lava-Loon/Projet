const toggleButton = document.getElementById('toggle-button');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');

toggleButton.addEventListener('click', () => {
    if (loginForm.classList.contains('hidden')) {
        
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        formTitle.textContent = "Login";
        toggleButton.textContent = "Switch to Sign Up";
    } else {

        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        formTitle.textContent = "Sign Up";
        toggleButton.textContent = "Switch to Login";
    }
});
