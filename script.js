// Cursor personalizado
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// Background Music
const backgroundMusic = document.getElementById('background-music');
let isMusicPlaying = false;

document.addEventListener('click', () => {
    if (!isMusicPlaying) {
        backgroundMusic.play();
        isMusicPlaying = true;
    }
});

// Efeito de fumaça etérea
function createSmokeEffect() {
    const heroSection = document.querySelector('.hero-section');
    for (let i = 0; i < 10; i++) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke-particle';
        smoke.style.left = Math.random() * 100 + '%';
        smoke.style.animationDuration = (Math.random() * 3 + 2) + 's';
        smoke.style.animationDelay = Math.random() * 2 + 's';
        heroSection.appendChild(smoke);
    }
}

// Easter Eggs
const easterEggs = {
    'H3X': () => {
        const audio = new Audio('assets/audio/secret.mp3');
        audio.play();
    },
    '666': () => {
        document.body.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            document.body.style.transform = 'rotate(0deg)';
        }, 1000);
    }
};

document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    if (key === 'H' || key === '3' || key === 'X') {
        easterEggs['H3X']();
    }
});

// Galeria com efeito de espelho negro
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const whisper = new Audio('assets/audio/whisper.mp3');
        whisper.volume = 0.3;
        whisper.play();
        
        item.style.transform = 'scale(1.05)';
        item.style.filter = 'invert(1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.filter = 'none';
    });
});

// Formulário de contato com efeito de grimório
const contactForm = document.querySelector('.grimoire-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', data);
    
    // Efeito de envio
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.textContent = 'Invocação Enviada!';
    submitBtn.style.backgroundColor = 'var(--color-neon-green)';
    
    setTimeout(() => {
        submitBtn.textContent = 'Enviar Invocação';
        submitBtn.style.backgroundColor = 'var(--color-crimson)';
        contactForm.reset();
    }, 2000);
});

// Animações de scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Runas flutuantes
function createFloatingRunes() {
    const runesContainer = document.querySelector('.floating-runes');
    const runes = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚻᚾᛁᛂᛃᛄᛇᛈᛉᛊᛋᛌᛍᛎ';
    
    for (let i = 0; i < 20; i++) {
        const rune = document.createElement('span');
        rune.textContent = runes[Math.floor(Math.random() * runes.length)];
        rune.style.left = Math.random() * 100 + '%';
        rune.style.animationDuration = (Math.random() * 3 + 2) + 's';
        rune.style.animationDelay = Math.random() * 2 + 's';
        runesContainer.appendChild(rune);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createSmokeEffect();
    createFloatingRunes();
}); 