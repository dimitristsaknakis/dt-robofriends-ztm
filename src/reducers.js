/* The Redux reducers of the dt-robofriends-ztm app */

// Import constants (action types)
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from "./constants";

// An initial state for the reducers to start from
const initialStateSearch = { searchField: "" };

// The reducer sets the 'searchField' state slice to the input text passed to it
// from the action payload. Has default parameters, in case none are passed.
export const searchRobotsR = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // Return a new state object assigning the action payload to 'searchField'
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state; // ignore action and return current state
    }
};

// An initial state for the requestRobotsR reducer to start from
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ""
};

// The reducer either sets the 'robots' state slice to the data received from
// the JSONPayload API, or the 'error' slice if it fails to fetch the data
export const requestRobotsR = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false });
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false});
        default:
            return state; // the previous state
    }
};
