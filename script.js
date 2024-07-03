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

// Call the function when the page loads
window.onload = function() {
    changeBackgroundImage();
};
