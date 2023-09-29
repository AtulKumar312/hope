// search.js

// Function to search for books
function searchBooks() {
    const searchTerm = document.getElementById('bookSearch').value.toLowerCase();

    // Fetch the books.json file
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Filter books based on the search term
            const filteredBooks = data.filter(book => book.title.toLowerCase().includes(searchTerm));

            // Display the search results on the home_page.html
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
        const bookElement = document.createElement('div');
        bookElement.textContent = `Title: ${book.title}, Author: ${book.author}`;
        searchResultsDiv.appendChild(bookElement);
    });
}
