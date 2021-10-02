import React, {useState} from 'react'
import { useParams} from 'react-router-dom';
import {startAddingNotes, finishAddingNotes, startNotesDownload, finishNotesDownload} from '../actions'
import { connect } from 'react-redux';

const NotesForm = ({login, loading, startAddingNotes, finishAddingNotes, bookId}) => {
  const [notesField, setNotesField] = useState({
    category: '',
    content: ''
  })

  const addNotes = (evt) => {
    evt.preventDefault()
    console.log('Add Notes Button Clicked')
    startAddingNotes()
    const newNotesObject = {...notesField}
    const userId = login.id
    finishAddingNotes(newNotesObject, userId, bookId)
    startNotesDownload();
  }

  const registerFormValues = (event) => {
    setNotesField({ ...notesField, [event.target.name]: event.target.value })
    console.log(notesField)
}

  return (
    <div>
      <form className="notes-form" onSubmit = {addNotes}>
        <h1>Add Notes</h1>
        <div className="form-inputs">
          <label >Category:</label>
          <input
            type="text"
            name="category"
            placeholder="Enter Category"
            value={notesField.category}
            onChange={registerFormValues}
          />
        </div>
        <div className="form-inputs">
          <label>Content:</label>
          <textarea
            type="text"
            name="content"
            placeholder="Enter content"
            value={notesField.content}
            onChange={registerFormValues}
          />
        </div>
        <button className={`ui primary ${(loading) ? 'loading' : ''} button`}>Add Notes</button>
      </form>  
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      login: state.login,
      loading: state.notes.loading,
  }
}

export default connect(mapStateToProps, { startAddingNotes, finishAddingNotes })(NotesForm)
