import { Tarjeta } from "./tarjeta";


export const ListaTarjetas = ({tarjetas})=>{

  return(

   <div className="container row">
    {
      tarjetas.map((tarjeta)=>(
        <Tarjeta key={tarjeta.id} tarjeta={tarjeta}></Tarjeta>
      ))

    }
   </div>

  );
}