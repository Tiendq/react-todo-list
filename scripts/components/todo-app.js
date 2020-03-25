import React from 'react';
import AddTodoItem from './add-todo-item';
import FilterableTodoList from './filterable-todo-list';
import FilterBar from './filter-bar';
import './todo-app.scss';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      message: ''
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error.message
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return [
        <h1 key='h1'>Something went wrong.</h1>,
        <p key='p'>{this.state.message}</p>
      ];
    }

    return (
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
  }
}

export default TodoApp;
