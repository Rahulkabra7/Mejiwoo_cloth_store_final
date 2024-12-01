import React from 'react';
import './Footer.css';
import Vector3 from '../img/Vector_3.png';
import fb from '../img/Frame 52.png';
import ig from '../img/ig.png';
import tw from '../img/Frame 56.png';
import yt from '../img/Frame 58.png'

function Footer() {
  return (
    <div>
        <div className='Footer_main_div'>
            <div className='Footer_logo_div'>
                <h1>MEJIWOO</h1>
                <h2>미지우 </h2>
            </div>
            <div className='Footer_About_Us_div'>
                <h3>About Us</h3>
                <ul>
                    <li><a href="">News</a></li>
                    <li><a href="">Official Store</a></li>
                    <li><a href="">Company</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
            </div>

            <div className='Footer_Get_Help_div'>
                <h3>Get Help</h3>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Shipping</a></li>
                    <li><a href="">Payment</a></li>
                    <li><a href="">Returns</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>

            <div className='Follow_Us_div'>
                <h3>Follow Us</h3>
                <ul>
                    <li><a href=""><img src={fb} alt="" /></a></li>
                    <li><a href=""><img src={ig} alt="" /></a></li>
                    <li><a href=""><img src={tw} alt="" /></a></li>
                    <li><a href=""><img src={yt} alt="" /></a></li>
                </ul>
            </div>
            <div className='Guide_div'>
                <ul>
                    <li><a href="">Guide</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div className='All_Rights_div'>
            <img src={Vector3} alt="Vector3" />
            <p>2024 MEJIWOO. All Rights Reserved</p>
        </div>

   </div>
  )
};

export default Footer;