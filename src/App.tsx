import React, {useState} from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
//import '../src/styles/App.css';

import {Wrapper} from '../src/styles/App.styles';


const initialTodoListArray : todoListType[] = [
  {task : "Walk the dog", checked : false},
  {task : "Feed the dog", checked : false},
  {task : "Pet the dog", checked : false},

]



function App() {
  const [TodoListArray, SetTodoListArray] = useState<todoListType[]>(initialTodoListArray );

  const toggleTodoList: toggleTodo = (selectedTodoList: todoListType) => {

    const newTodoList = (TodoListArray.map((Todo: todoListType) =>{
    
      if (Todo === selectedTodoList){
            return (
              {
              ...Todo,
              checked : !Todo.checked,
              }
            )
      }else {
        return Todo;
      }

    }
      )
      )
    SetTodoListArray(newTodoList);

    }

    const addToListChangeHandler: addToListHandler = (newTodo: string) => {

      SetTodoListArray([...TodoListArray, {
        task : newTodo,
        checked : false

      }])

    }
  
  return (
    <Wrapper>
     
      <TodoList TodoListArray={TodoListArray} toggleTodoList={toggleTodoList}/>
      <TodoAdd addToListChangeHandler = {addToListChangeHandler}/>
    </Wrapper>
  );
}

export default App;
