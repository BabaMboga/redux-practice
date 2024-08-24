const redux = require('redux');

// create a basic Reducer
const rootReducer = (currentState = 0, action) => {
    switch (action.type){
        
    }
    return currentState;
}

// Create a store
const store = redux.createStore(rootReducer);
console.log(store.getState());