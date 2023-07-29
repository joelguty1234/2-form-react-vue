import TodosPart from "./TodosPart"

const Todo = ({ allTodo, deleteTodo, updateTodo }) => {

    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">Todos</h2>
            <ul className="list-group">
                {allTodo.map(allTodo => (
                    <TodosPart key={allTodo.id} allTodo={allTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                ))}
                {
                    allTodo.length === 0 && (
                        <li className="list-group-item text-center mb-2">Sin Todos</li>
                    )
                }
            </ul>
        </div>
    )
}
export default Todo