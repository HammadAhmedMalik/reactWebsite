import { useState } from "react"

function ToDoList(){

    const [tasks,setTasks] = useState(["Learning ReactJs","Practicing code daily","Improving in programming"]);
    const [newTask, setNewTask] = useState("");



    function workForInputTask(event){
        setNewTask(event.target.value);

    }
    function workForAddTask(){
        if(newTask.trim()!== ""){

            setTasks(t=>[...t,newTask]);
            setNewTask("")

        }     
    }

    function workForDeleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }
    function moveUpTask(index){
        
        if(index > 0) {

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = 
        [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
        }       
    }

    function moveDownTask(index){
        if(index < tasks.length - 1) {

            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
            }   

    }
    return(
        <div className="to-do-list">
            <h2>To_Do_List</h2>
            <div className="add-task">
                <input type="text" placeholder="Add new task" value={newTask} onChange={workForInputTask}></input> 
                <button className="add-button" onClick={workForAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=> 
                   <li key={index}>
                     <span className="text">{task}</span>
                     <button className="delete-button" onClick={() => workForDeleteTask(index)}>Delete</button>
                     <button className="move-up-button" onClick={()=>moveUpTask(index)}>Move up</button>
                     <button className="move-down-button" onClick={()=>moveDownTask(index)}> Move down</button>
                   </li>)}
                   
            </ol>
            
        </div>
    )
    
}
export default ToDoList