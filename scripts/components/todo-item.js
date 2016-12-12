import React from "react";
import '../../scss/todo-item.scss';

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
    let itemClass = `form-check todoitem ${this.props.completed ? 'done' : 'open'}`;

    return (
      <li className={itemClass} ref={li => this.listItem = li}>
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" onChange={this.props.onToggleItem} /> {this.props.text}
        </label>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.props.onRemoveItem}>x</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onToggleItem: React.PropTypes.func.isRequired,
  onRemoveItem: React.PropTypes.func.isRequired
};

export default TodoItem;
