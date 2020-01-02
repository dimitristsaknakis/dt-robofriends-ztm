import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        // The component's state
        this.state = {
            hasError: false
        };
    };

    /* componentDidCatch lifecycle hook is similar to 'try/catch' JS block */
    componentDidCatch(error, info) {
        this.setState({ hasError: true }); // if error, set 'hasError' to true
    };

    render() {
        // if 'hasError' true render a message to user
        if (this.state.hasError) {
            return <h1>Oooops. That's not good!</h1>;
        }
        // if 'hasError' false render enclosing component(s)
        return this.props.children;
    }
};

export default ErrorBoundary;