const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    watered: false,
    confirm: 'yes',
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'WATER_PLANT') {
        return {
            ...state,
            watered: !state.watered,
        };
    }
    if (action.type === 'CONFIRMATION') {
        return {
            ...state,
            confirm: state.confirm,
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log(['[Subscription]', store.getState()]);
});
// Dispatching Action
store.dispatch({
    type: 'WATER_PLANT',
    value: true,
});

store.dispatch({
    type: 'CONFIRMATION',
    payload: {},
});


