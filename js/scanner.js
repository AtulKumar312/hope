// scanner.js

document.addEventListener('DOMContentLoaded', function () {
    const reader = document.getElementById('reader');
    let scanner = new Html5Qrcode('reader');

    // Get the book ID from the query parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const expectedBookId = urlParams.get('bookId');

    // Start scanning when the page loads
    const supportedFormats = ['QR_CODE'];


    scanner.start(
        { facingMode: 'environment' }, // Use the device's rear camera if available
        {
            fps: 10, // Frames per second
            qrbox: 250, // Size of the QR code scanner box
        },
        (qrCodeMessage) => {
            // Check if the scanned QR code matches the expected book ID
            if (qrCodeMessage === expectedBookId) {
                // QR code matched the expected book ID, stop scanning
                scanner.stop().then(() => {
                    alert('QR code matched! Book found.');
                    // Redirect to bookfound.html
                    window.location.href = `bookfound.html?bookName=${bookName}&authorName=${authorName}`;
                });
            }
        },
        (error) => {
            // Handle errors
            console.error('QR code scanner error: ' + error);
        }
    );
});
