

export const Tareas = ({ tareas, setTareas }) => {

  
  const eliminar = (index) => {
    const nuevasTareas = [...tareas];  
    nuevasTareas.splice(index, 1);     
    setTareas(nuevasTareas);           
  };

  return (
    <ol className="list-group mt-2">
      {tareas.map((tarea, index) => (
        <li className="list-group-item" key={index}>
          <input type="checkbox" className="mr-2"/>
          {index + 1 + ' ' + tarea}
          <button
            onClick={() => eliminar(index)}  
            className="btn btn-danger btn-sm ml-2"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ol>
  );
};
