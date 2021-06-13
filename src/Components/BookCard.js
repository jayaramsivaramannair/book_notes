import React from 'react'

export default function BookCard({ result }) {

    if (typeof result === 'undefined') {
        return <p> There is no image to display </p>
    }


    return (
        < div >
            {
                (typeof result.volumeInfo.imageLinks !== 'undefined') ?
                    <img alt={result.volumeInfo.title} src={result.volumeInfo.imageLinks.thumbnail} />
                    : 'There is no image to display!'
            }
        </div>
    )
}
