import CheckList from '../Components/CheckList/ChecList'; 
import { useSelector } from 'react-redux'; 
import React from 'react'; 
 
export default function Done() {
  const tasks = useSelector((store) => store.checklistReducer);
  const doneTasks = tasks.filter((task) => task.isDone); 

  return (
    <div>
      <h1>Done</h1>
      <div>
        <CheckList tasks={doneTasks} />
      </div>
    </div>
  );
} 