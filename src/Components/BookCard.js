import React from 'react'

export default function BookCard({ book }) {

    if (!book) {
        return <p> There is no image to display </p>
    }

    return (
        <div className="card">
            <div className="image">
                {
                    (typeof book.volumeInfo.imageLinks !== 'undefined') ?
                        <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} />
                        : 'There is no image to display!'
                }
            </div>
            <div className="content">
                <p>Title: {book.volumeInfo.title}</p>
                <p>Author: {book.volumeInfo.authors}</p>
                <p>Publisher: {book.volumeInfo.publisher}</p>
                <p>Publication Date: {book.volumeInfo.publishedDate}</p>
                <div className="buttons">
                    <button className="ui primary">Flip for Details</button>
                    <button className="ui primary">Add to Library</button>
                </div>
            </div>
        </div>
    )
}
