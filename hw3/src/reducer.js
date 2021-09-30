function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state
    }
}

function todoReducer(state, action) {

}

export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}