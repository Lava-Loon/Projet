const leafContainer = document.querySelector('.falling-leaves');

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    leaf.style.left = Math.random() * 100 + 'vw';

    const size = Math.random() * 20 + 10;
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';

    leaf.style.animationDuration = Math.random() * 5 + 5 + 's';

    leafContainer.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 10000);
}

setInterval(createLeaf, 300);

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

