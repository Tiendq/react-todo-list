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
      <button type="button" className="btn btn-danger btn-sm" onClick={onRemoveItem}>
        <svg className="bi bi-trash" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd"></path>
        </svg>
      </button>
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
