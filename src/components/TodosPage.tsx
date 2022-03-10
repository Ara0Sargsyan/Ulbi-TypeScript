import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import TodoItem from "./TodoItem";
import {useNavigate} from "react-router-dom";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const history = useNavigate()

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem onClick={(todo) => history(`/todos/${todo.id}`) } key={todo.id} todo={todo}/>}/>
    );
};

export default TodosPage;