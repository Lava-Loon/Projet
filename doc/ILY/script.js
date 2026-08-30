const noBtn = document.querySelector('.no');
const form = document.querySelector('form');
const yesBtn = document.querySelector('.yes');
const btnContainer = document.querySelector('.btn');

// 1️⃣ Calcul Espacement Géométrique Parfait (Desktop Only)
if (window.innerWidth > 768) {
    const gap = (form.clientWidth - yesBtn.offsetWidth - noBtn.offsetWidth) / 3;
    btnContainer.style.left = gap + 'px';
    const initialLeft = (gap + yesBtn.offsetWidth + gap) + 'px';
    const initialTop = (btnContainer.offsetTop + yesBtn.offsetTop) + 'px';
    noBtn.style.left = initialLeft;
    noBtn.style.top = initialTop;
}

let returnTimer;

// Helper to prepare 'No' button for movement (Placeholder + Margin Reset)
function prepareForMovement() {
    if (noBtn.style.position !== 'absolute') {
        const placeholder = document.createElement('div');
        placeholder.style.width = noBtn.offsetWidth + 'px';
        placeholder.style.height = noBtn.offsetHeight + 'px';
        placeholder.style.margin = getComputedStyle(noBtn).margin;
        placeholder.style.display = 'inline-block';
        placeholder.className = 'no-placeholder';
        noBtn.parentNode.insertBefore(placeholder, noBtn);
        noBtn.style.position = 'absolute';
    }
    noBtn.style.margin = '0';
}

function returnHome() {
    noBtn.classList.add('returning');
    if (window.innerWidth > 768) {
        const gap = (form.clientWidth - yesBtn.offsetWidth - noBtn.offsetWidth) / 3;
        const initialLeft = (gap + yesBtn.offsetWidth + gap) + 'px';
        const initialTop = (btnContainer.offsetTop + yesBtn.offsetTop) + 'px';
        noBtn.style.left = initialLeft;
        noBtn.style.top = initialTop;
        noBtn.style.position = 'absolute';
    } else {
        noBtn.style.position = 'static';
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
        const placeholder = document.querySelector('.no-placeholder');
        if (placeholder) placeholder.remove();
    }
}

yesBtn.addEventListener('click', () => {
    document.querySelector('h1').innerText = "I knew it!";
    btnContainer.style.display = 'none';
    noBtn.style.display = 'none';
});

function moveNoButtonAway(inputX, inputY) {
    const btnX = noBtn.offsetLeft + noBtn.offsetWidth / 2;
    const btnY = noBtn.offsetTop + noBtn.offsetHeight / 2;
    const dx = btnX - inputX;
    const dy = btnY - inputY;
    const distance = Math.hypot(dx, dy);
    const detectionRadius = 250;

    if (distance < detectionRadius && distance > 0) {
        const speed = (detectionRadius - distance) * 0.6;
        let angle = Math.atan2(dy, dx);
        const radDeviation = (30 * Math.PI) / 180;
        const randomOffset = (Math.random() - 0.5) * 2 * radDeviation;
        const finalAngle = angle + randomOffset;
        const moveX = Math.cos(finalAngle) * speed;
        const moveY = Math.sin(finalAngle) * speed;
        let newLeft = noBtn.offsetLeft + moveX;
        let newTop = noBtn.offsetTop + moveY;
        const maxLeft = form.clientWidth - noBtn.offsetWidth;
        const maxTop = form.clientHeight - noBtn.offsetHeight;
        newLeft = Math.max(0, Math.min(maxLeft, newLeft));
        newTop = Math.max(0, Math.min(maxTop, newTop));

        prepareForMovement();
        noBtn.style.left = newLeft + 'px';
        noBtn.style.top = newTop + 'px';
    }
}

document.addEventListener('mousemove', (e) => {
    clearTimeout(returnTimer);
    noBtn.classList.remove('returning');
    const formRect = form.getBoundingClientRect();
    const mouseX = e.clientX - formRect.left;
    const mouseY = e.clientY - formRect.top;
    moveNoButtonAway(mouseX, mouseY);
    returnTimer = setTimeout(returnHome, 5000);
});

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    prepareForMovement();
    const maxLeft = form.clientWidth - noBtn.offsetWidth;
    const maxTop = form.clientHeight - noBtn.offsetHeight;
    noBtn.style.left = (Math.random() * maxLeft) + 'px';
    noBtn.style.top = (Math.random() * maxTop) + 'px';
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);
