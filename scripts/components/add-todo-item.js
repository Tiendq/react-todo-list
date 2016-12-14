import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';
import '../../scss/add-todo-item.scss';

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

AddItemForm.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

const AddTodoItem = connect()(AddItemForm);
export default AddTodoItem;
