// import React, { useState } from 'react';
// import ProductCard from './OurProductCard';
// import './OurProduct.css';

// // Sample product data for each category
// const productsData = {
//   shirts: [
//     { id: 1, name: 'Casual Shirt', price: 300, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     { id: 2, name: 'Formal Shirt', price: 500, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     { id: 3, name: 'Casual Shirt', price: 300, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     { id: 4, name: 'Formal Shirt', price: 500, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     { id: 5, name: 'Casual Shirt', price: 300, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     { id: 6, name: 'Formal Shirt', price: 500, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     { id: 7, name: 'Casual Shirt', price: 300, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     { id: 8, name: 'Formal Shirt', price: 500, image: 'https://th.bing.com/th/id/OIP.RTLs-XFPBK6me9Lzrvj3rAHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//   ],
//   pants: [
//     { id: 1, name: 'Jeans', price: 400, image: 'https://via.placeholder.com/200x150?text=Jeans' },
//     { id: 2, name: 'Chinos', price: 600, image: 'https://via.placeholder.com/200x150?text=Chinos' },
//     { id: 3, name: 'Jeans', price: 400, image: 'https://via.placeholder.com/200x150?text=Jeans' },
//     { id: 4, name: 'Chinos', price: 600, image: 'https://via.placeholder.com/200x150?text=Chinos' },
//     { id: 5, name: 'Jeans', price: 400, image: 'https://via.placeholder.com/200x150?text=Jeans' },
//     { id: 6, name: 'Chinos', price: 600, image: 'https://via.placeholder.com/200x150?text=Chinos' },
//     { id: 7, name: 'Jeans', price: 400, image: 'https://via.placeholder.com/200x150?text=Jeans' },
//     { id: 8, name: 'Chinos', price: 600, image: 'https://via.placeholder.com/200x150?text=Chinos' },
//   ],
//   shoes: [
//     { id: 1, name: 'Sneakers', price: 700, image: 'https://via.placeholder.com/200x150?text=Sneakers' },
//     { id: 2, name: 'Formal Shoes', price: 900, image: 'https://via.placeholder.com/200x150?text=Formal+Shoes' },
//     { id: 3, name: 'Sneakers', price: 700, image: 'https://via.placeholder.com/200x150?text=Sneakers' },
//     { id: 4, name: 'Formal Shoes', price: 900, image: 'https://via.placeholder.com/200x150?text=Formal+Shoes' },
//     { id: 5, name: 'Sneakers', price: 700, image: 'https://via.placeholder.com/200x150?text=Sneakers' },
//     { id: 6, name: 'Formal Shoes', price: 900, image: 'https://via.placeholder.com/200x150?text=Formal+Shoes' },
//     { id: 7, name: 'Sneakers', price: 700, image: 'https://via.placeholder.com/200x150?text=Sneakers' },
//     { id: 8, name: 'Formal Shoes', price: 900, image: 'https://via.placeholder.com/200x150?text=Formal+Shoes' },
//   ],
//   accessories: [
//     { id: 1, name: 'Belt', price: 200, image: 'https://via.placeholder.com/200x150?text=Belt' },
//     { id: 2, name: 'Watch', price: 1200, image: 'https://via.placeholder.com/200x150?text=Watch' },
//     { id: 3, name: 'Belt', price: 200, image: 'https://via.placeholder.com/200x150?text=Belt' },
//     { id: 4, name: 'Watch', price: 1200, image: 'https://via.placeholder.com/200x150?text=Watch' },
//     { id: 5, name: 'Belt', price: 200, image: 'https://via.placeholder.com/200x150?text=Belt' },
//     { id: 6, name: 'Watch', price: 1200, image: 'https://via.placeholder.com/200x150?text=Watch' },
//     { id: 7, name: 'Belt', price: 200, image: 'https://via.placeholder.com/200x150?text=Belt' },
//     { id: 8, name: 'Watch', price: 1200, image: 'https://via.placeholder.com/200x150?text=Watch' },
//   ],
// };

// const ClothingStore = () => {
//   const [selectedCategory, setSelectedCategory] = useState('shirts');


//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   // Get the products for the selected category
//   const selectedProducts = productsData[selectedCategory];

//   return (
//     <div>
//       {/* Category Buttons */}
//       <nav className='nav'>
//         <button onClick={() => handleCategoryChange('shirts')}>Top</button>
//         <button onClick={() => handleCategoryChange('pants')}>Bottom</button>
//         <button onClick={() => handleCategoryChange('shoes')}>Dress</button>
//         <button onClick={() => handleCategoryChange('accessories')}>Set</button>
//         <button onClick={() => handleCategoryChange('shoes')}>Knit</button>
//         <button onClick={() => handleCategoryChange('pants')}>Outer</button>
//       </nav>

//       {/*Cards */}
//       <div className='productsContainer'>
//         {selectedProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClothingStore;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './OurProductCard';
import './OurProduct.css';

const ClothingStore = () => {
  const [selectedCategory, setSelectedCategory] = useState('top');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  // Fetch products from the backend when category changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${selectedCategory}`);
        setProducts(response.data.products); // Assuming backend sends { products: [...] }
        setError(''); // Clear any previous errors
      } catch (err) {
        setProducts([]);
        setError(err.response?.data?.message || 'Failed to fetch products');
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Category Buttons */}
      <nav className='nav'>
        <button onClick={() => handleCategoryChange('top')}>Top</button>
        <button onClick={() => handleCategoryChange('bottom')}>Bottom</button>
        <button onClick={() => handleCategoryChange('Dress')}>Dress</button>
        <button onClick={() => handleCategoryChange('kurta')}>Kurta</button>
        <button onClick={() => handleCategoryChange('knit')}>Knit</button>
        <button onClick={() => handleCategoryChange('outer')}>Outer</button>
      </nav>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Product Cards */}
      <div className='productsContainer'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ClothingStore;
