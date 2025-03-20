// import React, {useState} from 'react';
import FormItems from "./FormItems.jsx";

const TodoForm = ({name,setName,setItems}) => {

    const handleForm = (e) =>{
        e.preventDefault();
        console.log('successful submit', name)
        setItems(prevState => [...prevState,name]); // This keeps the previous items while adding the new one.
        setName('')
    }
   const handleName = (e) => {
        setName(e.target.value);// Logs the current input value
        console.log(name);
   }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type='text' value={name} onChange={handleName} placeholder='Enter the Name'/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;