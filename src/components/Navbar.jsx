import React from "react";
import CartWidget from "./CartWidget";


const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <button>Menú</button>
          <button>Productos</button>
          <button>Servicios</button>
          <button>Nosotros</button>
        </div>
        <CartWidget />
      </div>
    </>
  );
};

export default Navbar;
