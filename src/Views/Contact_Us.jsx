// import React from 'react';
import './Contact_Us.css';
import vector_2 from '../img/Vector_2.png';
import google_img from '../img/flat-color-icons_google.png';
import facebook_img from '../img/logos_facebook.png';

// //
// import React, { useState } from 'react';
// import { createInfluencer } from '../api';

// const AddUser = ({ setInfluencers }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     pass: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await createInfluencer({
//         name: formData.name,
//         email: formData.email,
//         pass: formData.pass,
//       });
//       setUser((prev) => [...prev, data]);
//       setFormData({ name: '', email: '', pass: ''});
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//

function Contact_Us() {
  return (
    <div className='Contact_Us_main_div'>
        <div className='Contact_Us_div1'>
            <h1>Get more benefits by Sign Up & Join Mejiwoo Community!</h1>
            <ul>
                <li><h3> <img src={vector_2} alt="vector_2"/>FREE Special Gift to a new member</h3></li>
                <li><h3> <img src={vector_2} alt="vector_2"/>`Get 2x JIWOO Points to purchase items</h3></li>
                <li><h3> <img src={vector_2} alt="vector_2"/>Get special voucher code every month </h3></li>
                <li><h3> <img src={vector_2} alt="vector_2"/>Claim Voucher Disc. Up To 50% </h3></li>
            </ul>
        </div>
        <div className='Contact_Us_div2'>
            <input type="text" name="Full_Name" id="Full_Name" className='Full_Name' placeholder='Full Name' />
            <input type="email" name="Email_Adress" id="Email_Adress" placeholder='Email Adress' className='Email_Adress' />
            <input type="password" name="Password" id="Password" className='Password' placeholder='Password'/>
            <div className='Privacy'>
                <input type="checkbox" name="Privacy" id="Privacy" className='Privacy'/><span>I agree to all the Terms and Privacy Policy</span>
            </div>
            <button className='Sign_up'>SIGN UP</button>
            <hr className='hr_or'/>
            <button className='Sign_up_google'><img src={google_img} alt="GOOGLE_img" />SIGN UP WITH GOOGLE</button>
            <button className='Sign_up_facebook'><img src={facebook_img} alt="FACEBOOK_img" />SIGN UP WITH FACEBOOK</button>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" name="Full_Name" id="Full_Name" className='Full_Name1' placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" id="Email_Adress"  className='Email_Adress1' placeholder="Email Adress" value={formData.email} onChange={handleChange} required />
                <input type="password" name="platform" id="Password"className='Password1' placeholder="Password" value={formData.pass} onChange={handleChange} required />
                <button type="submit">SIGN UP</button>
            </form> */}
        </div>
    </div>
  )
};
// };

export default Contact_Us;