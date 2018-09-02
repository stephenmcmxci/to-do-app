import React from 'react';

const Todo = ({todo, remove}) => {
    return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
  }

export default Todo;