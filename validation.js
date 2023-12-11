document.getElementById('surveyForm').addEventListener('submit', function(event) {
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }
});
