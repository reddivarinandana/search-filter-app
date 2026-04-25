import React from "react";
import "./ProductList.css";

function ProductList({ products }) {
  if (products.length === 0) {
    return <p className="no-data">No products found 😔</p>;
  }

  return (
    <div className="grid">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <span>${item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;