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
        <div class="card">
            <div class="card-body">
                {editClicked ?
                    <div class="card-body">
                        <input 
                            
                            value={input}
                            placeholder={props.name}
                            onChange={(event) => setInput(event.target.value)}>
                        </input>

                        <button 
                            type="button"
                            class="btn btn-primary" 
                            onClick={(e) => handleConfirmClicked(props.id, input)}>
                            Confirm
                        </button>
                    </div>
                    : 
                    <>
                        <p class="card-text">{props.name}</p>
                        <button 
                            type="button" 
                            class="btn btn-primary"
                            onClick={() => handleEditClicked()}>
                            Edit
                        </button>
                        </>
                }
                

                <button 
                    type="button" 
                    class="btn btn-primary"
                    onClick={() => handleDelete(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem;