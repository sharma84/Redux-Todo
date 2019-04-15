import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo, i) => (
        <Todo index={i} todo={todo} key={i} />
      ))}
    </div>
  );
}
export default TodoList;
