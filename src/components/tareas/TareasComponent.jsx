import { useState } from "react";
import { InputTarea } from "./InputTarea";
import { Tareas } from "./Tareas";



export const TareasComponent = ()=>{

  const [tareas, setTareas] = useState([]);

  const onTarea = (event)=>{

    if( tareas.includes(event))return;

    setTareas([...tareas, event]);

    tareas.length
  }

  return(
    <div className="container mt-4">

      <div className="card card-body">
      <h2 className="mb-4">Agregar Tarea</h2>
      <InputTarea onValue={onTarea }></InputTarea>
      </div>
      
      <div className="card card-body mt-2">
      <h2>Lista de tareas</h2>
      <Tareas tareas={tareas} setTareas={setTareas}></Tareas>
      </div>
      
    </div>
  );
}