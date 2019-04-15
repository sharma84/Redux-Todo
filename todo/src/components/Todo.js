import React from "react";

function Todo(props) {
  return (
    <div
      onClick={() => {
        props.toggleComplete(props.todo.index);
      }}
    >
      <p>{props.todo.value}</p>
    </div>
  );
}
export default Todo;
