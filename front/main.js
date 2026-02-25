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