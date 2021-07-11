import { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoConstants';

//Componente proveedor de los estados globales

const TodoProvider = ({ children }) => {
    //Consultamos al localstorage para saber si tiene el arreglo que contiene los quehaceres
    const getStorage = localStorage.getItem('todoList');

    // { id: '123', text: "some text", complete: false}
    const initialState = {
        todos:  getStorage 
                    ? JSON.parse(getStorage)
                    : [] 
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    //Agregar una tarea
    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    };

    //Completar una tarea
    const toggleTodo = (todoId) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: todoId
        })
    };

    //Eliminar una tarea
    const deleteTodo = (todoId) => {
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        })
    };

    //En este objeto guardamos el estado y las funciones para despachar las acciones con su tipo y dato a transmitir
    const data = {
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo
    };

    return (
        <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
    )
}

export { TodoProvider };