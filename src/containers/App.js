import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.module.css";

// Import Redux actions
import { setSearchField } from "../actions";

// Tell App what state to listen to (the 'searchField' state from the
// 'searchRobots' reducer)
const mapStateToProps = state => {
    return {
        searchField: state.searchField // Temporarily bc only one reducer
    }
};

// Tell App what Redux dispatch (action) it should listen to
const mapDispatchToProps = dispatch => {
    return {
        // Accepts an event and returns the result of the dispatch of the
        // 'setSearchField' action with the input text passed to it, to the reducer
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    }
};


class App extends Component {
    constructor(props) {
        super(props); // call parent class (Component) constructor
        // Adding/creating state for App
        this.state = {
            robots: [],  // start out with empty array
        }
    };

    /* Lifecycle methods */
    componentDidMount() {        
        // Get users from online API; set 'robots' state with them
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()) // convert response obj to JSON
        .then(users => this.setState({ robots: users })); // set 'robots' state to result
    };

    
    render() {
        const { robots } = this.state; // destructure from local state
        // Destructure from Redux state props
        const { searchField, onSearchChange } = this.props;

        // Filter robots array, return name of the one typed in searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        // If fetch() hasn't completed/resolved yet, show 'loading' msg
        return !robots.length ?
            <h1 className="tc">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">dt-RoboFriends-ztm</h1>
                {/* Pass event handler function to SearchBox */}
                <SearchBox searchChange={onSearchChange}/>
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

// Use Redux naming convention for the connect() HOC parameters
export default connect(mapStateToProps, mapDispatchToProps)(App);