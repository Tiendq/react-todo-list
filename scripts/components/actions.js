let nextItemId = 0;

// In Redux action creators simply return an action.
// http://redux.js.org/docs/basics/Actions.html
const addItem = (text) => ({
  type: 'ADD_ITEM',
  id: nextItemId ++,
  text
});

const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id
});

const toggleItem = (id) => ({
  type: 'TOGGLE_ITEM',
  id
});

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter
});

export {
  addItem,
  removeItem,
  toggleItem,
  changeFilter
};
