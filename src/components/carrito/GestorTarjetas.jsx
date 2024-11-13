import { useState } from "react"
import { ListaTarjetas } from "./ListaTarjetas";


export const GestorTarjetas = ()=>{

  const [tarjetas, setTarjetas] = useState([
   {
    id:1,
    name:'Donut Premium Pirulin Arequipe',
    img:'src/assets/pirulin.webp'
   },

   {
    id:2,
    name:'Combo Flat + Frutibatido',
    img:'src/assets/combo-flat.webp'
   },

   {
    id:3,
    name:'Sándwich Omwich + Coca-Cola',
    img:'src/assets/sandwich.webp'
   },

   {
    id:4,
    name:'Paga 10 lleva 12',
    img:'src/assets/caja.webp'
   }

  ]);

  return(

    <div className="mt-2 ml-2">
      <ListaTarjetas  tarjetas={tarjetas}></ListaTarjetas>
    </div>
      
    
  );

}