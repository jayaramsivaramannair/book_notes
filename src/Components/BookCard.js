import React from 'react'

export default function BookCard({ result }) {

    if (typeof result === 'undefined') {
        return <p> There is no image to display </p>
    }


    return (
        <div className="card">
            <div className="image">
                {
                    (typeof result.volumeInfo.imageLinks !== 'undefined') ?
                        <img alt={result.volumeInfo.title} src={result.volumeInfo.imageLinks.thumbnail} />
                        : 'There is no image to display!'
                }
            </div>
            <div className="content">
                <p>Title: {result.volumeInfo.title}</p>
                <p>Author: {result.volumeInfo.authors[0]}</p>
                <p>Publisher: {result.volumeInfo.publisher}</p>
                <p>Publication Date: {result.volumeInfo.publishedDate}</p>
                <div className="buttons">
                    <button className="ui primary">Details</button>
                    <button className="ui primary">Add to Library</button>
                </div>
            </div>
        </div>
    )
}
