import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import './add-todo-item.scss';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'React is amazing!'
    };
  }
  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  submitHandler = (event) => {
    event.preventDefault();

    if (this.state.text) {
      this.props.dispatch(addItem(this.state.text));

      this.setState({
        text: ''
      });
    }
  }
  render() {
    return (
      <form className="form-inline row" onSubmit={this.submitHandler}>
        <div className="col-12">
          <input type="text" className="form-control todo-text" onChange={this.textChangeHandler} value={this.state.text} placeholder="To do goes here" />
          <button type="submit" className="btn btn-primary add-todo" disabled={'' === this.state.text}>Add</button>
        </div>
      </form>
    );
  }
}

AddItemForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const AddTodoItem = connect()(AddItemForm);
export default AddTodoItem;
