import React from 'react';
import './Our_Featured_Collections.css';
import box2_img from '../img/SmartSelect_20230715_151533_Instagram 1.png'
import box1_img from '../img/SmartSelect_20230715_144134_Instagram 1.png'
import box3_img from '../img/SmartSelect_20230715_150946_Instagram 1.png'
import box4_img from '../img/SmartSelect_20230715_150433_Instagram 1.png'
import box5_img from '../img/SmartSelect_20230715_143815_Instagram 1.png'
import link from '../img/Component 3.png'

function Our_Featured_Collections() {
  return (
    <div className='Our_Featured_Collections_main_div'>
      <h1>Our Featured Collections</h1>
      <div class="wrapper">
        <div class="box1">
          <img className='img' src={box1_img} alt="box1_img"/>
          {/* <h3>COLORFUL KNITWEAR SERIES</h3>
          <a href=""><img src={link} alt="link"/></a> */}
        </div>
        <div class="box2">
          <img className='img' src={box2_img} alt="box1_img"/>
          {/* <h3>TOP PANTS SERIES</h3>
          <a href=""><img src={link} alt="link"/></a> */}
        </div>
        <div class="box3">
          <img className='img' src={box3_img} alt="box1_img"/>
          {/* <h3>JIWOO MADE SPECIAL SERIES</h3>
          <a href=""><img src={link} alt="link"/></a> */}
        </div>
        <div class="box4">
          <img className='img' src={box4_img} alt="box1_img"/>
          {/* <h3>FRESHIDER TOP SERIES</h3>
          <a href=""><img src={link} alt="link"/></a> */}
        </div>
        <div class="box5">
          <img className='img' src={box5_img} alt="box1_img"/>
          {/* <h3>SWEET DRESSES SERIES</h3>
          <a href=""><img src={link} alt="link"/></a> */}
        </div>
      </div>
      </div>
  )
};

export default Our_Featured_Collections;