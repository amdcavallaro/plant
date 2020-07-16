import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleWater = this.handleWater.bind(this);
        this.state = {
            watered: true,
            confirm: 'yes',
        };
    }

    handleWater() {
        this.setState({ watered: !this.state.watered });
    }

    render() {
        return (
            <div>
                <p>{Date()}</p>
                <p> Have you watered your plant today?</p>
                <button onClick={this.handleWater} className="round-button">
                    {this.state.watered ? 'yes' : 'no'}
                </button>
            </div>
        );
    }
}

export default App;
