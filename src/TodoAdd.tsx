import React, { useState } from 'react';

//import '../src/styles/TodoAdd.css';
import {Form} from '../src/styles/TodoAdd.styles';
;
interface TodoAddProps {
    addToListChangeHandler : changeHandler;
}



export const TodoAdd : React.FC<TodoAddProps>= ({addToListChangeHandler}) => {
    const[newTask, setNewTask] = useState("");

    const changeHandler: changeHandler = (e) => {
        setNewTask(e.target.value);

    
    }
    console.log(newTask)

    const submitHandler: submitHandler = (e) => {
        e.preventDefault();
        addToListChangeHandler(newTask);

    }
    return (
        <Form>
            <input type="text" onChange={changeHandler} value={newTask}/>
            <button type="submit" onClick={submitHandler}>Add task</button>
            
        </Form>
    )
}
