import React from 'react'

export default function BookCard({ bookResults }) {
    return (
        < div className="ui card" style={{ maxHeight: '100px', maxWidth: '100px' }}>
            <div className="image">
                <img alt="book result" src={bookResults} />
            </div>
        </div>
    )
}
