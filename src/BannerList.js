import React, { Component } from 'react';
import './BannerList.css';
import AddGreeter from './AddGreeter';

import Banner from './Banner';

class BannerList extends Component {

    constructor(props) {
        super(props);
        this.state = { greetings: ['Jim', 'Sally', 'Dan'] };
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    renderGreetings() {
        return this.state.greetings.map(name => (
            <Banner 
                key={name} 
                name={name} 
                removeGreeting={this.removeGreeting}
            />
        ));
    }

    addGreeting(newName) {
        // ... notation is keep front of array and add newName to the end
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        const filteredGreetings = this.state.greetings.filter(name => {
          return name !== removeName;
        });
        this.setState({ greetings: filteredGreetings });
    }

    render() {
      return (
        <div className="BannerList">
            <AddGreeter addGreeting={this.addGreeting}/>
            {this.renderGreetings()}
        </div>
      );
    }
}

export default BannerList;