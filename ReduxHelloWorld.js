const redux = require('redux');

// create a basic Reducer
const rootReducer = (currentState = 0, action) => {
    return currentState;
}

// Create a store
const store = redux.createStore(rootReducer);

