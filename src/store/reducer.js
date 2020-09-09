import * as actionTypes from './actions';

const initialState = {
    watered: false,
};

// const initialState = {
//     watered: false,
//     confirm: 'no ',
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WATER_PLANT:
            return {
                ...state,
                watered: !state.watered,
            };
        default:
        break;
    }
    return state;
};

export default reducer;
