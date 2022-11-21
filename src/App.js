import React, { useState }from 'react'; 
import ListaTareas from './componentes/ListaTareas';
import TareaForm from './componentes/TareaForm';




function App() {

  const [tareas, setTareas] = useState([]);

  const completado = (id) =>{

    setTareas(tareas.map((tarea) => {
      return tarea.id === +(id) ? {...tarea, completado: !tarea.completado} :{...tarea};
        
    }))
  }

  const eliminarItem = (id) => {
    setTareas([...tareas].filter(tarea => tarea.id !== id));
  }


  const agregarTarea = (nuevaTarea) => {
    console.log(nuevaTarea)
    let nuevoItem = {id: +new Date(), tarea: nuevaTarea, completado: false};
    setTareas([...tareas, nuevoItem])
  }

  return (
    <div className="App">
      <TareaForm agregarTarea = {agregarTarea}/>
      <ListaTareas tareas = {tareas} completado = {completado} eliminarItem= {eliminarItem}/>
    </div>
  );
}

export default App;
