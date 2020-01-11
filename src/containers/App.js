import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.module.css";

// Import Redux actions
import { setSearchFieldA, requestRobotsA } from "../actions";

// Tell App what state to listen to
const mapStateToProps = state => {
    return {
        // The searchField state slice from the searchRobotsR reducer
        searchField: state.searchRobotsR.searchField,
        // The state slice props of the requestRobotsR reducer
        robots: state.requestRobotsR.robots,
        isPending: state.requestRobotsR.isPending,
        error: state.requestRobotsR.error
    }
};

// Tell App what Redux dispatch (action) it should listen to
const mapDispatchToProps = dispatch => {
    return {
        // Accepts an event and returns the result of the dispatch of the
        // 'setSearchField' action with the input text passed to it, to the reducer
        onSearchChange: event => dispatch(setSearchFieldA(event.target.value)),
        // Returns a func (the action). Same as '() => requestRobotsA(dispatch)
        onRobotsChange: () => dispatch(requestRobotsA()) // action is a HO func
    }
};


class App extends Component {

    /* Lifecycle methods */
    componentDidMount() {        
        return this.props.onRobotsChange(); // 
    };

    
    render() {
        // Destructure from Redux state props
        const { robots, searchField, isPending, onSearchChange } = this.props;

        // Filter robots array, return names of the ones matching the searchfield
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        // If fetch() hasn't completed/resolved yet, show 'loading' msg
        return isPending ?
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