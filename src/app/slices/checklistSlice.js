import { createSlice } from "@reduxjs/toolkit"; 
export const checklistSlice = createSlice({
    name:'tasks',
    initialState:[],  
    reducers:{
        addTask: (state,action) => {
            const newTask = {
                ...action.payload,
                isDone: false, 
            };
            state.push(newTask);
        },
        delTask: (state,action) => {
            return state.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload.id);

            if (taskIndex !== -1) {
                state[taskIndex] = { ...state[taskIndex], ...action.payload };
            }
        },
        toggleIsDone: (state, action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload);
      
            if (taskIndex !== -1) {
              state[taskIndex].isDone = !state[taskIndex].isDone;
            }
        },
    }
});
export const {addTask,delTask,updateTask,toggleIsDone} = checklistSlice.actions;

export default checklistSlice.reducer;
