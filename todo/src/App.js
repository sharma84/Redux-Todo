import React, { Component } from "react";

import TodoForm from "./components/TodoForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is my Todo List!</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
