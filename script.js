function updateRealTime2() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('realDate').textContent = formattedTime;
}

setInterval(updateRealTime, 1000);

updateRealTime2();
function updateRealTime() {
    const now = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('realTime').textContent = formattedTime;
}

setInterval(updateRealTime, 1000);

updateRealTime();

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const locationText = `Latitude: ${latitude}, Longitude: ${longitude}`;
                document.getElementById('realLocation').textContent = locationText;
            },
            error => {
                console.error(`Error getting location: ${error.message}`);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// Update every 5 seconds (5000 milliseconds)
setInterval(updateLocation, 5000);

// Initial update
updateLocation();