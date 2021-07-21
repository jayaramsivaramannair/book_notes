import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLibraryDownload, finishLibraryDownload, clearLibrary } from '../actions'
import LibraryBook from './LibraryBook.js'

const Library = ({ login, results, startLibraryDownload, finishLibraryDownload }) => {
    const history = useHistory()

    const navigateToDashboard = () => {
        history.push('/dashboard')
        clearLibrary()
    }

    useEffect(() => {
        console.log(login)
        startLibraryDownload()
        finishLibraryDownload(login.id)
    }, [])

    return (
        <div>
            <button onClick={navigateToDashboard}>Back to Dashboard</button>
            <h1 style={{textAlign: 'center'}}>My Library</h1>
            {
                (results.loading && results.library.length === 0) ?
                    <div className="ui active dimmer" style={{ backgroundColor: 'aliceblue' }}>
                        <div className="ui text loader" style={{ color: 'black' }}>Downloading Library...</div>
                    </div>
                    :
                    <div>
                        {
                            results.library.map((result) => {
                                return <LibraryBook key={result.book_id} book={result} />
                            })
                        }
                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        results: state.library,
    }
}

export default connect(mapStateToProps, { startLibraryDownload, finishLibraryDownload, clearLibrary })(Library)
