import React from 'react'

// const Task = ({ task, onDelete }) => {
//     console.log(task);
//     return (
//         <li key={task.id}>
//             {task.text}
//             <button onClick={() => onDelete(task.id)}>Delete</button>

//         </li>
//     )
// }

const Task = ({ task, onDelete }) => {

    return (
      <li key={task.id}>
        {task.text}
        <hr/>
        {task.id}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    );
  };

export default Task
