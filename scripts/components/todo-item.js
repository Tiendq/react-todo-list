import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.markCompleted = this.markCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  markCompleted() {
    this.props.onItemCompleted(this.props.id);
  }
  deleteItem() {
    this.props.onDeleteItem(this.props.id);
  }
  // Highlight newly added item for several seconds.
  componentDidMount() {
    if (this.listItem) {
      // 1. Add highlight class.
      this.listItem.classList.add("highlight");

      // 2. Set timeout.
      setTimeout((listItem) => {
        // 3. Remove highlight class.
        listItem.classList.remove("highlight");
      }, 500, this.listItem);
    }
  }
  render() {
    var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
    return (
      <li className={itemClass} ref={li => this.listItem = li}>
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" onChange={this.markCompleted} /> {this.props.text}
        </label>
        <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  id: React.PropTypes.number,
  text: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onItemCompleted: React.PropTypes.func,
  onDeleteItem: React.PropTypes.func
};

export default TodoItem;
