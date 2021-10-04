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
                index: action.index,
                isComplete: action.isComplete,
                dispatch: action.dispatch
            }
            return [ newTodo, ...state ]
        case 'TOGGLE':
            // Acessing the variable this way felt weird but it also seemed to be the
            // easiest so what can you do
            state[state.length - action.index - 1].isComplete = action.completionStatus
            state[state.length - action.index - 1].dateCompleted = Date(Date.now())
            return state
        case 'DELETE':
            return state.filter((t) => t.index !== action.index)
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