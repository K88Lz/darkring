// Modern accordion functionality using <details> element
// No additional JS needed for basic accordion behavior as we're using native HTML <details>

// Optional: Add smooth scroll for section navigation if needed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
