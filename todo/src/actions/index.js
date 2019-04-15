export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const addNewTodo = (newTodo) => {
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};

export const toggleComplete = (index) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
};
