import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await fetch('/db/products.json'); // Correct path to fetch products.json
        console.log('Received response:', response);
        const data = await response.json();
        console.log('Data:', data);
        setProducts(data);
        console.log('Products set:', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid-container">
      <Header className="header" />
      <div className="container">
        <Dashboard className="dashboard" products={products} />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
