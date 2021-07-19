import React from 'react'
import { useHistory } from 'react-router-dom';

const LibraryBook = ({ book }) => {
    const history = useHistory()
    return (
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div className="image">
                <img alt={book.title} src={book.img_url} />
            </div>
            <div className="content">
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
            </div>
            <button onClick={() => history.push(`/library/${book.book_id}/notes`)}>View Notes</button>
        </div >
    )
}

export default LibraryBook
