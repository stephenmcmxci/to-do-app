import React from 'react';
import { render } from 'react-dom';

const MainTitle =  ({count}) => {
    return(
        <div>
            <div>
                <h1>Items to-do ({count})</h1>
            </div>
        </div>
    )
}

const TodoForm = ({addItem}) => {
    let input;

    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          addItem(input.value);
          input.value = '';
        }}>
        <input className="form-control col-md-12" ref={node => {
          input = node;
        }} />
        <br />
      </form>
    );
  };

  const Todo = ({todo, remove}) => {
    return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
  }

  const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
      return (<Todo todo={todo} key={todo.id} remove={remove}/>)
    });
    return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
  }


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
        <TodoForm addItem={this.addItem.bind(this)}/>
        <TodoList
          todos={this.state.data}
          remove={this.removeItem.bind(this)}
        />
      </div>
    );
  }
}
render(<TodoApp />, document.getElementById('container'));