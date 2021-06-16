import React, { useEffect } from 'react'

export default function Modal({ result, hideModal }) {
    const closeModal = () => {
        console.log('button clicked')
        hideModal(false)
    }


    useEffect(() => {
        console.log('Modal rendered!')
    }, [])

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <div className="modal-body">
                    <h4>{result.volumeInfo.title}</h4>
                    <h4>By</h4>
                    <h4>{result.volumeInfo.authors[0]}</h4>
                    <h5>Summary:</h5>
                    <p>{result.searchInfo.textSnippet}</p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    )
}
