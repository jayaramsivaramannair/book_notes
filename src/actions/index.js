import googleBooks from '../apis/googleBooks';

const API = 'AIzaSyBVrXAK-6urEQXprz3uJMZOomYQwgXtj0Y'

export const startFetching = () => {
    return { type: 'FETCH_BOOKS_START' }
}

export const fetchBooks = (term) => async dispatch => {
    const response = await googleBooks.get(`/?q=${term}&key=${API}&maxResults=15`)
    console.log(response)
    dispatch({ type: 'FETCH_BOOKS_FINISH', payload: response.data.items })
}