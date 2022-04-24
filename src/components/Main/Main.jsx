import React, { Component } from "react";
import TodoList from "./TodoList";

class Main extends Component {
  render() {
    return <div>
      <h1>Lista de To-Do</h1>
      <TodoList/>
      </div>;
  }
}

export default Main;
