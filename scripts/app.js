import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducers';
import TodoApp from "./components/todo-app";

const store = createStore(combineReducers(reducers));

ReactDOM.render(<Provider store={store}><TodoApp /></Provider>, document.getElementById("app"));
