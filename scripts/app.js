import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
import reducers from './reducers';
import { loadState, saveState } from './local-storage';
import TodoApp from './components/todo-app';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = loadState();

// Configure redux-devtools: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(combineReducers(reducers), initialState, composeEnhancers(applyMiddleware(loggerMiddleware)));

store.subscribe(throttle(() => saveState({ ...store.getState() }), 1000));

ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, document.getElementById('app'));
