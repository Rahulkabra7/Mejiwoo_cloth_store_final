import React from 'react';
import './Season_Collections.css';
import Spring from '../img/Frame 4.png';
import SUMMER from '../img/Frame 5.png';
import WINTER from '../img/Frame 6.png';



function Season_Collections() {
  return (
    <div className='Season_Collections_main_div'>
        <h1>Season Collections</h1>
        <div className='Season_Collections_card_div'>
            <div className='sea_coll_img_div'>
                <img className='sea_coll_img' src={Spring} alt="Spring_img"/>
                <h1>Spring</h1>
                <button>More</button>
            </div>
            <div className='sea_coll_img_div'>
                <img className='sea_coll_img' src={SUMMER} alt="SUMMER_img"/>
                <h1>SUMMER</h1>
                <button>More</button>
            </div>
            <div className='sea_coll_img_div'>
                <img className='sea_coll_img' src={WINTER} alt="WINTER_img"/>
                <h1>WINTER</h1>
                <button>More</button>
            </div>
        </div>
    </div>
  )
};

export default Season_Collections;