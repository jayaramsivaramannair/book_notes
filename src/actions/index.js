import googleBooks from '../apis/googleBooks';
import { apiKey } from '../utils/key.js'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const startFetching = () => {
    return { type: 'FETCH_BOOKS_START' }
}

export const fetchBooks = (term) => async dispatch => {
    const response = await googleBooks.get(`/?q=${term}&key=${apiKey}&maxResults=15`)
    console.log(response)
    dispatch({ type: 'FETCH_BOOKS_FINISH', payload: response.data.items })
}

export const startAddingLibraryBooks = () => {
    return {type: 'START_LIBRARY_ADDITION'}
}

export const clearSearch = () => {
    return { type: 'CLEAR_SEARCH_RESULTS' }
}

export const saveLoginDetails = (loginObj) => {
    return { type: 'SAVE_USER_LOGIN', payload: loginObj }
}

export const startLibraryDownload = () => {
    return { type: 'LIBRARY_DOWNLOAD_START' }
}

export const finishLibraryDownload = (userId) => async dispatch => {
    const response = await axiosWithAuth().get(`/users/${userId}/library`)
    console.log(response)
    dispatch({ type: 'LIBRARY_DOWNLOAD_FINISH', payload: response.data })
}

export const finishAddingLibraryBooks = (newBookObject, userId) => async dispatch => {
    const response = await axiosWithAuth().post(`/users/${userId}/library`, { 
        ...newBookObject
    })
    
    console.log(response)
    dispatch({type: 'FINISH_LIBRARY_ADDITION'})
}

export const startNotesDownload = () => {
    return {type: 'NOTES_DOWNLOAD_START'}
}

export const finishNotesDownload = (bookID, userID) => async dispatch => {
    const response = await axiosWithAuth().get(`/library/${userID}/${bookID}/notes`)
    console.log(response)
    dispatch({type: 'NOTES_DOWNLOAD_FINISH', payload: response.data})
}

export const clearLibrary = () => {
    return { type: 'CLEAR_LIBRARY' }
}