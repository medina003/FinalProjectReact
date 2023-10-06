import CheckList from '../Components/CheckList/ChecList'; 
import { useSelector } from 'react-redux'; 
import React from 'react'; 

export default function Remainded(){
    const tasks = useSelector((store) => store.checklistReducer);
    const doneTasks = tasks.filter((task) => !task.isDone); // Фильтруем только выполненные задачи

    return (
        <div>
          <h1>Remainded</h1>
          <div>
            <CheckList tasks={doneTasks} />
          </div>
        </div>
    );
} 
 