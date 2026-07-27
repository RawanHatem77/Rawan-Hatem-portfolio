// Smooth scrolling for anchor links (e.g., CTA button to contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Existing smooth scrolling code remains

// Copy phone number on click
const phoneLink = document.getElementById('phone-link');
if (phoneLink) {
    phoneLink.addEventListener('click', function(e) {
        e.preventDefault(); // Stop dialing
        const phoneNumber = '+201067907645'; // Replace with your real phone number
        navigator.clipboard.writeText(phoneNumber).then(function() {
            alert('Phone number copied successfully!'); // Popup message
        }).catch(function(err) {
            console.error('Failed to copy phone number: ', err);
            alert('Unable to copy phone number. Please copy manually.'); // Fallback message
        });
    });
}

// Light / Dark mode toggle
(function() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (theme === 'light') {
            themeIcon.textContent = '🌙';
            themeLabel.textContent = 'Dark Mode';
        } else {
            themeIcon.textContent = '☀️';
            themeLabel.textContent = 'Light Mode';
        }
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            // localStorage may be unavailable; ignore silently
        }
    }

    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('theme') ||
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    } catch (e) {
        savedTheme = 'dark';
    }
    applyTheme(savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(current);
        });
    }
})();
