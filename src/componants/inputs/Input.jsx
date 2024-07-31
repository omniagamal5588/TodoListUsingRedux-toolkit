import { useState } from 'react'
import './Input.css'
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/TodoSlise';
export function Input(){
    let [input,setInput]=useState("");
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input){
            dispatch(saveTodo({
                id:Date.now(),
                text:input,
                done:false
            }));
            setInput("")
            return 
        }else{
            alert('please add some todos');
            return;
        }
    }



    return(
        <div>
            <h1>Todo List App</h1>
            <form onSubmit={handleSubmit} action="" className='formData'>
                <input type="text" placeholder="Enter Todo" onChange={(e)=>setInput(e.target.value)} value={input} />
                <button>Add Todo</button>
            </form>
        </div>
    )
}
