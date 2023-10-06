import { useDispatch } from "react-redux";
import { delTask } from "../../../app/slices/checklistSlice";
import Button from "../../Button/Button";
import { useId } from "react";
import {Link,Routes,Route} from "react-router-dom"  
import styles from "./CheckList.module.scss"
import Edit from "../../../pages/Edit/Edit";
import { toggleIsDone } from '../../../app/slices/checklistSlice';

function CheckListItem({taskData}){
    const id = useId()
    const dispatch = useDispatch() 
    const handleCheckboxChange = () => { dispatch(toggleIsDone(taskData.id)); };
    return(  
        <ul> 
            <input
                name="task"
                type="checkbox"
                id={taskData.id}
                checked={taskData.isDone}
                onChange={handleCheckboxChange}/>
            <label htmlFor={taskData.id}>{taskData.title}</label>
            <Routes>
              <Route exact path="/edit" element={<Edit />} />
            </Routes>
            
            <Link className={styles.button} to={`/edit/${taskData.id}`}>Edit</Link>
            <Button clickHandler={() => dispatch(delTask(taskData.id))}>Delete</Button>
        </ul> 
    )
} 

export default CheckListItem;