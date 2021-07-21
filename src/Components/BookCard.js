import React from 'react'
import { connect } from 'react-redux';
import { startAddingLibraryBooks, finishAddingLibraryBooks} from '../actions'

const BookCard = ({ book, login, startAddingLibraryBooks, finishAddingLibraryBooks }) => {

    if (!book) {
        return <p> There is no image to display </p>
    }

    const addToLibrary = (evt) => {
        console.log(`Button clicked!`)
        startAddingLibraryBooks()
        const newBookObject = {
            img_url: book.volumeInfo.imageLinks.thumbnail,
            author: book.volumeInfo.authors,
            title: book.volumeInfo.title, 
        }
        const userId = login.id
        finishAddingLibraryBooks(newBookObject, userId)
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
                    <button className="ui primary" onClick={addToLibrary}>Add to Library</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, {startAddingLibraryBooks, finishAddingLibraryBooks})(BookCard)
