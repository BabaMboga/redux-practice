const redux = require('redux');

// create a basic Reducer
const rootReducer = (currentState = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return currentState + 1;
        case 'DECREMENT':
            return currentState - 1;
        default:
            return currentState;
    }
    // return currentState;
}

// Create a store
const store = redux.createStore(rootReducer);
console.log(store.getState());
console.log("Initial State = ", store.getState());

// Dispactch actions
store.dispatch( { type: 'INCREMENT'});
console.log("State after Increment = ", store.getState());