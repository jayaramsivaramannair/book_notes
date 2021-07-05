import React from 'react'

const LibraryBook = ({ book }) => {
    return (
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div className="image">
                <img alt={book.title} src={book.img_url} />
            </div>
            <div className="content">
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
            </div>
        </div >
    )
}

export default LibraryBook
