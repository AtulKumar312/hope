// session.js

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    console.log(`Scan result: ${decodedText}`, decodedResult);
    
    // Check if the scanned QR code matches the expected QR code
    if (decodedText === "123") {
        // QR code matched, redirect to booksearch.html
        window.location.href = 'booksearch.html';
    }
}

// Specify the "facingMode" option as "environment" to use the primary camera (rear camera) by default.
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", {
        fps: 10,    // Frames per second
        qrbox: 350, // Size of the QR code scanner box
        facingMode: "environment" // Use the primary camera (rear camera) by default
    }
);

html5QrcodeScanner.render(onScanSuccess);
