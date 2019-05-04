import React from 'react'

function TodoItem(props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChange(props.todo.id)}/>
            <span>{props.todo.text}</span>
        </div>
    );
}
export default TodoItem;
