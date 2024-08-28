// Function to handle scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Define the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.1 });

    // Observe each section
    document.querySelectorAll('main section').forEach(section => {
        observer.observe(section);
    });
});

// Function to add hover effects
document.querySelectorAll('.footer .social-media a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.classList.add('icon-hover');
    });
    icon.addEventListener('mouseout', () => {
        icon.classList.remove('icon-hover');
    });
});

document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('link-hover');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('link-hover');
    });
});
