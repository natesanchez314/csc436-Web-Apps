function userReducer (state, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.users
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
                dateCompleted: undefined,
                id: action.todoId
            }
            return [ newTodo, ...state ]
            //const filterTodo = state.filter((t) => t.id === newTodo.id)
            //if (filterTodo === 0) return [ newTodo, ...state ]
            //else return state
        case 'TOGGLE':
            return state.map((t) => {
                if (t.id === action.todoId) {
                    t.isComplete = action.isComplete
                    t.dateCompleted = action.dateCompleted
                }
                return t
            })
        case 'DELETE':
            return state.filter((t) => t.id !== action.todoId)
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