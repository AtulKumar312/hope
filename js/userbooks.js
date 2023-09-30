// userbooks.js

document.addEventListener('DOMContentLoaded', function () {
    // Set the user's phone number (you can fetch it from session storage)
    const phoneNumber = '1234567890'; // Replace with your logic to get the user's phone number

    // Fetch the profile.json file
    fetch('profile.json')
        .then(response => response.json())
        .then(data => {
            // Check if the user's phone number exists in the profile.json data
            if (data.hasOwnProperty(phoneNumber)) {
                const user = data[phoneNumber];
                const userId = user.id;

                // Fetch the books.json file
                fetch('books.json')
                    .then(response => response.json())
                    .then(booksData => {
                        // Filter books based on the user's id
                        const userBooks = booksData.filter(book => book.id === parseInt(userId));

                        // Display the user's books
                        displayUserBooks(userBooks);
                    })
                    .catch(error => {
                        console.error('Error fetching book data:', error);
                    });
            } else {
                alert('User not found in the profile data.'); // Handle the case where the user is not found
            }
        })
        .catch(error => {
            console.error('Error fetching profile data:', error);
        });
});

function displayUserBooks(books) {
    const userBooksDiv = document.getElementById('userBooks');

    if (books.length === 0) {
        userBooksDiv.textContent = 'You have no books.';
        return;
    }

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.textContent = `Title: ${book.title}, Author: ${book.author}`;
        userBooksDiv.appendChild(bookElement);
    });
}
