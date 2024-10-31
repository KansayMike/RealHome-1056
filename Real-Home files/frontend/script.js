// script.js

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}

// Optional: Close the menu when clicking outside of it
window.onclick = function(event) {
    const navbar = document.getElementById('navbar');
    if (!event.target.matches('.menu-icon') && navbar.style.display === 'block') {
        navbar.style.display = 'none';
    }
}