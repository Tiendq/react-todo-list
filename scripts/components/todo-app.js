import React from 'react';
import AddTodoItem from './add-todo-item';
import FilterableTodoList from './filterable-todo-list';
import FilterBar from './filter-bar';
import './todo-app.scss';

const TodoApp = () => (
  <div>
    <h1 className="app-title">React Todo List</h1>
    <div className="row">
      <div className="col-md-4">
        <AddTodoItem />
        <FilterableTodoList />
        <FilterBar />
      </div>
    </div>
  </div>
);

export default TodoApp;
