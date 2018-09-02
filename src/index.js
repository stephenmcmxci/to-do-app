import React from 'react';
import { render } from 'react-dom';
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import MainTitle from './components/Title'

window.id = 0;
class TodoApp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  addItem(val){
    const todo = {text: val, id: window.id++}

    this.state.data.push(todo);
    this.setState({data: this.state.data});
  }

  removeItem(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    this.setState({data: remainder});
  }

  render(){
    return (
      <div>
        <MainTitle count={this.state.data.length}/>
        <ToDoForm addItem={this.addItem.bind(this)}/>
        <ToDoList
          todos={this.state.data}
          remove={this.removeItem.bind(this)}
        />
      </div>
    );
  }
}
render(<TodoApp />, document.getElementById('container'));