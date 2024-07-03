// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform simple validation (e.g., username and password check)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (replace with your actual logic)
    if (username === '04072003' && password === '23112002') {
        // Redirect to the birthday website upon successful login
        window.location.href = 'index.html'; // Replace with your actual website URL
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
