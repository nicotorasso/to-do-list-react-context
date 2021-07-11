import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoConstants';

//En el reducer devolvemos un estado dependiendo el tipo de accion que se pase por parametro

const todoReducer = ( state, action ) => {
    switch (action.type) {
        case ADD_TODO:
            //Agregamos los quehaceres en el localstorage
            localStorage.setItem('todoList', JSON.stringify([...state.todos, action.payload]));

            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            }
        case TOGGLE_TODO:
            //Modificamos la propiedad 'complete' del quehacer
            const toggleModify = state.todos.map(todo => 
                todo.id === action.payload
                    ? {...todo, complete : !todo.complete}
                    : todo
            );

            //Seteamos en el localstorage el nuevo arreglo
            localStorage.setItem('todoList', JSON.stringify(toggleModify));

            return {
                ...state,
                todos: toggleModify
            }
        case DELETE_TODO:
            //Aplicamos un filtro para quitar el quehacer por su id
            const deleteTodo = state.todos.filter(todo => todo.id !== action.payload);

            //Seteamos en el localstorage el nuevo arreglo
            localStorage.setItem('todoList', JSON.stringify(deleteTodo));

            return {
                ...state,
                todos: deleteTodo
            }
        default:
            return state;
    }
}

export default todoReducer;