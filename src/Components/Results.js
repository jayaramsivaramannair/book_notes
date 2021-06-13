import React from 'react'
import BookCard from './BookCard.js'

export default function Results({ bookResults, loading }) {
    if (loading && bookResults.length < 10) {
        return <p>Loading Results...</p>
    }

    return (
        <div className="results">
            {bookResults &&
                bookResults.map((result, index) => {
                    return <BookCard key={index} result={result} loading={loading} />
                })}
        </div>
    )
}
