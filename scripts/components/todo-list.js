import React from "react";
import TodoItem from "./todo-item";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todolist">
        {this.props.items.map(item => <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />)}
      </ul>
    );
  }
}

TodoList.propTypes = {
  items: React.PropTypes.array,
  onItemCompleted: React.PropTypes.func,
  onDeleteItem: React.PropTypes.func
};

export default TodoList;
