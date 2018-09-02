import React from 'react';

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

  export default TodoForm;