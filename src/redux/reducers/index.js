import { combineReducers } from 'react-redux';

import todos from './todos';
import visibilityFilter from './filters';

/* function todoApp(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}  
//or same as -> */

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;