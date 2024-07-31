import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/TodoSlise'

const store=configureStore({
    reducer:{
        todo:todoReducer
    }
});

export default store;