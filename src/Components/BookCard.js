import React, { useState } from 'react'
import Modal from './Modal.js'

export default function BookCard({ result }) {

    const [showDetails, setShowDetails] = useState(false)

    const hideModal = (detail) => {
        setShowDetails(detail)
    }

    const showModal = () => {
        console.log('buttonClicked')
        setShowDetails(true)
    }

    if (typeof result === 'undefined') {
        return <p> There is no image to display </p>
    }


    return (
        <div className="card">
            {
                (showDetails) ? <Modal result={result} hideModal={hideModal} /> :
                    <>
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
                                <button className="ui primary" onClick={showModal}>Flip for Details</button>
                                {
                                    (showDetails) ? <Modal result={result} hideModal={hideModal} /> : ''
                                }
                                <button className="ui primary">Add to Library</button>
                            </div>
                        </div>
                    </>
            }

        </div>
    )
}
