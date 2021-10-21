import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [ 
    
];

export const DisplaySlice = createSlice({
    name:'display',
    initialState,
    reducers:{
        addTodo (state, {payload}) {
            const  Todo = {
                id: nanoid(),
                title: payload.title,
                date: new Date().toISOString(),
                description: payload.description
            }
            state.push(Todo)
        },
        removeTodo(state, {payload}){
            return state.filter((todo) => todo.id !== payload.id )
        }
    }
})
export const { addTodo, removeTodo} = DisplaySlice.actions;
export default DisplaySlice.reducer;