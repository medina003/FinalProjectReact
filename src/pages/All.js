import Form from '../Components/Form/Form' 
import CheckList from '../Components/CheckList/ChecList'; 
import { useDispatch, useSelector } from 'react-redux';
import {addTask} from '../app/slices/checklistSlice'

export default function All(){
    const tasks = useSelector(store=>store.checklistReducer)
    const dispatch = useDispatch();
    return(
        <div>
            <h1>All</h1>
            <Form onSubmit={(taskData)=>{dispatch(addTask(taskData))}}></Form>
            <div> 
                <CheckList tasks = {tasks}></CheckList>
            </div>
        </div>
    )
}