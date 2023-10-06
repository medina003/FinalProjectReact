import { configureStore } from '@reduxjs/toolkit' 
import checklistReducer from './slices/checklistSlice'

export default configureStore({
  reducer: { 
    checklistReducer
  },
})