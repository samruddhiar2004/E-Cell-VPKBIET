document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.fade-in-section');

    // --- MOBILE MENU TOGGLE ---
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // --- CLICK TO SMOOTH SCROLL & CLOSE MOBILE MENU ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });

    // --- INTERSECTION OBSERVER FOR ANIMATIONS & ACTIVE LINK HIGHLIGHTING ---
    // This is more performant than listening to the scroll event
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.4 // trigger when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Add fade-in animation class when section enters viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }

            // Highlight the corresponding nav link
            const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                document.querySelector('.nav-link.active').classList.remove('active');
                navLink.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});