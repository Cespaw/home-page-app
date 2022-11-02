import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {

    const [TodoItems, setTodoItems] = useState(
        [{
            id: 0,
            name: "Shop food"
        },
        {
            id: 1,
            name: "Laundry"
        }]);

    const [input, setInput] = useState("")


    const handleSubmit = event => {
        event.preventDefault();
        console.log("clicked add")

        if (input === "") {
            return;
        }

        const num = TodoItems.length

        const newToDo =
        {
            id: num,
            name: input
        }

        setTodoItems(current => [...current, newToDo])
        setInput("")
    }

    function handleDelete(id) {
        console.log("clicked delete for " + id)
        setTodoItems(TodoItems.filter(item => item.id !== id))
    }

    return (
        <div id="ToDoList">
            <form id="ToDoList">
                <p>
                    Things to do
                </p>

                <div>
                    <input placeholder="Write task here"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}>
                    </input>
                    <button type="" onClick={handleSubmit}>Add</button>
                </div>

                <div className="List">
                    <div className="ListItem">
                        {TodoItems.map((item) =>
                            <TodoItem key={item.id} props={item} handleDelete={handleDelete} ToDoItems={TodoItems} />)}
                    </div>
                </div>
            </form>
        </div>

    );
}

export default TodoList;