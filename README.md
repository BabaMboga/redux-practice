# Redux Practice

This repository guides on how to use redux in a simple hello world application.

## Table of Contents

- [Redux Practice](#redux-practice)
  - [Table of Contents](#table-of-contents)
    - [Install Redux](#install-redux)
    - [Create a js file](#create-a-js-file)
    - [Import Redux](#import-redux)
    - [Create a basic Reducer](#create-a-basic-reducer)
    - [Create a store](#create-a-store)
    - [Add reducer actions](#add-reducer-actions)
    - [Dispatch actions](#dispatch-actions)

### Install Redux

**Redux is a stand-alone library thus we only install redux**:

```
npm install --save redux
```
    

### Create a js file


```
touch ReduxHelloWorld.js
```
    

### Import Redux


```js
const redux = require('redux');
```
    

### Create a basic Reducer

It is a pure function that takes the current state and action and returns a new state. A valid reducer can return the current state. 


```js
const rootReducer = (currentState = 0, action) => {
    return currentState;
}
```


### Create a store

**start store using the rootreducer**

```js
const store = redux.createStore(rootReducer);
```
    
### Add reducer actions

This is a function with a switch statement to decide which action to execute according to the action type.

```js
const rootReducer = (currentState = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return currentState + 1;
        case 'DECREMENT':
            return currentState - 1;
        default:
            return currentState;
    }
    
}
```

### Dispatch actions

It is also a store method and used to transmit an action. Usually it takes a type and a Payload but for simplicity I only passed a type

```js
store.dispatch( { type: 'INCREMENT'});
```

