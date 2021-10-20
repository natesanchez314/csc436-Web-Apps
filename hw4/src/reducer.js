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
                isComplete: false,
                dateCompleted: undefined
            }
            return [ newTodo, ...state ]
        case 'TOGGLE':
            return state.map((t, i) => {
                if (i === action.todoId) {
                    t.isComplete = action.isComplete
                    t.dateCompleted = Date.now()
                }
                return t
            })
        case 'DELETE':
            return state.filter((t, i) => i !== action.todoId)
        case 'FETCH_TODOS':
            return action.todos
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