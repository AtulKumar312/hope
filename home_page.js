// home_page.js

function startSession() {
    // Redirect to the scanner.html page
    window.location.href = 'session.html';
}
document.addEventListener('DOMContentLoaded', function () {
    // Set the phone number for testing (remove this line in production)
    const phoneNumber = '1234567890'; // Temporary phone number for testing

    // Fetch the profile.json file
    fetch('profile.json')
        .then(response => response.json())
        .then(data => {
            // Check if the user's phone number exists in the profile.json data
            if (data.hasOwnProperty(phoneNumber)) {
                const user = data[phoneNumber];
                const welcomeMessage = `Welcome, ${user.name}!`;
                document.getElementById('welcomeMessage').textContent = welcomeMessage;
            } else {
                alert('User not found in the profile data.'); // Handle the case where the user is not found
            }
        })
        .catch(error => {
            console.error('Error fetching profile data:', error);
        });

    // Fetch the books.json file
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Filter books based on course
            const courseABooks = data.filter(book => book.course === 'A');
            const courseBBooks = data.filter(book => book.course === 'B');
            const courseCBooks = data.filter(book => book.course === 'C');

            // Display 3 random books from each course
            displayRandomBooks('aCourseBooks', courseABooks);
            displayRandomBooks('bCourseBooks', courseBBooks);
            displayRandomBooks('cCourseBooks', courseCBooks);
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
        });
});

function displayRandomBooks(divId, books) {
    // Shuffle the array of books randomly
    const shuffledBooks = shuffleArray(books);

    // Display up to 3 random books in the specified div
    const divElement = document.getElementById(divId);
    for (let i = 0; i < 3 && i < shuffledBooks.length; i++) {
        const book = shuffledBooks[i];
        const bookElement = document.createElement('div');
        bookElement.textContent = `Title: ${book.title}, Author: ${book.author}`;
        divElement.appendChild(bookElement);
    }
}

// Function to shuffle an array randomly
function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
