import React, { Component } from "react";

import TodoForm from "./components/TodoForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
      </div>
    );
  }
}

export default App;
