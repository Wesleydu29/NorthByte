const wrappers = document.querySelectorAll('.wrapper');

wrappers.forEach(wrapper => {
    const p = wrapper.querySelector('p');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // apparition du text lorsque l'image apparait 
                setTimeout(() => {
                    if (p) {
                        p.style.animation = 'fade-in 0.5s ease forwards';
                    }
                }, 1500);
            } else {
                // au scroll inverse, le paragraphe disparait
                if (p) {
                    p.style.animation = 'fade-out 0.5s ease forwards';
                }
            }
        });
    }, { threshold: 0.5 });

    observer.observe(wrapper);
});

// JS pour les yeux, lors du passage de la souris

const face = document.querySelector('.face');
const eyes = document.querySelectorAll('.eye');

face.addEventListener('mousemove', (e) => {
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();

        // Centre de l'œil
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Direction de la souris par rapport au centre
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        // Convertit en pourcentage (limité entre 30% et 70% pour rester dans l'œil)
        const x = Math.min(Math.max((dx / rect.width + 0.5) * 100, 30), 70);
        const y = Math.min(Math.max((dy / rect.height + 0.5) * 100, 30), 70);

        eye.style.setProperty('--x', `${x}%`);
        eye.style.setProperty('--y', `${y}%`);
    });
});

// Recentre les pupilles quand la souris quitte le visage
face.addEventListener('mouseleave', () => {
    eyes.forEach(eye => {
        eye.style.setProperty('--x', '50%');
        eye.style.setProperty('--y', '30%');
    });
});


// Js pour l'effet de typing lorsque l'utilisateur arrive sur ma page

const texte = document.querySelector('.texte');

function typeWriting(texte, text, vitesse = 50) {
    texte.textContent = '';

    let i = 0;

    const timer = setInterval( ()=> {
        if (i < text.length) {
            texte.textContent += text[i];
            i++
        } else {
            clearInterval(timer);
        }
    }, vitesse);
}
typeWriting(texte, "Bonjour et bienvenu sur ma page. Je m'appelle Wesley Goarant, je suis dévelopeur Web et fondateur de Northbyte")