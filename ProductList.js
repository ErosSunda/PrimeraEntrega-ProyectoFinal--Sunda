import React, { useState } from 'react';

const ProductList = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', image: 'imagen1.png' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', image: 'imagen2.png' },
    // Agrega más productos según lo necesites
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Búsqueda"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
