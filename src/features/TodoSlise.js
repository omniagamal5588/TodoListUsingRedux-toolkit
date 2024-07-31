import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    todoList:[],
}

const TodoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        saveTodo:(state,action)=>{
            state.todoList.push(action.payload);
        },
        checkTodo:(state,action)=>{
          state.todoList.map((todo)=>{
            if(action.payload===todo.id){
                todo.done?(todo.done=false):(todo.done=true)
            }
          })
        }
    }
});

export const { saveTodo,  checkTodo} = TodoSlice.actions;
export default TodoSlice.reducer;