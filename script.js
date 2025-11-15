// Page load fade-in
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
    document.body.style.opacity = "1";
});

// Sticky header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll reveal sections
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));
