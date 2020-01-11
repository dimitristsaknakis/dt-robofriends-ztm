import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import "tachyons";
import './index.css';
import App from "./containers/App"; // parent of all components
import * as serviceWorker from './serviceWorker';
import { searchRobots } from "./reducers";

// Create a Redux store for the app.
const store = createStore(searchRobots); // for now just pass this reducer

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
