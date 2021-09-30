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
            const newTodo = {
                title: action.title,
                content: action.content,
                dateCreated: action.dateCreated,
                dispatch: action.dispatch
            }
            return [ newTodo, ...state ]
        case 'TOGGLE':
            console.log("Toggling todo")
            //let i = state.indexOf(action.todo)
            //console.log(state)
            return state
        case 'DELETE':
            console.log("deleteing todo")
            //state.splice(action.todo)
            return state
        default:
            return state
    }
}

export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action),
        completed: todoReducer(state.completed, action)
    }
}