import React from 'react';

const AddProduct = ({ canAddProduct }) => {
  if (!canAddProduct) return null;

  const handleAddProduct = () => {
    // Aquí se agregarían los productos
    alert('Producto agregado.');
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Agregar Producto</button>
    </div>
  );
};

export default AddProduct;
