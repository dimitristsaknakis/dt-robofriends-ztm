/* The Redux actions for dt-robofriends-ztm */

import { CHANGE_SEARCH_FIELD } from "./constants";

// For the search field; 'text' is what the user types in. An object is returned
// with the text and an action 'type'.
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,  // this is a constant; uppercase by convention
    payload: text   // data to be sent to the reducer
});