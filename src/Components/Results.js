import React from 'react'
import BookCard from './BookCard.js'

export default function Results({ bookResults }) {
    if (!bookResults) {
        <p>There are no results to display</p>
    }
    return (
        <div>
            <h2>Search Results:</h2>
            {bookResults &&
                bookResults.map((result, index) => {
                    return <BookCard key={index} result={result} />
                })}
        </div>
    )
}
