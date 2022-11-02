function TodoItem({ props , handleDelete}) {

    return (
        <div className="ListItem">
            <div>{props.name}</div>
            <button type="" onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;