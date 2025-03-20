import React, {useState} from 'react';
import TodoForm from "./components/TodoForm.jsx";
import FormItems from "./components/FormItems.jsx";

const App = () => {
    const [name, setName] = useState('');
     const [items, setItems] = useState([]);
     console.log(items);
    return (
        <div>
            <TodoForm name = {name} setName = {setName} setItems = {setItems}/>
            <FormItems items={items} setItems={setItems}/>
        </div>
    );
};

export default App;