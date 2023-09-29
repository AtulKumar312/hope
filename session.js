// session.js

document.addEventListener('DOMContentLoaded', function () {
    const qrScanner = new Html5QrcodeScanner(
        'qrScanner',
        {
            fps: 10, // Frames per second for scanning
            qrbox: 250 // Size of the QR code scanning box
        },
        qrResult => {
            // Handle scanned QR code results here
            if (qrResult === 'correct-qr-code') {
                alert('QR code matched! Session is now active.');
            }
        },
        errorMessage => {
            // Handle error messages (e.g., camera permission denied)
            console.error(errorMessage);
            alert('Error: ' + errorMessage);
        }
    );

    qrScanner.start();

    // Add event listener to the "Stop Session" button
    document.getElementById('stopSessionButton').addEventListener('click', function () {
        qrScanner.stop().then(ignore => {
            alert('Session stopped.');
        }).catch(error => {
            console.error('Error stopping scanner:', error);
        });
    });
});
