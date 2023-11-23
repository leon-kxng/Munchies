import React, { useState, useEffect } from 'react';

// const SearchBar = ({ food, setFilteredFoods }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     const newFilteredFood = food.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredFoods(newFilteredFood);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   useEffect(() => {
//     handleSearch();
//   }, [searchQuery, food]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//     </div>
//   );
// };

export default SearchBar;
