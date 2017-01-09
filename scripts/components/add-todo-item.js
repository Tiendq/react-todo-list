import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions';
import '../../scss/add-todo-item.scss';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'React is amazing!'
    };

    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  textChangeHandler(event) {
    this.setState({
      text: event.target.value
    });
  }
  submitHandler(event) {
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
        <div className="col-xs-12">
          <input type="text" className="form-control todo-text" onChange={this.textChangeHandler} value={this.state.text} placeholder="To do goes here" />
          <button type="submit" className="btn btn-primary add-todo" disabled={'' === this.state.text}>Add</button>
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

/* Stateless component.

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
