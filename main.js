// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});

// Form submission is now handled by Formspree
// Remove the handleSubmit function as it's no longer needed

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});