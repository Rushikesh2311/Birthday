// List of background images
const backgroundImages = [
    'image1.jpeg',
    'image2.jpeg',
    'image4.jpeg',
    // Add more image URLs as needed
];

// Function to change background image every 3 seconds
function changeBackgroundImage() {
    let currentIndex = 0;
    const backgroundElement = document.querySelector('.background-image');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        backgroundElement.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    }, 3000); // Change every 3 seconds (3000 milliseconds)
}

// Function to hide message div and reset any other elements if needed
function cancelMessage() {
    const messageDiv = document.getElementById('messageDiv');
    messageDiv.style.display = 'none';
    // Add any other reset logic here if necessary
}

// Call the functions when the page loads
window.onload = function() {
    changeBackgroundImage();

    // Event listener for toggle message button
    document.getElementById('toggleMessageBtn').addEventListener('click', function() {
        const messageDiv = document.getElementById('messageDiv');
        messageDiv.style.display = messageDiv.style.display === 'none' ? 'block' : 'none';
    });

    // Event listener for close message button
    document.getElementById('closeMessageBtn').addEventListener('click', function() {
        cancelMessage();
    });
};
