import React from 'react';

const Task = ({ task, onDelete }) => {
  const buttonStyle = {
    color: 'white',
    backgroundColor: 'red',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  return (
    <li key={task.id}>
     {task.text}
      <button style={buttonStyle} onClick={() => onDelete(task.id)}>
        X
      </button>
    </li>
  );
};

export default Task;
