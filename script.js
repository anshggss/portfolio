document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Thank you for your message!');
    this.reset(); // Reset the form
});
