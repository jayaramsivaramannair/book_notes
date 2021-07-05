const initialState = {
    loading: false,
    books: [],
}


const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_START':
            return { ...state, loading: true, books: [] }
        case 'FETCH_BOOKS_FINISH':
            return { ...state, loading: false, books: action.payload }
        case 'CLEAR_SEARCH_RESULTS':
            return { ...state, loading: false, books: [] }
        default:
            return state;
    }
}

export default searchReducer