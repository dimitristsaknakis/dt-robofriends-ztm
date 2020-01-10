/* The Redux reducers of the dt-robofriends-ztm app */

// Import constants (action types)
import { CHANGE_SEARCH_FIELD } from "./constants";

// An initial state for the reducers to start from
const initialState = {
    searchField: ""
};

// The reducer that searches for robots based on input text passed to it from
// the action payload. It has default parameters, in case none are passed. 
export const searchRobots = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // Return a new state object assigning the action payload to 'searchField'
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state; // ignore action and return current state
    }
};