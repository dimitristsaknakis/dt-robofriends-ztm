/* The Redux actions for dt-robofriends-ztm */

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED

} from "./constants";

// For the search field; 'text' is what the user types in. An object is returned
// with the text and an action 'type'.
export const setSearchFieldA = (text) => ({
    type: CHANGE_SEARCH_FIELD,  // this is a constant; uppercase by convention
    payload: text   // data to be sent to the reducer
});

// Async action (higher order func), fetching from the JSONPlaceholder API url
export const requestRobotsA = () => dispatch => {
    dispatch({ type: REQUEST_ROBOTS_PENDING }) // no payload here
    fetch("https://jsonplaceholder.typicode.com/users") // async call to API
    .then(response => response.json()) // get JSON from response
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
};
