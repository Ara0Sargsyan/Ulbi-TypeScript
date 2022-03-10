import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const TodosItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null)
    const params = useParams()
    const history = useNavigate()

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history("/todos")} >Back</button>
            <h1>{todo?.title} todo-i ej</h1>
            <div>
                {todo?.completed? "katarvac e" : "katarvac che"}
            </div>
        </div>
    );
};

export default TodosItemPage;