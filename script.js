<<<<<<< HEAD
const stages = {
    pin: document.getElementById('pin-stage'),
    envelope: document.getElementById('envelope-stage'),
    letter: document.getElementById('letter-stage')
};
const pinInput = document.getElementById('pin-input');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let yesScale = 1;
let hasDetached = false;

// 1. PIN CHECK (1016)
function checkPin() {
    if (pinInput.value === '1016') {
        stages.pin.style.opacity = '0';
        setTimeout(() => {
            stages.pin.classList.add('hidden');
            stages.envelope.classList.remove('hidden');
            stages.envelope.classList.add('flex', 'flex-col', 'items-center');
        }, 500);
    } else {
        document.getElementById('pin-error').style.opacity = '1';
        pinInput.value = '';
        setTimeout(() => { document.getElementById('pin-error').style.opacity = '0'; }, 2000);
    }
}

// 2. ENVELOPE OPEN
function openLetter() {
    stages.envelope.classList.add('hidden');
    stages.letter.classList.remove('hidden');
    stages.letter.classList.add('flex');
}

// 3. GPU-ACCELERATED RUNAWAY LOGIC
const escape = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    
    // Switch to fixed position relative to whole viewport immediately
    if (!hasDetached) {
        noBtn.style.position = 'fixed';
        hasDetached = true;
    }

    // Larger viewing area calculation
    const padding = 50; // Minimum distance from edges
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    noBtn.style.left = '0';
    noBtn.style.top = '0';
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    noBtn.style.zIndex = "1000";

    // Smooth YES button scaling
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
};

noBtn.addEventListener('mouseover', escape);
noBtn.addEventListener('touchstart', escape);

// 4. CELEBRATION
function celebrate() {
    document.getElementById('main-title').innerText = "My Forever Valentine! 💗";
    document.getElementById('display-gif').src = "cat_dance.gif";
    document.getElementById('btn-container').classList.add('hidden');
    noBtn.style.display = 'none';
    document.getElementById('success-view').classList.remove('hidden');
    
    for(let i=0; i<100; i++) spawnCelebration();
}

function spawnCelebration() {
    const heart = document.createElement('div');
    heart.innerHTML = ['💖', '💝', '💕', '🔥', '✨'][Math.floor(Math.random() * 5)];
    heart.className = 'fixed text-4xl z-[200] pointer-events-none';
    heart.style.left = '50vw';
    heart.style.top = '50vh';
    document.body.appendChild(heart);
    
    const tx = (Math.random() - 0.5) * 1800;
    const ty = (Math.random() - 0.5) * 1800;
    
    heart.animate([{ transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                   { transform: `translate(${tx}px, ${ty}px) scale(4)`, opacity: 0 }], 
                   { duration: 3000, easing: 'ease-out' }).onfinish = () => heart.remove();
}

// 5. AMBIENT BACKGROUND
(function initAmbient() {
    const container = document.getElementById('ambient-layer');
    for (let i = 0; i < 35; i++) {
        const h = document.createElement('div');
        h.className = 'ambient-glow';
        h.innerHTML = '❤️';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.animationDuration = (Math.random() * 10 + 5) + 's';
        h.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(h);
    }
})();
=======
// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});



yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
>>>>>>> 24ca92b10cd0c798c7e564faea5cc157c9e3d3c1
