const initialState = {
    loading: false,
    notes: [],
}


const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTES_DOWNLOAD_START':
            return { ...state, loading: true, notes: {} }
        case 'NOTES_DOWNLOAD_FINISH':
            return { ...state, loading: false, notes: action.payload }
        case 'CLEAR_NOTES':
            return {}
        case 'START_NOTES_ADDITION':
            return {...state, loading: true}
        case 'FINISH_NOTES_ADDITION':
            return {...state, loading: false}
        default:
            return state;
    }
}

export default notesReducer