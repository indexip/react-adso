import { useState } from "react";


export const InputTarea = ({ onValue })=>{

  const [inputValue, setInputValue]= useState('');


  const onInputChanged = ({target})=>{
    setInputValue(target.value);
  }


  const onSubmit = (event)=>{
    event.preventDefault();

    if( inputValue.trim().length <=1) return;

    onValue(inputValue);
    setInputValue('');

   }


  return(
    <form  className="row g-2" onSubmit={onSubmit }>

      <div className="col-auto">
      <input 
      type="text" 
      value={inputValue}
      onChange={onInputChanged}
      placeholder="Nueva tarea"
      className="form-control"/>
     </div>

      <button className="btn btn-primary col-auto">Agregar</button>
     
    </form>
  );
}