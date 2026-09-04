// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    });
});

// Tab Switching Logic
function switchTab(tabId) {
    // Remove active class from all buttons and panes
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
        pane.hidden = true;
    });

    // Add active class to selected button and pane
    const selectedBtn = document.getElementById(`tab-${tabId}`);
    const selectedPane = document.getElementById(tabId);
    
    if (selectedBtn && selectedPane) {
        selectedBtn.classList.add('active');
        selectedBtn.setAttribute('aria-selected', 'true');
        selectedPane.classList.add('active');
        selectedPane.hidden = false;
    }
}

// Scroll Reveal Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-reveal').forEach(section => {
    observer.observe(section);
});

// Auto-trigger home reveal on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const homeSection = document.getElementById('home');
        if (homeSection) homeSection.classList.add('visible');
    }, 100);
});
