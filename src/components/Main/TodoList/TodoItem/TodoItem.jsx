import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       checked:false
    }
  }

  render() {
    const {title,description}=this.props.data
    return (
      <div>
        <h4 >Título:{title}</h4>
        <p>Descripción:{description}</p>
        <button onClick={this.props.remove}>Borrar To-Do</button>
      </div>
    )
  }
}

export default TodoItem;
