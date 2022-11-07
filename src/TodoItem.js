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
        <div class="card w-200">
            <div class="card-body">
                {editClicked ?
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="p-2 flex-grow-1">
                                <input
                                    value={input}
                                    placeholder={props.name}
                                    onChange={(event) => setInput(event.target.value)}>
                                </input>
                            </div>

                            <div class="p-2">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={(e) => handleConfirmClicked(props.id, input)}>
                                    Confirm
                                </button>
                            </div>

                            <div class="p-2">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={() => handleDelete(props.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div class="d-flex">
                        <div class="p-2 flex-grow-1">
                            <p class="card-text">{props.name}</p>
                        </div>

                        <div class="p-2">
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={() => handleEditClicked()}>
                                Edit
                            </button>
                        </div>

                        <div class="p-2">
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={() => handleDelete(props.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default TodoItem;