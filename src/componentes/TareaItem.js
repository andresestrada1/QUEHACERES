import React from 'react'
import './TareaItem.css';

    function TareaItem({tarea, completado, eliminarItem }) {
        
    return (
        <div className='form-control' style={{textDecoration: tarea.completado ? 'line-through' : 'none'} }>
            
            <input type='checkbox' checked = {tarea.completado} onChange ={() => completado(tarea.id)}/>&nbsp; &nbsp;
        {
            tarea.tarea
        }
        <button className='boton' onClick={() => eliminarItem(tarea.id)}>Eliminar</button>
        </div>
    )
    }

export default TareaItem;
