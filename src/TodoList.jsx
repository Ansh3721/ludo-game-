import { useState } from "react"

export default function TodoList(){
    const[todo, setTodo] = useState(["Sample"]);
    const[newTodo, setNewTodo] = useState("");


    let addNewTask = (event)=>{
        event.preventDefault();
        setTodo([...todo, newTodo]);
        setNewTodo("");
    }

    let updateTodValue = (event)=>{
        setNewTodo(event.target.value);
    }
    return(
        <>
        <h1>Todo </h1>
        <form onSubmit={addNewTask}>
            <input value={newTodo} onChange={updateTodValue} type="text" /><br></br>
            <button>Add</button>
        </form>
        <br></br>
        <h2> Your Todo's:</h2>
        <ul>
        {
            todo.map((task) =>(
                <li> {task}</li>
            ))
        }
        </ul>
        </>
    )
}