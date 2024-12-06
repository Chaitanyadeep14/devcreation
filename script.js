function loadHTML(elementId, filePath) { 
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            // If the loaded file is the header, initialize the menu
            if (elementId === 'header') {
                initializeMenu(); // Initialize the menu after loading the header
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function initializeMenu() {
    const menuButton = document.querySelector('.menu-button'); // Ensure your hamburger button has this class
    const navLinks = document.querySelector('.nav-links'); // Ensure your nav links container has this class

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide nav links
        });
    }
}

// Load header and footer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', 'header.html'); // Load the header into the element with ID 'header'
    loadHTML('footer', 'footer.html'); // Load the footer into the element with ID 'footer'
});
