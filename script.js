const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

// Smooth scroll to anchor with header offset
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        if (section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight + 1;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        // Hide menu on link click in mobile
        if(window.innerWidth <= 900){
            navMenu.classList.remove('open');
        }
    });
});

// Highlight active link on scroll
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + header.offsetHeight + 5;
    document.querySelectorAll('section').forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector('.nav-link[href="#' + id +'"]');
        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(l => l.classList.remove('active'));
            if(link) link.classList.add('active');
        }
    });
});

// Hamburger button toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});