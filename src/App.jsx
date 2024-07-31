import { useSelector } from "react-redux"
import { Input } from "./componants/inputs/Input"
import { TodoItem } from "./componants/todoItems/TodoItem"


function App() {
 const todolist=useSelector((state)=>state.todo.todoList);
 
  return(
    <div>
       <Input/>
      {todolist.map((todo)=>{
        return(
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}/>
        )
      })}
     
      
     
    </div>
  )
}

export default App
