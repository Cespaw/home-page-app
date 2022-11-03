
function TodoItem({ props , handleDelete, handleEdit}) {

    return (
        <div className="ListItem">
            <div>{props.name}</div>
            <button type="" onClick={() => handleDelete(props.id)}>Delete</button>
            <button type="" onClick={(e) => handleEdit(e, props.id)}>Edit</button>
        </div>
    );
}

export default TodoItem;