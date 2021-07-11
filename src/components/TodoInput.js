import { useContext, useState } from "react";
import todoContext from "../context/todoContext";

//Componente en el cual ingresamos el quehacer

const TodoInput = () => {

    const [input, setInput] = useState("");
    
    //Consumimos los datos que nos provee el contexto
    const { addTodo } = useContext(todoContext);

    //Manejador del quehacer que se escriba
    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    //Manejador del evento submit
    const submitHandler = (e) => {
        e.preventDefault();

        // {id: 111, text: 'Some text', complete: false}
        const newTodo = {
            id: (Math.random()*10000*10000).toFixed(0),
            text: input,
            complete: false
        };

        addTodo(newTodo);

        setInput("");
    }

    //Estilo para el input tipo submit
    const buttonStyle = {
        cursor: 'pointer',
        backgroundColor: '#212529',
        borderColor: '#32383e',
        margin: '0.1rem'
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='input-group'>
                    <input className='form-control' style={{ textAlign: 'center' }} type="text" value={input} placeholder="Ingresa un quehacer.." onChange={inputHandler} maxLength='40' required/>
                    <input className='btn btn-primary btn-block' style={buttonStyle} type="submit" value="Agregar"/>
                </div>
            </form>
        </div>
    )
}

export default TodoInput
