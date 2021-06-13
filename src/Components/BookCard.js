import React from 'react'

export default function BookCard({ result }) {
    console.log(result)

    if (!result || !result.volumeInfo.imageLinks.hasOwnProperty('thumbnail')) {
        return <p> There is no image to display </p>
    }
    return (
        < div >
            {
                (result.volumeInfo.imageLinks.thumbnail) ?
                    <img alt={result.volumeInfo.title} src={result.volumeInfo.imageLinks.thumbnail} /> :
                    "There is no image to display"
            }
        </div>
    )
}
