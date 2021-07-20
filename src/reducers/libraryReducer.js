const initialState = {
    loading: false,
    library: [],
}


const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIBRARY_DOWNLOAD_START':
            return { ...state, loading: true, library: [] }
        case 'LIBRARY_DOWNLOAD_FINISH':
            return { ...state, loading: false, library: action.payload }
        case 'CLEAR_LIBRARY':
            return []
        default:
            return state;
    }
}

export default libraryReducer