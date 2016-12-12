import { connect } from 'react-redux';
import TodoList from './todo-list';
import { toggleItem, removeItem } from './actions';

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items;

    case 'SHOW_OPEN':
      return items.filter(i => !i.completed);

    case 'SHOW_COMPLETED':
      return items.filter(i => i.completed);
  }
}

const mapStateToProps = (state) => ({
  items: getVisibleItems(state.items, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
  onToggleItem: (id) => {
    dispatch(toggleItem(id));
  },
  onRemoveItem: (id) => {
    dispatch(removeItem(id));
  }
});

const FilterableTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default FilterableTodoList;
