import { useState } from "react";

function ToDoList(){
    const [tasks,setTasks] = useState(["Eat brafast","take as shower","walk a dog"]);
    const [newTask, setNewTask]=useState("");
    function handleInputChange(event){
setNewTask(event.target.value);
    }
    function addTask(){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
    }
    function deleteTask(index){
        const updatedTask = tasks.filter((_,i)=> i !== index);
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
       console.log(index);
        if(index > 0) {
            const updatedTasks = [...tasks]
            console.log(updatedTasks);
           [ updatedTasks[index],updatedTasks[index -1]] = [ updatedTasks[index-1],updatedTasks[index]]
           console.log(updatedTasks);
           setTasks(updatedTasks);
        }
        
    }
    function moveTaskDown(index){
        console.log(index);
        if(index < tasks.length -1) {
            const updatedTasks = [...tasks]
            console.log(updatedTasks);
           [ updatedTasks[index],updatedTasks[index +1]] = [ updatedTasks[index+1],updatedTasks[index]]
           console.log(updatedTasks);
           setTasks(updatedTasks);
        }
        
    }
    return (<div className="to-do-list">

        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
            
                    </div>
                    <ol>
                        {tasks.map((task,index)=> <li key={index}>
                         <span className="text"> {task}</span>  
                         <button className="delete-button" onClick={()=>deleteTask(index)}>delete</button>
                         <button className="move-button" onClick={()=>moveTaskUp(index)}>MoveUp</button>
                         <button className="move-button" onClick={()=>moveTaskDown(index)}>Movedown</button>
                        </li>)}
                    </ol>
    </div>);

}
export default ToDoList;