document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // --- MOBILE MENU TOGGLE ---
    // This is the main logic for the hamburger menu.
    // It listens for a click on the button and toggles the .open class on the menu.
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // --- CLOSE MOBILE MENU ON LINK CLICK ---
    // This improves user experience by closing the menu when a navigation link is clicked.
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
        threshold: 0.4 // A section is considered "active" when 40% is visible
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