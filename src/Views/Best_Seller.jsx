import React from 'react';
import './Best_Seller.css';
import Frame1 from '../img/Frame1.png';
import Frame3 from '../img/Frame3.png';
import Frame2 from '../img/Frame2.png';


function Best_Seller() {
  return (
    <div className='Best_Seller_main_div'>
        <h1>Our Best Seller</h1>
        <div className='Best_Seller_card_div'>
            <div className='Best_Seller_card'>
                <img src={Frame1} alt="Frame1_img" />
                <p className='Best_Seller_name'>Euphoria Crop Blouse</p>
                <p className='Best_Seller_price'>Rs. 125.000</p>
            </div>
            <div className='Best_Seller_card'>
                <img src={Frame3} alt="Frame3_img" />
                <p className='Best_Seller_name'>Venus Halter Dress</p>
                <p className='Best_Seller_price'>Rs. 180.000</p>
            </div>
            <div className='Best_Seller_card'>
                <img src={Frame2} alt="Frame2_img" />
                <p className='Best_Seller_name'>Snap Pure Blouse</p>
                <p className='Best_Seller_price'>Rs. 129.000</p>
            </div>
            <div className='Best_Seller_card'>
                <img src={Frame2} alt="Frame2_img" />
                <p className='Best_Seller_name'>Snap Pure Blouse</p>
                <p className='Best_Seller_price'>Rs. 129.000</p>
            </div>
            <div className='Best_Seller_card'>
                <img src={Frame1} alt="Frame1_img" />
                <p className='Best_Seller_name'>Euphoria Crop Blouse</p>
                <p className='Best_Seller_price'>Rs. 125.000</p>
            </div>
            <div className='Best_Seller_card'>
                <img src={Frame3} alt="Frame3_img" />
                <p className='Best_Seller_name'>Venus Halter Dress</p>
                <p className='Best_Seller_price'>Rs. 180.000</p>
            </div>
        </div>
    </div>
  )
};

export default Best_Seller;