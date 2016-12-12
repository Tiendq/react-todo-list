import React from 'react';
import TodoItem from './todo-item';
import '../../scss/todo-list.scss';

const TodoList = ({items, onToggleItem, onRemoveItem}) => (
  <ul className="todolist">
    {items.map(item => <TodoItem key={item.id}
      {...item}
      onToggleItem={() => onToggleItem(item.id)}
      onRemoveItem={() => onRemoveItem(item.id)} />)}
  </ul>
);

TodoList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onToggleItem: React.PropTypes.func.isRequired,
  onRemoveItem: React.PropTypes.func.isRequired
};

export default TodoList;
