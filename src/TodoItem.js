function TodoItem({ props , handleDelete}) {

    return (
        <div className="ListItem">
            <p>{props.name}</p>
            <button type="" onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;