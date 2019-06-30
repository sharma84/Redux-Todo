import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

const initialState = {
  // todoItems: [{ todoItem: "Walk the dog", completed: false, id: Date.now() }]
  todoItems: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodoItem = {
        //new todo object is created with 3 properties.
        todoItem: action.payload, //value of todoItem = value passed through action.payload i.e. todoItem = apple
        completed: false,
        id: Date.now()
      };
      return {
        // ...state,
        todoItems: [...state.todoItems, newTodoItem]
      };
    case TOGGLE_COMPLETED:
      return {
        //...state,
        todoItems: state.todoItems.map((
          item //item=each object in the todoItems array i.e. todoItem
        ) =>
          action.payload === item.id //payload:id
            ? { ...item, completed: !item.completed } //if matched toggle else do nothing
            : item
        )
      };
    default:
      return state;
  }
}
export default reducer;
