

export const Tarjeta = ({tarjeta})=>{

  return(
    <div className="col-auto">
     <img src={tarjeta.img} alt="" />
      <h2>Detalle</h2>
      <button>COMPRAR</button>
    </div>
  );
}