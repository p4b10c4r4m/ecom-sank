import React, { useState, useEffect } from "react";

export default function ItemCount({initial, stock , onAdd}) {
  const [count, setCount] = useState(parseInt(initial));

  function handleMenos() {
    setCount(count - 1);
  }

  function handleMas() {
    setCount(count + 1);
  }

  useEffect (() => {
    setCount(parseInt(initial));
  }, [initial])

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button disabled={count === 0} onClick={handleMenos}>
          -
        </button>

        <h1 style={{ paddingInline: 10 }}>{count}</h1>

        <button disabled={count >= stock} onClick={handleMas}>
          +
        </button>
      </div>

      <button disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
}
