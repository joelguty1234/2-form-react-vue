const TodosPart = ({ allTodo, deleteTodo, updateTodo }) => {
    return <li className="list-group-item ">
        <div className="d-flex justify-content-between align-items-start">
            <div>
                <h5 className={`${allTodo.state1 && 'text-decoration-line-through'}`}>{allTodo.title1}</h5>
                <p className={`${allTodo.state1 && 'text-decoration-line-through'}`}>{allTodo.description1}</p>
                <div className="d-flex gap-2">
                    <button onClick={() => deleteTodo(allTodo.id)} className="btn btn-sm btn-danger">Delete</button>
                    <button onClick={() => updateTodo(allTodo.id)} className="btn btn-sm btn-warning">Update</button>
                </div>
            </div>
            <span className="badge text-bg-primary">{allTodo.priority && 'Priority'}</span>
        </div>
    </li>
}

export default TodosPart