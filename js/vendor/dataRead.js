
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnGetStarted').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/send-email', { // Assuming your Node.js server is running on port 3000
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

});
