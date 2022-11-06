import { useState } from "react";

function TodoItem({ props, handleDelete, handleEdit }) {

    const [editClicked, setEditClicked] = useState(false)
    const [input, setInput] = useState("")

    function handleEditClicked(){
        setEditClicked(!editClicked)
    }

    return (
        <div className="ListItem">
            <div>
                {props.name}
                <button type="button" onClick={() => handleEditClicked()}>Edit</button>

                <button type="button" onClick={() => handleDelete(props.id)}>Delete</button>

                {editClicked ? 
                <div>
                        <input value={input} 
                               onChange={(event) => setInput(event.target.value)}>
                        </input>
                        <button type="button" onClick={(e) => handleEdit(props.id, input)}>Confirm</button>
                        
                </div>
                : <></>}

            </div>
        </div>
    );
}

export default TodoItem;