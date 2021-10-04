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
    switch (action.type) {
        case 'CREATE':
            console.log(action)
            console.log(state)
            const newTodo = {
                title: action.title,
                content: action.content,
                dateCreated: action.dateCreated,
                index: action.index,
                dispatch: action.dispatch
            }
            return [ newTodo, ...state ]
        case 'TOGGLE':
            console.log("Toggling todo")
            //let i = state.indexOf(action.todo)
            //console.log(state)
            return state
        case 'DELETE':
            return state.filter((t) => t.index != action.index)
        default:
            return state
    }
}

export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action),
    }
}