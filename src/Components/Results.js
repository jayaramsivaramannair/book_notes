import React from 'react'
import BookCard from './BookCard.js'

export default function Results({ bookResults, loading }) {
    return (
        <div className="results">
            {bookResults &&
                bookResults.map((result, index) => {
                    return <BookCard key={index} result={result} loading={loading} />
                })}
        </div>
    )
}
