import React from 'react'
import BookCard from './BookCard.js'

export default function Results({ bookResults, loading }) {
    if (loading) {
        return (
            <div className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui text loader">Fetching Books...</div>
                </div>
            </div>
        )
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
