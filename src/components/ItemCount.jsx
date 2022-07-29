import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

export default function ItemCount() {
  const [numero, setNumero] = useState(1);

  function onAdd() {
    setNumero(
        Swal.fire(
        'Agregaste tus productos al carrito',
      ))
  } 

  function handleMenos() {
    setNumero(numero - 1);
  }

  function handleMas() {
    setNumero(numero + 1);
  }

  const stock = 5;

  return (
    <>
      <div style={{ display: "flex" }}>
        <button disabled={numero === 0} onClick={handleMenos}>
          -
        </button>

        <h1 style={{ paddingInline: 10 }}>{numero}</h1>

        <button disabled={numero >= stock} onClick={handleMas}>
          +
        </button>
      </div>

      <button onClick={onAdd}>Agregar al Carrito</button>
    </>
  );
}
