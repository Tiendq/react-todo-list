import React from 'react';
import PropTypes from 'prop-types';
import './todo-item.scss';

function TodoItem({ text, completed, onToggleItem, onRemoveItem }) {
  let itemClass = `form-check todo-item ${completed ? 'done' : 'open'}`;

  return (
    <li className={itemClass}>
      <label className="form-check-label">
        <input type="checkbox" className="form-check-input" onChange={onToggleItem} checked={completed} /> {text}
      </label>
      <button type="button" className="btn btn-danger btn-sm" onClick={onRemoveItem}>x</button>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default TodoItem;
