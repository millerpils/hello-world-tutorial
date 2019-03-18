import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        // any events that need to access any internal object details need 
        // to be explicitly bound to that instance of that component
        this.changeGreeting = this.changeGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }

    changeGreeting() {
        this.setState({ greeting: 'Bonjour' });
    }

    render() {
        return (
          <div className="Banner">
            {this.state.greeting} {this.props.name}!
            <br/>
            <button onClick={this.frenchify}>Frenchify!</button>
            <br/>
            <button onClick={this.removeGreeting}>Remove Me!</button>
          </div>
        );
    }
}

export default Banner;
