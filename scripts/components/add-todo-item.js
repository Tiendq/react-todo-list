import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';
import '../../scss/add-todo-item.scss';

/*
const AddItemForm = ({ dispatch }) => {
  let input = null;

  return (
    <form className="form-inline row" onSubmit={event => {
      event.preventDefault();

      if (input.value.trim()) {
        dispatch(addItem(input.value.trim()));
        input.value = '';
      }
    }}>
      <div className="col-xs-12">
        <input type="text" className="form-control todo-text" ref={node => input = node} defaultValue="React is amazing!" placeholder="To do goes here" />
        <button type="submit" className="btn btn-primary add-todo">Add</button>
      </div>
    </form>
  );
}
*/

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.todoText = null;
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(event) {
    event.preventDefault();

    if (this.todoText.value.trim()) {
      this.props.dispatch(addItem(this.todoText.value.trim()));
      this.todoText.value = '';
    }
  }
  render() {
    return (
      <form className="form-inline row" onSubmit={this.submitHandler}>
        <div className="col-xs-12">
          <input type="text" className="form-control todo-text" ref={node => this.todoText = node} defaultValue="React is amazing!" placeholder="To do goes here" />
          <button type="submit" className="btn btn-primary add-todo" disabled={this.todoText && 0 === this.todoText.value.length}>Add</button>
        </div>
      </form>
    );
  }
}

AddItemForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

const AddTodoItem = connect()(AddItemForm);
export default AddTodoItem;
