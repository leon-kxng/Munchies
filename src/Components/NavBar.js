// import React, { useState } from 'react';


// function NavBar({ products, onCategoryChange, onSearch }) {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const uniqueCategories = [...new Set(products.map((product) => product.category))];
//   const [searchedProduct, setSearchedProduct] = useState('');


//   const handleCategoryChange = (e) => {
//     const selectedValue = e.target.value;
//     setSelectedCategory(selectedValue);
//     onCategoryChange(selectedValue);
//   };

//   // const handleSearchInput = (e) => {
//   //   const inputText = e.target.value;
//   //   setSearchedProduct(inputText);
//   //   onSearch(inputText); // Use the onSearch prop to update the search term in the parent component
//   // };

//   // const handleSearch = () => {
//   //   // Implement your search functionality here if needed
//   //   console.log('Search button clicked');
//   // };

//   const categoryList = (
//     <select onChange={handleCategoryChange} value={selectedCategory}>
//       <option value=''>Categories</option>
//       {uniqueCategories.map((category) => (
//         <option key={category} value={category}>
//           {category}
//         </option>
//       ))}
//     </select>
//   );
// const [value, setValue] = useState('');

// const onChange = (event) => {
//   setValue(event.target.value);
// };

// const onSearch= (searchTerm) => {
//   //our api to to fetch the search result
//   console.log('search', searchTerm);
// }



//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb- mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" href="/cart">
//                 Cart
//               </a>
//             </li>

//           {categoryList}
//           </ul>
//           <form className="d-flex">
//             <input type="text" value={value} onChange={onchange}/>
//             <button onClick={()=>onSearch(value)}>
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );

// }


// export default NavBar;

import React, { useState, useEffect } from 'react';

function NavBar({ onCategoryChange, onSearch }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the local server
    fetch('http://localhost:3001/foods')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const uniqueCategories = products ? [...new Set(products.map((product) => product.category))] : [];

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    onCategoryChange(selectedValue);
  };

  const handleSearchInput = (e) => {
    const inputText = e.target.value;
    setSearchedProduct(inputText);
    onSearch(inputText); // Call onSearch prop with the input text
  };

  useEffect(() => {
    // Filter products based on the search term
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchedProduct.toLowerCase())
    );
    // Update the state with the filtered products
    setFilteredProducts(filteredProducts);
  }, [searchedProduct, products]);

  const categoryList = (
    <select onChange={handleCategoryChange} value={selectedCategory}>
      <option value=''>Categories</option>
      {uniqueCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb- mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/cart">
                Cart
              </a>
            </li>

            {categoryList}
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Product"
              aria-label="Search"
              onChange={handleSearchInput}
              value={searchedProduct}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
