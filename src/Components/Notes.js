import React, { useEffect } from 'react'
import { useParams , useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import {startNotesDownload, finishNotesDownload} from '../actions'
import NoteCard from './NoteCard.js'
import NotesForm from './NotesForm.js';


const Notes = ({results, login, startNotesDownload, finishNotesDownload}) => {
    const {bookid} = useParams()
    console.log(bookid)
    const history = useHistory()

    useEffect(() => {
        startNotesDownload()
        finishNotesDownload(bookid, login.id)
    }, [ ])

    return (
        <div>
            <h1>Note Repository</h1>
            <NotesForm bookId = {bookid}/>
            <button onClick={() => history.push('/library')}>Back to Library</button>
            {
                (results.loading && results.notes.length === 0) ?
                <div className="ui active dimmer" style={{ backgroundColor: 'aliceblue' }}>
                    <div className="ui text loader" style={{ color: 'black' }}>Fetching Notes...</div>
                </div>
                :
                <div>
                    {
                        results.notes.Notes && results.notes.Notes.map((note) => {
                            return <NoteCard key={note.Note_Id} note={note}/>
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
        results: state.notes,
    }
}

export default connect(mapStateToProps, {startNotesDownload, finishNotesDownload})(Notes)