// Cursor personalizado
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Animação do logo na hero section
    const logoLetters = document.querySelectorAll('.hero-logo span');
    logoLetters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`;
        letter.classList.add('glow-text');
    });

    // Efeito de hover nos cards dos membros
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.boxShadow = '0 0 20px rgba(157, 0, 255, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Efeito de scroll suave para links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação do header ao scroll
    let lastScroll = 0;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.background = 'transparent';
        } else {
            header.style.background = 'rgba(26, 0, 41, 0.95)';
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Animação de entrada para os elementos quando aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('member-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observar cards dos membros
    document.querySelectorAll('.member-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Observar seções
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Easter eggs e interações secretas
    const secretCodes = {
        'h3x': () => {
            document.body.style.animation = 'glitch 0.3s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 1000);
        },
        'darkness': () => {
            const elements = document.querySelectorAll('*');
            elements.forEach(el => {
                el.style.transition = 'all 0.5s ease';
                el.style.filter = 'invert(1)';
            });
            setTimeout(() => {
                elements.forEach(el => {
                    el.style.filter = '';
                });
            }, 1000);
        }
    };

    let keysPressed = '';
    document.addEventListener('keydown', (e) => {
        keysPressed += e.key.toLowerCase();
        Object.keys(secretCodes).forEach(code => {
            if (keysPressed.includes(code)) {
                secretCodes[code]();
                keysPressed = '';
            }
        });
        setTimeout(() => {
            keysPressed = '';
        }, 1000);
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