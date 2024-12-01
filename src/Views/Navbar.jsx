import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';
import Search from '../img/Vector.png';
import Cart from '../img/teenyicons_bag-outline.png';
import User from '../img/uiw_user.png';

function Navbar() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProducts, setShowProducts] = useState(false);

  // Fetch products data when the component mounts (optional, to show all products initially)
  useEffect(() => {
    axios.get('http://localhost:5000/api/products') // This can be changed if you want to fetch all products initially
      .then(response => {
        setProducts(response.data.products); // Assuming the response contains the products array
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowProducts(query.length > 0); // Show products when search query exists

    if (query.length > 0) {
      // Send request to backend to fetch products by category (searchQuery)
      axios.get(`http://localhost:5000/api/search/${query}`) // Update this with the correct backend endpoint
        .then(response => {
          setProducts(response.data.products); // Update products with the filtered list
        })
        .catch(error => {
          console.error('There was an error fetching the filtered products!', error);
        });
    } else {
      // Reset products list if search is cleared
      setProducts([]);
    }
  };

  return (
    <div className='navbar_main_div'>
        <div className='navbar_ul_div'>
            <ul className='navbar_ul'>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Categories</a></li>
                <li><a href="">SALE</a></li>
            </ul>
        </div>
        <div className='navbar_mid_div'>
            <p className='navbar_mid_p1'>MEJIWOO</p>
            <p className='navbar_mid_p2'>미지우</p>
        </div>
        <div className='navbar_last_div'>
            <div>
                <input 
                    className='navbar_search_box' 
                    type="text" 
                    name="Search" 
                    id="Search" 
                    placeholder='Search by Category' 
                    value={searchQuery}
                    onChange={handleSearch} 
                />
                <img className='Search_icon' src={Search} alt="Search_icon"/>
            </div>
            <a className='Cart_icon' href=""><img src={Cart} alt="Cart_icon"/></a>
            <a className='User_icon' href=""><img src={User} alt="User_icon"/></a>
        </div>

        {/* Floating div showing filtered products */}
        <div className={`floating_product_div ${showProducts ? 'show' : ''}`}>
          {products.length > 0 ? (
            products.map(product => (
              <div className="product_card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
    </div>
  );
}

export default Navbar;
















// import React, { useState } from 'react';
// import axios from 'axios';
// import './Navbar.css';
// import SearchIcon from '../img/Vector.png';
// import Cart from '../img/teenyicons_bag-outline.png';
// import User from '../img/uiw_user.png';

// function Navbar() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     if (value.trim() === '') {
//       setShowResults(false);
//       setSearchResults([]);
//     } else {
//       handleSearch(value);
//     }
//   };

//   const handleSearch = async (query) => {
//     try {
//       const response = await axios.get('http://localhost:5000/search', {
//         params: { query },
//       });
//       setSearchResults(response.data);
//       setShowResults(true); // Show results when data is received
//     } catch (error) {
//       console.error('Error during search:', error);
//       setShowResults(false);
//     }
//   };

//   const handleOutsideClick = () => {
//     setShowResults(false); // Hide the floating tab when clicked outside
//   };

//   return (
//     <div className='navbar_main_div' onClick={handleOutsideClick}>
//       <div className='navbar_ul_div'>
//         <ul className='navbar_ul'>
//           <li><a href="">Home</a></li>
//           <li><a href="">Product</a></li>
//           <li><a href="">Categories</a></li>
//           <li><a href="">SALE</a></li>
//         </ul>
//       </div>
//       <div className='navbar_mid_div'>
//         <p className='navbar_mid_p1'>MEJIWOO</p>
//         <p className='navbar_mid_p2'>미지우</p>
//       </div>
//       <div className='navbar_last_div'>
//         <div className='navbar_search_div'>
//           <input
//             className='navbar_search_box'
//             type="text"
//             name="Search"
//             id="Search"
//             placeholder='Search'
//             value={searchQuery}
//             onChange={handleSearchChange}
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//           />
//           <img
//             className='Search_icon'
//             src={SearchIcon}
//             alt="Search_icon"
//             onClick={() => handleSearch(searchQuery)}
//           />
//           {showResults && searchResults.length > 0 && (
//             <div className="search_results_floating_tab">
//               <ul>
//                 {searchResults.map((result) => (
//                   <li key={result.id}>
//                     {result.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//         <a className='Cart_icon' href=""><img src={Cart} alt="Cart_icon" /></a>
//         <a className='User_icon' href=""><img src={User} alt="User_icon" /></a>
//       </div>
//     </div>
//   );
// }

// export default Navbar;