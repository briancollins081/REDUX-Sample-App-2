import {
    VisibilityFilters,
} from '../actions/todoactions';

const { SHOW_ALL } = VisibilityFilters;

const initialState = SHOW_ALL;

function visibilityFilter(state=initialState, action){
    switch (action.type) {
        case value:
            return action.filter;
    
        default:
            return state;
    }
}

export default visibilityFilter;