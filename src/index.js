import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";  // middleware that handles async actions
import "tachyons";
import './index.css';
import App from "./containers/App"; // parent of all components
import * as serviceWorker from './serviceWorker';

// Import reducers
import { searchRobotsR, requestRobotsR } from "./reducers";

// Create a 'redux-logger' middleware instance
const logger = createLogger();

// Create a root reducer from combined reducers
const rootReducer = combineReducers({ searchRobotsR, requestRobotsR });

// Create a Redux store for the app. Pass it the root reducer.
// Also apply the 'redux-logger' and 'redux-thunk' middleware.
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    // Wrap Provider around App, pass Provider the Redux store
    // so that it's available to all components
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
