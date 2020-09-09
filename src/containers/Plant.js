import React, { Component } from 'react';
import { connect } from 'react-redux';
import Amanda from '../Components/playerOne';
import Saverio from '../Components/playerTwo';
import * as actionTypes from '../store/actions';

class Plant extends Component {
    render() {
        return (
            <div>
                <Saverio onClick={this.props.onWaterPlant} jumbo={this.props.wtr} />
                <Amanda onClick={this.props.onWaterPlant} jumbo={this.props.wtr} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wtr: state.watered,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onWaterPlant: () => dispatch({ type: actionTypes.WATER_PLANT }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plant);
