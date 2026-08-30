const passwordImput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', () => {
    if (passwordImput.type === 'password') {
        passwordImput.type = 'text';
        togglePassword.textContent = '👁️';
    } else {
        passwordImput.type = 'password';
        togglePassword.textContent = '🔒';
    }
})