import React, { Component } from "react";
import TodoItem from "./TodoItem";
import dataToDo from "./todo.json"

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: dataToDo,
      lastToDo:{},
      title:"",
      description:""
    }
  }

  addToDo = (event) =>{
    event.preventDefault();
    let title = event.target.title.value
    let description = event.target.desc.value
    event.target.enviar.style.display ="none"
    
    event.target.title.value=""
    event.target.desc.value=""



    const newTodo = {title,description}



    this.setState({lastToDo:newTodo});  

    this.setState({todos:[ newTodo,...this.state.todos]})
  }

  handleChangeTitle = (event)=>this.setState({
    title: event.target.value });
  
  handleChangeDescription = (event)=>this.setState({description: event.target.value});

  paintTodos =()=>{
    return this.state.todos.map((todo,i)=><TodoItem data={todo} key={i} remove={()=>this.removeToDo(i)}/>)
   }

  removeAllToDo=()=>{
    this.setState({todos:[]})
  }

  removeToDo = (i) =>{
    const remainingToDo = this.state.todos.filter((todo,j)=>i!==j)
    this.setState({todos:remainingToDo})
  }

  resetToDos = () =>{
    this.setState({todos:dataToDo})    
  }
  

  render() {
    const {title,description}=this.state.lastToDo
    return (
      <div>
        <form onSubmit={this.addToDo}>
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" className="input" id="title" onChange={this.handleChangeTitle}/><br/>
          <label htmlFor="desc">Descripción:</label>
          <input type="text" name="desc" className="input" id="desc" onChange={this.handleChangeDescription}/><br/>  
          {
          this.state.title!==""&&this.state.description!==""?
          <input type="submit" name="enviar" value="Añadir To-Do"/>
          :""}
        </form>
        {this.paintTodos()}
        <button onClick={this.removeAllToDo}>Borrar todos los To-Do</button>
        <button onClick={this.resetToDos}>Recargar To-Do</button>

        {
          title&&description?
          <p>Último to-do añadido: {title} {description}$</p>
          :""}
      </div>

    );
  }
}

export default TodoList;
