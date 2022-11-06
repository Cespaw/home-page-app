import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';


function TodoList() {

    //localStorage.clear()

    const [TodoItems, setTodoItems] = useState([]);

    const getTodos = JSON.parse(localStorage.getItem("todos"));

    useEffect(() => {
        if (Object.keys(getTodos).length === 0) {
            console.log("is null")
            setTodoItems([])
        } else {
            console.log("is not null")
            setTodoItems(getTodos);
        }

    }, [])

    const [input, setInput] = useState("")
    const handleSubmit = event => {
        event.preventDefault();
        console.log("clicked add")

        if (input === "") {
            return;
        }

        const num = uuidv4()

        const newToDo =
        {
            id: num,
            name: input
        }

        setTodoItems(current => [...current, newToDo])
        localStorage.setItem("todos", JSON.stringify([...TodoItems, newToDo]));
        setInput("")
    }

    function handleDelete(id) {
        console.log("clicked delete for " + id)
        const alteredList = TodoItems.filter(item => item.id !== id)
        setTodoItems(alteredList)
        //setTodoItems(TodoItems.filter(item => item.id !== id))
        localStorage.setItem("todos", JSON.stringify(alteredList));
    }

    function handleEdit(id, input) {
        console.log("clicked edit for " + id)

        if (input === ""){
            return;
        }

        let data = JSON.parse(localStorage.getItem('todos'));
        const editedData = data.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    id: todo.id,
                    name: input
                }
            }
            return todo;
        })
        setTodoItems(editedData)
        localStorage.setItem("todos", JSON.stringify(editedData));
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

                {Object.keys(TodoItems).length !== 0 ?
                    <div className="List">
                        <div className="ListItem">
                            {TodoItems.map((item) =>
                                <TodoItem key={item.id} props={item} handleDelete={handleDelete} handleEdit={handleEdit} ToDoItems={TodoItems} />)}
                        </div>
                    </div>
                    : <>No tasks to show!</>
                }

            </form>
        </div>

    );
}

export default TodoList;