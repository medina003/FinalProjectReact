import { useDispatch, useSelector } from 'react-redux';
import {updateTask} from '../../app/slices/checklistSlice';
import { useParams } from 'react-router-dom'; 
import {useState} from 'react';
import "./edit.module.scss" 
import { useNavigate } from 'react-router-dom';


function Edit({}){
    const tasks = useSelector(store=>store.checklistReducer)
    const dispatch = useDispatch(); 
    const { taskId } = useParams();
    const task = tasks.find(task => task.id == taskId);
    const [title, setTitle] = useState(task.title);   
    const navigate = useNavigate();
    const handleTitleChange = (e) => { 
        setTitle(e.target.value);
    }

    const handleEditClick = () => {   
        dispatch(updateTask({ id: taskId, title }));  
        navigate(`/`)
    }
    return(
        <div>
            <div > 
                <br/>
                <div>   
                    <div>  
                        <label htmlFor="#title">Change title</label>
                    </div>   
                    <input id="#title" placeholder='Title' value={title} onChange={handleTitleChange} />
                    <button onClick={handleEditClick}>Save</button>
                </div> 
            </div>  
        </div>
    )
}

export default Edit;