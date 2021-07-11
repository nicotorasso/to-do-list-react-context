import { useContext } from "react"
import todoContext from "../context/todoContext";
import TodoItem from "./TodoItem"

//Componente que arma la lista de quehaceres

const TodoList = () => {
    //Consumimos los datos que nos provee el contexto
    const { todos, toggleTodo, deleteTodo } = useContext(todoContext);

    return (
        <div class="table-responsive-md">
            <table className="table">
                {todos.length > 0 ? <thead className="thead-dark">
                    <tr>
                        <th>Fecha</th>
                        <th>Tarea</th>
                        <th colSpan='2'>Acciones</th>
                    </tr>
                </thead>
                : null
                }
                <tbody>
                    { 
                    todos.length > 0 
                        ? todos.map( todo => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>)
                        : <tr><td>Todavia no haz agregado una tarea..</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
