import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo,
    onClick: (todo: ITodo) => void
}

const TodoItem: FC<TodoItemProps> = ({todo, onClick}) => {
    return (
        <div
            onClick={() => onClick(todo)}
            style={{
                padding: "15px",
                border: "1px solid black",
                display: "flex"
            }}>
            <input type="checkbox" checked={todo.completed} onChange={() => {
            }}/>
            {todo.id}, {todo.title}
        </div>
    )
}

export default TodoItem;