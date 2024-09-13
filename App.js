import React, { useState } from 'react';
import Login from './Login';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import ContactForm from './ContactForm';
import ViewCart from './ViewCart';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [canAddProduct, setCanAddProduct] = useState(false);
  const [cart, setCart] = useState([]);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true);
      setCanAddProduct(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>EMS Impresión 3D</h1>
      <Login onLogin={handleLogin} />
      <ContactForm />
      <ProductList addToCart={addToCart} />
      <AddProduct canAddProduct={canAddProduct} />
      <ViewCart cart={cart} />
    </div>
  );
};

export default App;
