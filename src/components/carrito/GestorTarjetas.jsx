import { useState } from "react"
import { ListaTarjetas } from "./ListaTarjetas";


export const GestorTarjetas = ()=>{

  const [tarjetas, setTarjetas] = useState([
   {
    id:1,
    name:'Donut Premium Pirulin Arequipe',
    img:'src/assets/caja.webp'
   },

   {
    id:2,
    name:'Combo Flat + Frutibatido',
    img:'src/assets/caja.webp'
   },

   {
    id:3,
    name:'Sándwich Omwich + Coca-Cola',
    img:'src/assets/caja.webp'
   },

   {
    id:4,
    name:'Paga 10 lleva 12',
    img:'src/assets/caja.webp'
   }

  ]);

  return(

    
      <ListaTarjetas tarjetas={tarjetas}></ListaTarjetas>
    
  );

}