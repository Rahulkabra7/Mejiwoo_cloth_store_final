import React from 'react';
import './What_They_Said.css'
import t1_img from '../img/t1.png';
import t2_img from '../img/t2.png';
import t3_img from '../img/t3.png';


function What_They_Said() {
  return (
    <div className='mian_div'>
        <h1>What They Said</h1>
        <div className='card_mian_div'>
            <div className='card_div'>
                <img src={t1_img} alt="" />
                <h3>Essence Long Denim</h3>
                <p className='Card_name'>-Lisa-</p>
                <p>“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”</p>
            </div>

            <div className='card_div'>
                <img src={t2_img} alt="" />
                <h3>Andcable Knit Top</h3>
                <p className='Card_name'>-Celine-</p>
                <p>“I like knitted materials. I bought this shirt because the design is very pretty and comfortable to wear casually. The material is also neat and good. I love shopping here and I’ll be a frequent customer at this store.”</p>
            </div>

            <div className='card_div'>
                <img src={t3_img} alt="" />
                <h3>Candy Stripe Boxy</h3>
                <p className='Card_name'>-Tiffany-</p>
                <p>“This shirt is very pretty and nice. The color is cute too. At first I bought it as a present for my friend but I also wanted it so we ended up going out wearing twin clothes haha.”</p>
            </div>

            <div className='card_div'>
                <img src={t1_img} alt="" />
                <h3>Essence Long Denim</h3>
                <p className='Card_name'>-Lisa-</p>
                <p>“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”</p>
            </div>

            <div className='card_div'>
                <img src={t2_img} alt="" />
                <h3>Essence Long Denim</h3>
                <p className='Card_name'>-Lisa-</p>
                <p>“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”</p>
            </div>

            <div className='card_div'>
                <img src={t3_img} alt="" />
                <h3>Essence Long Denim</h3>
                <p className='Card_name'>-Lisa-</p>
                <p>“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”</p>
            </div>
        </div>
    </div>
  )
};0

export default What_They_Said;