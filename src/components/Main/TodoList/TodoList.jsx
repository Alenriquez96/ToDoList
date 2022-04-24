import React, { Component } from "react";
import TodoItem from "./TodoItem";
import dataToDo from "./todo.json"

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: dataToDo,
      lastToDo:{}
    }
  }

  addToDo = (event) =>{
    event.preventDefault();
    const todoTitle = event.target.title.value
    const todoDesc = event.target.description.value

    const newTodo = {todoTitle,todoDesc}

    this.setState({lastToDo:newTodo});  

    this.setState({todos:[...this.state.todos,newTodo]})
  }

  paintTodos =()=>this.state.todos.map((todo,i)=><TodoItem data={todo} key={i}/>) 

  removeAllToDo=()=>{
    this.setState({todos:[]})
  }

  removeToDo = (i) =>{
    const remainingToDo = this.state.todos.filter((todo,j)=>i!==j)
    this.setState({todos:remainingToDo})
  }

  resetCakes = () =>{
    this.setState({todos:dataToDo})    
  }
  

  render() {
    const {title,description}=this.state.lastToDo
    return (
      <div>
        <form onSubmit={this.addToDo}>
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title"/><br/>
          <label htmlFor="description">Descripción:</label>
          <input type="text" name="description" id="description" /><br/>  
        </form>
        {this.paintTodos()}
        <button onClick={this.addToDo}>Añade un To-Do</button>
        <button onClick={this.removeAllToDo}>Borrar todos los To-Do</button>
        <button onClick={this.resetCakes}>Recargar To-Do</button>

        {
          title&&description?
          <p>Último to-do añadido: {title} {description}$</p>
          :""}
      </div>

    );
  }
}

export default TodoList;
