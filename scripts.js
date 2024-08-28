// Function to handle sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const mainContent = document.getElementById('main-content');

    // Toggle sidebar
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (sidebar.classList.contains('open')) {
            mainContent.style.marginLeft = '250px'; // Adjust this according to the sidebar width
        } else {
            mainContent.style.marginLeft = '0';
        }
    });

    // Handle scroll animations
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

    // Add hover effects
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
});
