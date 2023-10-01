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
            // Fetch the book details from books.json based on expectedBookId
            fetch('books.json')
                .then(response => response.json())
                .then(data => {
                    const foundBook = data.find(book => book.id.toString() === qrCodeMessage);

                    if (foundBook) {
                        const { title, author } = foundBook;
                        // Redirect to bookfound.html with bookName and authorName
                        window.location.href = `bookfound.html?bookName=${title}&authorName=${author}`;
                    } else {
                        console.log('Book not found');
                    }
                })
                .catch(error => {
                    console.error('Error fetching book data:', error);
                });
        },
        (error) => {
            // Handle errors
            console.error('QR code scanner error: ' + error);
        }
    );
});
