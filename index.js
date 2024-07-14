function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// //The book in 5th position will be in index 4 because indexes start with 0
fetch('https://anapioficeandfire.com/api/books/4')
  .then((resp) => resp.json())
  .then((json) => console.log(json[4]));
  

  //finding the 1031 character in the series.
  fetch('https://anapioficeandfire.com/api/characters/1031')
   .then(res => res.json())
   .then(error => console.log(json))
   .catch((error) => console.error('ERROR'));


   //finding the total number of pages
   fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(books => {
    const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
    console.log(`Total number of pages: ${totalPages}`); //Calculating the number total number pages.
  })
  .catch(error => console.error('Error fetching books:', error));