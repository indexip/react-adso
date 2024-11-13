

export const Tarjeta = ({tarjeta})=>{

  const alerta = ()=>{
    console.log('agregado al carrido');
    alert("Producto agregado al carrito");

  }

  return(
    <div className="col-auto card card-body ml-2">
     <img src={tarjeta.img} alt="" />
      <p>{tarjeta.name}</p>
      <button onClick={alerta} className="btn btn-outline-primary">COMPRAR</button>
    </div>
  );
}