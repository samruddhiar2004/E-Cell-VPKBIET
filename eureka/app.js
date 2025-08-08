// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Fade in animation on scroll
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//     });
// }, observerOptions);

// // Observe all fade-in elements
// document.querySelectorAll('.fade-in').forEach(el => {
//     observer.observe(el);
// });

// // Active navigation highlighting
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
//     let currentSection = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - 100;
//         if (scrollY >= sectionTop) {
//             currentSection = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${currentSection}`) {
//             link.classList.add('active');
//         }
//     });
// });

// // Add loading animation
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });

// // Removed parallax effect to prevent text overlap issues

// // Enhanced timeline animations
// const timelineItems = document.querySelectorAll('.timeline-item');
// const timelineObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             setTimeout(() => {
//                 entry.target.classList.add('visible');
//             }, index * 200);
//         }
//     });
// }, {
//     threshold: 0.2
// });

// timelineItems.forEach(item => {
//     timelineObserver.observe(item);
// });

// // Statistics counter animation
// function animateCounters() {
//     const counters = document.querySelectorAll('.stat-number');
//     counters.forEach(counter => {
//         const target = counter.textContent;
//         const number = parseInt(target.replace(/\D/g, ''));
        
//         if (number > 0) {
//             let current = 0;
//             const increment = number / 60;
//             const timer = setInterval(() => {
//                 current += increment;
//                 if (current >= number) {
//                     counter.textContent = target;
//                     clearInterval(timer);
//                 } else {
//                     counter.textContent = Math.floor(current) + target.replace(/\d/g, '').charAt(0);
//                 }
//             }, 50);
//         }
//     });
// }

// // Trigger counter animation when stats section is visible
// const statsObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateCounters();
//             statsObserver.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.5 });

// const statsSection = document.querySelector('.about-stats');
// if (statsSection) {
//     statsObserver.observe(statsSection);
// }

// // Mobile menu functionality (if needed in future)
// const createMobileMenu = () => {
//     const nav = document.querySelector('nav');
//     const navList = document.querySelector('nav ul');
    
//     if (window.innerWidth <= 768) {
//         if (!nav.querySelector('.mobile-toggle')) {
//             const toggle = document.createElement('button');
//             toggle.className = 'mobile-toggle';
//             toggle.innerHTML = '☰';
//             toggle.style.cssText = `
//                 background: none;
//                 border: none;
//                 color: #ff69b4;
//                 font-size: 1.5rem;
//                 cursor: pointer;
//                 display: block;
//                 margin-left: auto;
//             `;
            
//             toggle.addEventListener('click', () => {
//                 navList.classList.toggle('mobile-open');
//             });
            
//             nav.appendChild(toggle);
//         }
//     }
// };

// // Handle window resize
// window.addEventListener('resize', createMobileMenu);
// createMobileMenu();

// // Add custom cursor effect
// document.addEventListener('mousemove', (e) => {
//     const cursor = document.querySelector('.custom-cursor');
//     if (!cursor) {
//         const newCursor = document.createElement('div');
//         newCursor.className = 'custom-cursor';
//         newCursor.style.cssText = `
//             position: fixed;
//             width: 20px;
//             height: 20px;
//             background: rgba(255, 105, 180, 0.3);
//             border-radius: 50%;
//             pointer-events: none;
//             z-index: 9999;
//             transition: transform 0.1s ease;
//         `;
//         document.body.appendChild(newCursor);
//     }
    
//     const actualCursor = document.querySelector('.custom-cursor');
//     if (actualCursor) {
//         actualCursor.style.left = e.clientX - 10 + 'px';
//         actualCursor.style.top = e.clientY - 10 + 'px';
//     }
// });

// // Enhanced button hover effects
// document.querySelectorAll('.cta-button, .contact-card, .stat-card').forEach(element => {
//     element.addEventListener('mouseenter', function() {
//         this.style.transform = 'translateY(-10px) scale(1.05)';
//     });
    
//     element.addEventListener('mouseleave', function() {
//         this.style.transform = 'translateY(0) scale(1)';
//     });
// });

// // Preloader (optional)
// const createPreloader = () => {
//     const preloader = document.createElement('div');
//     preloader.className = 'preloader';
//     preloader.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: #0a0a0a;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         z-index: 10000;
//         transition: opacity 0.5s ease;
//     `;
    
//     const spinner = document.createElement('div');
//     spinner.style.cssText = `
//         width: 50px;
//         height: 50px;
//         border: 3px solid rgba(255, 105, 180, 0.3);
//         border-top: 3px solid #ff69b4;
//         border-radius: 50%;
//         animation: spin 1s linear infinite;
//     `;
    
//     preloader.appendChild(spinner);
//     document.body.prepend(preloader);
    
//     // Add spin animation
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//         }
//     `;
//     document.head.appendChild(style);
    
//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             preloader.style.opacity = '0';
//             setTimeout(() => {
//                 preloader.remove();
//             }, 500);
//         }, 1000);
//     });
// };

// // Initialize preloader
// createPreloader();

// Smooth scrolling for navigation links
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

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Removed parallax effect to prevent text overlap issues

// Enhanced timeline animations
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 200);
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = counter.textContent;
        const number = parseInt(target.replace(/\D/g, ''));
        
        if (number > 0) {
            let current = 0;
            const increment = number / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + target.replace(/\d/g, '').charAt(0);
                }
            }, 50);
        }
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Mobile menu functionality (if needed in future)
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');
    
    if (window.innerWidth <= 768) {
        if (!nav.querySelector('.mobile-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: none;
                border: none;
                color: #ff69b4;
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
                margin-left: auto;
            `;
            
            toggle.addEventListener('click', () => {
                navList.classList.toggle('mobile-open');
            });
            
            nav.appendChild(toggle);
        }
    }
};

// Handle window resize
window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Add custom cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(255, 105, 180, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const actualCursor = document.querySelector('.custom-cursor');
    if (actualCursor) {
        actualCursor.style.left = e.clientX - 10 + 'px';
        actualCursor.style.top = e.clientY - 10 + 'px';
    }
});

// Enhanced button hover effects
document.querySelectorAll('.cta-button, .contact-card, .stat-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Preloader (optional)
const createPreloader = () => {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    const spinner = document.createElement('div');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 105, 180, 0.3);
        border-top: 3px solid #ff69b4;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    preloader.appendChild(spinner);
    document.body.prepend(preloader);
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    });
};

// Initialize preloader
createPreloader();

