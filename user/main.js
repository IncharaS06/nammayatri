function toggleMenu() {
    var sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open');

    var container = document.querySelector('.container');
    container.classList.toggle('shift-right');
}

async function requestEmergencyRide() {
    const fileInput = document.getElementById('geotag-image');
    const file = fileInput.files[0];
    const geotagInfoDiv = document.getElementById('geotag-info');

    if (!file) {
        alert("Please upload a geotagged image.");
        return;
    }

    geotagInfoDiv.textContent = 'Processing image...';

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/upload', {  // Flask route
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.error || 'Unknown error'}`);
        }

        const data = await response.json();
        geotagInfoDiv.textContent = JSON.stringify(data, null, 2); // Display formatted JSON
    } catch (error) {
        console.error('Error uploading image:', error);
        geotagInfoDiv.textContent = `Error: ${error.message}`;
    }
}

// This function should redirect to the search routes page
function searchRoutes() {
    window.location.href = 'realloc.html';
}

function preBookRide() {
    // Implement pre-book ride functionality here
    alert('Pre-book Ride clicked!');
}
