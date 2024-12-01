import React from 'react';
import './Get_50%_Off.css';
import image1 from '../img/image 3.png';
import image2 from '../img/image 4.png';
import image5 from '../img/image 5.png';

function Get_50_Off() {
  return (
    <div className='Get_50_Off_main_div'>
        <div className='Get_50_Off_background_div'>
            <div className='Get_50_Off_main_img1'>
                <img src={image1} alt="img1" />
            </div>
            <div className='Get_50_Off_main_img2'>
                <img src={image2} alt="img2" />
            </div>
            <div className='Get_50_Off_mid_div'>
                <h1>Get 50% Off</h1>
                <p>for all new product purchases
                min. purchase Rs. 350.000</p>
                <button>SHOP NOW</button>
            </div>
            <div className='Get_50_Off_main_img3'>
                <img src={image5} alt="img5" />
            </div>
        </div>
    </div>
  )
};

export default Get_50_Off;