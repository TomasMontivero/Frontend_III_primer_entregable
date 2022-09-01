// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react";

export default function Item(props) {

  var [stock, setStock] = useState(() => props.stock);

  function mostrarStock() {
    var resultado = "agotado";
    if (stock > 0) {
      resultado = stock;
    }
    return resultado;
  }

  function textoBoton() {
    var resultado = "SIN STOCK";
    if (stock > 0) {
      resultado = "COMPRAR"
    }
    return resultado;
  }

  function restarStock() {
    setStock(parseInt(stock) - 1)
  }

  function disableButton() {
    if (stock < 1) {
      return true;
    }
  }

  function onComprar(event) {
    //console.log("item -> onComprar")
    restarStock();
    props.onComprar();
  }

  return (
    <div className='producto'>
      {/* maquetar Item aquí */
        <>
          <h3>{props.nombre}</h3>
          <p>{props.descripcion}</p>
          <h5>En stock: <span>{mostrarStock()}</span></h5>
          <button onClick={() => onComprar()} disabled={disableButton()}> {textoBoton()} </button>
        </>
      }
    </div>
  )
}
