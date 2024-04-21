import { useState } from 'react'
import './App.css'
import { v4 } from 'uuid';
import {Task} from './types/types.js'
import ToDoItem from './components/ToDoItem/ToDoItem.js';
import GetDate from './components/GetDate/GetDate.js';
import AddTask from './components/AddTask/AddTask.js';

const initailTasks: Task[] = [
  {id: v4(), name: 'odkurzyc', time:'11:00 AM'}, 
  {id: v4(), name: 'pozmywac naczynia', time:'2:00 PM'},
  {id: v4(), name: 'nauczyc sie słówek', time:'6:00 PM'},
  {id: v4(), name: 'zaprogramowac coś', time:'8:00 AM'},
  {id: v4(), name: 'nauczyc się polskiego', time:'12:00 AM'}
]


function App() {
  const [tasks, setTasks] = useState(initailTasks)

  const showTasks = () =>{return(
    <ul className='task-list'>
      {tasks.map((task:Task, index: number)=>
      <ToDoItem key={task.id} task={task} index={index}/>)}
    </ul>
  )} 

  return (
    <>
      <main className="main-container">
        <h1 className='title'>To do list</h1>
        <GetDate/>
        <AddTask/>
        {showTasks()}
      </main>
    </>
  )
}

export default App
