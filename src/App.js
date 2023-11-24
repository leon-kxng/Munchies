import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import { CartProvider } from 'react-use-cart';


function App() {
  const [product, getProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState('');

  useEffect(() => {
    fetch(' http://localhost:3001/foods')
      .then((res) => res.json())
      .then((json) => getProduct(json));
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    const filteredProductsByCategory = product.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filteredProductsByCategory);
  };

  const handleSearch = (searchedText) => {
    setSearchedProduct(searchedProduct);
    const filteredProductsBySearch = product.filter((product) => product.title.toLowerCase().includes(searchedText.toLowerCase()));
    setFilteredProducts(filteredProductsBySearch);
  };

  return (
    <div className="App">

      <CartProvider>
      <NavBar products={product} onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Home products={filteredProducts.length > 0 ? filteredProducts : product} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      </CartProvider>
     
      
    </div>
  );
}

export default App;
