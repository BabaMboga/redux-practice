# Redux Practice

This repository guides on how to use redux in a simple hello world application.

## Table of Contents

- [Redux Practice](#redux-practice)
  - [Table of Contents](#table-of-contents)
    - [Install Redux](#install-redux)
    - [Create a js file](#create-a-js-file)
    - [Import Redux](#import-redux)
    - [Create a basic Reducer](#create-a-basic-reducer)
    - [create a store](#create-a-store)

### Install Redux

**Redux is a stand-alone library thus we only install redux**:
    npm install --save redux

### Create a js file

**Create a single js file**:
    touch ReduxHelloWorld.js

### Import Redux

**Ensure redux is imported in the top leve**:
    const redux = require('redux');

### Create a basic Reducer

It is a pure function that takes the current state and action and returns a new state. A valid reducer can return the current state. 

**We have to create it before the store because it is needed for creating the store.**
    const rootReducer = (currentState = 0, action) => {
        return currentState;
    }

### create a store

**start store using the rootreducer**
    const store = redux.createStore(rootReducer);
