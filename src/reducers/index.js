import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';
import loginReducer from './loginReducer.js';
import libraryReducer from './libraryReducer.js';

export default combineReducers({
    search: searchReducer,
    login: loginReducer,
    library: libraryReducer,
})