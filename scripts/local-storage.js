const loadState = () => {
  try {
    let serializedState = localStorage.getItem('react-todo-list');

    if (serializedState)
      return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
  }
};

const saveState = (state) => {
  try {
    let serializedState = JSON.stringify(state);
    localStorage.setItem('react-todo-list', serializedState);
  } catch (error) {
    console.log(error);
  }
};

export {
  loadState,
  saveState
};
