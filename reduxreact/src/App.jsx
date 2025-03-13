import React from 'react';
import AddTodo from "./components/AddTodo.jsx";
import Todos from "./components/Todos.jsx";

const App = () => {
    return (
        <div>
            Chai aur react
            <AddTodo/>
            <Todos/>
        </div>
    );
};

export default App;