const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_USER_LOGIN':
            return action.payload
        case 'CLEAR_USER_LOGIN':
            return {}
        default:
            return state;
    }
}

export default loginReducer