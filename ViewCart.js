import React from 'react';

const ViewCart = ({ cart }) => {
  if (cart.length === 0) return <p>El carrito está vacío.</p>;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewCart;
