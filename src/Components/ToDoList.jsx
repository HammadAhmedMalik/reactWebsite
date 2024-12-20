import { useState } from "react"

function ToDoList(){

    const [tasks,setTasks] = useState(["Learning ReactJs","Practicing code daily","Improving in programming"]);
    const [newTask, setNewTask] = useState("");



    function workForInputTask(event){
        setNewTask(event.target.value);

    }
    function workForAddTask(){
        setTasks(t=>[...t,newTask]);
        setNewTask("")

    }
    function workForDeleteTask(index){

    }
    function moveUpTask(index){

    }

    function moveDownTask(index){

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
                     <span>{task}</span>
                     <button className="delete-button" onClick={workForDeleteTask}>Delete</button>
                     <button className="move-up-button" onClick={moveUpTask}>Move up</button>
                     <button className="move-down-button" onClick={moveDownTask}> Move down</button>
                   </li>)}
                   
            </ol>
            
        </div>
    )
    
}
export default ToDoList