import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.module.css";

class App extends Component {
    constructor(props) {
        super(props); // call parent class (Component) constructor
        // Adding/creating state for App
        this.state = {
            robots: [],  // start out with empty array
            searchfield: ""
        }
    };

    /* Lifecycle methods */
    componentDidMount() {
        // Get users from online API; set 'robots' state with them
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()) // convert response obj to JSON
        .then(users => this.setState({ robots: users })); // set 'robots' state to result
    };

    // Event handler function for input onChange event (passed to SearchBox)
    // It now has an arrow syntax so that 'this' belongs to App (not to input)
    onSearchChange = (event) => {
        // Update the state (setState must be used) before filtering
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const { robots, searchfield } = this.state; // destructure from state

        // Filter robots array, return name of the one typed in searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        // If fetch() hasn't completed/resolved yet, show 'loading' msg
        return !robots.length ?
            <h1 className="tc">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                {/* Pass event handler function to SearchBox */}
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        {/* Add CardList; it gets passed a 'robots' prop */}
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
};

export default App; // default for one item; avoids destructuring