import React from 'react';
import './Cover_div.css';
import img1 from '../img/image 21.png';
import img2 from '../img/image 7.png';
import img3 from '../img/image 20.png';
import img4 from '../img/image 10.png';

function Cover_div() {
  return (
    <div className='Cover_main_div'>
        <div className='background_div'>
            <div className='Cover_main_img1'>
                <img src={img1} alt="img1" />
            </div>
            <div className='Cover_main_img2'>
                <img src={img2} alt="img2" />
            </div>
            <div className='cover_mid_div'>
                <h1>MEJIWOO</h1>
                <h1 className='cover_mid_h1'>미지우</h1>
                <p>make your everyday look prettier
                with MEJIWOO Korean Made</p>
            </div>
            <div className='Cover_main_img3'>
                <img src={img3} alt="img3" />
            </div>
            <div className='Cover_main_img4'>
                <img src={img4} alt="img4" />
            </div>
        </div>
    </div>
  )
};

export default Cover_div;