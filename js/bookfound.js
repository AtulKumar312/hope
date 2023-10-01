// bookfound.js

document.addEventListener('DOMContentLoaded', function () {
    fetch('books.json')
    // Get the book details from the query parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const bookName = urlParams.get('bookName');
    const authorName = urlParams.get('authorName');

    // Display book details
    const bookDetailsDiv = document.getElementById('bookDetails');
    bookDetailsDiv.innerHTML = `Book Name: ${bookName}, Author: ${authorName}`;
});

function registerBook() {
    const registerOption = document.querySelector('input[name="registerOption"]:checked');

    if (registerOption) {
        const registrationChoice = registerOption.value;
        if (registrationChoice === 'yes') {
            // Handle book registration logic (e.g., send a request to the server)
            alert('Book registered successfully!');
            window.location.href = `home_page.html`;
        } else {
            alert('Book not registered.');
            window.location.href = `home_page.html`;
        }
    } else {
        alert('Please select an option.');
    }
}
