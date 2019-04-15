import { ADD_NEW_TODO, TOGGLE_COMPLETE } from "../actions";

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = {
        name: action.payload
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todo.map((todo, index) =>
          action.payload === index
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };

    default:
      return state;
  }
};
