document.addEventListener('DOMContentLoaded', () => {
    const star = document.getElementById('cursor-star');

    // 1. Movimiento estrella
    document.addEventListener('mousemove', (e) => {
        star.style.left = `${e.clientX}px`;
        star.style.top = `${e.clientY}px`;
    });

    // 2. Hover dinámico
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => star.classList.add('active'));
        el.addEventListener('mouseleave', () => star.classList.remove('active'));
    });

    // 3. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// Dentro de tu js/cursor.js asegúrate de tener esto:
const targets = document.querySelectorAll('a, button, .project-card, .contact-item');