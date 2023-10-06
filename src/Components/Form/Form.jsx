import { useRef , useState} from "react";
import Button from "../Button/Button"; 
import InputTypeText from "../InputTypeText/InputTypeText.jsx";

function Form({onSubmit}){
    const formRef = useRef(null);
    const inputRef = useRef(null);
    const inputName = 'task title';
    const getId = () => Date.now();
    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = formRef.current;  
        const formData = new FormData(form);

        const taskTitle = formData.get(inputName);
        console.log(inputRef.current);

        if(taskTitle ==='') return;

        const input = inputRef.current;
        input.value = '';
        onSubmit({
            id:`${taskTitle}_${getId()}`,
            title:taskTitle
        }); 
    }
 
    return(
        <form ref={formRef}> 
            <InputTypeText name={inputName} ref = {inputRef}/> 
            <Button clickHandler={handleSubmit} >Add</Button>  
        </form>
    )
}

export default Form;