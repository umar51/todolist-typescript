
import React from 'react';
//import '../src/styles/TodoListItems.css';
import {ListItem} from '../src/styles/TodoListItems.styles';

interface TodoListItemsProps {

    todoList : {
        task: string;
        checked: boolean;
    };
    toggleTodoList: toggleTodo;
}

export const TodoListItems: React.FC<TodoListItemsProps> = ({todoList, toggleTodoList}) => {
    return (
        <ListItem>
            <label className={todoList.checked ? "task" : undefined}>
                <input type="checkbox" checked={todoList.checked} onChange={()=> {toggleTodoList(todoList)}}/>
                    {todoList.task}
            </label>
            
        </ListItem>
    )
}
