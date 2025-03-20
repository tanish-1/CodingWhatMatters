import React, {useState} from 'react';

// import {useRef} from "react";

const FormItems = ({items , setItems}) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editedText, setEditedText] = useState("");
 const handleDelete = () =>{
     setItems(items.slice(0,items.length-1));
 }
 const handleEdit = (index) =>{
     setEditIndex(index);  // Set current item to edit mode
     setEditedText(items[index]);  // Set the current text in input field
 }
    const handleUpdate = () =>{
       const newItems = [...items];
       newItems[editIndex] = editedText;
       setItems(newItems);
    }

    return (
        <div>
            <h2>Current Task:</h2>
            {items.map((data,index)=>
                (
                <div key={index}>
                    {editIndex === index ? (
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    ) : (
                        <input type="text" value={data} disabled />
                    )}
                    {editIndex === index ?(
                        <button onClick={handleUpdate}>Update</button>
                    ):(
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    )}
                    <button onClick={handleDelete}>Delete</button>
                </div>
            ))}

        </div>
    );
};

export default FormItems;