import { useState } from "react";
import { TareasComponent } from "./components/tareas/TareasComponent";
import { ListaTarjetas } from "./components/carrito/ListaTarjetas";
import { GestorTarjetas } from "./components/carrito/GestorTarjetas";



export const App = ()=>{

 

  return(
    <>
     {/* <TareasComponent/> */}

    <GestorTarjetas></GestorTarjetas>
    </>
  );
}