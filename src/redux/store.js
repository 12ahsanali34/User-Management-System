import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
const MiddleWare = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
  }
const store = createStore(rootReducer,applyMiddleware(MiddleWare,thunk));
export default store;