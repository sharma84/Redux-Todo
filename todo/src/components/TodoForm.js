import React from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleComplete } from "../actions";
import TodoList from './TodoList';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addNewTodo = (e) => {
    e.preventDefault();
    this.props.addNewTodo({ value: this.state.newTodo, complete: false });
    this.setState({ newTodo: "" });
  };

  toggleComplete = (e, index) => {
    e.preventDefault();
    this.props.toggleComplete(index);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            placeholder="Add todo"
          />
          <button onClick={this.addNewTodo}>Add Todo</button>

        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
});

export default connect(
  mapStateToProps,
  { addNewTodo, toggleComplete }
)(TodoForm);
