// document.addEventListener('DOMContentLoaded', function() {
//     const navToggle = document.querySelector('.nav-toggle');
//     const navMenu = document.querySelector('nav ul');
//     const navLinks = document.querySelectorAll('.nav-link');
//     const sections = document.querySelectorAll('.fade-in-section');

//     // --- MOBILE MENU TOGGLE ---
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.toggle('open');
//     });

//     // --- CLICK TO SMOOTH SCROLL & CLOSE MOBILE MENU ---
//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             if (navMenu.classList.contains('open')) {
//                 navMenu.classList.remove('open');
//             }
//         });
//     });

//     // --- INTERSECTION OBSERVER FOR ANIMATIONS & ACTIVE LINK HIGHLIGHTING ---
//     // This is more performant than listening to the scroll event
//     const observerOptions = {
//         root: null, // observes intersections relative to the viewport
//         rootMargin: '0px',
//         threshold: 0.4 // trigger when 40% of the section is visible
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             // Add fade-in animation class when section enters viewport
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('is-visible');
//             }

//             // Highlight the corresponding nav link
//             const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
//             if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
//                 document.querySelector('.nav-link.active').classList.remove('active');
//                 navLink.classList.add('active');
//             }
//         });
//     }, observerOptions);

//     // Observe each section
//     sections.forEach(section => {
//         observer.observe(section);
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // --- MOBILE MENU TOGGLE ---
    // Toggles the 'open' class on the navigation menu when the hamburger icon is clicked.
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // --- CLOSE MOBILE MENU ON LINK CLICK ---
    // When a link inside the mobile menu is clicked, the menu closes.
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });

    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS & ACTIVE LINK HIGHLIGHTING ---
    // This is more performant than listening to the scroll event for these tasks.
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 40% of a section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // FADE-IN ANIMATION: Add 'is-visible' class when section enters the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }

            // ACTIVE LINK HIGHLIGHT: Update the active class on the corresponding nav link
            const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                // Find the currently active link and remove the class
                const currentActive = document.querySelector('.nav-link.active');
                if (currentActive) {
                    currentActive.classList.remove('active');
                }
                // Add the active class to the new link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe each section that has an ID.
    sections.forEach(section => {
        observer.observe(section);
    });
});