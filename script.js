document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // --- MOBILE MENU TOGGLE ---
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // --- CLOSE MOBILE MENU ON LINK CLICK ---
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });

    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS & ACTIVE LINK HIGHLIGHTING ---
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Fade in animation trigger
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }

            // Active nav link highlighting
            const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                const currentActive = document.querySelector('.nav-link.active');
                if (currentActive) {
                    currentActive.classList.remove('active');
                }
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});