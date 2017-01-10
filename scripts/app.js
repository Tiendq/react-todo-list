import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducers from './components/reducers';
import TodoApp from './components/todo-app';
import {loadState, saveState} from './components/local-storage';

const initialState = loadState();

// Configure redux-devtools: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(combineReducers(reducers), initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState({
    items: store.getState().items
  });
});

ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, document.getElementById('app'));
