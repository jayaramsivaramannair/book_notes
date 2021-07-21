import React from 'react'
import { connect } from 'react-redux';
import BookCard from './BookCard.js'

const Results = ({ books, loading }) => {

    return (
        <div className="results">
            {(books && !loading) ?
                books.map((book, index) => {
                    return <BookCard key={index} book={book} />
                }) : <div>No Search Results Found!</div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.search.books,
        loading: state.search.loading,
    }
}

export default connect(mapStateToProps)(Results)
