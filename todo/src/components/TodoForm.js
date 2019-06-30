import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleCompleted } from "../actions/index";
import "../index.css";

class TodoForm extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddToDo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    //todo item typed (apple)is updated in newTodo through handleChanges. that apple(this.state.newTodo)argument is passed to actions as todoItem
    this.setState({ newTodo: "" });
  };

  toggleCompleted = (id) => {
    this.props.toggleCompleted(id);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.todoItems.map((item) => (
            <ul
              className={`${item.completed ? "completed" : null}`}
              key={item.id}
              onClick={() => this.toggleCompleted(item.id)}
            >
              {item.todoItem}
            </ul>
          ))}
        </div>
        <div>
          <input
            name="newTodo"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add your todo"
          />
          <button onClick={this.handleAddToDo}>Add Your Todo</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoItems: state.todoItems
});

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted }
)(TodoForm);
