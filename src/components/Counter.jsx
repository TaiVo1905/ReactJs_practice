import React, { Component } from 'react';

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increase = () => {
        this.setState({count: this.state.count + 1});
    }
    render() {
        console.log(123)
        return (
            <div>
                <h1>Gia tri: {this.state.count}</h1>
                <button onClick={this.increase}>Tang</button>
            </div>
        );
    }
}

export default Counter;