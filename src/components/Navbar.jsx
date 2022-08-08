import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div style={{ display: "flex"}}>
      <div style={{paddingTop: "7px"}}>
        <button><Link to={"/"}>Home</Link></button>
        <button><Link to="/categoria/indica">Indica</Link></button>
        <button><Link to="/categoria/sativa">Sativa</Link></button>
      </div>
      <Link to="cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
