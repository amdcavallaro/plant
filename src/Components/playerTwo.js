import React from 'react';
import '../assets/index.css';

class Saverio extends React.Component {
    render() {
        return (
            <div>
                <p>{Date()}</p>
                <p> Have you watered your plant today?</p>
                <button onClick={this.props.onClick} className="round-button">
                    {this.props.jumbo ? 'yes' : 'no'}
                </button>
            </div>
        );
    }
}

export default Saverio;

