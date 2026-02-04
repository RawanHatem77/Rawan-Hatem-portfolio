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
document.getElementById('phone-link').addEventListener('click', function(e) {
    e.preventDefault(); // Stop dialing
    const phoneNumber = '+201067907645'; // Replace with your real phone number
    navigator.clipboard.writeText(phoneNumber).then(function() {
        alert('Phone number copied successfully!'); // Popup message
    }).catch(function(err) {
        console.error('Failed to copy phone number: ', err);
        alert('Unable to copy phone number. Please copy manually.'); // Fallback message
    });
});