import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Task from './Task';


const Todolist = () => {
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState('');

    const handleAddTask=()=>{
        console.log(newTask);
        console.log(tasks);
          if(newTask.trim() !==''){
            console.log("clicked");
            const updatedTasks=[...tasks,{id:uuidv4(),text:newTask}];
            setTasks(updatedTasks);
            setNewTask('');
          }

       
    }

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      };



    return (
        <div className='App'>
            <h1>To-Do List</h1>
            <div>
             <input type='text' placeholder="Add a new task"  value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
             <button onClick={handleAddTask}>Add</button>


            </div>
             <ul>
                {tasks.map((task)=>(
                    <Task key={task.id} task={task}  onDelete={handleDeleteTask}/>
                ))}
             </ul>


        </div>
    )
}

export default Todolist