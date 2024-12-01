import React from 'react';
import './OurProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className='card'>
      <div className='card_img'>
        <img src={product.image} alt={product.name} className='image'/>
      </div>
      <h3>{product.name}</h3>
      <p>Rs. {product.price}</p>
      <button className='Buy_Now_btn'>Buy Now</button>
    </div>
  );
};

export default ProductCard;
