import { FETCH_CURRENT_USER } from '../actions';

// do not yet know if user is authenticated
export default function(state = null, action) {
    switch(action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false;
            default:
                return state;
    }
}