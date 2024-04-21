import './AddTask.css'
import { FaPlus } from "react-icons/fa";


function AddTask(){

    return(
        <>
        <label htmlFor='add-task-input' className='add-task-title'>ADD TASK</label>
        <form className='add-task'>
            <input type="text" placeholder='Name' id='add-task-input'/>
            <input type="text" placeholder='Date' id='add-date-input'/>
            <button onClick={(e: React.MouseEvent)=>{e.preventDefault()}}><FaPlus/></button>
        </form>
        </>
        
    )
}
export default AddTask