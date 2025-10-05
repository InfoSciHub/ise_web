// Initialize Lucide Icons
lucide.createIcons();

// --- Mobile Navigation Toggle ---
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const navIcon = document.getElementById('nav-icon');
const links = navLinks.querySelectorAll('a');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        navIcon.outerHTML = '<i data-lucide="x" id="nav-icon" style="width: 1.5rem; height: 1.5rem;"></i>';
    } else {
        navIcon.outerHTML = '<i data-lucide="menu" id="nav-icon" style="width: 1.5rem; height: 1.5rem;"></i>';
    }
    lucide.createIcons();
});

// Close menu on link click
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navIcon.outerHTML = '<i data-lucide="menu" id="nav-icon" style="width: 1.5rem; height: 1.5rem;"></i>';
            lucide.createIcons();
        }
    });
});

// --- Modal Logic ---
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.getElementById("close-modal-btn");

btn.addEventListener('click', () => modal.classList.remove("hidden"));
closeBtn.addEventListener('click', () => modal.classList.add("hidden"));

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});

