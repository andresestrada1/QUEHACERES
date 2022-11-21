import React, { useState } from 'react'

function TareaForm({agregarTarea}) {

    const [crearTarea, setCrearTarea] = useState('');

    const cambiaTarea = (e) =>{
        setCrearTarea(e.target.value);
    }


    const añadirTarea = (e) =>{
        e.preventDefault();
        if(crearTarea.trim() !== ' '){
            agregarTarea(crearTarea);
            setCrearTarea('');
        }

    }

    return (
        <div className='container'>
            <h1>Lista de tareas</h1>
            <form onSubmit={añadirTarea}>
                <input type='text' value={crearTarea} onChange={cambiaTarea} />
                <button className="btn btn-success">Crear tarea</button>
            </form>
        </div>
    )
}

export default TareaForm;
