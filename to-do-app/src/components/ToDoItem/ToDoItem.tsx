import {Task} from '../../types/types.js'
import './ToDoItem.css'

function ToDoItem({task, index}: { key: string; task: Task; index:number}){
    return(
        <li className='task-list-item'>
            <div className='first-task-in-item'>{index+1}.</div>
            <div className='second-task-in-item'> {task.name}</div>
            <div className='third-task-in-item'>{task.time}</div>
            <button></button>
            <button></button>
        </li>
    )
}
export default ToDoItem