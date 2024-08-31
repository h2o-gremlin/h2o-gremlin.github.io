document.addEventListener('DOMContentLoaded', function() {
    // Add a simple animation to the h1 element
    const h1 = document.querySelector('h1');
    h1.style.opacity = '0';
    h1.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        h1.style.opacity = '1';
    }, 500);

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === window.location.pathname) {
                e.preventDefault();
                alert('You are already on this page!');
            }
        });
    });
});
