import React, {Fragment} from 'react';

export function TodoItem({ todo, toggleTodo }) {
    const {id, task, completed} = todo;
    
    const handleTodoClick = () => {
        toggleTodo(id);
    }
    
    return (
        <Fragment>
            <li>
                <input type="checkbox" onChange={handleTodoClick} checked={completed} />
                {task}
            </li>
        </Fragment>
    );
}