// booksearch.js

function searchBooks() {
    const searchTerm = document.getElementById('bookSearch').value.toLowerCase();

    // Fetch the books.json file
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Filter books based on the search term (title or author)
            const filteredBooks = data.filter(book =>
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
            );

            // Display the search results as clickable buttons
            displaySearchResults(filteredBooks);
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
        });
}

function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        searchResultsDiv.textContent = 'No results found.';
        return;
    }

    results.forEach(book => {
        const bookButton = document.createElement('button');
        bookButton.textContent = `Title: ${book.title}, Author: ${book.author}`;
        bookButton.addEventListener('click', () => redirectToScanner(book.id)); // Add click event listener
        searchResultsDiv.appendChild(bookButton);
    });
}

function redirectToScanner(bookId) {
    // Redirect to scanner.html with the book ID as a query parameter
    window.location.href = `scanner.html?bookId=${bookId}`;
}
