import { useState } from "react";

function TodoItem({ props, handleDelete, handleEdit }) {

    const [editClicked, setEditClicked] = useState(false)
    const [input, setInput] = useState("")

    function handleEditClicked() {
        setEditClicked(!editClicked)
        setInput(props.name)
    }

    function handleConfirmClicked() {
        handleEdit(props.id, input)
        setEditClicked(!editClicked)
    }

    return (
        <div className="ListItem">
            <div>
                {editClicked ?
                    <>
                        <input 
                            value={input}
                            placeholder={props.name}
                            onChange={(event) => setInput(event.target.value)}>
                        </input>

                        <button 
                            type="button" 
                            onClick={(e) => handleConfirmClicked(props.id, input)}>
                            Confirm
                        </button>
                    </>
                    : 
                    <>
                        {props.name}
                        <button 
                            type="button" 
                            onClick={() => handleEditClicked()}>
                            Edit
                        </button>
                    </>
                }

                <button 
                    type="button" 
                    onClick={() => handleDelete(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;