import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/todo-item.scss';

const TodoItem = ({ text, completed, onToggleItem, onRemoveItem }) => {
  let itemClass = `form-check todo-item ${completed ? 'done' : 'open'}`;

  return (
    <li className={itemClass}>
      <label className="form-check-label">
        <input type="checkbox" className="form-check-input" onChange={onToggleItem} checked={completed} /> {text}
      </label>
      <button type="button" className="btn btn-danger btn-sm" onClick={onRemoveItem}>x</button>
    </li>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default TodoItem;

/* Stateful
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // Briefly highlight newly added item.
    if (this.listItem) {
      this.listItem.classList.add('highlight');
      setTimeout(() => this.listItem.classList.remove('highlight'), 500);
    }
  }
  render() {
    let itemClass = `form-check todo-item ${this.props.completed ? 'done' : 'open'}`;

    return (
      <li className={itemClass} ref={li => this.listItem = li}>
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" onChange={this.props.onToggleItem} checked={this.props.completed} /> {this.props.text}
        </label>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.props.onRemoveItem}>x</button>
      </li>
    );
  }
}
*/
