import React, { Component } from 'react';
import './assets/index.css';
import Plant from './containers/Plant';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Plant />
            </div>
        );
    }
}

export default App;
