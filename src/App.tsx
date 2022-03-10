import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodosItemPage from "./components/TodosItemPage";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div style={{
                    display: "flex",
                    height: 50,
                    backgroundColor: "green",
                    fontSize: "1.3em",
                    alignItems: "center",
                    justifyContent: "space-around"
                }} >
                    <Link style={{textDecoration: "none"}} to="/users">User</Link>
                    <Link style={{textDecoration: "none"}} to="/todos">Todos</Link>
                </div>
                <Routes>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/users/:id" element={<UserItemPage/>}/>
                    <Route path="/todos/:id" element={<TodosItemPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;