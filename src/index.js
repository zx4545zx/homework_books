import booksCollection from './books.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.getElementById('card')
    const books = booksCollection.data
    console.log(booksCollection);
    console.log(books[0]);
    console.log(books[0].Authors);

    books.forEach(book => {
        let cardDOM = buildCardDOM(book)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
})

function buildCardDOM(book) {
    let photos = booksCollection.image_base_url

    return (
        `<div class="cards">

            <img src="${photos.concat(`${book.ImageURL}`)}" alt="#" />

                <div class="books-info">
                    <div class="Title_books">${book.Title}</div>
                    <div class="Authors_books">${book.Authors}</div>
                    <div class="Format_books">${book.Format}</div>
                </div>

        </div>`

    )
}