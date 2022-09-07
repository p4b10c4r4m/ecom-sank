import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div style={{ paddingLeft: "20px"}}>
      <Link to={`/item/${producto.id}`}>
        <h2>{producto.name}</h2>
      </Link>
      <p>${producto.price}</p>
      <p>{producto.category}</p>
    </div>
  );
};

export default Item;
