import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todo-item';
import '../../scss/todo-list.scss';

const TodoList = ({ items, onToggleItem, onRemoveItem }) => {
  let renderTodoItem = (item) => (
    <TodoItem key={item.id}
      text={item.text}
      completed={item.completed}
      onToggleItem={() => onToggleItem(item.id)}
      onRemoveItem={() => onRemoveItem(item.id)} />
  );

  return (
    <div className="row">
      <div className="col-xs-12">
        <ul className="todo-list">
          {items.map(item => renderTodoItem(item))}
        </ul>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};

export default TodoList;
