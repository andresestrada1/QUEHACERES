import React from 'react'
import TareaItem from './TareaItem';

function ListaTareas({tareas, completado, eliminarItem, }) {
    return (
        <div className='container' style={{backgroundColor: 'brown'}}>
        {
            tareas.map((tarea, index) =>(
                <TareaItem  key ={`tarea-${index}`} tarea = {tarea} completado = {completado} eliminarItem= {eliminarItem} />
            ))
        }
        </div>
        )
}

export default ListaTareas;
