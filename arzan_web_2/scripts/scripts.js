
// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

// Active page functionality
function setActivePage(page) {
    console.log('Setting active page to:', page); // Debug log

    // Remove active classes from all nav links
    const allNavLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    allNavLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'hover:text-blue-800');
        link.classList.add('text-gray-500', 'hover:text-gray-700');
    });

    // Add active classes to current page links
    const activeLinks = document.querySelectorAll(`[data-page="${page}"]`);
    console.log('Found active links:', activeLinks.length); // Debug log

    activeLinks.forEach(link => {
        link.classList.remove('text-gray-500', 'hover:text-gray-700');
        link.classList.add('text-blue-600', 'hover:text-blue-800');
    });

    // Update demo display
    const pageNames = {
        'home': 'Home',
        'privacy': 'Privacy Policy',
        'support': 'Support & FAQs',
        'terms': 'Terms & Condition'
    };
    document.getElementById('current-page').textContent = pageNames[page] || page;

    // Close mobile menu after selection
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Auto-detect active page based on URL
function setActivePageByURL() {
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop() || 'index.html';

    console.log('Current path:', currentPath); // Debug log
    console.log('File name:', fileName); // Debug log

    // Map file names to page identifiers
    const pageMap = {
        'index.html': 'home',
        '': 'home', // for root path
        'privacy_policy.html': 'privacy',
        'support.html': 'support',
        'terms.html': 'terms'
    };

    const activePage = pageMap[fileName] || 'home';
    console.log('Mapped to page:', activePage); // Debug log

    setActivePage(activePage);
}

// Function to simulate different pages (for demo purposes)
function simulatePage(filename) {
    // Update the demo display
    document.getElementById('current-url').textContent = filename;

    // Manually trigger the active page logic
    const pageMap = {
        'index.html': 'home',
        'privacy_policy.html': 'privacy',
        'support.html': 'support',
        'terms.html': 'terms'
    };

    const activePage = pageMap[filename] || 'home';
    setActivePage(activePage);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    setActivePageByURL();
});


//show alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Optional: Perform validation or Ajax here

    Swal.fire({
        icon: 'success',
        title: 'Message sent successfully!',
        text: 'We will get back to you soon.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
    });

    // Optional: Clear form
    this.reset();
});