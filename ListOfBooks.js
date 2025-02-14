const booksData = [
    {
        "bookId": 101,
        "title": "JavaScript: The Good Parts",
        "author": {
            "name": "Douglas Crockford",
            "birthDate": "1947-12-15",
            "nationality": "American"
        },
        "publisher": {
            "name": "O'Reilly Media",
            "yearFounded": 1980,
            "location": "USA"
        },
        "genres": ["Programming", "Web Development", "JavaScript"],
        "reviews": [
            {
                "user": "Alice",
                "rating": 5,
                "comment": "A must-read for every JavaScript developer!",
                "date": "2021-05-10"
            },
            {
                "user": "Bob",
                "rating": 4,
                "comment": "Great book but could include more examples.",
                "date": "2021-06-15"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 30.99
        },
        "available": true,
        "languages": ["English", "Spanish"],
        "tags": ["beginner", "web dev"]
    },
    {
        "bookId": 102,
        "title": "The Pragmatic Programmer",
        "author": {
            "name": "Andrew Hunt",
            "birthDate": "1960-12-21",
            "nationality": "American"
        },
        "publisher": {
            "name": "Addison-Wesley",
            "yearFounded": 1942,
            "location": "USA"
        },
        "genres": ["Programming", "Software Development", "Tech"],
        "reviews": [
            {
                "user": "Charlie",
                "rating": 5,
                "comment": "One of the best books on software engineering.",
                "date": "2020-07-11"
            },
            {
                "user": "Dave",
                "rating": 4,
                "comment": "Useful but a bit dated in some concepts.",
                "date": "2022-01-22"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 39.99
        },
        "available": false,
        "languages": ["English"],
        "tags": ["advanced", "software engineering"]
    },
    {
        "bookId": 103,
        "title": "Clean Code",
        "author": {
            "name": "Robert C. Martin",
            "birthDate": "1952-12-05",
            "nationality": "American"
        },
        "publisher": {
            "name": "Prentice Hall",
            "yearFounded": 1913,
            "location": "USA"
        },
        "genres": ["Programming", "Software Engineering", "Best Practices"],
        "reviews": [
            {
                "user": "Eve",
                "rating": 5,
                "comment": "Transformative book on writing clean code.",
                "date": "2023-01-02"
            },
            {
                "user": "Frank",
                "rating": 4,
                "comment": "Extremely valuable, but challenging for beginners.",
                "date": "2023-01-10"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 45.50
        },
        "available": true,
        "languages": ["English", "French", "German"],
        "tags": ["advanced", "best practices"]
    }
];


// // 11. Challenge: Sort books by rating
// // Write a JavaScript function sortBooksByRating that sorts the books by their average rating in descending order.
// const sortBooksByRating=(books)=>{
//     return books.sort((bookA,bookB)=>{
//         const averageRatingA= bookA.reviews.reduce((acc,curr)=>acc.rating+curr.rating)/bookA.reviews.length;
//         const averageRatingB= bookB.reviews.reduce((acc,curr)=>acc.rating+curr.rating)/bookB.reviews.length;
//         return averageRatingB-averageRatingA;
//     });
// }
// console.log(sortBooksByRating(booksData));

// // 9. Challenge: Get books in multiple languages
// // Write a JavaScript function getBooksInLanguages that takes an array of languages (e.g., ["English", "Spanish"]) and returns all books available in at least one of those languages.
// const getBooksInLanguages=(lang,books)=>books.filter(book=>book.languages.some(l=>l.toLowerCase()===lang.toLowerCase()));
// console.log(getBooksInLanguages("spanish",booksData));


// // 10. Challenge: Find the most expensive book
// // Write a JavaScript function getMostExpensiveBook that returns the book with the highest price.
// const getMostExpensiveBook=(books)=>books.reduce((accBook,curBook)=>
//     accBook.price.amount>curBook.price.amount?accBook:curBook);
// console.log(getMostExpensiveBook(booksData));

// 8. Challenge: Find the most popular book (based on average rating)
// Write a JavaScript function getMostPopularBook that returns the book with the highest average rating.
// const getMostPopularBook=(books)=>{
//     return books.reduce((accBook,currBook)=>{
//         const avgofBookA=accBook.reviews.reduce((review1,review2)=>review1.rating+review2.rating)/accBook.reviews.length;
//         const avgofBookB=currBook.reviews.reduce((review1,review2)=>review1.rating+review2.rating)/currBook.reviews.length;
//         return avgofBookB>avgofBookA? currBook: accBook;
//     });
// }
// console.log(getMostPopularBook(booksData));
// // 7. Challenge: Get books with more than a certain number of reviews
// // Write a JavaScript function getBooksWithMoreThanReviews that takes a number (e.g., 1) as input and returns all books that have more than the specified number of reviews.
// const getBooksWithMoreThanReviews=(num,books)=>books.filter(book=>{
//     return book.reviews.length>num;});
// console.log(getBooksWithMoreThanReviews(1,booksData));


// // 5. Challenge: Filter books by genre
// // Write a JavaScript function filterBooksByGenre that takes a genre as input and returns all books that belong to that genre. Consider that a book can belong to multiple genres.
// const filterBooksByGenre=(genre,books)=>books.filter(book=>book.genres.includes(genre));
// console.log(filterBooksByGenre("Software Engineering",booksData));


// // helper functions for idea: filter(), map(), reduce(), and sort()
// //1. Challenge: Find all available books
// //Write a JavaScript function findAvailableBooks that takes the bookstore array as input and returns a list of all available books (i.e., books where available is true).
// const findAvailableBooks=(books)=>books.filter(aviBooks=>{
//     return aviBooks.available===true;
// });
// console.log(findAvailableBooks(booksData));


// // 6. Challenge: Books with price less than a certain amount
// // Write a JavaScript function getBooksBelowPrice that takes a price limit (e.g., 40) and returns all books with a price lower than the specified amount.
// const getBooksBelowPrice=(books)=>books.filter(priceLimit=>{
//     return priceLimit.price.amount<40;
// })
// console.log(getBooksBelowPrice(booksData));


// 2. Challenge: Get average rating for a book
// Write a JavaScript function getAverageRating that takes a bookId and returns the average rating of that book. If the book doesn't exist or has no reviews, return null.
// function getAverageRating(booksData, bookId) {
//     const book = booksData.find(booksData => booksData.bookId === bookId);
//     if (!book || book.reviews.length === 0) {
//         return null;
//     }
//     const totalRating = book.reviews.reduce((sum, review) => sum + review.rating, 0);
//     const averageRating = totalRating / book.reviews.length;
//     return averageRating;
// }
// console.log(getAverageRating(booksData, 101));
// console.log(getAverageRating(booksData, 102));
// console.log(getAverageRating(booksData, 103));
// console.log(getAverageRating(booksData, 999));


// 3. Challenge: Books by a specific author
// Write a JavaScript function getBooksByAuthor that takes an author's name as input and returns all the books written by that author.

// const getBooksByAuthor=(autherName,books)=>{
//     const authorBooksList= books.filter(book=>book.author.name===autherName);
//     return authorBooksList.length>0? authorBooksList : null ; 
// }
// console.log(getBooksByAuthor("Douglas Crockford",booksData));
// console.log(getBooksByAuthor("drew Hun",booksData));


// 4. Challenge: Books published by a specific publisher
// Write a JavaScript function getBooksByPublisher that takes a publisher name as input and returns all books published by that publisher.
// const getBooksByPublisher=(publisherName,books)=>{
//     const publisherBooksList= books.filter(book=>book.publisher.name===publisherName);
//     return publisherBooksList.length>0 ? publisherBooksList : null;
// }
// console.log(getBooksByPublisher("Prentice Hall",booksData));
// console.log(getBooksByPublisher("Wesley",booksData));
