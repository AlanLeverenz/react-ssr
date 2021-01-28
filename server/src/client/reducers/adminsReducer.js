// a named reducer needs curly braces (as an object)

import { FETCH_ADMINS } from '../actions';

// starts with an empty state list of admins, then sets the action
export default ( state = [], action) => {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
};