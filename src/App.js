import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/leon-kxng/Munchies/foods')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    const filteredProductsByCategory = products.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filteredProductsByCategory);
  };

  const handleSearch = (searchedText) => {
    const filteredProductsBySearch = products.filter((product) => 
      product.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilteredProducts(filteredProductsBySearch);
  };

  return (
    <div className="App">
      <CartProvider>
        <NavBar products={products} onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
        <div className="container">
          {/* Set equal padding on both sides */}
          <Routes>
            <Route path='/' element={<Home products={filteredProducts.length > 0 ? filteredProducts : products} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
