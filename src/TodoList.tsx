import React from 'react';
import { TodoListItems } from './TodoListItems';
//import '../src/styles/TodoList.css';
import {List} from '../src/styles/TodoList.styles';

interface TodoListProps  {

    TodoListArray: Array<todoListType>;
    toggleTodoList : toggleTodo;

}

export const TodoList: React.FC<TodoListProps> = ({TodoListArray, toggleTodoList}) => {
    return (
        <List>
            {TodoListArray.map((todo) => (
                <TodoListItems todoList={todo} toggleTodoList={toggleTodoList} key={todo.task}/>

            )

            )}

            
        </List>
    )
}
