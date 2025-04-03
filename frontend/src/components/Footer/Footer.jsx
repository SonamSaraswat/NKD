import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <div className="image">
                <img src={assets.NKDlogo} alt=""/>
                </div>
                <p>Whether You're Looking For Home Paints, Hardware Items, Clothes, Grocery Items or Colour Recommendations, Nukad Ki Dukan Is Your One-Stop Destination!</p>
                <div className="footer-social-icons">

                </div>
                
            </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Connect</h2>
                    <ul>
                        <li>West New Delhi, Shahdara</li>
                        <li>Delhi 11094</li>
                        <li>+91 1141095851</li>
                        <li>contact @ nukadkidukan@gmail.com</li>
                    </ul>

                </div>
        </div>
        <hr/>
        <p className='footer-copyright'>CopyRight 2024 @ nukadkidukan@gmail.com - All Rights reserved</p>

    </div>
  )
}

export default Footer