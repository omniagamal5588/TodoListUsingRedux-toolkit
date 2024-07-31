import { useDispatch } from 'react-redux';
import { checkTodo } from '../../features/TodoSlise';
import './TodoItem.css'
export function TodoItem(props){
     let {id,text,done}=props;
    const dispatch=useDispatch();
    const handleChange=()=>{
        dispatch(checkTodo(id));
        
    } 
    return(
        <div className="todo-item">
            <input type="checkbox" id={id} className="checkbox" checked={done} onChange={handleChange} />
            <label htmlFor={id}>{text}</label>
        </div>
    )
}