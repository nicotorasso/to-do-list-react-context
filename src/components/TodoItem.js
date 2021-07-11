
//Componente del quehacer unitario

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    const date = new Date();

    const { id, text, complete } = todo;

    return (
        <tr>
            <td>{date.toLocaleDateString()}</td>
            <td>{text}</td>
            <td>
                {
                complete 
                    ? <button style={{opacity: .75}} onClick={() => toggleTodo(id)} disabled>✔️</button>
                    : <button onClick={() => toggleTodo(id)}>✔️</button>
                }
                <button onClick={() => deleteTodo(id)}>❌</button>
            </td>
        </tr>
    )
}

export default TodoItem
