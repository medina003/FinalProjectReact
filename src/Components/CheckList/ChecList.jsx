import CheckListItem from "./CkeckListItem/CkeckListItem";

function CheckList({tasks}){ 
    return( 
        <ul>
            {
                tasks.map(taskData => <CheckListItem taskData={taskData} key = {taskData.id}/>)
            }
        </ul> 
    )
}

export default CheckList;